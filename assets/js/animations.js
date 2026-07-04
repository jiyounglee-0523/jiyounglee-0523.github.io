(function () {
  if (typeof window === "undefined") return;

  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  var revealSelectors = [
    ".home > p",
    ".home > h2",
    ".home > h3",
    ".home > ul > li",
    ".home > blockquote",
    ".page-content .wrapper > p",
    ".page-content .wrapper > h2",
    ".page-content .wrapper > h3",
    ".page-content .wrapper > ul > li"
  ];

  var elements = document.querySelectorAll(revealSelectors.join(","));
  if (!elements.length) return;

  elements.forEach(function (el, index) {
    el.classList.add("reveal");
    el.style.transitionDelay = Math.min(index * 40, 400) + "ms";
  });

  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (el) {
      el.classList.add("reveal--visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });

  document.documentElement.style.scrollBehavior = "smooth";
})();
