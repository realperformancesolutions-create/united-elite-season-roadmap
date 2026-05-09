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
