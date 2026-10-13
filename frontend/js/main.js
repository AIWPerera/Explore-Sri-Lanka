
/* ========================================
   EXPLORE SRI LANKA
   Shared Tourism Navigation
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const isHomePage =
        window.location.pathname.endsWith("/index.html") ||
        window.location.pathname.endsWith("/frontend/") ||
        window.location.pathname.endsWith("/frontend");

    const base = isHomePage ? "" : "../";

    const navigation = [
        ["Home", "index.html"],
        ["Destinations", "pages/destinations.html"],
        ["Attractions", "pages/attractions.html"],
        ["Hotels", "pages/hotels.html"],
        ["Restaurants", "pages/restaurants.html"],
        ["Food", "pages/food.html"],
        ["Activities", "pages/activities.html"],
        ["Travel Guide", "pages/travel-guide.html"],
        ["About", "pages/about.html"]
    ];

    const header = document.querySelector(".header");

    if (header) {
        header.innerHTML = `
            <nav class="navbar">
                <a href="${base}index.html" class="logo">
                    🇱🇰 Explore <span>Sri Lanka</span>
                </a>

                <button
                    class="menu-toggle"
                    id="menuToggle"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="navLinks">
                    &#9776;
                </button>

                <ul class="nav-links" id="navLinks">
                    ${navigation.map(([name, path]) => `
                        <li>
                            <a href="${base}${path}">
                                ${name}
                            </a>
                        </li>
                    `).join("")}
                </ul>
            </nav>
        `;
    }

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("show");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show");
                menuToggle.innerHTML = "&#9776;";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

});
