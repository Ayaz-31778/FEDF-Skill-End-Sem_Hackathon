# Atelier — React + Vite E-Commerce Project

A frontend e-commerce demonstration built with React and Vite. It includes a customer shopping experience and an admin studio, with browser Local Storage used for demo persistence.

## Tech stack
- React and React DOM
- Vite
- JavaScript (ES modules)
- CSS
- Browser Local Storage
- Vercel deployment

## Run locally
1. Install Node.js LTS.
2. Clone the repository.
3. Run \`npm install\`.
4. Run \`npm run dev\`.
5. Open the local URL printed by Vite.

## Production build
\`\`\`bash
npm run build
npm run preview
\`\`\`

## Main routes
- \`/\` — storefront landing page
- \`/login.html\` and \`/signup.html\` — authentication
- \`/user/dashboard.html\` — product catalogue
- \`/user/cart.html\` — shopping cart
- \`/user/checkout.html\` — simulated checkout
- \`/user/order-success.html\` — order confirmation
- \`/user/orders.html\` — customer order history
- \`/user/profile.html\` — customer profile
- \`/admin/dashboard.html\` — admin overview
- \`/admin/products.html\` — product management
- \`/admin/users.html\` — registered users
- \`/admin/orders.html\` — order management

## Demo admin login
- Email: \`admin@eshop.com\`
- Password: \`admin123\`

Create a customer account using the signup page to test the customer workflow.

## Demo limitations
This project stores users, products, carts and orders in the current browser's Local Storage. It does not provide a production backend, secure authentication, cross-device synchronization, or real payment processing. Do not use real passwords or payment details.

## Vercel
Use the Vite preset, \`npm run build\` as the build command, and \`dist\` as the output directory. Connect the \`main\` branch for automatic deployments after pushes.
