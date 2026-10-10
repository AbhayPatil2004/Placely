# Placely UI Rules

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Design
Follow DESIGN.md as the visual source of truth.

- Background: #171717
- Surface: #1e1e1e
- Primary: #7c3aed
- Accent: #a78bfa
- Text: #eeeeee

## Rules
- Dark-first UI
- Compact layout
- Cards: 12px radius
- Buttons/inputs: 8px radius
- Avoid excessive shadows
- Use subtle inset borders
- Use shadcn/ui for primitive components
- Create custom components for Placely-specific UI

## Architecture
- Pages compose components
- Avoid duplicate components
- Reuse components across DSA, SQL, System Design, etc.
- Do not modify backend files
- Do not add API calls unless explicitly requested
- Use TypeScript