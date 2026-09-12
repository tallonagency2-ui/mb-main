"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LẤY PHẦN TỬ
    ====================================================== */

    const backButton =
        document.getElementById("backButton");

    const homeButton =
        document.getElementById("homeButton");

    const currencyTabs = Array.from(
        document.querySelectorAll(".currency-tab")
    );

    const currencyPanels = Array.from(
        document.querySelectorAll(".currency-panel")
    );

    const balanceToggle =
        document.getElementById("accountBalanceToggle");

    const balanceToggleIcon =
        document.getElementById("accountBalanceToggleIcon");

    const totalBalance =
        document.getElementById("accountTotalBalance");

    const accountBalances = Array.from(
        document.querySelectorAll(".account-balance-value")
    );

    const accountCards = Array.from(
        document.querySelectorAll(".bank-account-card")
    );


    /* =====================================================
       CẤU HÌNH
    ====================================================== */

    const hiddenBalanceText = "*** ***";

    const visibleEyeIcon =
        "./img/icon-hide.png";

    const hiddenEyeIcon =
        "./img/icon-show.png";

    let isBalanceVisible = true;


    /* =====================================================
       BACK / HOME
    ====================================================== */

    backButton?.addEventListener("click", () => {
        if (window.history.length > 1) {
            window.history.back();
            return;
        }

        window.location.href = "./home.html";
    });

    homeButton?.addEventListener("click", () => {
        window.location.href = "./home.html";
    });


    /* =====================================================
       CURRENCY TABS
    ====================================================== */

    function activateCurrencyTab(currency) {
        if (!currency) {
            return;
        }

        currencyTabs.forEach((tab) => {
            const isActive =
                tab.dataset.currency === currency;

            tab.classList.toggle(
                "is-active",
                isActive
            );

            tab.setAttribute(
                "aria-selected",
                String(isActive)
            );

            tab.tabIndex =
                isActive ? 0 : -1;
        });

        currencyPanels.forEach((panel) => {
            const isActive =
                panel.dataset.panel === currency;

            panel.classList.toggle(
                "is-active",
                isActive
            );

            panel.hidden = !isActive;
        });
    }

    currencyTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            activateCurrencyTab(
                tab.dataset.currency
            );
        });

        tab.addEventListener("keydown", (event) => {
            const currentIndex =
                currencyTabs.indexOf(tab);

            let nextIndex = currentIndex;

            if (event.key === "ArrowRight") {
                nextIndex =
                    (currentIndex + 1) %
                    currencyTabs.length;
            } else if (event.key === "ArrowLeft") {
                nextIndex =
                    (
                        currentIndex -
                        1 +
                        currencyTabs.length
                    ) %
                    currencyTabs.length;
            } else {
                return;
            }

            event.preventDefault();

            const nextTab =
                currencyTabs[nextIndex];

            nextTab?.focus();

            activateCurrencyTab(
                nextTab?.dataset.currency
            );
        });
    });


    /* =====================================================
       LƯU GIÁ TRỊ SỐ DƯ BAN ĐẦU
    ====================================================== */

    function prepareBalanceValues() {
        if (
            totalBalance &&
            !totalBalance.dataset.balance
        ) {
            totalBalance.dataset.balance =
                totalBalance.textContent.trim();
        }

        accountBalances.forEach((balance) => {
            if (!balance.dataset.balance) {
                balance.dataset.balance =
                    balance.textContent.trim();
            }
        });
    }


    /* =====================================================
       HIỆN / ẨN SỐ DƯ
    ====================================================== */

    function updateBalanceVisibility() {
        if (totalBalance) {
            totalBalance.textContent =
                isBalanceVisible
                    ? totalBalance.dataset.balance
                    : hiddenBalanceText;
        }

        accountBalances.forEach((balance) => {
            balance.textContent =
                isBalanceVisible
                    ? balance.dataset.balance
                    : hiddenBalanceText;
        });

        if (balanceToggleIcon) {
            balanceToggleIcon.src =
                isBalanceVisible
                    ? visibleEyeIcon
                    : hiddenEyeIcon;
        }

        if (balanceToggle) {
            balanceToggle.setAttribute(
                "aria-label",
                isBalanceVisible
                    ? "Ẩn số dư"
                    : "Hiện số dư"
            );

            balanceToggle.setAttribute(
                "aria-pressed",
                String(!isBalanceVisible)
            );
        }
    }

    balanceToggle?.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();

            isBalanceVisible =
                !isBalanceVisible;

            updateBalanceVisibility();
        }
    );


    /* =====================================================
       ACCOUNT CARD NAVIGATION
    ====================================================== */

    function openAccountCard(card) {
        const target =
            card.dataset.account;

        if (!target) {
            return;
        }

        window.location.href = target;
    }

    accountCards.forEach((card) => {
        card.addEventListener(
            "click",
            () => {
                openAccountCard(card);
            }
        );

        card.addEventListener(
            "keydown",
            (event) => {
                if (
                    event.key !== "Enter" &&
                    event.key !== " "
                ) {
                    return;
                }

                event.preventDefault();

                openAccountCard(card);
            }
        );
    });


    /* =====================================================
       KHỞI TẠO
    ====================================================== */

    prepareBalanceValues();

    const activeCurrencyTab =
        currencyTabs.find((tab) =>
            tab.classList.contains("is-active")
        );

    activateCurrencyTab(
        activeCurrencyTab?.dataset.currency ||
        "vnd"
    );

    updateBalanceVisibility();
});