const KEYS = {
  users: "eshop_users",
  products: "eshop_products",
  orders: "eshop_orders",
  carts: "eshop_carts",
  currentUser: "eshop_current_user"
};

const starterProducts = [
  { id: 101, name: "Wireless Headphones", price: 1499, category: "Electronics", stock: 15, description: "Comfortable wireless headphones with clear sound.", image: "" },
  { id: 102, name: "Smart Watch", price: 2299, category: "Electronics", stock: 10, description: "Fitness tracking and everyday notifications.", image: "" },
  { id: 103, name: "Classic T-Shirt", price: 699, category: "Fashion", stock: 30, description: "Comfortable cotton T-shirt for daily wear.", image: "" },
  { id: 104, name: "Running Shoes", price: 1899, category: "Fashion", stock: 18, description: "Lightweight shoes designed for daily running.", image: "" }
];

function read(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value == null ? fallback : value;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("eshop:data"));
}
function catalogue() {
  return Array.isArray(window.ATELIER_DASHBOARD_PRODUCTS) ? window.ATELIER_DASHBOARD_PRODUCTS : [];
}
export function initializeStore() {
  if (!localStorage.getItem(KEYS.users)) {
    write(KEYS.users, [{ id: 1, name: "Administrator", email: "admin@eshop.com", password: "admin123", role: "admin" }]);
  }
  if (!localStorage.getItem("eshop_catalogue_migrated")) {
    const saved = read(KEYS.products, starterProducts);
    const ids = new Set(saved.map(function (p) { return String(p.id); }));
    const merged = saved.concat(catalogue().filter(function (p) { return !ids.has(String(p.id)); }));
    write(KEYS.products, merged);
    localStorage.setItem("eshop_catalogue_migrated", "true");
  } else if (!localStorage.getItem(KEYS.products)) {
    write(KEYS.products, [...starterProducts, ...catalogue()]);
  }
  if (!localStorage.getItem(KEYS.orders)) write(KEYS.orders, []);
  if (!localStorage.getItem(KEYS.carts)) write(KEYS.carts, {});
}
export function getUsers() { return read(KEYS.users, []); }
export function saveUsers(value) { write(KEYS.users, value); }
export function getProducts() { return read(KEYS.products, [...starterProducts, ...catalogue()]); }
export function saveProducts(value) { write(KEYS.products, value); }
export function getOrders() { return read(KEYS.orders, []); }
export function saveOrders(value) { write(KEYS.orders, value); }
export function getCurrentUser() { return read(KEYS.currentUser, null); }
export function setCurrentUser(value) {
  if (value) write(KEYS.currentUser, value);
  else localStorage.removeItem(KEYS.currentUser);
  window.dispatchEvent(new Event("eshop:auth"));
}
export function getCart(userId) {
  const carts = read(KEYS.carts, {});
  return carts[String(userId)] || [];
}
export function saveCart(userId, cart) {
  const carts = read(KEYS.carts, {});
  carts[String(userId)] = cart;
  write(KEYS.carts, carts);
}
export function money(value) {
  return "₹" + Number(value || 0).toLocaleString("en-IN");
}
export function cartCount(userId) {
  return getCart(userId).reduce(function (sum, item) { return sum + Number(item.quantity || 0); }, 0);
}
export function cartTotal(userId) {
  const products = getProducts();
  return getCart(userId).reduce(function (sum, item) {
    const product = products.find(function (p) { return String(p.id) === String(item.productId); });
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}
export function addToCart(userId, productId) {
  const products = getProducts();
  const product = products.find(function (p) { return String(p.id) === String(productId); });
  if (!product || product.stock < 1) return { ok: false, message: "This product is currently out of stock." };
  const cart = getCart(userId);
  const item = cart.find(function (entry) { return String(entry.productId) === String(productId); });
  if (item) {
    if (item.quantity >= product.stock) return { ok: false, message: "Maximum available stock reached." };
    item.quantity += 1;
  } else cart.push({ productId: product.id, quantity: 1 });
  saveCart(userId, cart);
  return { ok: true, message: "Added to your bag." };
}
export function updateCartItem(userId, productId, delta) {
  const cart = getCart(userId);
  const item = cart.find(function (entry) { return String(entry.productId) === String(productId); });
  const product = getProducts().find(function (p) { return String(p.id) === String(productId); });
  if (!item || !product) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart.splice(cart.indexOf(item), 1);
  else item.quantity = Math.min(item.quantity, product.stock);
  saveCart(userId, cart);
}
export function removeCartItem(userId, productId) {
  saveCart(userId, getCart(userId).filter(function (entry) { return String(entry.productId) !== String(productId); }));
}
export function placeOrder(user, details) {
  const cart = getCart(user.id);
  if (!cart.length) return { ok: false, message: "Your bag is empty." };
  const products = getProducts();
  for (const item of cart) {
    const product = products.find(function (p) { return String(p.id) === String(item.productId); });
    if (!product || item.quantity > product.stock) {
      return { ok: false, message: "Insufficient stock for " + (product ? product.name : "a product") + "." };
    }
  }
  const total = cart.reduce(function (sum, item) {
    const product = products.find(function (p) { return String(p.id) === String(item.productId); });
    return sum + product.price * item.quantity;
  }, 0);
  const order = {
    id: "ORD-" + Date.now(),
    userId: user.id,
    customerName: details.name,
    phone: details.phone,
    address: details.address,
    payment: details.payment,
    items: cart.map(function (item) { return { productId: item.productId, quantity: item.quantity }; }),
    total: total,
    status: "Placed",
    date: new Date().toLocaleString("en-IN")
  };
  cart.forEach(function (item) {
    const product = products.find(function (p) { return String(p.id) === String(item.productId); });
    product.stock -= item.quantity;
  });
  saveProducts(products);
  saveOrders([order].concat(getOrders()));
  saveCart(user.id, []);
  return { ok: true, order: order };
}
export function signIn(email, password) {
  return getUsers().find(function (user) {
    return user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password;
  }) || null;
}
export function signUp(name, email, password) {
  const users = getUsers();
  if (users.some(function (user) { return user.email.toLowerCase() === email.trim().toLowerCase(); })) {
    return { ok: false, message: "An account with this email already exists." };
  }
  const user = { id: Date.now(), name: name.trim(), email: email.trim().toLowerCase(), password: password, role: "user" };
  saveUsers(users.concat(user));
  return { ok: true, user: user };
}
initializeStore();
