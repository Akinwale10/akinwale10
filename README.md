# Omoola Supermarket Stores

Premium, PWA-ready experience for Omoola Supermarket Stores powered by vanilla HTML, CSS, and JavaScript. The site is optimised for Owode Yewa and Ogun State shoppers with in-store pickup, neighbourhood delivery, and rich product storytelling.

## Preview locally

```bash
npm install --global serve
serve .
```

Open `http://localhost:3000` (or the port Serve specifies). All pages are static so any HTTP server works.

## Tech stack

- HTML5 with semantic landmarks and accessibility hooks
- CSS3 with custom properties, responsive grids (2/3/4 rule), and component utilities
- Modern ES modules for data, cart state, search, checkout, and PWA registration
- Service worker caching shell + assets with stale-while-revalidate updates

## Key folders

- `assets/` – SVG imagery for hero, categories, products, banners, brands, trust badges, and placeholders
- `css/` – tokenised base styles, layout primitives, reusable components, and utility helpers
- `js/` – modular scripts for UI behaviour, cart management, product rendering, checkout flow, and search

## Customisation

- Update global design tokens in `css/base.css`
- Extend layout or component patterns via `css/layout.css` and `css/components.css`
- Manage seed data (products, categories, coupons, FAQs, LGAs, blog posts) inside `js/data.js`
- Tweak service worker caching strategy in `service-worker.js`

## PWA

- Manifest configured via `manifest.json`
- `service-worker.js` precaches shell files and refreshes assets with a stale-while-revalidate pattern
- `js/pwa.js` registers the service worker when supported

## Accessibility & performance

- Focus management, aria attributes, and keyboard-friendly components
- Prefers-reduced-motion support and transition tuning
- Responsive images, lazy loading, and font optimisation for 90+ Lighthouse targets

Enjoy building with Omoola!
