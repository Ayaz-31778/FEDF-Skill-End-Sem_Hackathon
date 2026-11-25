import React from "react";
import { Link } from "./link.js";
import { cartCount, getCurrentUser } from "../data/store.js";

export default function SiteLayout({ children, admin = false }) {
  const user = getCurrentUser();
  const count = user ? cartCount(user.id) : 0;
  return (
    <>
      <div className="site-announcement"><span>· A LITTLE JOY IN EVERY DELIVERY</span><span>FREE SHIPPING ON ORDERS OVER ₹1,499 · EXTRA 10% OFF YOUR FIRST ORDER</span></div>
      <header className="site-header">
        <nav className="site-nav">
          <Link className="site-logo" to="/">atelier<span>.</span>{admin && <small> ADMIN</small>}</Link>
          <div className="site-nav-links">
            {admin ? <>
              <Link to="/admin/dashboard.html">Overview</Link><Link to="/admin/products.html">Products</Link><Link to="/admin/users.html">Customers</Link><Link to="/admin/orders.html">Orders</Link>
            </> : <>
              <Link to="/user/dashboard.html">Discover</Link><Link to="/user/cart.html">Bag <b className="bag-pill">{count}</b></Link><Link to="/user/orders.html">Orders</Link><Link to="/user/profile.html">Account</Link>
            </>}
            {user ? <button className="nav-signout" onClick={() => { localStorage.removeItem("eshop_current_user"); window.location.href = "/"; }}>Sign out</button> : <Link className="nav-signout" to="/login.html">Log in</Link>}
          </div>
        </nav>
      </header>
      {children}
      <footer className="site-footer"><span className="site-logo">atelier<span>.</span></span><span>Thoughtfully picked, never ordinary.</span><span>© {new Date().getFullYear()} Atelier</span></footer>
    </>
  );
}
