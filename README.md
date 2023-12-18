# Astro Routing Error

- Run `npm run dev`
- Navigate to `http://localhost:4321/blog/world/`
  - Works as expected
- Navigate to `http://localhost:4321/fr/blog/world/`
  - 404 Error
- Kill dev server in the terminal
- Restart the dev server in the terminal
- Reload `http://localhost:4321/fr/blog/world/`
  - Works as expected
- Navigate to `http://localhost:4321/blog/world/`
  - 404 error
- Repeat with `/es/blog/world`

In sum, only one `[dynamic].astro` route works at a time with locales with Astro.
