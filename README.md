<div align="center">

# ✦ ATELIER
### A Modern E-Commerce Experience

A responsive storefront built with **React + Vite**, featuring product discovery, shopping workflows, customer accounts, product reviews, and an admin dashboard.

<br />

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/Styling-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br />

**Explore. Choose. Shop.**

</div>

---

## 📖 About the Project

**Atelier** is a frontend e-commerce application designed to demonstrate a complete online shopping journey. Customers can explore products, manage a cart, complete a simulated checkout, view their orders, and share product feedback. An admin area provides basic store-management screens.

The project uses **browser Local Storage** to keep demo data between page refreshes. It is intended for learning and demonstration, not as a production-ready commerce platform.

## ✨ Features

### 🛍️ Customer Experience
- Browse the storefront and product catalogue.
- View individual product details, pricing, and stock information.
- Add products to the shopping cart.
- Continue through a simulated checkout flow.
- View order confirmation and order history.
- Create an account, sign in, and manage a customer profile.

### ⭐ Product Feedback
- Rate products using a 1–5 star scale.
- Write and update product reviews.
- View customer feedback and average product ratings.

### 🧰 Admin Area
- Admin dashboard overview.
- Product management screen.
- Registered-user listing.
- Order management screen.

### 🎨 Interface
- Modern, editorial-inspired storefront design.
- Reusable React components.
- Responsive styling for different screen sizes.

## 🧱 Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based user interface |
| Vite | Development server and production build |
| JavaScript (ES Modules) | Application logic |
| CSS | Layout, styling, and responsive design |
| Local Storage | Demo persistence in the browser |

## 🚀 Getting Started

### Prerequisites
- **Node.js 20.19+**
- npm (included with Node.js)
- Git

Check your installed versions:

```bash
node -v
npm -v
git --version
```

### 1. Clone the repository

```bash
git clone https://github.com/Ayaz-31778/FEDF-Skill-End-Sem_Hackathon.git
```

### 2. Open the project folder

```bash
cd FEDF-Skill-End-Sem_Hackathon
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local address printed in your terminal (Vite commonly uses **http://localhost:5173**).

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production files are placed in the `dist/` directory.

## 🧭 Main Application Routes

| Page | Route |
| --- | --- |
| Storefront | `/` |
| Login | `/login.html` |
| Sign up | `/signup.html` |
| Product catalogue | `/user/dashboard.html` |
| Shopping cart | `/user/cart.html` |
| Checkout | `/user/checkout.html` |
| Order confirmation | `/user/order-success.html` |
| Customer orders | `/user/orders.html` |
| Customer profile | `/user/profile.html` |
| Admin dashboard | `/admin/dashboard.html` |
| Product management | `/admin/products.html` |
| User management | `/admin/users.html` |
| Order management | `/admin/orders.html` |

Individual product pages can be opened from product cards, with the selected product identified through the `product` query parameter.

## 🔐 Demo Admin Account

Use the following demo credentials to explore the admin area:

| Field | Demo value |
| --- | --- |
| Email | `admin@eshop.com` |
| Password | `admin123` |

You can create a customer account through the sign-up page to try the customer workflow.

> **Note:** These are demonstration credentials only. Do not reuse this password on any real account.

## 💾 Data & Demo Limitations

This project uses **Local Storage** in the browser for demo persistence.

- Data is stored in the browser where the application is being used.
- Reviews, accounts, carts, and orders are not synchronized between different users or devices.
- Authentication is a frontend demonstration and is not secure for production use.
- Checkout is simulated; no real payment is processed.
- There is no production backend or shared database configured.

For a real-world deployment, the application would need a secure backend, database, server-side authentication, and a payment-provider integration.

## ☁️ Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select **Vite** as the framework preset.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy the project.

Connect the `main` branch to enable automatic deployments when new commits are pushed.

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the project with `npm run build`.
5. Commit your changes and open a pull request.

## 👨‍💻 Author

**Ayaz**  
GitHub: [@Ayaz-31778](https://github.com/Ayaz-31778)

---

<div align="center">

Made with ❤️ using React and Vite

**ATELIER — Explore a better way to shop.**

</div>
