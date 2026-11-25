import React from "react";
import { HomePage, ShopPage, CartPage, CheckoutPage, OrderSuccessPage, OrdersPage, ProfilePage } from "./pages/StorePages.jsx";
import { LoginPage, SignupPage } from "./pages/AuthPages.jsx";
import { AdminDashboard, AdminProducts, AdminUsers, AdminOrders } from "./pages/AdminPages.jsx";

export default function App() {
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith("/login.html") || path === "/login") return <LoginPage/>;
  if (path.endsWith("/signup.html") || path === "/signup") return <SignupPage/>;
  if (path.includes("/admin/dashboard")) return <AdminDashboard/>;
  if (path.includes("/admin/products")) return <AdminProducts/>;
  if (path.includes("/admin/users")) return <AdminUsers/>;
  if (path.includes("/admin/orders")) return <AdminOrders/>;
  if (path.includes("/user/cart")) return <CartPage/>;
  if (path.includes("/user/checkout")) return <CheckoutPage/>;
  if (path.includes("/user/order-success")) return <OrderSuccessPage/>;
  if (path.includes("/user/orders")) return <OrdersPage/>;
  if (path.includes("/user/profile")) return <ProfilePage/>;
  if (path.includes("/user/dashboard") || path.includes("/category")) return <ShopPage/>;
  return <HomePage/>;
}
