# AmyGym — Claude Code Guidelines

## Responsive / Mobile Breakpoints

**The project uses `lg` (1024px) as the mobile/desktop boundary.**

- Below `lg` = mobile layout (hamburger nav, stacked content, simplified UI)
- At `lg` and above = desktop layout (full nav bar, side-by-side columns, etc.)

### Rules

- Use `lg:hidden` to hide something on desktop (mobile-only elements).
- Use `hidden lg:block` / `hidden lg:flex` to show something only on desktop.
- Never use `xl:` or `2xl:` to toggle mobile vs. desktop layouts.
- `sm:` and `md:` are fine for fine-grained typography scaling, spacing, or grid column counts within a layout tier — but never for the primary mobile/desktop layout switch.

### Standard breakpoint usage

| Prefix | Width  | Use for |
|--------|--------|---------|
| `sm:`  | 640px  | Minor spacing / flex-direction tweaks |
| `md:`  | 768px  | Typography scaling, vertical padding, secondary grid columns |
| `lg:`  | 1024px | **Primary mobile → desktop layout switch** |

### Examples

```tsx
// Navbar toggle — correct
<div className="hidden lg:flex ...">   {/* desktop nav */}
<button className="lg:hidden ...">     {/* hamburger */}

// Lightbox nav arrows — correct
<button className="hidden lg:block ...">   {/* side arrows, desktop only */}
<div className="flex lg:hidden ...">       {/* below-image arrows, mobile only */}
```
