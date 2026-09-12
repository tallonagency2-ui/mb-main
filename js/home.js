"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LẤY PHẦN TỬ
    ====================================================== */

    const balanceVisibility =
        document.getElementById("balanceVisibility");

    const hiddenBalance =
        document.getElementById("hiddenBalance");

    const promotionViewport =
        document.getElementById("promotionViewport");

    const promotionTrack =
        document.getElementById("promotionTrack");

    const promotionSlides = Array.from(
        document.querySelectorAll(".promotion-slide")
    );

    const navigationItems = Array.from(
        document.querySelectorAll(".bottom-nav-item")
    );

    const accountLinkAreas = Array.from(
        document.querySelectorAll(".balance-card-link-area")
    );


    /* =====================================================
       TRẠNG THÁI
    ====================================================== */

    let isBalanceVisible = false;

    // Banner giữa được hiển thị đầu tiên
    let promotionIndex = 1;

    let dragStartX = 0;
    let dragCurrentX = 0;
    let isDragging = false;


    /* =====================================================
       HIỆN / ẨN SỐ DƯ
    ====================================================== */

    function updateBalanceVisibility() {
        if (!balanceVisibility || !hiddenBalance) {
            return;
        }

        const icon =
            balanceVisibility.querySelector("i");

        hiddenBalance.textContent =
            isBalanceVisible
                ? "12,180,100"
                : "*** ***";

        if (icon) {
            icon.className =
                isBalanceVisible
                    ? "bx bx-hide"
                    : "bx bx-show";
        }

        balanceVisibility.setAttribute(
            "aria-label",
            isBalanceVisible
                ? "Ẩn số dư"
                : "Hiện số dư"
        );
    }

    balanceVisibility?.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();

            isBalanceVisible =
                !isBalanceVisible;

            updateBalanceVisibility();
        }
    );


    /* =====================================================
       THÔNG SỐ SLIDER
    ====================================================== */

    function getPromotionMetrics() {
        if (
            !promotionTrack ||
            !promotionSlides.length
        ) {
            return {
                slideWidth: 0,
                gap: 0
            };
        }

        const slideWidth =
            promotionSlides[0]
                .getBoundingClientRect()
                .width;

        const trackStyle =
            window.getComputedStyle(
                promotionTrack
            );

        const gap =
            Number.parseFloat(
                trackStyle.columnGap
            ) ||
            Number.parseFloat(
                trackStyle.gap
            ) ||
            0;

        return {
            slideWidth,
            gap
        };
    }


    /* =====================================================
       CẬP NHẬT VỊ TRÍ SLIDER
    ====================================================== */

    function updatePromotionSlider(
        animate = true
    ) {
        if (
            !promotionTrack ||
            !promotionSlides.length
        ) {
            return;
        }

        const {
            slideWidth,
            gap
        } = getPromotionMetrics();

        promotionTrack.style.transition =
            animate
                ? "transform 430ms cubic-bezier(0.22, 0.82, 0.25, 1)"
                : "none";

        const translateX =
            promotionIndex *
            (slideWidth + gap);

        promotionTrack.style.transform =
            `translate3d(-${translateX}px, 0, 0)`;

        promotionSlides.forEach(
            (slide, index) => {
                slide.classList.toggle(
                    "is-active",
                    index === promotionIndex
                );
            }
        );
    }


    /* =====================================================
       CHUYỂN BANNER
    ====================================================== */

    function nextPromotion() {
        if (!promotionSlides.length) {
            return;
        }

        promotionIndex =
            promotionIndex <
            promotionSlides.length - 1
                ? promotionIndex + 1
                : 0;

        updatePromotionSlider(true);
    }

    function previousPromotion() {
        if (!promotionSlides.length) {
            return;
        }

        promotionIndex =
            promotionIndex > 0
                ? promotionIndex - 1
                : promotionSlides.length - 1;

        updatePromotionSlider(true);
    }


    /* =====================================================
       XỬ LÝ KÉO / VUỐT
    ====================================================== */

    function startDragging(clientX) {
        if (!promotionViewport) {
            return;
        }

        isDragging = true;
        dragStartX = clientX;
        dragCurrentX = clientX;

        promotionViewport.classList.add(
            "is-dragging"
        );
    }

    function moveDragging(clientX) {
        if (!isDragging) {
            return;
        }

        dragCurrentX = clientX;
    }

    function endDragging() {
        if (!isDragging) {
            return;
        }

        isDragging = false;

        promotionViewport?.classList.remove(
            "is-dragging"
        );

        const distance =
            dragCurrentX - dragStartX;

        const swipeThreshold = 45;

        if (
            Math.abs(distance) <
            swipeThreshold
        ) {
            return;
        }

        if (distance < 0) {
            nextPromotion();
        } else {
            previousPromotion();
        }
    }


    /* =====================================================
       TOUCH MOBILE
    ====================================================== */

    promotionViewport?.addEventListener(
        "touchstart",
        (event) => {
            startDragging(
                event.touches[0].clientX
            );
        },
        {
            passive: true
        }
    );

    promotionViewport?.addEventListener(
        "touchmove",
        (event) => {
            moveDragging(
                event.touches[0].clientX
            );
        },
        {
            passive: true
        }
    );

    promotionViewport?.addEventListener(
        "touchend",
        endDragging
    );

    promotionViewport?.addEventListener(
        "touchcancel",
        endDragging
    );


    /* =====================================================
       KÉO CHUỘT TRÊN MÁY TÍNH
    ====================================================== */

    promotionViewport?.addEventListener(
        "mousedown",
        (event) => {
            event.preventDefault();

            startDragging(
                event.clientX
            );
        }
    );

    window.addEventListener(
        "mousemove",
        (event) => {
            moveDragging(
                event.clientX
            );
        }
    );

    window.addEventListener(
        "mouseup",
        endDragging
    );


    /* =====================================================
       CẬP NHẬT KHI ĐỔI KÍCH THƯỚC
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {
            updatePromotionSlider(false);
        }
    );


    /* =====================================================
       CLICK VÙNG SỐ DƯ
    ====================================================== */

    accountLinkAreas.forEach((area) => {

        area.addEventListener(
            "click",
            (event) => {
                const clickedInteractiveElement =
                    event.target.closest(
                        "button, a, input, select, textarea"
                    );

                if (
                    clickedInteractiveElement
                ) {
                    return;
                }

                const targetPage =
                    area.dataset.accountLink;

                if (targetPage) {
                    window.location.href =
                        targetPage;
                }
            }
        );

        area.addEventListener(
            "keydown",
            (event) => {
                if (
                    event.key !== "Enter" &&
                    event.key !== " "
                ) {
                    return;
                }

                event.preventDefault();

                const targetPage =
                    area.dataset.accountLink;

                if (targetPage) {
                    window.location.href =
                        targetPage;
                }
            }
        );
    });


    /* =====================================================
       BOTTOM NAVIGATION
    ====================================================== */

    navigationItems.forEach((item) => {

        item.addEventListener(
            "click",
            () => {
                const tabName =
                    item.dataset.tab;

                if (tabName === "qr") {
                    return;
                }

                navigationItems.forEach(
                    (navItem) => {
                        navItem.classList.remove(
                            "is-active"
                        );
                    }
                );

                item.classList.add(
                    "is-active"
                );
            }
        );
    });


    /* =====================================================
       KHỞI TẠO
    ====================================================== */

    requestAnimationFrame(() => {
        updateBalanceVisibility();
        updatePromotionSlider(false);
    });
});

accountLinkAreas.forEach((area) => {
    area.addEventListener("click", (event) => {
        const clickedInteractiveElement = event.target.closest(
            "button, a, input, select, textarea"
        );

        if (clickedInteractiveElement) {
            return;
        }

        const targetPage = area.dataset.accountLink;

        if (targetPage) {
            window.location.href = targetPage;
        }
    });

    area.addEventListener("keydown", (event) => {
        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {
            return;
        }

        event.preventDefault();

        const targetPage = area.dataset.accountLink;

        if (targetPage) {
            window.location.href = targetPage;
        }
    });
});
balanceVisibility?.addEventListener("click", (event) => {
    event.stopPropagation();

    isBalanceVisible = !isBalanceVisible;
    updateBalanceVisibility();
});
