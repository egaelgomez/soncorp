

## Plan: Replace favicon with uploaded ICO file

Two steps:

1. **Copy the uploaded file** from `user-uploads://IMG_0356.ico` to `public/favicon.ico`
2. **Update `index.html`** — ensure the favicon link points to the new file:
   ```html
   <link rel="icon" href="/favicon.ico" type="image/x-icon">
   ```

This replaces the previous `public/favicon.ico` with the uploaded Soncorp icon.

