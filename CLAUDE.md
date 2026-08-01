# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/brochure website for Brighter Launchpad (childcare/franchise business), built on the
"Kinco" Next.js template (`package.json` name: `kinco-react`). It is a static-content site — every
page is a hand-authored JSX file under `pages/`, there is no CMS or database, and the only "app"
logic is UI interaction (sliders, accordions, mobile menu, sticky nav, etc.).

## Commands

Dependencies are managed with **yarn** (`yarn.lock` is present; there is no `package-lock.json`).

```bash
yarn install       # install dependencies
yarn dev           # start dev server (next dev) — defaults to :3000, auto-increments if busy
yarn build         # production build (next build)
yarn start         # serve the production build (next start)
yarn lint          # next lint (eslint-config-next / next/core-web-vitals)
```

There is no test suite configured in this repo.

Note: `.next/` (the build cache/output) is committed to git in this repo, so `git status` will
show a lot of noise from `.next/cache/webpack/**` after any `dev`/`build` run — that's expected,
not a sign something broke.

## Architecture

- **Routing**: Next.js Pages Router (Next 12, React 17). Every file in `pages/*.js` is a route;
  there are no dynamic route segments — each page is a distinct static file (e.g.
  `pages/classe-details.js`, `pages/teacher-details.js`) rather than `[slug].js`.
- **`pages/_app.js`**: global shell — injects `<Head>` tags (favicons, fonts), shows `PreLoader`
  for 2s on every page load, then renders the page.
- **`src/layouts/Layout.js`**: wraps page content with `Header`/`Footer`/`MobileMenu`/`ScrollTop`
  and, on mount, wires up global DOM-driven behavior from `src/utils.js` (WOW.js scroll
  animations, sticky nav, active-nav-item highlighting). Pages opt out of the default header/footer
  via the `noHeader`/`noFooter` props and swap in an alternate layout component instead (e.g. the
  homepage renders `<Layout noHeader noFooter>` and drops in `Header1`/`Footer2` manually — see
  `pages/index.js`). There are multiple interchangeable header/footer variants
  (`Header`, `Header1`, `Header2`, `Footer`, `Footer2`) — check which a given page imports before
  assuming there is one canonical chrome.
- **`src/utils.js`**: DOM-manipulation helpers (`activeNavMenu`, `stickyNav`, `animation`,
  `pagination`) called imperatively from `useEffect` hooks — this codebase relies on direct
  `document.querySelector` calls rather than React state for nav/scroll UI, so changes to nav
  markup in `Header*`/`Menus.js` must stay in sync with the selectors here.
- **`src/data/locations.js`**: the one real "data layer" in the app — a hard-coded array of
  franchise/centre locations (address, geo-coordinates, contact info, JSON-LD-ready fields) plus
  shared contact constants. Consumed by `pages/location.js` and the `src/components/location/*`
  components (map, gallery, hero, intro, mobile action bar). `pages/locations.js` is a permanent
  redirect shim (`getServerSideProps`) to `/location`, not a real page — don't add content there.
- **Maps**: `LocationMap.js` lazy-loads `LocationMapView.js` via `next/dynamic` with `ssr: false`
  (Leaflet requires `window`), gated behind a `react-visibility-sensor` so the map JS/tiles only
  load once scrolled into view.
- **`src/components/`**: presentational/interactive pieces shared across pages (sliders via
  `swiper`/`react-apexcharts`, `FaqAccordion`, `Sidebar`, counters, popups). `src/SliderProps.js`
  centralizes Swiper carousel configs (e.g. `heroSlider`, `fourSlider`) reused across pages.
  `src/Icons.js` centralizes inline SVG icon components (e.g. `LeftArrow`/`RightArrow`).
- **Styling**: global CSS only (`styles/globals.css`, `styles/mfp.css`) plus static assets/fonts/
  icons under `public/assets/` — no CSS-in-JS or CSS modules. Class names follow the original
  template's `tf-*`/`sc-*`/`clr-pri-*` conventions; match existing conventions when adding markup
  rather than introducing a new styling approach.
- No TypeScript (`jsconfig.json`/`tsconfig.json` are absent) — plain JS/JSX throughout.
