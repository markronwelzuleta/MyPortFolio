/* GitHub Pages portfolio demo
   Static-site navigation and section reveal.
*/
const navLinks = document.querySelectorAll("nav a[href^='#']");
const sections = document.querySelectorAll("section[id]");
const header = document.querySelector("header");
const headerOffset = header ? header.offsetHeight : 90;

// Reveal the home section immediately and reveal other sections on scroll.
sections.forEach(section => {
  if (section.id === "home") {
    section.classList.add("active");
  }
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        navLinks.forEach(link => {
          link.classList.toggle(
            "active-link",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    target.classList.add("active");
    window.scrollTo({
      top: target.offsetTop - headerOffset,
      behavior: "smooth"
    });
  });
});
