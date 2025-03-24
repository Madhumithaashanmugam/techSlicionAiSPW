
//testimonial animation
document.addEventListener("DOMContentLoaded", function () {
    const testimonialCards = document.querySelectorAll(".testimonial-card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        const triggerTop = window.innerHeight * 0.15; 

        testimonialCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;

            if (cardTop < triggerBottom && cardBottom > triggerTop) {
                if (index % 2 === 0) {
                    card.classList.add("animate-left-to-right");
                } else {
                    card.classList.add("animate-right-to-left");
                }
            } else {
                card.classList.remove("animate-left-to-right", "animate-right-to-left");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

//animation for about as
document.addEventListener("DOMContentLoaded", function () {
    const animatedBoxes = document.querySelectorAll(".scroll-animation");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85; 

        animatedBoxes.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                if (index % 2 === 0) {
                    box.classList.add("animate-left-to-right");
                } else {
                    box.classList.add("animate-right-to-left");
                }
            } else {
                box.classList.remove("animate-left-to-right", "animate-right-to-left");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});




// flip of images in project view 
document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll(".flip-card");

    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.3, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-visible");
            } else {
                entry.target.classList.remove("scroll-visible"); 
            }
        });
    }, observerOptions);

    flipCards.forEach((card) => observer.observe(card));
});


//Nav bar toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const mobileMenu = document.querySelector("#mobileMenu");
    const menuLinks = document.querySelectorAll(".mobile-nav a");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    });

    const closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});
