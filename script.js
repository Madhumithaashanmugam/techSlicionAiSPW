
//testimonial animation
document.addEventListener("DOMContentLoaded", function () {
    const testimonialCards = document.querySelectorAll(".testimonial-card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        const triggerTop = window.innerHeight * 0.15; // Adjusted for scrolling up

        testimonialCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;

            if (cardTop < triggerBottom && cardBottom > triggerTop) {
                // Apply animation when in view
                if (index % 2 === 0) {
                    card.classList.add("animate-left-to-right");
                } else {
                    card.classList.add("animate-right-to-left");
                }
            } else {
                // Remove animation when out of view to re-trigger
                card.classList.remove("animate-left-to-right", "animate-right-to-left");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check in case elements are already in view
});

//animation for about as
document.addEventListener("DOMContentLoaded", function () {
    const animatedBoxes = document.querySelectorAll(".scroll-animation");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85; // Trigger when element reaches 85% of viewport

        animatedBoxes.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                // Apply animation when box enters the viewport
                if (index % 2 === 0) {
                    box.classList.add("animate-left-to-right");
                } else {
                    box.classList.add("animate-right-to-left");
                }
            } else {
                // Remove animation when box leaves the viewport to reset
                box.classList.remove("animate-left-to-right", "animate-right-to-left");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check
});




// flip of images in project view 
document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll(".flip-card");

    const observerOptions = {
        root: null, // Uses the viewport
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-visible");
            } else {
                entry.target.classList.remove("scroll-visible"); // Optional: Remove when out of view
            }
        });
    }, observerOptions);

    flipCards.forEach((card) => observer.observe(card));
});



document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const mobileMenu = document.querySelector("#mobileMenu");
    const menuLinks = document.querySelectorAll(".mobile-nav a");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    // Close the sidebar when a link is clicked
    menuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    });

    // Close the sidebar when clicking the close button
    const closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});
