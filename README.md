# Waad Kernel

Waad Kernel is a static personal portfolio focused on software engineering, artificial intelligence, projects, tools, and technical knowledge. Its cyber-kernel visual identity uses neon accents, terminal-inspired typography, glass panels, and system-interface details.

## Pages

- `index.html` - Homepage
- `about-waad-alhwaimel.html` - Background, interests, certifications, and resume section
- `software-engineering-projects.html` - Academic and technical projects
- `software-engineering-knowledge-base.html` - Guides, learning topics, and resources
- `student-project-planning-tools.html` - Student project planning tools

## Project Structure

```text
.
|-- index.html
|-- about-waad-alhwaimel.html
|-- software-engineering-projects.html
|-- software-engineering-knowledge-base.html
|-- student-project-planning-tools.html
|-- robots.txt
|-- assets/
|   `-- js/
|       `-- site-components.js
|-- README.md
`-- .gitignore
```

The shared header and footer are dependency-free Web Components defined in `assets/js/site-components.js`. All pages remain static HTML, CSS, and JavaScript and require no build step.

## Run Locally

Open `index.html` directly in a browser, or serve the directory with any static file server.

## GitHub Pages

1. Push this directory to a GitHub repository.
2. Open the repository's **Settings > Pages**.
3. Select the branch and root directory to publish.
4. GitHub Pages will use `index.html` as the site entry point.

All internal links are relative, so the site works from a GitHub Pages project subpath.

## Current Phase

Phase 1 establishes the GitHub Pages file structure, working page navigation, reusable header/footer components, and project documentation. Translation, theme switching, and knowledge search are intentionally reserved for later phases.

## External Dependencies

The inner pages currently load Google Fonts, Phosphor Icons, and Tailwind CSS from public CDNs. The homepage uses Google Fonts and custom embedded CSS.
