---
name: Nocturne Kinetic Editorial
colors:
  surface: '#04151e'
  surface-dim: '#04151e'
  surface-bright: '#2a3b45'
  surface-container-lowest: '#001019'
  surface-container-low: '#0c1e27'
  surface-container: '#10222b'
  surface-container-high: '#1b2c36'
  surface-container-highest: '#263741'
  on-surface: '#d3e5f2'
  on-surface-variant: '#bec7d2'
  inverse-surface: '#d3e5f2'
  inverse-on-surface: '#21333c'
  outline: '#89929b'
  outline-variant: '#3f4850'
  surface-tint: '#8fcdff'
  primary: '#99d1ff'
  on-primary: '#003450'
  primary-container: '#4db8ff'
  on-primary-container: '#00476b'
  inverse-primary: '#006495'
  secondary: '#a1cddd'
  on-secondary: '#003642'
  secondary-container: '#1e4c5a'
  on-secondary-container: '#90bccc'
  tertiary: '#b2cfe2'
  on-tertiary: '#173443'
  tertiary-container: '#97b3c6'
  on-tertiary-container: '#2a4655'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#8fcdff'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#004b71'
  secondary-fixed: '#bceafa'
  secondary-fixed-dim: '#a1cddd'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#1e4c5a'
  tertiary-fixed: '#c9e7fa'
  tertiary-fixed-dim: '#aecade'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#2e4a5a'
  background: '#04151e'
  on-background: '#d3e5f2'
  surface-variant: '#263741'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 5rem
    fontWeight: '400'
    lineHeight: 5.25rem
    letterSpacing: 0.02em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: 3.25rem
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: 3.75rem
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Anton
    fontSize: 1.5rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: 0.03em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '700'
    lineHeight: 1.75rem
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: 1.125rem
    letterSpacing: 0.12em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.15em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.18em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system crafts a focused, high-impact personal identity for an engineering student operating at the intersection of systems software, web technology, and 3D digital art. The aesthetic bridges high-fashion editorial rigor with interactive digital craft: deliberate whitespace, condensed typography, cinematic atmosphere, and tactile glass panels that let character models and interactive artifacts take center stage.

The style merges **Modern Editorial** with **Atmospheric Glassmorphism**:
- Dark teal tonal stacking creates depth reminiscent of deep ocean trenches or late-night IDE terminals.
- Condensed, monumental typography commands authority while keeping vertical rhythms tight.
- Refined glass surfaces (`rgba(255, 255, 255, 0.04)`) with razor-thin borders (`1px solid rgba(255, 255, 255, 0.12)`) establish structure without obstructing interactive canvas layers.
- The interface evokes precision, ambition, modern engineering literacy, and playful technical curiosity.

## Colors

The palette operates in strict dark mode, anchored in oceanic teals and electric cyan accents:

- **Deep Foundation (`--bg-deep: #0B1D26`)**: The primary canvas background, providing an immersive, low-strain void for 3D character staging and typography.
- **Mid Layer (`--bg-mid: #163342`)**: Surface container tone for structural sections, code blocks, navigation shells, and stacked cards.
- **Light Teal Surface (`--bg-light: #3A6674`)**: High-contrast surface highlight, hover boundaries, and secondary actionable controls.
- **Electric Accent (`--accent: #4DB8FF`)**: High-luminance cyan reserved for interactive calls to action, focus rings, active navigation pill markers, and dynamic metrics.
- **Accent Glow (`--accent-glow: rgba(77, 184, 255, 0.25)`)**: Radial bloom behind key 3D elements, primary buttons, and cursor highlights.
- **Typographic Hierarchy**:
  - `ink` (`#FFFFFF`): 100% white for titles, numerical callouts, and active states.
  - `ink-soft` (`rgba(255, 255, 255, 0.72)`): Body copy, descriptions, and metadata.
  - `ink-muted` (`rgba(255, 255, 255, 0.45)`): Captions, timestamps, disabled triggers, and structural line work.
- **Glass Shards**:
  - Surface: `rgba(255, 255, 255, 0.04)` with `backdrop-filter: blur(16px)`.
  - Stroke: `rgba(255, 255, 255, 0.12)` providing hairline delineation.

## Typography

The typographic hierarchy pairs the high-impact architectural weight of Anton with the geometric clarity of Plus Jakarta Sans:

- **Display & Headings (Anton)**: Used in uppercase for monumental section markers, hero titles, project designations, and giant numerical sequence tags (e.g., `01 / PROJECTS`). Its condensed proportions allow dramatic scales without excessive vertical sprawl.
- **Editorial Body (Plus Jakarta Sans)**: Used for narrative prose, engineering project descriptions, academic credentials, and case study briefs. Generous line heights ensure effortless legibility against the deep dark canvas.
- **Tech Labels & Micro-Copy (Plus Jakarta Sans)**: Rendered in uppercase with wide letter-spacing (`0.12em` to `0.18em`) and semi-bold weights for category kickers, status indicators (`AVAILABLE FOR INTERNSHIPS`), tech stack chips, and coordinates.

## Layout & Spacing

The layout employs an asymmetric, fluid 12-column grid system tuned for editorial narrative sequencing and interactive 3D viewports:

- **Canvas Architecture**:
  - Maximum container width is pinned to `1440px` with a default horizontal gutter of `1.5rem` and outer margins scaling from `4rem` (desktop) down to `1.25rem` (mobile).
  - The hero section uses an overlapping split: 7 columns dedicated to display copy and technical parameters, 5 columns reserved for the interactive Three.js character viewport.
- **Responsive Adaptations**:
  - **Desktop (1024px+)**: 12 columns, multi-directional alignment, overlapping glass cards floating over 3D coordinates.
  - **Tablet (768px – 1023px)**: 8 columns, gutters condense to `1.25rem`, margins to `2rem`. Interactive canvas docks above or between editorial text blocks.
  - **Mobile (< 768px)**: 4 columns, vertical flow. Anton display titles scale dynamically through `-mobile` tokens. Margins drop to `1.25rem`.
- **Rhythm & Cadence**:
  - Macro spacing (`space-2xl` to `space-3xl`) separates thematic milestones (Hero, Project Archives, Engineering Specializations, Contact Terminal).
  - Micro spacing (`space-xs` to `space-md`) tightly bonds labels with metadata and badges.

## Elevation & Depth

Visual hierarchy uses frosted glass refraction, localized specular highlights, and atmospheric cyan luminescence rather than conventional muddy drop shadows:

- **Level 0 (Canvas Void)**: Base `#0B1D26` tone; non-interactive backdrop hosting floating particle dust, wireframe guides, or 3D character rigging.
- **Level 1 (Subsurface Sections)**: `#163342` at 60% opacity with `backdrop-filter: blur(12px)`. Used for major section dividers, alternating content bands, and footer terminals.
- **Level 2 (Glass Shards & Cards)**: `rgba(255, 255, 255, 0.04)` fill, bordered by a precise `1px solid rgba(255, 255, 255, 0.12)`. Applied to project presentation panels, skill matrix tiles, and interactive code terminals.
- **Level 3 (Floating Overlays & Menus)**: `rgba(22, 51, 66, 0.85)` fill, frosted glass with `backdrop-filter: blur(24px)` and high-order hair-thin border `rgba(77, 184, 255, 0.25)`.
- **Level 4 (Luminous Focal Points)**: Primary interactive buttons and hovered items generate a directional glow: `box-shadow: 0 0 24px 0 rgba(77, 184, 255, 0.28)`.

## Shapes

This design system uses a **Soft (0.25rem default)** geometric philosophy to echo precision engineering instruments, code editors, and sleek hardware bezels:

- **Base Radius (`0.25rem`)**: Applied to buttons, tech stack badges, inputs, and inline code tags. Delivers crisp edges that feel technical rather than bubbly.
- **Medium Panels (`rounded-lg: 0.5rem`)**: Applied to project cards, glass inspection windows, modal dialogs, and code snippet frames.
- **Hero & Floating Viewports (`rounded-xl: 0.75rem`)**: Applied exclusively to the 3D character interactive viewport and floating navigation docks.
- **Functional Exceptions**: Pill shapes (`border-radius: 9999px`) are restricted solely to numeric status capsules, availability badges, and circular floating action icons.

## Components

### Buttons
- **Primary Action**: Background `#4DB8FF`, text `#0B1D26`, font `label-lg`, uppercase. Hover introduces `box-shadow: 0 0 24px rgba(77, 184, 255, 0.35)` with a `-1px` transform lift.
- **Secondary (Glass)**: Background `rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#FFFFFF`. Hover shifts border to `rgba(77, 184, 255, 0.5)` and text to `#4DB8FF`.
- **Ghost Action**: Padding without border; text `rgba(255, 255, 255, 0.72)`. Hover transitions to full `#FFFFFF` with an animated cyan hairline underline.

### Chips & Badges
- Tech stack tags and role pills use `background: rgba(58, 102, 116, 0.25)`, border `1px solid rgba(255, 255, 255, 0.08)`, and text `label-sm` (`#4DB8FF`).
- Status indicators (e.g., "ITPLN INFORMATICS") feature a pulsing `4px` glowing cyan dot preceding uppercase micro-copy.

### Project & Showcase Cards
- Structured with glass surfaces (`rgba(255, 255, 255, 0.04)`), `0.5rem` radius, and `1.5rem` internal padding.
- Include a prominent condensed serial tag in Anton (`01`, `02`), an interactive thumbnail container, a tech stack chip group, and secondary body description in `body-sm`.
- Hover triggers border illumination via `rgba(77, 184, 255, 0.4)` and a gentle character/thumbnail zoom (`scale(1.02)`).

### Interactive 3D Canvas Stage
- Bordered frame using `1px solid rgba(255, 255, 255, 0.12)` with ambient backdrop cyan glow (`rgba(77, 184, 255, 0.08)`).
- Contains HUD overlays in the corners: model camera controls, frame rate readouts, and lighting mode toggles formatted in `label-sm`.

### Form Fields & Inputs
- Terminal-inspired text fields with background `#0B1D26`, stroke `1px solid rgba(255, 255, 255, 0.12)`, text `#FFFFFF`, and placeholder in `ink-muted`.
- Focus shifts border to `#4DB8FF` with an accent outline ring (`0 0 0 1px #4DB8FF`).

### Checkboxes & Toggle Switches
- Checkbox squares (`18px`) in `#163342` with `1px solid rgba(255, 255, 255, 0.2)`. Checked state fills `#4DB8FF` with deep teal checkmark icon.
- Toggles utilize an elongated pill frame (`36px x 20px`) with a sliding white circular knob (`14px`).

### Lists & Timelines
- Academic (ITPLN) and professional milestones rendered as an editorial timeline: left column for bold year/status (Anton `headline-sm`), right column for institution, degree title, and technical achievements separated by vertical hairline guides (`1px solid rgba(255, 255, 255, 0.1)`).