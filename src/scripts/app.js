"use stick";



/* BAR NAVIGATION REMONTE */

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


  /* PAGE TRANSITION en COURS AMELIORE AVEC CHATGPT */
document.addEventListener("DOMContentLoaded", () => {
  const bloc2 = document.querySelector(".bloc2");

  // Cible tous les liens internes (à personnaliser selon tes besoins)
  const links = document.querySelectorAll("a[href]:not([target='_blank'])");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ne déclenche pas si c'est une ancre ou un lien vide
      if (!href || href.startsWith("#")) return;

      e.preventDefault();

      // Ajoute la classe d'animation
      document.body.classList.add("pageAnimation");

      // Quand l'animation est terminée → redirection
      bloc2.addEventListener("animationend", function handle() {
        window.location.href = href;

        // Important : supprime le listener après usage
        bloc2.removeEventListener("animationend", handle);
      });
    });
  });
});

