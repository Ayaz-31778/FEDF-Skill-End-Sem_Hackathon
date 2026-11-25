/* Dedicated checkout flow. Kept separate from order history rendering so the
   Place Order action always has one clear event handler. */
(function () {
  "use strict";

  const byId = (id) => document.getElementById(id);
  const money = (amount) => "₹" + Number(amount || 0).toLocaleString("en-IN");
  const safe = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));

  function message(text, type) {
    const el = byId("checkoutMessage");
    if (!el) return;
    el.textContent = text;
    el.className = "form-message " + (type || "");
    el.setAttribute("role", "status");
  }

  function getCheckoutState() {
    const user = getCurrentUser();
    if (!user || user.role !== "user") {
      window.location.href = "../login.html";
      return null;
    }
    const products = getProducts();
    const cart = getCart(user.id);
    const rows = cart.map((item) => ({
      item,
      product: products.find((p) => String(p.id) === String(item.productId))
    })).filter((row) => row.product && Number(row.item.quantity) > 0);
    return { user, products, cart, rows };
  }

  function renderSummary() {
    const summary = byId("checkoutSummary");
    const button = byId("placeOrderBtn");
    if (!summary || !button) return;
    const state = getCheckoutState();
    if (!state) return;

    if (!state.rows.length) {
      summary.innerHTML = '<div class="empty">Your bag is empty. <a href="dashboard.html">Continue shopping</a>.</div>';
      button.disabled = true;
      button.title = "Add a product to your cart before placing an order.";
      return;
    }

    button.disabled = false;
    button.title = "";
    const total = state.rows.reduce((sum, row) =>
      sum + Number(row.product.price) * Number(row.item.quantity), 0);
    summary.innerHTML = state.rows.map(({ item, product }) =>
      '<div class="summary-product"><span>' + safe(product.name) + ' × ' +
      Number(item.quantity) + '</span><strong>' +
      money(Number(product.price) * Number(item.quantity)) +
      '</strong></div>'
    ).join("") +
      '<div class="summary-line summary-total"><span>Total</span><strong>' +
      money(total) + '</strong></div>';

    const name = byId("fullName");
    if (name && !name.value.trim()) name.value = state.user.name || "";
  }

  function validateDetails() {
    const form = byId("checkoutForm");
    if (!form) return false;
    if (!form.reportValidity()) return false;

    const name = byId("fullName").value.trim();
    const phone = byId("phone").value.trim();
    const address = byId("address").value.trim();
    const digits = phone.replace(/\D/g, "");

    if (!name || digits.length < 10 || digits.length > 15 || !address) {
      message("Please enter your full name, a valid 10–15 digit phone number and delivery address.", "warning-text");
      return false;
    }
    return true;
  }

  function placeOrder(event) {
    if (event) event.preventDefault();
    const button = byId("placeOrderBtn");
    if (!button || button.dataset.processing === "true") return;
    if (!validateDetails()) return;

    let state;
    try {
      state = getCheckoutState();
      if (!state || !state.rows.length) {
        message("Your cart is empty. Please add products before checkout.", "warning-text");
        return;
      }

      for (const row of state.rows) {
        const qty = Number(row.item.quantity);
        if (!Number.isInteger(qty) || qty < 1) {
          message("One of the cart quantities is invalid. Please update your cart.", "warning-text");
          return;
        }
        if (qty > Number(row.product.stock)) {
          message("Only " + row.product.stock + " unit(s) of " + row.product.name + " are available.", "warning-text");
          return;
        }
      }
    } catch (error) {
      console.error("Checkout validation failed:", error);
      message("We couldn't read your cart. Please return to your bag and try again.", "warning-text");
      return;
    }

    button.dataset.processing = "true";
    button.disabled = true;
    button.innerHTML = '<span class="checkout-spinner" aria-hidden="true"></span> Processing your order…';
    message("Please wait while we confirm your order. Do not refresh this page.", "");

    const payment = byId("payment").value;
    const now = new Date();
    const orderId = "ORD-" + now.getTime();
    const total = state.rows.reduce((sum, row) =>
      sum + Number(row.product.price) * Number(row.item.quantity), 0);
    const order = {
      id: orderId,
      userId: state.user.id,
      customerName: byId("fullName").value.trim(),
      phone: byId("phone").value.trim(),
      address: byId("address").value.trim(),
      payment,
      paymentStatus: payment === "Cash on Delivery" ? "Pay on delivery" : "Demo payment successful",
      paymentReference: payment === "Cash on Delivery" ? "" : "DEMO-" + now.getTime(),
      items: state.rows.map(({ item, product }) => ({
        productId: product.id,
        productName: product.name,
        price: Number(product.price),
        quantity: Number(item.quantity)
      })),
      total,
      status: "Placed",
      date: now.toLocaleString("en-IN"),
      createdAt: now.toISOString()
    };

    const previousOrders = getOrders();
    const previousProducts = getProducts();
    const previousCart = getCart(state.user.id);

    window.setTimeout(() => {
      try {
        const latestProducts = getProducts();
        for (const row of state.rows) {
          const latest = latestProducts.find((p) => String(p.id) === String(row.product.id));
          if (!latest || Number(latest.stock) < Number(row.item.quantity)) {
            throw new Error("Stock changed. Please review your cart and try again.");
          }
          latest.stock = Number(latest.stock) - Number(row.item.quantity);
        }

        setData(STORAGE_KEYS.orders, [order].concat(previousOrders));
        setData(STORAGE_KEYS.products, latestProducts);
        saveCart(state.user.id, []);

        message("Order placed successfully! Opening your confirmation…", "success-text");
        window.location.assign("order-success.html?orderId=" + encodeURIComponent(orderId));
      } catch (error) {
        try {
          setData(STORAGE_KEYS.orders, previousOrders);
          setData(STORAGE_KEYS.products, previousProducts);
          saveCart(state.user.id, previousCart);
        } catch (rollbackError) {
          console.error("Checkout rollback failed:", rollbackError);
        }
        console.error("Order placement failed:", error);
        button.dataset.processing = "false";
        button.disabled = false;
        button.textContent = "Try Place Order Again";
        message(error && error.message ? error.message : "We couldn't save your order. Please try again.", "warning-text");
      }
    }, payment === "Cash on Delivery" ? 700 : 1200);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = byId("checkoutForm");
    if (!form) return;
    const user = getCurrentUser();
    if (!user || user.role !== "user") {
      window.location.href = "../login.html";
      return;
    }
    renderSummary();
    form.addEventListener("submit", placeOrder);
    const button = byId("placeOrderBtn");
    if (button) button.addEventListener("click", placeOrder);
  });
})();
