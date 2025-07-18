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
