const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const nextSibling = this.nextElementSibling;
    const size = nextSibling.scrollHeight;
    const maxHeight = nextSibling.style.maxHeight;

    closeAllAccordions();

    if (!maxHeight) {
      this.classList.add("active");
      nextSibling.style.maxHeight = `${size}px`;
    } else {
      this.classList.remove("active");
      nextSibling.style.maxHeight = null;
    }
  });
});

function closeAllAccordions() {
  accordions.forEach(function (accordion) {
    accordion.nextElementSibling.style.maxHeight = null;
    accordion.classList.remove("active");
  });
}
