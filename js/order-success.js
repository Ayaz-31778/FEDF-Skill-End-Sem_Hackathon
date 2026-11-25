/* Atelier / E-Shop order confirmation screen */
(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
  const money = value => "₹" + Number(value || 0).toLocaleString("en-IN");

  function read(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value == null ? fallback : value;
    } catch (error) {
      console.error("Could not read local storage key:", key, error);
      return fallback;
    }
  }

  function renderMissing(root, message, orderId) {
    root.innerHTML =
      '<section class="confirmation-card confirmation-not-found">' +
        '<div class="confirmation-icon confirmation-icon-warn">!</div>' +
        '<p class="confirmation-kicker">ORDER LOOKUP</p>' +
        '<h1>We could not find this order.</h1>' +
        '<p>' + esc(message) + '</p>' +
        (orderId ? '<div class="confirmation-order-id"><span>ORDER REFERENCE</span><strong>' + esc(orderId) + '</strong></div>' : '') +
        '<div class="confirmation-actions"><a class="confirmation-button" href="orders.html">View my orders</a><a class="confirmation-link" href="dashboard.html">Continue shopping</a></div>' +
      '</section>';
  }

  function render() {
    const root = $("orderSuccess");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("orderId") || "";
    const orders = read("eshop_orders", []);
    const currentUser = read("eshop_current_user", null);

    if (!Array.isArray(orders)) {
      renderMissing(root, "Your saved order list could not be read from this browser. Please check that local storage is enabled.", requestedId);
      return;
    }
    const order = orders.find(item => String(item.id) === String(requestedId));
    if (!order) {
      renderMissing(root, "The order reference is not present in this browser's saved orders. If you just placed it, refresh once or open My Orders to check whether it was saved.", requestedId);
      return;
    }
    if (currentUser && String(order.userId) !== String(currentUser.id)) {
      renderMissing(root, "This order belongs to a different signed-in account. Sign in with the account used at checkout.", requestedId);
      return;
    }

    const items = Array.isArray(order.items) ? order.items : [];
    const itemMarkup = items.map(item => {
      const title = item.productName || item.name || "Product";
      const quantity = Math.max(1, Number(item.quantity) || 1);
      const price = Number(item.price) || 0;
      return '<div class="confirmation-item"><div><strong>' + esc(title) + '</strong><span>Quantity: ' + quantity + '</span></div><strong>' + money(price * quantity) + '</strong></div>';
    }).join("");

    root.innerHTML =
      '<section class="confirmation-card">' +
        '<div class="confirmation-topline"><span>ATELIER · ORDER DESK</span><span>ORDER RECEIPT</span></div>' +
        '<div class="confirmation-hero">' +
          '<div class="confirmation-icon" aria-hidden="true"><span>✓</span></div>' +
          '<p class="confirmation-kicker">ORDER PLACED SUCCESSFULLY</p>' +
          '<h1>Lovely choice. <em>It is all yours.</em></h1>' +
          '<p>Your order has been saved. We are getting your items ready.</p>' +
        '</div>' +
        '<div class="confirmation-progress" aria-label="Order progress">' +
          '<div class="confirmation-step is-done"><span>✓</span><strong>Order placed</strong><small>Confirmed</small></div>' +
          '<i class="is-done"></i>' +
          '<div class="confirmation-step is-current"><span>2</span><strong>Processing</strong><small>Next up</small></div>' +
          '<i></i>' +
          '<div class="confirmation-step"><span>3</span><strong>On its way</strong><small>Coming soon</small></div>' +
        '</div>' +
        '<div class="confirmation-meta">' +
          '<div><span>ORDER ID</span><strong>' + esc(order.id) + '</strong></div>' +
          '<div><span>ORDER DATE</span><strong>' + esc(order.date || (order.createdAt ? new Date(order.createdAt).toLocaleString("en-IN") : "Just now")) + '</strong></div>' +
          '<div><span>ORDER STATUS</span><strong class="confirmation-status">' + esc(order.status || "Placed") + '</strong></div>' +
        '</div>' +
        '<div class="confirmation-columns">' +
          '<section class="confirmation-details"><h2>Items in your order</h2>' +
            (itemMarkup || '<p class="confirmation-muted">No item details were saved for this order.</p>') +
            '<div class="confirmation-total"><span>Total paid / payable</span><strong>' + money(order.total) + '</strong></div>' +
          '</section>' +
          '<aside class="confirmation-delivery"><h2>Delivery details</h2>' +
            '<p><span>Recipient</span><strong>' + esc(order.customerName || (currentUser && currentUser.name) || "Customer") + '</strong></p>' +
            '<p><span>Phone</span><strong>' + esc(order.phone || "Not provided") + '</strong></p>' +
            '<p><span>Address</span><strong>' + esc(order.address || "Not provided") + '</strong></p>' +
            '<p><span>Payment</span><strong>' + esc(order.payment || "Not specified") + '</strong></p>' +
            '<p><span>Payment status</span><strong>' + esc(order.paymentStatus || "Pending") + '</strong></p>' +
          '</aside>' +
        '</div>' +
        '<div class="confirmation-note"><strong>A little note:</strong> This is a store demonstration. Payment and delivery updates are simulated; no real payment or shipment is initiated.</div>' +
        '<div class="confirmation-actions"><a class="confirmation-button" href="orders.html">Track my order <span>→</span></a><a class="confirmation-link" href="dashboard.html">Continue shopping</a></div>' +
        '<div class="confirmation-footer">Thank you for finding something good with us. ♡</div>' +
      '</section>';

    // Small, accessible confirmation reveal; all order data is already saved before this page loads.
    requestAnimationFrame(() => root.classList.add("is-visible"));
  }

  document.addEventListener("DOMContentLoaded", render);
})();
