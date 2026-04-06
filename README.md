## Temporarily Disabled Sections

The site currently hides two sections while content is in progress. To restore them:

1. **Right Now section** – open `_layouts/home.html` and remove the Liquid `{% comment %}` block that wraps the section (lines marked "Temporarily hiding the Right Now section").
2. **Posts page + nav link** – in `_pages/year-archive.md` delete the `published: false` line (plus the nearby HTML note), and in `_data/navigation.yml` uncomment the `Posts` entry.

After those edits, rebuild the site (`bundle exec jekyll serve`) to confirm they reappear.
