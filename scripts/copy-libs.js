const fs = require("fs");
const path = require("path");

// Define libraries and their direct files
const libs = {
  jquery: {
    from: "node_modules/jquery/dist/jquery.min.js",
    to: "jquery/jquery.min.js",
  },
  swup: {
    from: "node_modules/swup/dist/swup.umd.js",
    to: "swup/swup.umd.js",
  },
  "@swup/scroll-plugin": {
    from: "node_modules/@swup/scroll-plugin/dist/index.umd.js",
    to: "swup/SwupScrollPlugin.umd.js",
  },
  "@swup/fade-theme": {
    from: "node_modules/@swup/fade-theme/dist/index.umd.js",
    to: "swup/SwupFadeTheme.umd.js",
  },
  gsap: {
    from: "node_modules/gsap/dist/gsap.min.js",
    to: "gsap/gsap.min.js",
  },
};

// Ensure libs directory exists
const libsDir = path.join(__dirname, "../assets/libs/js");
if (!fs.existsSync(libsDir)) {
  fs.mkdirSync(libsDir, { recursive: true });
}

// Copy each library
Object.entries(libs).forEach(([name, paths]) => {
  const fromPath = path.join(__dirname, "..", paths.from);
  const toPath = path.join(libsDir, paths.to);

  // Create subdirectory if needed
  const toDir = path.dirname(toPath);
  if (!fs.existsSync(toDir)) {
    fs.mkdirSync(toDir, { recursive: true });
  }

  // Copy file
  try {
    fs.copyFileSync(fromPath, toPath);
    console.log(`✅ Copied ${name}`);
  } catch (error) {
    console.error(`❌ Failed to copy ${name}:`, error.message);
  }
});
