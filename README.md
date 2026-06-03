# Devo Edutech Pvt Ltd — Marketing Site

The marketing website for **Devo Edutech Pvt Ltd**, the parent company behind
[Hotelwaley](https://www.hotelwaley.com) — India's first vernacular microlearning
platform for the 40 million frontline workers in the country's hotels and restaurants.

Built as a lightweight PHP site composed from section partials, styled with
[Tailwind CSS](https://tailwindcss.com).

## Tech stack

- **PHP** — server-rendered partials, no framework
- **Tailwind CSS** (v3) — utility-first styling, compiled to a single stylesheet
- **Bootstrap Icons** — iconography

## Project structure

```
.
├── index.php            # Entry point — composes the page from partials
├── config.php           # Site config + all page content/copy
├── includes/            # Shared chrome
│   ├── head.php
│   ├── nav.php
│   └── footer.php
├── sections/            # Page sections, rendered in order
│   ├── hero.php
│   ├── stats.php
│   ├── about.php
│   ├── recognition.php
│   ├── founder.php
│   ├── platform.php
│   └── contact.php
├── assets/
│   ├── css/
│   │   ├── input.css    # Tailwind source
│   │   └── app.css      # Compiled output (committed for deploy)
│   ├── js/
│   └── images/
├── tailwind.config.js
└── package.json
```

All copy and structured content lives in [`config.php`](config.php) so the
section partials stay purely presentational.

## Getting started

### Prerequisites

- PHP 8.x
- Node.js (for the Tailwind build)

### Install

```bash
npm install
```

### Build the CSS

```bash
npm run build      # one-off minified build
npm run watch      # rebuild on change during development
```

The compiled stylesheet is written to `assets/css/app.css`. It is committed to
the repo so the site renders in production without a build step — re-run the
build and commit the result whenever you change markup or `input.css`.

### Run locally

```bash
php -S localhost:8000
```

Then open <http://localhost:8000>.

## License

Proprietary — © Devo Edutech Pvt Ltd. All rights reserved.
