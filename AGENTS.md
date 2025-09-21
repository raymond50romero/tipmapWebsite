# Repository Guidelines

## Project Structure & Module Organization
- Vite-driven React app; `src/main.jsx` boots the UI and `App.jsx` wires routing.
- Domain logic lives in `src/features` (auth, content, newPost); keep API helpers under each module.
- Shared UI sits in `src/components`; co-locate feature styles like `components/content/tipmap/styles.css`.
- Context/state utilities are in `src/globals` and `src/utils`; assets split between `public/` (static) and `src/assets/` (bundled).

## Build, Test, and Development Commands
- `npm install` syncs dependencies.
- `npm run dev` starts the Vite dev server with HMR at `http://localhost:5173`.
- `npm run build` creates an optimized production bundle in `dist/`.
- `npm run preview` serves the build for smoke checks.
- `npm run lint` runs ESLint via `eslint.config.js`; fix all warnings before merging.

## Coding Style & Naming Conventions
- Follow ESLint + React plugin defaults: 2-space indent, double quotes, semicolons.
- Components/hooks in PascalCase (`Tipmap.jsx`, `useHelper.js`); utilities in camelCase (`formatCurrency.js`).
- Keep side effects inside React hooks; prefer functional components and early returns.
- Store secrets such as Mapbox tokens in `.env.local` and access via `import.meta.env`.

## Testing Guidelines
- No automated suite yet; adopt Vitest + React Testing Library when adding specs.
- Place tests alongside the module as `*.test.jsx` and mirror component names.
- Cover data fetching, auth flows, and map interactions; document manual QA steps in PRs until automated coverage exists.

## Commit & Pull Request Guidelines
- Use short present-tense subjects (~50 chars) that describe the change (`Add heatmap posts`).
- Bundle related work per commit; reference issues or notes when touching API contracts.
- Before opening a PR, run `npm run lint`, add screenshots or screen recordings for UI changes, and call out env var or backend dependencies.
- PR descriptions should summarize scope, testing performed, and any follow-up tasks.
