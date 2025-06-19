document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Contact form handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    const msg = document.getElementById("form-message");
                    if (response.ok) {
                        msg.textContent = "Thank you for your message!";
                        contactForm.reset();
                    } else {
                        msg.textContent = "Oops! There was a problem.";
                    }
                })
                .catch(() => {
                    document.getElementById("form-message").textContent = "Oops! There was a problem.";
                });
        });
    }
});