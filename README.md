# Reel Atlas — Module 5 JavaScript Final Project

Reel Atlas is a responsive, one-page movie and television search interface prepared for the **Frontend Simplified Module 5 Mentor Code Review**. It uses the public [TVMaze Search API](https://www.tvmaze.com/api#show-search) to fetch results dynamically in the browser.

## Requirement Evidence

| Mentor-review requirement | Evidence in this project |
|---|---|
| Semantic HTML | The project contains navigation, main content, and footer regions. |
| CSS design | Responsive custom layout, grid, cards, and state-specific visual treatments. |
| External API fetching | Browser `fetch` request to the live TVMaze show-search endpoint. |
| Search bar | The form submits with Enter or the visible Search control. |
| Dynamic results | Results are rendered from the API response, capped at six, with poster fallbacks and metadata. |
| Responsive design | Search controls, cards, and content reflow at small-screen breakpoints. |
| Working filter | Native sort control supports alphabetical A–Z, Z–A, newest-to-oldest, and oldest-to-newest order. |
| Loading state | Skeleton result cards render during pending API requests. |

## Run Locally

```bash
pnpm install
pnpm dev
```

Run quality checks with:

```bash
pnpm run check
pnpm run build
```

## Reviewer Notes

The project keeps the network request in the client and separates query, loading, success, empty, and error states. The displayed result array is copied before sorting so the sort operation does not mutate stored fetch results.

This repository is deliberately limited to the final-project source and its application dependencies. It does not include unrelated portfolio projects or private course-study material.
