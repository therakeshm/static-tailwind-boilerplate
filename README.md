# Anthony's Photography Portfolio Theme

A photography portfolio theme for Anthony's website built with Tailwind CSS, starting as a static site and later converting to WordPress theme.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm (recommended over npm)

### Installation

1. Clone the repository

```bash
git clone git@github.com:nuovixlabs/anthony-website-frontend.git
cd anthony-website-frontend
```

2. Install dependencies & Setup libraries

```bash
pnpm run setup
```

This will:

- Install all project dependencies
- Create necessary directories
- Copy all third-party libraries to assets/libs/js/

### Development

Run the development server:

```bash
pnpm run dev
```

This will:

- Watch for changes in your source files
- Compile Tailwind CSS
- Output compiled CSS to assets/css/theme.css

### Adding New Third-Party Libraries

1. Install the library:

```bash
pnpm add library-name
```

2. Add library configuration to scripts/copy-libs.js:

```javascript
const libs = {
  // Existing libraries...
  "library-name": {
    from: "node_modules/library-name/dist/library-name.min.js",
    to: "library-name/library-name.min.js",
  },
};
```

3. Run copy-libs script:

```bash
pnpm run copy-libs
```

### Production Build

```bash
pnpm run build
```

This will create a production-ready build with optimized CSS.

## Project Structure

```
photo-portfolio/
├── src/
│   └── css/
│       └── main.css          # Tailwind source CSS
│
├── assets/
│   ├── css/
│   │   └── theme.css        # Compiled CSS
│   ├── js/
│   │   └── main.js          # Custom JavaScript
│   ├── libs/                # Third-party libraries
│   │   └── js/
│   │       ├── jquery/      # Organized by library
│   │       ├── swup/
│   │       └── gsap/
│   └── images/              # Image assets
│
├── components/              # Reusable HTML components
│   ├── header.html
│   ├── footer.html
│   └── gallery.html
│
├── pages/                   # HTML pages
│   ├── index.html
│   ├── about.html
│   └── contact.html
│
├── scripts/                 # Build scripts
│   └── copy-libs.js         # Library management script
│
├── style.css               # WordPress theme metadata (empty for now)
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md
```

### Directory Explanation

- `src/`: Source files

  - `css/`: Contains the source Tailwind CSS file

- `assets/`: Public assets

  - `css/`: Compiled CSS files
  - `js/`: Custom JavaScript files
  - `libs/`: Third-party libraries (organized by package)
  - `images/`: Image files

- `components/`: Reusable HTML components

  - Includes header, footer, and other reusable parts

- `pages/`: HTML pages

  - Contains all static HTML pages

- `scripts/`: Build scripts
  - Contains scripts for managing libraries and builds

## Available Scripts

- `pnpm run dev`: Start development server with watch mode
- `pnpm run build`: Create production build
- `pnpm run setup`: Initial setup (install deps + copy libraries)
- `pnpm run copy-libs`: Copy third-party libraries to assets folder

## Library Management

Third-party libraries are managed through the copy-libs script. This ensures:

- Clean version control (no node_modules in repository)
- Organized library structure in assets/libs
- Easy library updates
- Consistent file paths in production

## Converting to WordPress Theme

This project is structured to be easily converted into a WordPress theme later. The `style.css` in the root directory will contain WordPress theme metadata, while actual styles remain in `assets/css/theme.css`.

When converting to WordPress:

1. The build process remains the same
2. Library management workflow stays identical
3. PHP templates will reference the same asset structure
4. Third-party libraries will be properly enqueued via WordPress

## Contributing

1. Ensure you run `pnpm run build` before committing
2. Update copy-libs.js when adding new libraries
3. Maintain the established directory structure
