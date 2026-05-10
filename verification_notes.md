# United Elite Season Roadmap Verification Notes

## Local Preview Verification — May 10, 2026 08:54 EDT

The local preview at `/#roadmap` now shows the newly added May entries as actual roadmap cards at the start of the timeline, including `5/3-5/4 TRYOUTS — WE HAVE TO GET IT RIGHT`, `5/8-5/9 STAFF TRAINING`, `5/13 2ND TRYOUTS`, and `5/24-5/25 TUMBLING SEMINAR`. The visible listing titles are now date-first for dated items. The random summary sections previously flagged by the user are not visible in the inspected roadmap flow. The December competition area shows at least the `12/12 COMPETITION` card with the Encore logo placed on the card rather than only plain text.

The bottom-of-page browser verification confirmed both December competition cards are visible in the live local preview. The `12/12 COMPETITION` card displays the transparent Encore logo, and the `12/20 COMPETITION` card displays the transparent American Cheer Power logo. The extracted page text also confirms the page is focused on the hero upcoming-benchmark notice and the roadmap cards, with no separate random benchmark-summary card section or lower month-tile section appearing in the content extraction.

## Mobile verification after first targeted anchor update

Captured 390x844 mobile screenshots for `#roadmap-7-9-benchmark-1-tumbling-skill-selection` and `#roadmap-12-12-competition`. Direct hash loading did not land on the benchmark or logo card, so React rendering needs an explicit post-render hash scroll and the hero button should use a click handler for reliable navigation. The hero benchmark title can also visually clip on narrow mobile widths, so the fix should add mobile-safe text wrapping while keeping the existing layout intact.

## 2026-05-10 Targeted benchmark-anchor and logo verification

The live preview was opened directly at `#roadmap-7-9-benchmark-1-tumbling-skill-selection`. The browser landed with the **7/9 Benchmark #1 Tumbling Skill Selection** card visible in the viewport, confirming the anchor now targets the actual roadmap card rather than the general roadmap section. The direct December competition hash `#roadmap-12-12-competition` also landed in the December card cluster, with the Encore and American Cheer Power logo panels visible and contained within their card frames on the live preview. Additional narrow-viewport checks are being completed for mobile-specific wrapping and logo fit.

## True mobile viewport verification — 390px wide

A CDP-controlled mobile viewport at 390px width clicked the hero **Upcoming Benchmark** button. The resulting hash was `#roadmap-7-9-benchmark-1-tumbling-skill-selection`, the target card top landed at 34px in the viewport, and `document.documentElement.scrollWidth` equaled `innerWidth` at 390px, confirming no horizontal overflow. The saved screenshot `verification/mobile-click-upcoming-benchmark-cdp.png` shows the **7/9 Benchmark #1 Tumbling Skill Selection** card directly in view.

The same 390px viewport was opened at `#roadmap-12-12-competition`. The December logo cards reported 350px card widths inside the 390px viewport with no horizontal overflow. The Encore logo rendered at 144px by 64px inside its framed logo panel, and the American Cheer Power logo was also present at a contained 144px by 64px farther down the December sequence. The saved screenshot `verification/mobile-december-logos-cdp.png` confirms the Encore logo card fits cleanly on mobile without crowding or clipping.
