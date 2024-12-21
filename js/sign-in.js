document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");

    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("signInEmail").value.trim();
        const password = document.getElementById("signInPassword").value.trim();

        if (!validateEmail(email)) {
            showToast("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            showToast("Password must be at least 6 characters long.");
            return;
        }

        showToast("Sign-In successful!", "success");
    });

    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("signUpName").value.trim();
        const email = document.getElementById("signUpEmail").value.trim();
        const password = document.getElementById("signUpPassword").value.trim();
        const confirmPassword = document.getElementById("signUpConfirmPassword").value.trim();

        if (name === "") {
            showToast("Full Name is required.");
            return;
        }

        if (!validateEmail(email)) {
            showToast("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            showToast("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            showToast("Passwords do not match.");
            return;
        }

        showToast("Sign-Up successful!", "success");
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showToast(message, type = "error") {
        const toastContainer = document.getElementById("toastContainer");
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.innerText = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    document.getElementById("switchToSignUp").addEventListener("click", () => {
        signInForm.classList.remove("active");
        signUpForm.classList.add("active");
    });

    document.getElementById("switchToSignIn").addEventListener("click", () => {
        signUpForm.classList.remove("active");
        signInForm.classList.add("active");
    });

    document.querySelectorAll(".toggle-password").forEach((icon) => {
        icon.addEventListener("click", () => {
            const input = icon.previousElementSibling;
            const type = input.getAttribute("type") === "password" ? "text" : "password";
            input.setAttribute("type", type);
            icon.classList.toggle("fa-eye");
            icon.classList.toggle("fa-eye-slash");
        });
    });
});