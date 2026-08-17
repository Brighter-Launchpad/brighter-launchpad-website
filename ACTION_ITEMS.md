# Action Items — Things I Need From You

Running list, grouped by urgency. Nothing here was invented or assumed in the code —
where real data was missing I left it out or flagged it rather than making it up.

## Urgent — please look at this soon

### 1. Fake staff pages, live and linked from the homepage
`pages/teacher.js` and `pages/teacher-details.js` display entirely fictional people —
"Frank T. Norman," "Patrick K. Carlson," "Roderick M. Neal," etc. — with made-up job
titles, Lorem-ipsum bios, and a `support@gmail.com` contact address. None of this is
your real team (your real staff roster already exists correctly in
`src/data/teachers.js` and is used elsewhere). **The live homepage currently links to
these pages** (a "classes" showcase, a "teacher" showcase). I've added `noindex` so
search engines won't index them, but a real visitor clicking from your homepage would
still see them today.

I need a decision, not data, for this one:
- **Option A**: I remove the homepage sections/links to `/classes`, `/teacher`,
  `/teacher-details`, `/events` now, ahead of schedule (these are otherwise Phase 8
  homepage-messaging work).
- **Option B**: Leave it until we get to Phase 8 and do the homepage rebuild properly
  in one pass.

### 2. `brighterlaunchpad.ca` — is it still live?
A comment in `src/data/blog.js` says the blog content was "migrated from the client's
existing site (https://www.brighterlaunchpad.ca/blog/)" — so `.ca` is a real domain you
used to run, not a typo. I've corrected every canonical/OG URL in the codebase to point
at `.com` (the domain actually deployed to Vercel), but if `.ca` is still resolving:
- Does it still have live traffic, backlinks, or Google Search Console history worth
  preserving?
- If yes, it should 301-redirect to the matching `.com` URL (not just point at the
  homepage) to carry over any existing search authority — that's a DNS/hosting change
  outside this repo, and I'd want to map old URLs to new ones before doing it.
- If `.ca` is already dead/parked, nothing to do — just confirming so I don't leave a
  silent ranking loss on the table.

## Needed before later phases

### 3. Google Search Console
Not set up in-repo yet. Once you give me access (or the verification method — DNS TXT
record vs. HTML meta tag), I'll wire it up as part of Phase 9.

### 4. Photos for the 4 real program pages
`src/data/programs.js` has a comment: *"Images are placeholders reusing existing
template stock photos until real photos are supplied."* This is real, client-provided
copy (from `childcare-programs.docx`) sitting on stock imagery. Needed for trust
(Phase 8) and for meaningful Open Graph share images — right now the OG image on those
pages falls back to a generic site-wide photo.

### 5. Confirm which locations have current Google Business Profiles
Six real centres exist in `src/data/locations.js` (Minto ×2, Chipman, New Maryland,
Fredericton ×2). Phase 5 (local SEO) will want to check NAP consistency against each
centre's Google Business Profile — I don't have access to check that from here.

## Not urgent — flagged for awareness, no action needed yet

- **`teacher-details.js` even for one real teacher** is a single hardcoded page (not a
  per-teacher template) — worth knowing before Phase 8 content work, no decision needed
  now.
- Business email is `admin@brighterlaunchpad.ca` (different TLD than the website) — left
  untouched since it's real contact data, not something to "fix." Flagging only so it
  doesn't look like an oversight later.
- GA4 (`G-21KQN0BKC2`) is already live on the site from a prior session — Phase 9 just
  needs to wire up conversion events once we get there.
