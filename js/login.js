"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const passwordToggle = document.getElementById("passwordToggle");
    const passwordDots = document.getElementById("passwordDots");
    const loginButton = document.getElementById("loginButton");

    const hiddenPassword = "•••••••••••";
    const visiblePassword = "12345678901";

    let isPasswordVisible = false;
    let isNavigating = false;

    if (passwordToggle && passwordDots) {
        passwordToggle.addEventListener("click", () => {
            isPasswordVisible = !isPasswordVisible;

            passwordDots.textContent = isPasswordVisible
                ? visiblePassword
                : hiddenPassword;

            const icon = passwordToggle.querySelector("i");

            if (icon) {
                icon.className = isPasswordVisible
                    ? "bx bx-hide"
                    : "bx bx-show";
            }

            passwordToggle.setAttribute(
                "aria-label",
                isPasswordVisible
                    ? "Ẩn mật khẩu"
                    : "Hiện mật khẩu"
            );
        });
    }

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            if (isNavigating) {
                return;
            }

            isNavigating = true;

            loginButton.classList.add("is-loading");
            loginButton.disabled = true;

            window.setTimeout(() => {
                window.location.href = "./home.html";
            }, 700);
        });
    }
});
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.querySelector(".login-page");

    const passwordPlaceholder = document.getElementById(
        "passwordPlaceholder"
    );

    const passwordDotsContainer = document.getElementById(
        "passwordDots"
    );

    const passwordDots = Array.from(
        document.querySelectorAll("#passwordDots span")
    );

    const passwordToggle = document.getElementById(
        "passwordToggle"
    );

    const loginButton = document.getElementById(
        "loginButton"
    );

    const totalDots = passwordDots.length;

    let filledDots = 0;
    let isNavigating = false;

    function updatePasswordDisplay() {
        const hasPassword = filledDots > 0;
        const isComplete = filledDots === totalDots;

        passwordPlaceholder?.classList.toggle(
            "is-hidden",
            hasPassword
        );

        passwordDotsContainer?.classList.toggle(
            "is-visible",
            hasPassword
        );

        passwordDots.forEach((dot, index) => {
            dot.classList.toggle(
                "is-active",
                index < filledDots
            );
        });

        loginButton?.classList.toggle(
            "is-ready",
            isComplete
        );
    }

    function addOnePasswordDot() {
        if (filledDots >= totalDots) {
            return;
        }

        filledDots += 1;

        updatePasswordDisplay();
    }

    function removeOnePasswordDot() {
        if (filledDots <= 0) {
            return;
        }

        filledDots -= 1;

        updatePasswordDisplay();
    }

    function shouldIgnoreClick(target) {
        return Boolean(
            target.closest(
                "#loginButton, " +
                "#passwordToggle, " +
                ".priority-brand, " +
                ".header-action-button, " +
                ".support-button, " +
                ".face-id-button, " +
                ".login-option-button, " +
                ".service-item, " +
                ".expand-button"
            )
        );
    }

    if (loginPage) {
        loginPage.addEventListener("click", (event) => {
            if (shouldIgnoreClick(event.target)) {
                return;
            }

            addOnePasswordDot();
        });
    }

    if (passwordToggle) {
        passwordToggle.addEventListener("click", () => {
            removeOnePasswordDot();
        });
    }

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            if (
                filledDots !== totalDots ||
                isNavigating
            ) {
                return;
            }

            isNavigating = true;

            loginButton.classList.add("is-loading");
            loginButton.disabled = true;

            window.setTimeout(() => {
                window.location.href = "./home.html";
            }, 700);
        });
    }

    updatePasswordDisplay();
});