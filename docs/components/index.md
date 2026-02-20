# Component Library — INV Design System

Complete guide to all components in the INV design system. Built on design tokens, shadcn/ui patterns, and Heroicons.

---

## Available Components

### Core

- **[Button](./button.md)** — Interactive buttons with multiple variants and sizes
- **Card** — Container component with variants (base, elevated, outlined)
- **Input** — Text input field with validation states
- **Label** — Form label component
- **Badge** — Small label/tag component
- **Navigation** — Horizontal navigation menu
- **Sidebar** — Vertical navigation with collapse support

### Icon Usage

All icons use **Heroicons** (2.2.0). Import from:

```tsx
import { HomeIcon, CogIcon, XMarkIcon } from 'heroicons/react/24/solid'
import { EllipsisHorizontalIcon } from 'heroicons/react/24/outline'

// 24px (solid, mostly UI)
<HomeIcon className="w-6 h-6" />

// 20px (outline, lighter)
<EllipsisHorizontalIcon className="w-5 h-5" />
```

**Common Icons:**

- `HomeIcon` — Navigation to home
- `CogIcon` — Settings, configuration
- `DocumentIcon` — Documents, pages
- `BellIcon` — Notifications, alerts
- `UserIcon` — User profile, account
- `Bars3Icon` — Menu (hamburger)
- `XMarkIcon` — Close, dismiss

---

## Design Tokens Reference

All components use tokens from `data/tokens.json`:

### Colors

```
Primary:    #E6E0DD (INV-TAUPE) — Main actions
Secondary:  #D6D5D4 (Gray) — Supporting actions
Tertiary:   #608296 (Blue) — Accents
Destructive: #DC2626 (Red) — Delete, error
```

### Spacing

```
xs: 4px     sm: 8px     md: 12px    lg: 16px
xl: 20px    2xl: 24px   3xl: 28px   4xl: 32px
```

### Typography

```
Font families:
- Geist (sans) — UI, body text
- Lora (serif) — Display, headings
- JetBrains Mono (mono) — Code, data

Font sizes: 12px → 36px (scales of 2-4px)
Weights: 400, 500, 600, 700
```

### Shadows

```
sm: 0 1px 2px rgba(0,0,0,0.05)
md: 0 4px 6px rgba(0,0,0,0.1)
lg: 0 10px 15px rgba(0,0,0,0.15)
```

### Border Radius

```
sm: 4px    md: 8px    lg: 12px    full: 9999px
```

---

## Component Patterns

### 1. Button

Use for all interactive actions:

```tsx
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Maybe</Button>
<Button variant="ghost">Secondary</Button>
<Button variant="link">Learn More</Button>
```

**Sizes:** xs, sm, default, lg, icon, icon-sm

**States:** loading, disabled

### 2. Card

Container for grouped content:

```tsx
<Card variant="base">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Variants:** base (subtle shadow), elevated (prominent shadow), outline (border only)

### 3. Navigation

Horizontal menu for page links:

```tsx
import { Navigation } from "@/components/ui/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/tokens", label: "Tokens" },
]

<Navigation links={navLinks} />
```

### 4. Sidebar

Vertical navigation with collapse:

```tsx
import { Sidebar } from '@/components/layout/sidebar'

// In layout.tsx
;<Sidebar />
```

Features:

- Auto-collapse button
- Active link highlighting
- Smooth transitions
- Icon tooltips when collapsed
- Dark mode support

### 5. Icons (Heroicons)

```tsx
import { StarIcon } from 'heroicons/react/24/solid'

;<StarIcon className="text-primary h-5 w-5" aria-hidden="true" />
```

**Colors:** Use token classes (text-primary, text-muted-foreground, etc.)

**Sizes:** w-4 h-4 (16px), w-5 h-5 (20px), w-6 h-6 (24px)

**Accessibility:** Add `aria-hidden="true"` for decorative icons

---

## Tone & Voice

### Brand Identity

**Direct. Analytical. Minimalist.**

We communicate clearly without fluff:

✅ **Good**

- "Save changes"
- "4 items selected"
- "Connection failed — retry?"

❌ **Avoid**

- "Please save your modifications"
- "You have selected 4 items"
- "The system encountered a connectivity issue"

### Writing Guidelines

1. **Short sentences** — 1 idea per sentence
2. **Active voice** — "Delete file" not "File will be deleted"
3. **Clear intent** — Buttons say what they do
4. **No padding** — Remove "please", "kindly", extra words
5. **Specific** — "Save as draft" not "Save"

### Label Examples

| Component    | Good            | Avoid                                     |
| ------------ | --------------- | ----------------------------------------- |
| Button       | Delete          | Are you sure you want to delete?          |
| Error        | Name required   | Please enter your name                    |
| Confirmation | 3 items deleted | 3 items have been successfully deleted    |
| Loading      | Saving...       | One moment please, we're saving your work |

---

## Accessibility (WCAG AA)

All components meet accessibility standards:

### Keyboard Navigation

- Tab → Move to next element
- Shift+Tab → Move to previous
- Enter/Space → Activate button
- Arrow keys → Navigate menu items

### Screen Readers

- Buttons have clear labels
- Active states announced (aria-current="page")
- Disabled state properly announced
- Icons have aria-label or aria-hidden

### Visual

- 4.5:1+ color contrast (AA standard)
- Focus ring visible (2px)
- No color-only information

---

## Dark Mode

All components support dark mode via `next-themes`:

```tsx
// Automatically switches based on system preference or user choice
// Components use 'dark:' Tailwind prefix for dark-specific styles
```

---

## Transitions & Animations

### Available Classes

```css
/* Fade (150ms) */
.transition-fade, .fade-enter-active, .fade-exit-active

/* Slide (200ms) */
.transition-slide, .slide-enter-left-active, .slide-exit-left-active

/* Sidebar collapse animation */
.sidebar-collapse

/* Navigation smooth states */
.nav-link-active

/* Card hover effect */
.card-hover
```

Used in:

- Sidebar collapse/expand
- Navigation active state
- Card hover effects
- Dialog/modal appears

---

## Quick Reference

### Import Patterns

```tsx
// Components
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/ui/navigation'

// Layout
import { Sidebar } from '@/components/layout/sidebar'

// Icons
import { HomeIcon, StarIcon } from 'heroicons/react/24/solid'

// Utilities
import { cn } from '@/lib/utils'
```

### Tailwind Classes Reference

```
Colors: bg-primary, text-secondary, border-destructive
Spacing: p-md, gap-lg, m-xl
Sizing: w-full, h-10, rounded-md
Shadows: shadow-sm, shadow-lg
Transitions: transition-all duration-150
```

---

## Best Practices

1. **Use tokens** — Don't hardcode colors/spacing
2. **Keep it simple** — One component, one job
3. **Dark mode** — Always test light + dark
4. **Accessibility** — WCAG AA minimum
5. **Type safety** — Use TypeScript types
6. **Reuse** — Check existing components first

---

## File Locations

```
components/
├── ui/              # Primitive components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── badge.tsx
│   └── navigation.tsx
├── layout/          # Layout components
│   └── sidebar.tsx
└── providers/       # Context providers

docs/components/    # Documentation
├── index.md         # This file
├── button.md        # Component guides
└── ...
```

---

## Related Resources

- **[Design Tokens](../tokens/README.md)** — Color, typography, spacing reference
- **[Tailwind Docs](https://tailwindcss.com/docs)** — Utility class reference
- **[Heroicons](https://heroicons.com/)** — Icon library search
- **[shadcn/ui](https://ui.shadcn.com/)** — Component patterns

---

**Last Updated:** 2026-02-19
**Version:** 1.0 (MVP Complete)
**Status:** Production Ready
