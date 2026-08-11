
/* =========================================
   HERITAGE CRAFTS
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   AOS INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 900,

            once: true,

            offset: 80

        });

    }

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================
   MOBILE NAVBAR AUTO CLOSE
========================================= */

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link:not(.dropdown-toggle)"
);

const navbarCollapse = document.getElementById("mainNavbar");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});


/* =========================================
   SMOOTH INTERNAL LINKS
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#"
        ) {

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (
        linkPage === currentPage &&
        !link.classList.contains("dropdown-toggle")
    ) {

        link.classList.add("active");

    }

});


/* =========================================
   PRODUCT CARD HOVER
========================================= */

const productCards =
    document.querySelectorAll(".product-card");

productCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        this.style.cursor = "pointer";

    });

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "Heritage Crafts website loaded successfully."
);
