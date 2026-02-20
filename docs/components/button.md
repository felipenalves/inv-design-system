# Button Component

Accessible, composable button component with multiple variants and sizes. Built with shadcn/ui patterns and INV design tokens.

---

## Usage

```tsx
import { Button } from '@/components/ui/button'

export default function Example() {
  return <Button>Click me</Button>
}
```

---

## Variants

### Default (Primary)

Primary action button using INV-TAUPE (#E6E0DD) with hover state.

```tsx
<Button variant="default">Primary Button</Button>
<Button variant="default" disabled>Disabled</Button>
<Button variant="default" loading>Loading...</Button>
```

### Secondary

Secondary action button using neutral gray (#D6D5D4).

```tsx
<Button variant="secondary">Secondary Button</Button>
```

### Destructive

For delete, cancel, or destructive actions (red #DC2626).

```tsx
<Button variant="destructive">Delete</Button>
```

### Outline

Bordered button with transparent background.

```tsx
<Button variant="outline">Outline</Button>
```

### Ghost

Transparent background, visible on hover only.

```tsx
<Button variant="ghost">Ghost</Button>
```

### Link

Text link style with underline on hover.

```tsx
<Button variant="link">Link Button</Button>
```

---

## Sizes

### Extra Small (xs)

Height: 28px (h-7), Padding: 0 10px, Font: 12px

```tsx
<Button size="xs">Extra Small</Button>
```

### Small (sm)

Height: 36px (h-9), Padding: 0 12px, Font: 14px

```tsx
<Button size="sm">Small</Button>
```

### Default

Height: 40px (h-10), Padding: 0 16px, Font: 14px (default)

```tsx
<Button size="default">Default</Button>
<Button>Default (implicit)</Button>
```

### Large (lg)

Height: 44px (h-11), Padding: 0 32px, Font: 16px

```tsx
<Button size="lg">Large</Button>
```

### Icon

Square button: 40px × 40px (h-10 w-10)

```tsx
import { Loader2 } from 'lucide-react'

;<Button size="icon">
  <Loader2 className="h-4 w-4" />
</Button>
```

### Icon Small (icon-sm)

Square button: 32px × 32px (h-8 w-8)

```tsx
<Button size="icon-sm">
  <X className="h-4 w-4" />
</Button>
```

---

## States

### Loading

Shows spinner and disables interaction. Set `loading` prop:

```tsx
const [isLoading, setIsLoading] = useState(false)

<Button
  loading={isLoading}
  onClick={() => {
    setIsLoading(true)
    // API call...
  }}
>
  {isLoading ? "Processing..." : "Submit"}
</Button>
```

### Disabled

Disabled button with 50% opacity:

```tsx
<Button disabled>Disabled Button</Button>
```

### Active

Active state with slightly darker background and scale-down effect:

```tsx
// Automatically applied on click/press
```

---

## With Icons

Buttons can include icons from lucide-react or heroicons:

```tsx
import { Download, ExternalLink } from "lucide-react"

<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>

<Button variant="outline" size="sm">
  Open
  <ExternalLink className="ml-2 h-4 w-4" />
</Button>
```

---

## As Link

Use `asChild` to render as a different element (like `<a>` or Next.js `<Link>`):

```tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

;<Button asChild>
  <Link href="/docs">Documentation</Link>
</Button>
```

---

## Form Integration

Buttons work naturally in forms:

```tsx
<form onSubmit={handleSubmit}>
  <Input type="email" placeholder="Email" required />
  <Button type="submit">Subscribe</Button>
  <Button type="reset" variant="outline">
    Clear
  </Button>
</form>
```

---

## Accessibility

### Keyboard Navigation

- **Tab**: Move to next button
- **Shift+Tab**: Move to previous button
- **Enter / Space**: Activate button

### ARIA Attributes

```tsx
// Loading state
<Button loading>
  {/* aria-busy="true" automatically set */}
</Button>

// Disabled state
<Button disabled aria-disabled="true">
  Disabled
</Button>

// Icon buttons need labels
<Button size="icon" aria-label="Close menu">
  <X className="h-4 w-4" />
</Button>
```

### Focus States

- Visible ring on focus (2px, with offset)
- Meets WCAG AA 4.5:1 contrast ratio
- Clear visual indication of focus

---

## Customization

### Custom Colors

Extend with Tailwind classes:

```tsx
<Button className="bg-purple-600 hover:bg-purple-700">Custom Color</Button>
```

### Custom Width

```tsx
<Button className="w-full">Full Width</Button>
<Button className="w-32">Fixed Width</Button>
```

### Custom Spacing

```tsx
<Button className="px-6 py-3">Spacious</Button>
```

---

## Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link'
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'icon' | 'icon-sm'
  asChild?: boolean
  loading?: boolean
}
```

### Common Props

| Prop        | Type     | Default     | Description                              |
| ----------- | -------- | ----------- | ---------------------------------------- |
| `variant`   | string   | `"default"` | Visual style                             |
| `size`      | string   | `"default"` | Button dimensions                        |
| `disabled`  | boolean  | `false`     | Disable interaction                      |
| `loading`   | boolean  | `false`     | Show spinner, disable                    |
| `asChild`   | boolean  | `false`     | Render as child element                  |
| `className` | string   | —           | Additional Tailwind classes              |
| `onClick`   | function | —           | Click handler                            |
| `type`      | string   | `"button"`  | HTML button type (button, submit, reset) |

---

## Design Tokens Used

- **Colors**: primary, secondary, destructive (from `data/tokens.json`)
- **Spacing**: px, py (from `data/tokens.json`)
- **Typography**: font-medium, text-sm (from `data/tokens.json`)
- **Shadows**: shadow-sm (from `data/tokens.json`)
- **Border Radius**: rounded-md (from `data/tokens.json`)

---

## Examples

### Variant Showcase

```tsx
export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
```

### Size Showcase

```tsx
export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="default">Default</Button>
      <Button size="lg">LG</Button>
      <Button size="icon">🔒</Button>
      <Button size="icon-sm">✕</Button>
    </div>
  )
}
```

---

## Related

- [Design Tokens](../tokens/README.md)
- [Badge](./badge.md)
- [Input](./input.md)

---

**Last Updated:** 2026-02-19
**Version:** 1.0 (shadcn-style)
**Status:** Production Ready
