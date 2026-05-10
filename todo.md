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
- [x] Remove the visible `MAY JUNE JULY AUGUST OCTOBER NOVEMBER DECEMBER` text row shown in the screenshot without changing benchmark content or layout.
- [x] Build and verify the row is gone.
- [ ] Commit, push, and save a checkpoint for the targeted removal.

## Header Text Cleanup
- [x] Remove the visible `TRYOUTS 5/3-5-4 STAFF TRAINING 5/8-5/9 2ND TRYOUTS 5/13 TUMBLING SEMINAR 5/24-5/25` row shown in the screenshot.
- [x] Remove the confusing stacked month labels that read as `MAY` above `JUNE` and `NOVEMBER` above `DECEMBER`.
- [x] Build and verify the header cleanup does not alter benchmark content.
- [ ] Commit, push, and save a checkpoint for the targeted header cleanup.

## TIMELINE.docx Authoritative Timeline Replacement
- [x] Extract the complete timeline content from `/home/ubuntu/upload/TIMELINE.docx` and save a structured source reference.
- [x] Replace the roadmap timeline content in `Home.tsx` using only the information from `TIMELINE.docx`.
- [x] Remove the visible month-list/header text previously flagged in screenshots, including the repeated `MAY JUNE JULY AUGUST OCTOBER NOVEMBER DECEMBER` text.
- [x] Build and verify the page uses the TIMELINE.docx content without the flagged header text.
- [ ] Commit, push, and save a checkpoint for the document-based timeline update.
