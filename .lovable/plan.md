# Ferrule Printing & Labeling Business Website

## Goal
A professional, industrial-grade product showcase website for a B2B business selling ferrule printing machines, label printers, and consumables. The site should convey reliability, precision, and technical expertise.

## Design Direction
- **Aesthetic:** Bold industrial — dark charcoal/navy base with a warm amber/copper accent. Think precision engineering meets modern web design. Strong typography, generous whitespace, confident layout.
- **Typography:** A sharp sans-serif display font for headings (architectural/engineering feel) paired with a clean body font for readability.
- **Color palette:** Dark background (#0a0a12) with warm copper/amber accents (#c97b3c), light text for contrast.
- **Layout:** Full-width sections, asymmetric hero, card grid for products, clean contact section.

## Pages & Sections

### 1. Home (`/`)
- **Hero:** Large headline about industrial marking solutions, subheadline, CTA to browse products or contact.
- **Product Categories:** 3 cards — Ferrule Printing Machines, Label Printers, Consumables & Accessories.
- **Why Choose Us:** 3-4 value props (precision, durability, support, fast delivery).
- **Featured Products:** Showcase 2-3 key products with images, names, and "Request Quote" buttons.
- **Contact CTA:** Banner section leading to contact page.

### 2. Products (`/products`)
- **Category filter:** Tabs or buttons for Machines, Printers, Consumables.
- **Product grid:** Cards with product image, name, brief description, "Request Quote" button.
- Each product links to a detail view.

### 3. Product Detail (`/products/:productId`)
- Large product image, detailed specs, features list, "Request Quote" CTA.

### 4. About (`/about`)
- Company story, mission, experience in the industry.
- Team or values section.

### 5. Contact (`/contact`)
- Contact form (name, email, phone, message, product interest).
- Business contact info (phone, email, address).

## Technical Approach
- **Framework:** TanStack Start (React 19, file-based routing).
- **Styling:** Tailwind CSS v4 with custom design tokens in `src/styles.css`.
- **Components:** shadcn/ui for buttons, cards, forms, dialogs.
- **No backend required:** Product data stored as static JSON. Contact form submits to a server function that could email or just display success.
- **SEO:** Proper `<head>` metadata on each route with unique titles and descriptions.
- **Responsive:** Fully responsive, mobile-first.

## Assets Needed
- Generate product images for ferrule printing machines, label printers, and consumables.
- Generate a hero background image with industrial/precision theme.

## Out of Scope (for this build)
- E-commerce cart/checkout (B2B quote model instead).
- User authentication.
- CMS or database integration.
- Multi-language support.

## Phases
1. **Foundation:** Set up design tokens, fonts, global styles. Create route structure.
2. **Home Page:** Build hero, category cards, value props, featured products, footer.
3. **Products & About:** Build product catalog grid, filters, about page.
4. **Contact & Polish:** Contact form, responsive tweaks, SEO meta, final polish.