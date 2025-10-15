# OMOOLA SUPERMARKET STORES Website

A modern, world-class, fully responsive website for **OMOOLA SUPERMARKET STORES** – a premium retail supermarket located at ISAGA BUS STOP, Opp. The Gem International School, Ilaro Road, Owode Yewa, Ogun State, Nigeria. The experience is crafted with semantic HTML5, accessible design patterns, and modular CSS/JavaScript for fast performance.

## ✨ Highlights

- **Branding**: Royal Blue (`#0F3D91`) and Gold (`#D4AF37`) palette with Poppins headings and Lato body text.
- **Responsive Experience**: Mobile-first layouts across hero, category grids, product catalogue, gallery, testimonials slider, blog, and contact form.
- **Accessibility**: Skip link, semantic landmarks, WCAG-compliant color contrast, focus outlines, ARIA attributes, keyboard-friendly modals and sliders.
- **Interactivity**: Product filtering/search, quick-view modal, global search overlay (products + blog posts), testimonial auto-slider, gallery lightbox, newsletter + contact validation, WhatsApp floating action button.
- **SEO & Schema**: Optimised metadata, Open Graph/Twitter tags, LocalBusiness JSON-LD, sitemap/robots references, and copy tailored to keywords like “supermarket in Owode Yewa”.

## 🗂 Project Structure

```
.
├── index.html               # Main single-page experience
├── src/
│   ├── styles/
│   │   └── main.css         # Global styles, layout, animations, responsiveness
│   └── scripts/
│       ├── app.js           # UI interactions, filters, modals, sliders
│       └── data/
│           └── products.js  # Content data for categories, products, testimonials, blog, gallery
├── public/
│   ├── favicon.svg
│   └── icons/
│       ├── icon-192.svg
│       └── icon-512.svg
├── manifest.json            # Optional PWA metadata (not actively used in this build)
├── robots.txt (optional to add in hosting environment)
└── sitemap.xml (optional to add in hosting environment)
```

## 🚀 Getting Started

1. Clone or download the repository.
2. Open `index.html` directly in any modern browser **or** serve the project via a local static server for best performance.

```bash
# Example using the built-in Python server
python -m http.server 3000
# Then visit http://localhost:3000/index.html
```

No build tools are required; all assets are plain HTML/CSS/JS.

## 🛠 Customising Content

- **Update Business Information**: Adjust address, contact numbers, or CTAs in `index.html` (hero, contact section, footer).
- **Add/Modify Products**: Edit `src/scripts/data/products.js` to update categories, product cards, testimonials, blog posts, or gallery images. Ensure remote images are accessible or replace with self-hosted assets.
- **Brand Colours & Typography**: Tweak CSS variables in `src/styles/main.css` under the `:root` declaration.
- **SEO Copy**: Update meta description, hero copy, and section text in `index.html` to match marketing campaigns or seasonal promotions.

## ✅ Quality Checklist

- Test breakpoints at 360px, 768px, 1024px, and 1440px to confirm responsive behaviour.
- Navigate entirely via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`) to verify accessibility of menus, modals, sliders, and forms.
- Validate forms (newsletter & contact) with valid/invalid inputs to observe feedback states.
- Trigger the global search (press `Enter` in the product search bar) to confirm overlay results for both products and blog posts.
- Use the testimonial slider controls and hover states to ensure animations feel smooth.

## 📸 Imagery & Assets

All imagery currently loads from Unsplash/Pravatar hotlinks for demonstration purposes. For production deployments, download and optimise images (WebP/AVIF), update paths, and include them within a hosted `/assets` directory.

## 📄 License

This project is provided as-is for demonstration purposes. Adapt and deploy as needed for OMOOLA SUPERMARKET STORES or related retail experiences.
