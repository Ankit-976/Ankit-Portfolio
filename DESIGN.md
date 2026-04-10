# Design System Document: The Cinematic Professional

## 1. Overview & Creative North Star
**Creative North Star: "The Silent Architect"**

This design system is built to evoke the precision, authority, and subdued intensity of a high-end, cinematic night-scape. We are moving away from the "friendly SaaS" aesthetic toward a world of "Subdued Confidence." The goal is to make the developer’s work feel like a classified high-performance project—precise, expensive, and intentional.

To achieve this, we break the "template" look through **Intentional Asymmetry**. Instead of centered, balanced grids, use heavy left-aligned typography contrasted against expansive negative space. Content should feel "discovered" in the darkness rather than presented on a platter. We lean into the "Pure Black" abyss, using light only where focus is earned.

---

## 2. Colors
The palette is rooted in the absence of light, using gold not as a decoration, but as a surgical tool for emphasis.

- **Primary (#e9c349):** Use this "Muted Gold" strictly for high-priority calls to action or critical status indicators. It is the "utility belt"—functional and rare.
- **Surface Tiers:** 
    - `surface` (#0e0e0e) and `surface_container_lowest` (#000000) form the void. 
    - `surface_container` (#191919) and `surface_container_high` (#1f1f1f) provide the subtle structural "plates" of the UI.
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate content, use a shift from `surface` to `surface_container_low`. If a section ends, it should simply fade into the background.
- **The "Glass & Gradient" Rule:** For floating cards or navigation bars, use `surface_container` at 70% opacity with a `24px` backdrop blur. This creates a "smoked glass" effect that feels premium and integrated.
- **Signature Textures:** Use a subtle radial gradient on Hero backgrounds: `radial-gradient(circle at top left, #1a1a1a 0%, #000000 100%)`. This prevents the "flat black" from looking like a loading error and gives it the depth of a cinematic frame.

---

## 3. Typography
Typography is the primary vehicle for the "Batman" atmosphere: heavy, industrial, and unyielding.

- **Display & Headlines (Space Grotesk):** These must be bold and impactful. Use `display-lg` for project titles to create an editorial, "movie poster" feel. The tight tracking of Space Grotesk communicates technical precision.
- **Body & Labels (Inter):** Inter provides the functional "intel" layer. It should be clean, highly legible, and spaced generously to contrast against the massive headlines.
- **Hierarchy of Authority:** 
    - **Primary Info:** `on_surface` (#e5e5e5) for high-contrast readability.
    - **Secondary Intel:** `on_surface_variant` (#ababab) for metadata and descriptions. 
    - **The Gold Accent:** Use `primary` (#e9c349) only for hyper-specific labels or active navigation states.

---

## 4. Elevation & Depth
In a pure black environment, shadows are invisible. Therefore, depth is communicated through **Luminance and Layering**.

- **The Layering Principle:** Treat the UI as stacked sheets of anodized metal. 
    - Base Layer: `surface` (#0e0e0e)
    - Interactive Cards: `surface_container_low` (#131313)
    - Hover States: `surface_container_high` (#1f1f1f)
- **The "Ghost Border" Fallback:** If an element (like an input field) requires a boundary, use the `outline_variant` (#484848) at **15% opacity**. It should be felt, not seen.
- **The 0px Mandate:** This system utilizes a `0px` border-radius across all elements. Sharp corners convey danger, precision, and a non-consumerist, bespoke professional edge.

---

## 5. Components

### Buttons
- **Primary:** Background `primary` (#e9c349), Text `on_primary` (#4f3e00). Sharp 0px edges. No shadow.
- **Secondary:** Background `transparent`, Ghost Border (15% `outline_variant`), Text `on_surface`.
- **Interaction:** On hover, Primary buttons should slightly increase in luminance; Secondary buttons should shift background to `surface_container_highest`.

### Cards & Lists
- **Rule:** Never use dividers.
- **Execution:** Group list items using vertical white space (32px or 48px). For project cards, use a `surface_container_low` background. On hover, the background shifts to `surface_container_high` and the text color of the Title shifts to `primary` gold.

### Input Fields
- **Style:** Underline only. No box. 
- **Active State:** The underline shifts from `outline_variant` to `primary` gold. Helper text uses `label-sm` in `on_surface_variant`.

### Signature Component: The "Intel Memo" (Status Chips)
- Used for tech stacks (e.g., React, Rust). 
- Style: `surface_container_highest` background, `0px` radius, `label-md` text in `secondary` (#9f9d9d). These should look like stamped metal tags.

---

## 6. Do’s and Don’ts

### Do:
- **Use "Extreme" Spacing:** Give headlines massive top margins (80px+) to create a sense of scale and importance.
- **Embrace the Dark:** Allow large areas of the screen to remain pure `#000000`.
- **Focus on Performance:** Motion should be fast and linear (e.g., 150ms "Power-on" fades), mimicking high-end hardware interfaces.

### Don't:
- **No Rounded Corners:** Never use border-radius. It breaks the "Tactical" aesthetic.
- **No Soft Shadows:** Drop shadows look "cheap" in a cinematic theme. Use background tonal shifts instead.
- **No Pure White Text:** Use `on_surface` (#e5e5e5) instead of `#FFFFFF` to reduce eye strain and maintain the "subdued" atmosphere.
- **No Icons without Purpose:** Avoid decorative icons. If an icon is used, it must be a functional, thin-stroke technical glyph.