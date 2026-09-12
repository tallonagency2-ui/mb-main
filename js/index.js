"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const splashPage = document.getElementById("splashPage");

    if (!splashPage) {
        return;
    }

    const splashDuration = 2500;
    const exitAnimationDuration = 450;

    window.setTimeout(() => {
        splashPage.classList.add("is-leaving");

        window.setTimeout(() => {
            window.location.replace("./login.html");
        }, exitAnimationDuration);
    }, splashDuration);
});