# UI Standardization Contract (Waggies)

This file is the **source of truth** for UI tokens + shared component utilities.
Anything that conflicts with this file is considered legacy and should be migrated during refactors.

Scope right now: **ONLY 3 pilot pages** are allowed to be edited (see “Pilot migration scope”).

---

## 1) Canonical brand tokens (from UI inventory)

### Colors
- **primary**: `#7F13EC` (canonical brand purple)
- **legacyPrimary**: `#7C3AED` (legacy; MUST be migrated to `primary` on migrated pages)
- **ink**: `#141118` (default text / headings)
- **surfaceDark**: `#191022` (dark mode surface background)
- **muted**: `#756189` (high-frequency muted text token)
- **border**: `#E0DBE6` (default border)
- **surface**: `#F2F0F4` (light surface / soft backgrounds)

### Non-negotiable exceptions
- **WhatsApp green**: `#25D366` must remain exactly as-is wherever used.

---

## 2) Tailwind build rules

We do **not** use Tailwind CDN on migrated pages.
We use a real Tailwind CLI build that compiles:
- `src/styles/input.css` (Tailwind directives)
- `src/styles/components.css` (shared component utilities)
into:
- `public/assets/app.css` (or whatever output path we choose)

Tailwind config rules:
- `content` must include all `**/*.html` files.
- `theme.extend.colors` must include the tokens listed in section 1.
- `fontFamily.sans = ["Inter", "system-ui", "sans-serif"]`

---

## 3) Typography rules

### Fonts (migrated pages)
- Use **one global Inter import** (in shared CSS or one shared `<link>` used by migrated pages).
- Keep **Material Symbols Outlined**.
- Remove per-page font imports from migrated pages.

### Text defaults
- Default body text should map to `ink` or neutral equivalents.
- Muted/secondary text should map to `muted` (not random grays unless truly needed).

---

## 4) Shared component utilities (contract)

These classes must be defined in `src/styles/components.css` using `@layer components`.
Pages migrated to the system must use these classes instead of repeating long utility piles.

### Layout
- `.container-page`  
  Standard max-width and horizontal padding used for page wrappers.
- `.section-pad`  
  Standard vertical padding rhythm for major sections.

### Buttons
Base:
- `.btn` (base button: inline-flex, center, font, radius, transitions, disabled)
Sizes:
- `.btn-sm`, `.btn-md`, `.btn-lg`
Variants:
- `.btn-primary` (primary background = `primary`, text white)
- `.btn-secondary` (soft background = `surface`, text = `ink`)
- `.btn-outline` (transparent bg, border = `border` or `primary`, text = `primary`)
- `.btn-ghost` (minimal, hover surface)
- `.btn-danger` (red intent; only when destructive)

Icon-only:
- `.btn-icon` (square/tap target, icon alignment)

### Inputs / Cards
- `.input` (borders, padding, focus ring, rounded)
- `.card` (surface background, border, radius, shadow)

---

## 5) Migration rules (STRICT)

### DO
- Replace any `#7C3AED` usage with `primary (#7F13EC)` **on migrated pages**.
- Replace arbitrary repeated hexes with tokens when they represent the same intent.
- Replace button “class piles” with the `.btn` system.
- Keep layouts the same: no redesign, no new components, no reflowing sections.

### DO NOT
- Do not change markup structure beyond what is required to:
  - remove Tailwind CDN
  - remove inline tailwind config
  - link compiled CSS
  - swap to shared classes for buttons/containers
- Do not refactor other pages outside the pilot list.
- Do not introduce new random hex colors in migrated pages.

---

## 6) Pilot migration scope (ONLY these files)

The following 3 pages are the only ones allowed to be edited during the first migration pass:

1. `waggies_homepage/code.html`
2. `services_overview_page/code.html`
3. `blog_post_content_page/code.html`

Everything else stays untouched until the pilot proves the system works.

---

## 7) After pilot success

After these 3 pages compile cleanly and look the same visually:
- we will migrate the remaining pages in batches,
- collapse duplicate header/footer patterns into shared includes/components (where applicable),
- and progressively replace legacy arbitrary hex usage with tokens.