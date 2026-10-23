# Specification: Enterprise UI & UX Upgrade for POSA Masterclass

## 1. Typography & Global Design Foundation
- **Font Stack:** Inject Google Fonts into `<head>`: load `Inter` (weights: 400, 500, 600, 700) for all body copy and headers, and `JetBrains Mono` (weights: 400, 500) for all code snippets, parameters, and inline technical terms.
- **Color Palette Upgrade:** Shift away from plain default backgrounds. Implement a deep, high-contrast surface hierarchy (e.g., body background `#0f172a`, cards and containers as `#1e293b` with thin borders `1px solid rgba(255, 255, 255, 0.08)`, and glowing electric indigo or emerald accents for highlights).

## 2. macOS-Style IDE Code Blocks
- Transform all raw code or terminal blocks into polished components:
  - Add an absolute top header bar featuring three classic window control dots (red `#ef4444`, yellow `#f59e0b`, green `#10b981`) and a discrete file-path label on the right.
  - Implement a fully functional, animated "Copy to Clipboard" button on the top-right corner of each code block that swaps to a green success checkmark on click.

## 3. Executive Summary & Sticky Reading Progress
- Add a ultra-thin, smooth animated gradient progress bar fixed to the very top (`position: fixed; top: 0; left: 0; height: 3px;`) that dynamically fills as the user scrolls down the page.
- Redesign the "Golden Rules / Principles" grid cards at the bottom of Stage 1 to feature soft drop shadows, subtle upward hover translations (`transform: translateY(-3px)`), and crisp iconography.

## 4. Mobile & Desktop Layout Polish
- Ensure the sticky sidebar (`aside`) and mobile navigation dock maintain high contrast against blurred background backdrops (`backdrop-filter: blur(12px)`).
- Verify all spacing, padding, and line-heights provide breathing room matching top-tier tech documentation hubs like Stripe Docs or Vercel.
