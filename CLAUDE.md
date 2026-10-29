# CLAUDE.md

This repository is a static multilingual tourism website for the Jalal-Abad region and Manas area in Kyrgyzstan. The site is built as a simple front-end project using plain HTML, CSS, and JavaScript.

## Project purpose

The website presents:
- destination highlights and travel information
- route suggestions and planning tools
- guide information
- contact form and travel inquiry interactions
- Russian and Kyrgyz language toggle

## Tech stack

- HTML for page structure
- CSS for styling and layout
- JavaScript for interactivity
- Leaflet JS via CDN for map rendering
- Unsplash images via remote URLs

## Repository structure

- `index.html` — homepage with hero section, destinations, FAQ, and footer
- `destinations.html` — destination detail pages and travel content
- `guides.html` — guide profiles / travelers information
- `contacts.html` — contact form and inquiry page
- `planner.html` — route planner / trip planning page
- `script.js` — DOM logic, menu, filters, map, FAQ, planned routes, calculator, translations, and form handling
- `style.css` — all styling for the site

## How to run locally

Because this is a static website, there is no build step required.

1. Open the repository folder in a browser, or
2. Run a local static server from the project root, for example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Important implementation notes

### Front-end architecture
- The project is not a framework app; it is a static multipage site.
- Each HTML file is a standalone page that shares the same visual language and JavaScript logic.
- The language switcher is implemented in `script.js` using a `translations` object and `data-i18n` attributes.

### JS behavior
Key behaviors in `script.js` include:
- mobile nav toggle
- filter buttons for destination cards
- optional Leaflet map initialization if `#map` exists
- FAQ accordion
- gallery lightbox
- route generator with location-based itinerary
- budget calculator
- language toggle between Russian and Kyrgyz
- simple fake contact form submission

### CSS styling
- `style.css` contains the full design system for the website.
- Layout uses responsive grid and section-based organization.
- Color palette and typography are designed for a tourism/travel brand.

## Content and localization

The site supports bilingual content:
- Russian as main language
- Kyrgyz translations in the JavaScript `translations` object

When updating text, keep both language versions in sync if the UI is intentionally bilingual.

## Suggested workflow for changes

- Update markup in the relevant HTML file.
- Update styles in `style.css` when changing layout or design.
- Update interactivity in `script.js` when adding new UI features or behaviors.
- Keep selectors and `data-i18n` keys consistent to avoid missing translations.

## Notes for Claude / AI contributors

This project is intentionally simple and static. Favor minimal, direct changes over introducing framework complexity.

Best practice:
- maintain the existing styling patterns
- keep the site responsive and lightweight
- preserve the bilingual UI behavior
- avoid breaking file-to-file navigation links (`index.html`, `destinations.html`, etc.)
- prefer simple DOM-based enhancements over heavy dependencies

## Entry points

- `index.html` is the home page and main landing page
- `destinations.html` is the main content page for region attractions
- `planner.html` is likely the route/planning page for travel itineraries
- `contacts.html` handles user contact flow

## Common tasks

- add a new destination card or section in the relevant HTML page
- update travel info text, hotel / route details, or pricing values
- add a new language string in `script.js` under the `translations` object
- adjust fonts, spacing, colors, or layout in `style.css`
- update navigation or page links across HTML files

## Useful commands

Open the site with a static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Summary

This is a lightweight static tourism website with a bilingual interface and multiple pages. The code is organized around direct HTML/CSS/JS files rather than a framework, so changes should stay straightforward and maintain the current architecture.
