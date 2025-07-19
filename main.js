//Aggiunge visibilità sulla nav della pagina usata

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname;

  links.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (currentPage.includes(linkHref)) {
      link.classList.add("active");
    }
  });
});

// Aggiunge la dark mode

const darkModeIcon = document.getElementsByClassName("fa-moon")[0];
if (darkModeIcon) {
  darkModeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      darkModeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      darkModeIcon.classList.replace("fa-sun", "fa-moon");
    }
  });

}




