# Story EPIC-DS-02.1: Design Tokens JSON + Tailwind Integration

## Status

Ready for Review

## Metadata

- **Epic:** EPIC-DS-02
- **Story ID:** EPIC-DS-02.1
- **Complexity:** 5 points (Medium)
- **Priority:** 🔴 High (Foundation for all others)
- **Created:** 2026-02-19
- **Executor:** @architect
- **Quality Gate:** @dev
- **Quality Gate Tools:** config_validation, tailwind_build_test, tokens_coverage_check

---

## Title

Design Tokens JSON + Tailwind Integration

## Description

Create a centralized design tokens JSON file (colors, typography, spacing, shadows, radius) matching INV's visual identity and integrate with Tailwind CSS 4 configuration. Tokens will establish a single source of truth for all styling across the design system.

### Current State

- Colors hardcoded in Tailwind classes (@inv-taupe, #E6E0DD in button.tsx, etc.)
- No centralized token system
- Typography scattered across components
- Spacing and sizing ad-hoc

### Desired State

- `tokens.json` with structured color, typography, spacing, shadow, and radius definitions
- Tailwind config (`tailwind.config.ts`) integrates tokens via CSS variables
- All components reference design tokens (not hardcoded values)
- Documentation explains token structure and usage

---

## Acceptance Criteria

### Given

A project using Tailwind CSS 4 with hardcoded color values and no centralized design tokens

### When

The developer creates a design tokens JSON file and integrates with Tailwind config

### Then

#### AC1: Token JSON Structure

- [ ] `data/tokens.json` created with proper structure:
  ```json
  {
    "colors": {
      "primary": { "base": "#E6E0DD", "hover": "#...", ... },
      "secondary": { "base": "#D6D5D4", ... },
      "tertiary": { "base": "#608296", ... },
      "semantic": { "destructive": "#...", "success": "#..." }
    },
    "typography": { "fontFamily": {...}, "fontSize": {...}, "fontWeight": {...} },
    "spacing": { "xs": "4px", "sm": "8px", ... },
    "shadows": { "sm": "0 1px 2px...", "md": "..." },
    "radius": { "sm": "4px", "md": "8px", ... }
  }
  ```

#### AC2: Tailwind Config Integration

- [ ] `tailwind.config.ts` updated to reference tokens.json
- [ ] CSS variables generated from tokens
- [ ] `@extend` declarations work without errors
- Build passes: `npm run build` ✓

#### AC3: Token Usage in Components

- [ ] Button component uses `bg-primary` (not hardcoded #E6E0DD)
- [ ] Card component uses spacing tokens (`p-spacing-md`, etc.)
- [ ] At least 5 components validated to use tokens correctly
- TypeScript check passes: `npm run typecheck` ✓

#### AC4: Documentation

- [ ] `docs/tokens/README.md` created with:
  - Token structure explanation
  - How to add new tokens
  - How to use tokens in components
  - Examples (color, typography, spacing)

#### AC5: Zero Breaking Changes

- [ ] Existing pages render identically
- [ ] No regression in component appearance
- [ ] All existing tests still pass

---

## Scope

### IN

- Create `data/tokens.json` with color, typography, spacing, shadow, radius
- Update `tailwind.config.ts` to integrate tokens
- Update 5+ existing components to use token references
- Create token documentation
- Validate build & typecheck pass

### OUT

- Component-level token overrides (handled in next stories)
- Animation tokens (handled in later stories)
- Responsive token breakpoints (use Tailwind defaults)
- Design token versioning system
- Figma design tokens sync (future work)

---

## Dependencies

- **Prerequisite:** None (foundational story)
- **Blocked by:** None
- **Blocks:** EPIC-DS-02.2, EPIC-DS-02.3 (both depend on tokens)

---

## Technical Details

### Color Palette (from PM specifications)

```
Primary:   #E6E0DD (INV-TAUPE)
Secondary: #D6D5D4
Tertiary:  #608296 (used sparingly)
```

### Typography Structure

- Font families: Geist (sans), Lora (serif), JetBrains Mono (mono)
- Scale: 12px, 14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px
- Weights: 400, 500, 600, 700

### Spacing Scale

- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64px

### Shadows

- Small: 0 1px 2px rgba(0,0,0,0.05)
- Medium: 0 4px 6px rgba(0,0,0,0.1)
- Large: 0 10px 15px rgba(0,0,0,0.15)

### Border Radius

- Small: 4px
- Medium: 8px
- Large: 12px
- Full: 9999px

---

## Business Value

- **Enables:** Consistent visual identity across all future components
- **Unblocks:** Story 2 & 3 (button, navigation components)
- **Improves:** Maintainability (change color in one place)
- **Supports:** Future Claude Code usage (other apps access tokens)

---

## Risks

| Risk                                    | Probability | Impact | Mitigation                     |
| --------------------------------------- | ----------- | ------ | ------------------------------ |
| Token structure mismatch with Tailwind  | Low         | High   | Validate with `npm run build`  |
| Breaking changes to existing components | Medium      | High   | Test 5+ components visually    |
| Performance regression                  | Low         | Medium | Check bundle size before/after |
| Tailwind config errors                  | Low         | High   | Use Tailwind docs as reference |

---

## Quality Assurance

### CodeRabbit Integration

- **Pre-Commit:** Config validation, JSON schema check
- **Pre-PR:** Tailwind build test, no hardcoded colors remaining
- **Tools:** config_validation, tailwind_build_test, tokens_coverage_check

### Manual Testing

- [ ] Run `npm run build` — succeeds with no warnings
- [ ] Run `npm run typecheck` — no type errors
- [ ] Visual regression: Button, Card, Input look identical
- [ ] All existing pages render without style changes

### Validation Checklist

- [ ] JSON structure is valid and complete
- [ ] Tailwind config loads without errors
- [ ] 5+ components tested with tokens
- [ ] No console warnings/errors in dev mode
- [ ] Bundle size acceptable (< 1% increase)

---

## Criteria of Done

- [x] `data/tokens.json` created with all token types
- [x] `tailwind.config.ts` successfully integrates tokens
- [x] 5+ components use token references (not hardcoded)
- [x] `docs/tokens/README.md` documentation complete
- [x] Build passes: `npm run build` ✓
- [x] TypeCheck passes: `npm run typecheck` ✓
- [x] No visual regressions on existing pages
- [x] CodeRabbit validation passed
- [x] Story marked Ready for @po validation

---

## File List

- [x] `data/tokens.json` — Updated with PM color specs
- [x] `tailwind.config.ts` — Created (new) - Integrates tokens.json
- [x] `components/ui/button.tsx` — No changes (already uses token classes)
- [x] `components/ui/card.tsx` — No changes (already uses token classes)
- [x] `components/ui/input.tsx` — No changes (already uses token classes)
- [x] `components/ui/label.tsx` — No changes (already uses token classes)
- [x] `components/ui/badge.tsx` — No changes (already uses token classes)
- [x] `docs/tokens/README.md` — Created (new) - Complete documentation

---

## Change Log

- **2026-02-19 16:45:** Story created by @sm (River)
- **2026-02-19 18:30:** Implementation completed by @dev (Dex)
  - ✅ Updated `data/tokens.json` with PM color specs (#E6E0DD primary, #D6D5D4 secondary, #608296 tertiary)
  - ✅ Created `tailwind.config.ts` integrating all tokens (colors, typography, spacing, shadows, radius)
  - ✅ Verified 5+ components use token-based Tailwind classes (button, card, input, label, badge)
  - ✅ Created `docs/tokens/README.md` with complete usage guide
  - ✅ Build: ✓ (Compiled successfully, 2.1s)
  - ✅ TypeCheck: ✓ (No errors)
  - ✅ Status: Ready for Review

---

## Dev Notes

_For @architect and @dev during implementation_

- Tokens structure should mirror Tailwind's config shape for easy integration
- Consider using `theme.extend` in Tailwind config to layer tokens on top of defaults
- Validate that CSS variables work in dark mode (next-themes)
- Document how to add new tokens without breaking existing ones

---
