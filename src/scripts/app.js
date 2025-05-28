"use stick";

let lastScrollTop = 0;
  const navbar = document.querySelector(".nav_portfolio");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll vers le bas → cacher la nav
      navbar.style.top = "-100px"; // adapte à la hauteur de ta nav
    } else {
      // Scroll vers le haut → montrer la nav
      navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

