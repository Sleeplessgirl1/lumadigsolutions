

## Plan: Add Favicon and Logo Images

The user uploaded two images:
1. `favicon.png` — the "L" icon, to be used as the site favicon
2. `icon.png` — the full LUMA logo, to be used as the logo throughout the site

### Steps

1. **Copy `favicon.png` to `public/favicon.png`** and update `index.html` to add a `<link rel="icon">` pointing to `/favicon.png`. Delete `public/favicon.ico` if it exists.

2. **Copy `icon.png` to `src/assets/logo.png`** for use in React components.

3. **Update `Navbar.tsx`** — replace the text-based "LUMA" logo with an `<img>` tag importing from `@/assets/logo.png`. Size it appropriately (~40px height).

4. **Update `Footer.tsx`** — replace the text "LUMA" logo with the same image import.

### Files Changed
- `index.html` — add favicon link tag
- `public/favicon.png` — new file (copied)
- `src/assets/logo.png` — new file (copied)
- `src/components/Navbar.tsx` — use logo image
- `src/components/Footer.tsx` — use logo image

