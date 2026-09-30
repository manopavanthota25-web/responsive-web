
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();

      alert("Project link will be added soon.");
    }
  });
});