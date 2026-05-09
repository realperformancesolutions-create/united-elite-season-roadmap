# Deploy United Elite Season Roadmap to Vercel

This project is ready to import into Vercel from GitHub. The source repository is private and contains the completed United Elite Season Roadmap page, including the Vercel configuration file.

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `pnpm build` |
| Output Directory | `dist/public` |
| Install Command | `pnpm install` |
| Root Directory | Repository root |

To publish the page, open Vercel, choose **Add New Project**, import the GitHub repository named `united-elite-season-roadmap`, keep the settings above, and deploy. The included `vercel.json` handles single-page-app routing so direct page refreshes route back to the React app.
