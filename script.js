/* ===============================
   SMOOTH SCROLL + ACTIVE NAV + SECTION FADE-IN
================================= */

const navLinks = document.querySelectorAll("nav a[href^='#']");
const sections = document.querySelectorAll("section[id]");
const header = document.querySelector("header");
const headerOffset = header ? header.offsetHeight : 90;

/* Smooth scroll */
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        const position = target.offsetTop - headerOffset;
        window.scrollTo({ top: position, behavior: "smooth" });
    });
});

/* Intersection Observer */
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");

            if (entry.isIntersecting) {
                entry.target.classList.add("active");

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active-link",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            }
        });
    },
    { threshold: 0.35 }
);

sections.forEach(section => observer.observe(section));

/* FIXED LOGIN CHECK */
const sessionUser = localStorage.getItem("loggedInUser");
if (!sessionUser) {
    window.location.href = "index.php";
}

/* LOGOUT */
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.php";
});
