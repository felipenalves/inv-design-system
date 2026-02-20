# Design Tokens — INV Design System

Design tokens are the single source of truth for all visual properties (colors, typography, spacing, shadows, radius) across the INV Design System.

---

## Overview

Tokens are defined in `data/tokens.json` and automatically integrated into the Tailwind CSS configuration (`tailwind.config.ts`). This ensures consistency across all components and makes design updates centralized and efficient.

**Key benefits:**

- 🎯 Single source of truth — Change a color in one place
- 🔄 Consistency — All components use the same tokens
- 📦 Scalability — Easy to add new tokens
- 🎨 Maintainability — Visual updates without touching components
- 🌓 Dark mode ready — Tokens support light/dark switching

---

## Token Structure

### Colors

**Primary:** #E6E0DD (INV-TAUPE)

- `primary` — Base color for primary actions
- `primary-hover` — Hover state
- `primary-active` — Active/pressed state
- `primary-50` — Subtle background

**Secondary:** #D6D5D4

- `secondary` — Base color for secondary actions
- `secondary-hover`, `secondary-active`, `secondary-50` — States

**Tertiary:** #608296

- `tertiary` — Accent color (used sparingly)
- `tertiary-hover`, `tertiary-active`, `tertiary-50` — States

**Semantic Colors**

- `destructive` — Error, delete, danger actions (#DC2626)
- `success` — Success, confirmation (#16A34A)
- `warning` — Warning, attention (#EA8C55)
- `info` — Information, help (#3B82F6)

**Neutral Colors** (50-900 scale)

- Used for text, backgrounds, borders
- Supports accessibility contrast requirements

---

## Using Tokens in Components

### Colors

```tsx
// In Tailwind classes
<button className="bg-primary text-white">          {/* Primary color */}
<button className="border border-border">           {/* Border color */}
<div className="bg-muted text-muted-foreground">   {/* Neutral background */}
```

### Typography

```tsx
// Font families (via Tailwind extends)
className = 'font-sans' // Geist (interface text)
className = 'font-serif' // Lora (display, headings)
className = 'font-mono' // JetBrains Mono (technical data)

// Font sizes (12px - 36px scale)
className = 'text-xs' // 12px
className = 'text-sm' // 14px
className = 'text-base' // 16px
className = 'text-lg' // 18px
className = 'text-xl' // 20px
className = 'text-2xl' // 24px
className = 'text-3xl' // 28px
className = 'text-4xl' // 32px
className = 'text-5xl' // 36px

// Font weights
className = 'font-normal' // 400
className = 'font-medium' // 500
className = 'font-semibold' // 600
className = 'font-bold' // 700
```

### Spacing

```tsx
// 4px base unit scale
className = 'p-xs' // 4px padding
className = 'p-sm' // 8px
className = 'p-md' // 12px
className = 'p-lg' // 16px
className = 'gap-md' // 12px gap
className = 'm-xl' // 20px margin

// All spacing utilities work: p-, m-, gap-, etc.
```

### Shadows

```tsx
className = 'shadow-none' // No shadow
className = 'shadow-sm' // Soft (0 1px 2px)
className = 'shadow-md' // Light (0 2px 8px)
className = 'shadow-lg' // Medium (0 4px 16px)
className = 'shadow-xl' // Elevated (0 8px 24px)
className = 'shadow-2xl' // Floating (0 16px 32px)
```

### Border Radius

```tsx
className = 'rounded-none' // 0px
className = 'rounded-sm' // 4px
className = 'rounded-md' // 8px
className = 'rounded-lg' // 12px
className = 'rounded-xl' // 16px
className = 'rounded-2xl' // 20px
className = 'rounded-full' // 9999px (circle)
```

---

## Adding New Tokens

To add a new token, follow these steps:

### 1. Update `data/tokens.json`

```json
{
  "colors": {
    "your-color": {
      "base": "#HEXCODE",
      "hover": "#HEXCODE",
      "active": "#HEXCODE",
      "50": "#HEXCODE"
    }
  },
  "spacing": {
    "9xl": "72px"
  }
}
```

### 2. Update `tailwind.config.ts`

```typescript
colors: {
  'your-color': {
    DEFAULT: tokens.colors.your_color.base,
    hover: tokens.colors.your_color.hover,
    active: tokens.colors.your_color.active,
  }
}
```

### 3. Use in Components

```tsx
className = 'bg-your-color hover:bg-your-color-hover'
```

---

## Token Categories

### Color System Philosophy

- **Primary (Taupe)** — Brand identity, trust, main actions
- **Secondary (Gray)** — Neutral, supporting actions
- **Tertiary (Blue)** — Accent, data visualization
- **Semantic** — Universal meanings (error, success, warning, info)
- **Neutral** — Text, backgrounds, dividers, accessible contrast

### Typography Philosophy

- **Lora (Serif)** — Display, headings, authority, editorial
- **Geist (Sans)** — Interface, body text, legibility
- **JetBrains Mono** — Technical data, metrics, code, dashboards

### Spacing Philosophy

- **4px base unit** — Precise, systematic control
- **Flexible scale** — xs (4px) → 8xl (64px) covers all needs
- **Consistent rhythm** — Components align to 4px grid

---

## Dark Mode

Tokens support dark mode via `next-themes`. When dark mode is enabled, colors automatically adjust:

```tsx
// Dark mode colors are in tokens.json under color_system.dark_mode
// Tailwind automatically applies via 'dark:' prefix

<div className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground">
  {/* Light: white bg, black text */}
  {/* Dark: dark bg, light text */}
</div>
```

---

## Validation & Testing

### Before Marking Complete

1. **JSON Validation** — `data/tokens.json` is valid JSON
2. **Build Test** — `npm run build` passes without warnings
3. **TypeScript Check** — `npm run typecheck` passes
4. **Visual Regression** — Components look identical to before
5. **Bundle Size** — No unexpected increase (< 1%)

### Common Issues

| Issue                          | Solution                                                |
| ------------------------------ | ------------------------------------------------------- |
| Tailwind not picking up tokens | Restart dev server (`npm run dev`)                      |
| Colors look different          | Check dark mode is off, verify hex codes in tokens.json |
| Type errors in config          | Ensure tokens.json structure matches typescript types   |
| Build fails                    | Run `npm run build --verbose` for detailed errors       |

---

## Examples

### Button with Tokens

```tsx
<button className="bg-primary hover:bg-primary-hover px-lg py-md rounded-md text-white shadow-sm">
  Click Me
</button>
```

### Card with Tokens

```tsx
<div className="bg-background border-border p-lg rounded-lg border shadow-md">
  <h2 className="text-foreground text-2xl font-bold">Title</h2>
  <p className="text-muted-foreground mt-md text-base">Description</p>
</div>
```

### Responsive Spacing

```tsx
<div className="p-sm md:p-md lg:p-lg">
  Spacing adapts: 8px (mobile) → 12px (tablet) → 16px (desktop)
</div>
```

---

## References

- **Token Definition:** `data/tokens.json`
- **Tailwind Config:** `tailwind.config.ts`
- **Components:** `components/ui/`
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Next.js Themes:** https://github.com/pacocoursey/next-themes

---

**Last Updated:** 2026-02-19
**Version:** 1.0
**Maintained By:** @dev (Dex)
