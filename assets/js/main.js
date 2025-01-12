// Using jQuery for DOM ready
jQuery(document).ready(function ($) {
  // Make sure Swup exists
  if (typeof Swup !== "undefined") {
    // Initialize Swup
    const swup = new Swup({
      plugins: [
        new SwupScrollPlugin({
          doScrollingRightAway: false,
          animateScroll: true,
          scrollFriction: 0.3,
          scrollAcceleration: 0.04,
        }),
        new SwupFadeTheme(),
      ],
      animateHistoryBrowsing: true,
    });

    // Your init function that runs on every page
    function init() {
      // Initialize your page-specific JavaScript here
      console.log("[🚀] Page initialized");

      // Example: Initialize gallery if it exists
      if ($(".gallery").length) {
        initializeGallery();
      }

      // Other jQuery initializations
      $(".your-element").on("click", function () {
        // Your click handlers
      });
    }

    // Run once on initial load
    init();

    // Run after every Swup page load
    swup.hooks.on("content:replace", init);
  } else {
    console.error("Swup is not loaded");
  }
});
