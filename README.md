# OMOOLA SUPERMARKET

A modern, mobile-first Nigerian e-commerce experience for fresh groceries, pantry staples, and household essentials. Built with semantic HTML, modular CSS, and progressive enhancement to deliver fast performance without external dependencies.

## Features

- Premium visual identity using Palette A (Wine, Leaf Green, Warm Cream) and Google Fonts (Poppins & Inter)
- Home page with hero carousel, category tiles, product highlights, promo strip, newsletter CTA, and trust badges
- Category listings with dynamic filters (price, brand, dietary) and sorting (popular, newest, price)
- Product detail pages featuring gallery zoom, highlights, nutrition facts, related items, and frequently bought together
- Cart drawer, full cart page, and conversion-focused checkout with delivery slot picker and payment options (Paystack & Flutterwave placeholders)
- Account dashboard with loyalty balance, orders timeline, wishlist, and profile stubs
- Utility pages: About, Contact, FAQs, Delivery & Returns, Privacy, Terms, Careers, Store Locator, Deals, Wishlist, Track Order, Order Confirmation
- Seeded catalogue of 80+ Nigerian-relevant products with pricing in ₦ and product metadata (freshness, origin, allergens, nutrition)
- Search with autosuggest, recent searches, and category filtering
- Coupons (`OMOOLA10`, `FREEDELIVERY`) with validation messaging
- Loyalty system messaging and dynamic balances stored in localStorage
- Progressive Web App support (manifest + offline-first service worker)
- Basic analytics setup (Google Analytics placeholder) and structured data (Organization JSON-LD)

## Getting Started

Open `index.html` in a modern browser. The experience runs entirely client-side; no build step required.

For local development with live reload you can use any static server, for example:

```bash
python -m http.server 3000
```

Then visit `http://localhost:3000/index.html`.

## Testing Checklist

- Validate responsive layout on mobile (375px), tablet (768px), and desktop (1440px)
- Use keyboard navigation to confirm focus states and accessibility semantics
- Confirm service worker caches assets (check Application tab in devtools)
- Search for “indomie” to confirm synonym handling and autosuggest
- Apply coupons on the cart page to verify messaging
- Complete checkout flow to see order confirmation screen and loyalty update messaging

## Folder Structure

```
.
├── index.html
├── category.html
├── product.html
├── cart.html
├── checkout.html
├── account.html
├── deals.html
├── order-confirmation.html
├── track-order.html
├── [utility pages]
├── src/
│   ├── styles/main.css
│   └── scripts/
│       ├── app.js
│       └── data/products.js
├── public/
│   └── icons/
│       ├── icon-192.svg
│       └── icon-512.svg
├── manifest.json
└── service-worker.js
```

## Credits

Imagery sourced from Unsplash (hotlinked). Replace with optimised, self-hosted assets for production deployments.
