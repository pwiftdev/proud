# Proud - Cinematic Web Foundation

Blank, animation-ready React + TypeScript + Vite setup for a cinematic crypto meme project.

## Installed stack

- React 19 + TypeScript + Vite 8
- Animation: `gsap`, `framer-motion`, `lenis`
- WebGL / 3D: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-spring/three`
- State + utilities: `zustand`, `clsx`
- Styling/build extras: `sass`, `vite-plugin-glsl`
- Tooling: ESLint + Prettier

## Project foundations

- `src/providers/AppProviders.tsx` initializes global animation providers.
- `src/hooks/useLenis.ts` enables smooth scroll lifecycle management.
- `src/hooks/usePrefersReducedMotion.ts` adds motion accessibility support.
- `src/lib/motion.ts` centralizes GSAP plugin bootstrapping.
- `src/store/ui-store.ts` includes a starter Zustand UI store.
- `src/types/shaders.d.ts` enables importing GLSL shader files.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```
