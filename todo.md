# Vercel Deployment Todo

- [x] Reconfirm that the project builds successfully for Vercel.
- [x] Check whether Vercel CLI is available and authenticated in the environment. Vercel CLI can run through npm, but there is no local Vercel auth file, token, or linked project configuration.
- [x] If authenticated, deploy the project to Vercel production.
- [x] If not authenticated, request user authorization through Vercel login or a deployment token.
- [x] Create a private GitHub repository for the United Elite roadmap project. Build verification passed before repository creation.
- [x] Push the Vercel-ready source code to the private GitHub repository.
- [x] Provide Vercel import settings for the repository.
- [x] Verify the resulting Vercel URL loads the United Elite roadmap page if user provides Vercel access. Live URL verified: https://united-elite-season-roadmap-8rq9xqhk9.vercel.app/
- [x] Deliver the GitHub repository URL and Vercel import path to the user.

## Benchmark Verbiage Correction

- [x] Locate the original benchmark wording from the provided PowerPoint document or prior extraction output.
- [x] Replace invented benchmark copy in the site with wording from the source document.
- [x] Run the production build after the wording-only correction.
- [x] Commit and push the corrected copy to GitHub for Vercel redeployment.
- [x] Verify the live Vercel page displays the corrected benchmark wording.

## Source-Only Wording Audit

- [x] Re-extract or reconfirm all text from TIMELINEPRODIGYV3.pptx as the sole wording source.
- [x] Audit visible roadmap copy in Home.tsx against the PowerPoint text.
- [x] Remove or replace any added, paraphrased, or invented milestone/benchmark wording.
- [x] Run a production build after source-only wording edits.
- [x] Commit and push the source-only wording update to GitHub for Vercel redeployment.
- [x] Verify the production Vercel page displays only PowerPoint-derived roadmap wording.

## Benchmark Mapping Correction

- [x] Extract each benchmark slide/card grouping from TIMELINEPRODIGYV3.pptx in order.
- [x] Create a benchmark-to-text mapping table from the PowerPoint only.
- [x] Compare the current Home.tsx roadmap data against the PowerPoint mapping.
- [x] Correct any benchmark text placed under the wrong benchmark.
- [x] Run a production build after benchmark mapping edits.
- [x] Verify the corrected page shows benchmark text under the correct benchmark.
- [ ] Commit, push, and save a checkpoint for the corrected benchmark mapping.

## Month Row Removal
- [ ] Remove the visible `MAY JUNE JULY AUGUST OCTOBER NOVEMBER DECEMBER` text row shown in the screenshot without changing benchmark content or layout.
- [ ] Build and verify the row is gone.
- [ ] Commit, push, and save a checkpoint for the targeted removal.

## May Roadmap Additions From Screenshot

- [ ] Add May roadmap entries for TRYOUTS 5/3-5/4 with `WE HAVE TO GET IT RIGHT`.
- [ ] Add May roadmap entry for STAFF TRAINING 5/8-5/9.
- [ ] Add May roadmap entry for 2ND TRYOUTS 5/13.
- [ ] Add May roadmap entry for TUMBLING SEMINAR 5/24-5/25.
- [ ] Build and verify the May entries appear as roadmap cards without restoring the old repeated header/month row.
- [ ] Commit, push, and save a checkpoint for the May roadmap additions.

## May Roadmap Additions And Date-First Formatting

- [ ] Add May roadmap entries for TRYOUTS 5/3-5/4 with `WE HAVE TO GET IT RIGHT`.
- [ ] Add May roadmap entry for STAFF TRAINING 5/8-5/9.
- [ ] Add May roadmap entry for 2ND TRYOUTS 5/13.
- [ ] Add May roadmap entry for TUMBLING SEMINAR 5/24-5/25.
- [ ] Convert dated listing text throughout the roadmap so the date appears before the listing, such as `6/5-6/7 TUMBLE CAMP`.
- [ ] Build and verify the May entries appear as roadmap cards without restoring the old repeated header/month row.
- [ ] Commit, push, and save a checkpoint for the May roadmap additions and date-first formatting.

## Hero Benchmark Notice Fix

- [ ] Remove the random static `BENCHMARK #13` hero button/label.
- [ ] Replace the hero benchmark line with an `UPCOMING BENCHMARK` notice that selects the next dated benchmark from the roadmap.
- [ ] Ensure the upcoming benchmark notice advances automatically after a benchmark date passes.
- [ ] Verify the hero no longer shows unrelated benchmark text while the roadmap keeps the same layout.

## Random Benchmark Summary Section Removal

- [ ] Remove the three-card benchmark summary section showing random benchmark due-date cards.
- [ ] Verify the section is gone without removing the actual roadmap timeline cards.

## Random Month Tile Section Removal

- [ ] Remove the lower month-tile section that repeats months without clear roadmap value.
- [ ] Verify the page still keeps the actual roadmap timeline cards after removing the lower month-tile section.

## Competition Logo Extraction And Placement

- [ ] Extract the competition logo artwork from the source document used for the roadmap.
- [ ] Remove the logo background and prepare transparent web-ready image assets outside the project directory.
- [ ] Upload the prepared competition logo assets for safe static-site use.
- [ ] Add the extracted competition logos to the competition roadmap cards.
- [ ] Verify competition cards show the correct logos without breaking the roadmap layout.

## User-Provided Competition Logos

- [ ] Use the provided `EN-1.webp` Encore logo on the appropriate competition card or cards.
- [ ] Use the provided `ACP-Web-Logo.webp` American Cheer Power logo on the appropriate competition card or cards.
- [ ] Remove backgrounds or prepare transparent variants only as needed while preserving the exact logo shapes and proportions.
- [ ] Upload the prepared user-provided competition logos for safe static-site use.

## Upcoming Benchmark Button Navigation Fix

- [x] Fix hero **Upcoming Benchmark** button so it jumps directly to the corresponding upcoming benchmark roadmap card instead of only scrolling to the general roadmap section.
- [x] Ensure Encore and American Cheer Power logo cards display cleanly on mobile without overflow, crowding, or unreadable sizing.
- [x] Verify the page remains mobile friendly on a small viewport, including hero buttons, roadmap cards, and competition logos.
- [x] Build and verify that the button lands on the matching benchmark card.
- [x] Commit, push, and save a checkpoint for the targeted navigation and mobile fix.
