# ELAMortuary

Website and WebGIS for **ELAMortuary — _Villages to Empire: 4,000 Years of Death and Society in Elam (4500-525 BCE)_**, a database of burials from Khuzestan province (south-west Iran) collating published and unpublished sources on mortuary practices from the late Chalcolithic to the Neo-Elamite period.

The project research and database, carried out by Yasmina Wicks, were funded by the European Union's Horizon 2020 research and innovation programme under the Marie Skłodowska-Curie grant agreement No. 892581 — ELAMortuary, hosted by Università di Napoli, "L'Orientale" (2022-2024).

Built with [Astro](https://astro.build/) and [s:CMS](https://scms.lad-sapienza.it/) (`@lad-sapienza/scms-core`). Developed by [LAD: Laboratorio di Archeologia Digitale alla Sapienza](https://purl.org/lad).

## Content

- **`src/content-pages/*.mdx`** — page content (home, map, data, entries description, bibliography, credits).
- **`src/pages/*.astro`** — thin per-page wrappers that render the matching MDX inside `BaseLayout`.
- **`public/data/elamortuary.geojson`** — the sites shown on the map.
- **`public/data/elamortuary.csv`** — the full burial catalogue shown in the data table.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # astro check && astro build -> dist/
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages at <https://lad-sapienza.github.io/elamortuary/>.

The `base` path (`/elamortuary/`) and `site` origin are configured in `src/user.config.mjs`.
