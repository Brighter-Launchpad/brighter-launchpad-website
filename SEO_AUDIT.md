# SEO Audit & Changelog — `seo/overhaul`

Ongoing log of the SEO/performance overhaul. Each phase gets an audit (what was found)
followed by a changelog (what was fixed). See `ACTION_ITEMS.md` for anything that needs
input, data, or a decision from the client before it can be finished.

---

## Phase 1 — Technical SEO

### Audit: what we found

**1. Wrong canonical domain baked into the two pages that had SEO tags.**
`pages/about.js` and `pages/location.js` were the only two pages in the codebase with a
real title/description/canonical/OG/JSON-LD setup — but every URL in it was built from
`https://www.brighterlaunchpad.ca`. The live production domain (confirmed via the Vercel
deployment) is `brighterlaunchpad.com`. A `src/data/blog.js` comment reveals `.ca` is/was
the client's *actual previous site* ("Blog content migrated from the client's existing
site (https://www.brighterlaunchpad.ca/blog/)"), not a typo — see `ACTION_ITEMS.md`,
this needs a decision on redirects.

**2. The homepage (`pages/index.js`) had zero SEO tags at all.**
No `<Head>`, no title override (it inherited the generic default from `_app.js`), no meta
description, no canonical, no Open Graph, no JSON-LD, and — because the hero is a Swiper
carousel of styled `<div>`s, not headings — **no `<h1>` anywhere on the page**.

**3. ~30 of ~46 pages had no per-page `<Head>` at all**, relying entirely on the single
global title in `_app.js` ("Brighter Launchpad | Preschool, Daycare & Early Learning")
for every route, with no meta description or canonical anywhere.

**4. 17 pages are leftover Kinco-template demo scaffolding, not real business content**,
and were never updated with real copy, images, or data:
`classes`, `classe-details`, `teacher`, `teacher-details`, `shop`, `shop-details`,
`events`, `event2`, `event-details`, `blog-grid`, `blog-list`, `blog-single`,
`calendar`, `pricing`, `testimonials`, `time-table`, `home2`.
None of them import from any real `src/data/*.js` file, and none are linked from the
real Header/Footer/MobileMenu navigation. Confirmed by content, not just by absence of
links — e.g. `pages/classes.js` still has `Consectetur adipiscing elit seds eiusmo tempor
incide` and `$259.95` template pricing.

**⚠️ Two of them are worse than inert clutter — they're live, publicly indexable pages
showing entirely fictional staff.** `pages/teacher.js` lists nine made-up names
("Patrick K. Carlson", "Frank T. Norman", "Roderick M. Neal"...) with fake job titles and
dead `href="#"` social icons, and `pages/teacher-details.js` renders a bio for "Frank T.
Norman" with Lorem-ipsum paragraphs and a `support@gmail.com` contact email. **These are
not the real staff** — the genuine team roster lives in `src/data/teachers.js` (Meagan
Agnew, Stephanie Wilson, etc.) and is used correctly elsewhere (the homepage's real team
section). This is a trust/brand issue, not just an SEO one: see below.

**5. The live homepage links to that fake content.** `pages/index.js` has real, rendered
links to `/classes`, `/teacher`, `/teacher-details`, and `/events` — meaning the fake
"Frank T. Norman" page is one click from the homepage, not buried. This is flagged as
urgent in `ACTION_ITEMS.md`; fixing the homepage sections themselves is Phase 8
(Homepage messaging + CTAs) territory, not a technical-SEO fix, so it wasn't touched here.

**6. No `robots.txt`, no `sitemap.xml`, no custom `404` page.** Next.js was serving its
default blank 404, and there was nothing telling crawlers what to do with the orphaned
demo pages above.

**7. `pages/franchise.js`, `pages/program.js` (+ its 4 real sub-pages), `pages/contact.js`,
`pages/gallery.js`, `pages/faq.js`, `pages/blog.js` (+ its 3 real posts), and
`pages/careers.js` all had real, good, on-brand content and a correct single `<h1>`
(via the shared `PageBanner` component) — they just had no `<Head>` metadata at all**
(`careers.js` was a partial exception: it had a title + description but no canonical/OG).

**8. `pages/faq.js` has genuinely rich, unique content already** — six FAQs for parents
and eight for prospective franchisees, cleanly split by funnel — that was completely
unmarked up. Good candidate for `FAQPage` schema (added; see note on eligibility below).

**9. `pages/privacy-policy.js`, `terms-of-use.js`, `anti-bias-statement.js`** had a title
+ description but no canonical/OG.

### Changelog: what was fixed

- **New `src/lib/seo.js`** — single source of truth for `SITE_URL`
  (`https://www.brighterlaunchpad.com`), `organizationSchema`, and a
  `buildBreadcrumbSchema()` helper. Replaces the two divergent, duplicated,
  wrong-domain implementations that used to live in `about.js` and `location.js`.
- **New `src/components/seo/Seo.js`** — the reusable per-route Head component
  (title, description, canonical, OG, Twitter Card, `robots`, arbitrary JSON-LD)
  called for by the brief instead of hand-rolled one-offs. This is the Pages-Router
  equivalent of the App Router Metadata API for this codebase.
- Refactored `about.js` and `location.js` to use it (fixes the `.ca` → `.com` bug at
  the source, de-duplicates the Organization schema).
- Added full `Seo` treatment (unique title, description, canonical, OG, breadcrumb
  JSON-LD) to every real content page that lacked it: **homepage, `franchise`,
  `program` + its 4 real sub-pages, `contact`, `gallery`, `faq`, `blog` + its 3 real
  posts, `careers`, `privacy-policy`, `terms-of-use`, `anti-bias-statement`** — 20
  pages total.
- Added `FAQPage` JSON-LD to `faq.js` (16 questions, family + franchise). Note:
  Google narrowed `FAQPage` rich-result eligibility in 2023 to mostly
  government/health sites, so treat this as semantic markup, not a guaranteed SERP
  enhancement.
- Added `Article` JSON-LD (headline, description, image, datePublished,
  author/publisher) to the 3 real blog posts.
- Homepage: added a single, accessible `<h1 className="sr-only">` (uses Bootstrap's
  existing `.sr-only` utility, already loaded) carrying "Licensed Daycare, Preschool &
  Franchise Opportunities | Brighter Launchpad". The visible hero carousel text stays a
  styled `<div>` deliberately — an earlier attempt to promote the first slide's div to a
  real `<h1>` produced **two** identical `<h1>`s in the rendered HTML, because Swiper
  clones slides for its `loop: true` infinite-scroll behavior. Verified in the built
  output that there's now exactly one `<h1>` on `/`.
- Added `noindex,nofollow` to all 17 orphaned template pages (title deliberately still
  set on each, for the browser tab / accessibility — noindex doesn't affect that).
  Deliberately **not** blocked via `robots.txt` — disallowing them there would stop
  Googlebot from ever crawling the page and seeing the `noindex` tag, which is the
  standard mistake that leaves already-indexed URLs stuck in the index.
- Added `public/robots.txt` (disallows `/api/` only, points to the sitemap).
- Added `pages/sitemap.xml.js` (server-rendered XML, hand-maintained list of the 20 real
  indexable URLs with priority/changefreq — deliberately excludes the 17 orphan pages and
  the `/locations` redirect shim).
- Added `pages/404.js` — branded, `noindex`, routes to both funnels ("Find A Childcare
  Spot" → `/location`, "Explore Franchise Opportunities" → `/franchise`) instead of
  Next's blank default.

### Verified

- `yarn build` — clean, only pre-existing `<img>`-vs-`next/image` lint warnings (Phase 2
  scope, not introduced by this phase).
- Ran the production build locally and checked rendered HTML for `/`, `/about`,
  `/franchise`, `/faq`, `/location`, `/program-infant`, `/careers`, and a noindexed page
  (`/classes`): exactly one `<h1>` per page, correct `<title>`/canonical pointing at
  `brighterlaunchpad.com`, `noindex` present where intended, all JSON-LD blocks parse as
  valid JSON. `/sitemap.xml` and `/robots.txt` serve correctly. `/this-page-does-not-exist`
  returns HTTP 404 and renders the branded page.

---

## Phase 1 checklist

- [x] Unique title/description/canonical per real page
- [x] Reusable per-route SEO pattern (not hardcoded one-offs)
- [x] One `<h1>` per page (homepage was the one gap; fixed)
- [x] Open Graph + Twitter Card metadata
- [x] `robots.txt`
- [x] `sitemap.xml`
- [x] Custom 404 page
- [x] `noindex` on template/demo pages that shouldn't be searchable
- [x] Breadcrumb JSON-LD on key pages
- [x] Organization + WebSite JSON-LD
- [x] FAQPage JSON-LD (faq.js)
- [x] Article JSON-LD (3 real blog posts)
- [ ] Domain migration plan for `brighterlaunchpad.ca` — **needs your input**, see
      `ACTION_ITEMS.md`
- [ ] Decide what happens to the fake-staff homepage sections/links — **needs your
      input**, see `ACTION_ITEMS.md`; likely Phase 8 work once decided
- [ ] HTTPS enforcement — Vercel handles this at the platform level for the custom
      domain; nothing to do in-repo. Not independently re-verified this pass.

Next up per the execution order: Phase 2–3 (mobile Core Web Vitals, image/font/JS audit,
caching) once you've had a chance to review this pass.
