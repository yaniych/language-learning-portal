# Language Learning Portal

An independent browser-based vocabulary and course workspace for saving, reviewing, and filtering language learning cards from the built-in course catalog.

This project does not claim partnership, endorsement, or affiliation with any third-party language learning platform.

## Run locally

Open `index.html` in a browser.

## Quality checks

Run the JavaScript syntax check before deploying:

```sh
npm test
```

The GitHub Pages workflow runs the same check before publishing.

## Notes

- Vocabulary cards, manual entries, and settings are stored in the browser with `localStorage`.
- The course catalog is built into `app.js`; no external API is required.
- Practice, daily phrases, progress, and saved-items views are rendered from the same local card data as the dictionary.
