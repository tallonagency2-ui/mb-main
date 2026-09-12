"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector(
        ".bill-detail-page"
    );

    const overlay = document.getElementById(
        "billOverlay"
    );

    const sheet = document.getElementById(
        "billSheet"
    );

    const dragArea = document.getElementById(
        "billDragArea"
    );

    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let isClosing = false;

    const closeThreshold = 100;
    const closeDuration = 360;


    function closeBill() {
        if (
            !page ||
            isClosing
        ) {
            return;
        }

        isClosing = true;

        page.classList.add("is-closing");

        window.setTimeout(() => {
            if (window.history.length > 1) {
                window.history.back();
                return;
            }

            window.location.replace(
                "./transaction.html"
            );
        }, closeDuration);
    }


    function resetSheet() {
        if (!sheet) {
            return;
        }

        sheet.style.transition =
            "transform 240ms ease";

        sheet.style.transform =
            "translate3d(0, 0, 0)";

        window.setTimeout(() => {
            sheet.style.transition = "";
            sheet.style.transform = "";
        }, 250);
    }


    overlay?.addEventListener(
        "click",
        closeBill
    );


    dragArea?.addEventListener(
        "touchstart",
        (event) => {
            if (!event.touches.length) {
                return;
            }

            startY =
                event.touches[0].clientY;

            currentY = startY;
            isDragging = true;

            sheet.style.animation = "none";
            sheet.style.transition = "none";
        },
        {
            passive: true
        }
    );


    dragArea?.addEventListener(
        "touchmove",
        (event) => {
            if (
                !isDragging ||
                !event.touches.length
            ) {
                return;
            }

            currentY =
                event.touches[0].clientY;

            const distance =
                Math.max(
                    0,
                    currentY - startY
                );

            sheet.style.transform =
                `translate3d(0, ${distance}px, 0)`;

            overlay.style.opacity =
                String(
                    Math.max(
                        0.25,
                        1 - distance / 420
                    )
                );
        },
        {
            passive: true
        }
    );


    dragArea?.addEventListener(
        "touchend",
        () => {
            if (!isDragging) {
                return;
            }

            isDragging = false;

            const distance =
                currentY - startY;

            overlay.style.opacity = "";

            if (distance >= closeThreshold) {
                closeBill();
                return;
            }

            resetSheet();
        }
    );


    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                closeBill();
            }
        }
    );
});