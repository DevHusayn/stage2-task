document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();


        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        let valid = true;


        if (name === "") {
            document.getElementById("error-name").textContent = "Full name is required.";
            valid = false;
        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("error-email").textContent = "Email is required.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("error-email").textContent = "Enter a valid email (e.g., name@example.com).";
            valid = false;
        }


        if (subject === "") {
            document.getElementById("error-subject").textContent = "Subject is required.";
            valid = false;
        }


        if (message.length < 10) {
            document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
            valid = false;
        }

        if (valid) {
            successMessage.hidden = false;
            form.reset();
        } else {
            successMessage.hidden = true;
        }
    });
});
