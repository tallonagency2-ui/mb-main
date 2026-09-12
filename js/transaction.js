"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       1. DỮ LIỆU 20 GIAO DỊCH

       type: "income"  = tiền vào
       type: "outcome" = tiền ra
    ====================================================== */

    const transactions = [
        /* =========================
           NGÀY 17/07/2026
        ========================== */

        {
            id: "IN001",
            type: "income",
            amount: 10000000,
            date: "2026-07-17",
            time: "23:35:27",
            accountName: "HOANG MINH LONG",
            accountNumber: "739284750",
            description:
                "HOANG MINH LONG QAATXM0070 APPMB21 thanh toan",
            code: "FT26197849221026"
        },

        {
            id: "OUT001",
            type: "outcome",
            amount: 3650000,
            date: "2026-07-17",
            time: "21:00:18",
            accountName: "CUSTOMER MBCT D",
            accountNumber: "19035669878011",
            description:
                "chuyen khoan nhanh qua Zalo",
            code: "FT26197849221027"
        },

        {
            id: "IN002",
            type: "income",
            amount: 5000000,
            date: "2026-07-16",
            time: "21:45:09",
            accountName: "TRAN VAN AN",
            accountNumber: "7284659100",
            description:
                "Chuyen khoan thanh toan tien hang",
            code: "FT26197849221028"
        },

        {
            id: "OUT002",
            type: "outcome",
            amount: 50000,
            date: "2026-07-16",
            time: "19:55:27",
            accountName: "NGUYEN VAN ANH",
            accountNumber: "7284659100",
            description:
                "CUSTOMER TRAN TUAN ANH chuyen tien",
            code: "FT26197849221050"
        },

        {
            id: "IN003",
            type: "income",
            amount: 2200000,
            date: "2026-07-15",
            time: "19:20:15",
            accountName: "LE THI MAI",
            accountNumber: "632518367311",
            description:
                "Thanh toan don hang thang 7",
            code: "FT26197849221051"
        },

        {
            id: "OUT003",
            type: "outcome",
            amount: 1000000,
            date: "2026-07-15",
            time: "18:57:03",
            accountName: "LE QUOC THIEN",
            accountNumber: "77635193644491",
            description:
                "Chuyen tien",
            code: "FT26197849221052"
        },
 {
            id: "OUT003",
            type: "outcome",
            amount: 1720000,
            date: "2026-07-15",
            time: "18:57:03",
            accountName: "LE QUOC THIEN",
            accountNumber: "77635193644491",
            description:
                "Chuyen tien",
            code: "FT26197849221052"
        },


        /* =========================
           NGÀY 14/07/2026
        ========================== */

        {
            id: "IN004",
            type: "income",
            amount: 850000,
            date: "2026-07-14",
            time: "17:40:20",
            accountName: "PHAM MINH DUC",
            accountNumber: "0911222333",
            description:
                "Hoan tien don hang",
            code: "FT26197849221053"
        },

        {
            id: "OUT004",
            type: "outcome",
            amount: 450000,
            date: "2026-07-15",
            time: "16:35:12",
            accountName: "DO THI HONG",
            accountNumber: "19035669878020",
            description:
                "Thanh toan dich vu",
            code: "FT26197849221054"
        },

        {
            id: "IN005",
            type: "income",
            amount: 1500000,
            date: "2026-07-13",
            time: "15:10:44",
            accountName: "VU QUANG HUY",
            accountNumber: "0933444555",
            description:
                "Chuyen khoan tien coc",
            code: "FT26197849221055"
        },

        {
            id: "OUT005",
            type: "outcome",
            amount: 1200000,
            date: "2026-07-13",
            time: "14:22:19",
            accountName: "NGUYEN THI LAN",
            accountNumber: "19035669878021",
            description:
                "Chuyen khoan thanh toan",
            code: "FT26197849221056"
        },


        /* =========================
           NGÀY 12/07/2026
        ========================== */

        {
            id: "IN006",
            type: "income",
            amount: 3000000,
            date: "2026-07-12",
            time: "13:18:08",
            accountName: "BUI VAN NAM",
            accountNumber: "0977555444",
            description:
                "Thanh toan hop dong",
            code: "FT26197849221057"
        },

        {
            id: "OUT006",
            type: "outcome",
            amount: 55555,
            date: "2026-07-12",
            time: "12:54:39",
            accountName: "TRAN VAN TAM",
            accountNumber: "6620177229999",
            description:
                "Chuyen tien D2 GG6R4F/803664",
            code: "FT26197849221058"
        },

        {
            id: "IN007",
            type: "income",
            amount: 700000,
            date: "2026-07-12",
            time: "11:35:23",
            accountName: "DANG NGOC HA",
            accountNumber: "0909111222",
            description:
                "Hoan tien giao dich",
            code: "FT26197849221059"
        },

        {
            id: "OUT007",
            type: "outcome",
            amount: 20000000,
            date: "2026-07-12",
            time: "07:09:03",
            accountName: "VO MINH SON",
            accountNumber: "25880711",
            description:
                "xm8102473180741",
            code: "FT26197849221060"
        },
{
            id: "OUT007",
            type: "outcome",
            amount: 10000000,
            date: "2026-07-12",
            time: "06:45:50",
            accountName: "NGUYEN THI THUY DUONG",
            accountNumber: "501215996",
            description:
                "abd66l3sro",
            code: "FT26197849221060"
        },


        /* =========================
           NGÀY 11/07/2026
        ========================== */

        {
            id: "IN008",
            type: "income",
            amount: 4250000,
            date: "2026-07-11",
            time: "09:48:31",
            accountName: "NGUYEN NHAT MINH",
            accountNumber: "0944555666",
            description:
                "Chuyen khoan thanh toan",
            code: "FT26197849221061"
        },

        {
            id: "OUT008",
            type: "outcome",
            amount: 980000,
            date: "2026-07-11",
            time: "08:40:17",
            accountName: "TRINH THI HOA",
            accountNumber: "19035669878023",
            description:
                "Thanh toan hoa don",
            code: "FT26197849221062"
        },


        /* =========================
           NGÀY 10/07/2026
        ========================== */

        {
            id: "IN009",
            type: "income",
            amount: 1250000,
            date: "2026-07-10",
            time: "21:16:52",
            accountName: "LE QUOC BAO",
            accountNumber: "0922333444",
            description:
                "Thanh toan don hang",
            code: "FT26197849221063"
        },

        {
            id: "OUT009",
            type: "outcome",
            amount: 600000,
            date: "2026-07-12",
            time: "20:05:29",
            accountName: "PHAN ANH TU",
            accountNumber: "19035669878024",
            description:
                "Chuyen tien ca nhan",
            code: "FT26197849221064"
        },


        /* =========================
           NGÀY 09/07/2026
        ========================== */

        {
            id: "IN010",
            type: "income",
            amount: 9900000,
            date: "2026-07-09",
            time: "18:44:16",
            accountName: "DOAN MINH QUAN",
            accountNumber: "0966777888",
            description:
                "Thanh toan hop dong dich vu",
            code: "FT26197849221065"
        },

        {
            id: "OUT010",
            type: "outcome",
            amount: 2100000,
            date: "2026-07-09",
            time: "17:32:41",
            accountName: "TRAN THI THU",
            accountNumber: "19035669878025",
            description:
                "Chuyen khoan thanh toan",
            code: "FT26197849221066"
        }
    ];


    /* =====================================================
       2. LẤY CÁC ELEMENT TRONG HTML
    ====================================================== */

    const backButton =
        document.getElementById(
            "transactionBackButton"
        );

    const homeButton =
        document.getElementById(
            "transactionHomeButton"
        );

    const copyButton =
        document.getElementById(
            "copyAccountButton"
        );

    const accountNumber =
        document.getElementById(
            "accountDetailNumber"
        );

    const copyToast =
        document.getElementById(
            "copyToast"
        );

    const defaultButton =
        document.getElementById(
            "defaultAccountButton"
        );

    const fromInput =
        document.getElementById(
            "fromDateInput"
        );

    const toInput =
        document.getElementById(
            "toDateInput"
        );

    const fromText =
        document.getElementById(
            "fromDateText"
        );

    const toText =
        document.getElementById(
            "toDateText"
        );

    const queryButton =
        document.getElementById(
            "transactionQueryButton"
        );

    const history =
        document.getElementById(
            "transactionHistory"
        );


    /* Bottom sheet */

    const overlay =
        document.getElementById(
            "transactionSheetOverlay"
        );

    const sheet =
        document.getElementById(
            "transactionSheet"
        );

    const dragArea =
        document.getElementById(
            "transactionSheetDragArea"
        );

    const sheetIcon =
        document.getElementById(
            "sheetIcon"
        );

    const sheetAmount =
        document.getElementById(
            "sheetAmount"
        );

    const sheetDirectionTitle =
        document.getElementById(
            "sheetDirectionTitle"
        );
const sheetFromSection =
    document.getElementById(
        "sheetFromSection"
    );

const sheetFromAccountName =
    document.getElementById(
        "sheetFromAccountName"
    );

const sheetFromAccountNumber =
    document.getElementById(
        "sheetFromAccountNumber"
    );
    const sheetAccountName =
        document.getElementById(
            "sheetAccountName"
        );

    const sheetAccountNumber =
        document.getElementById(
            "sheetAccountNumber"
        );

    const sheetContent =
        document.getElementById(
            "sheetContent"
        );

    const sheetTime =
        document.getElementById(
            "sheetTime"
        );

    const sheetCode =
        document.getElementById(
            "sheetCode"
        );

    const traceButton =
        document.getElementById(
            "traceButton"
        );


    /* =====================================================
       3. BIẾN TRẠNG THÁI
    ====================================================== */

    let copyToastTimer = null;

    let isDefaultAccount = true;

    let sheetStartY = 0;
    let sheetCurrentY = 0;
    let isSheetDragging = false;

    const sheetCloseThreshold = 110;


    /* =====================================================
       4. HÀM ĐỊNH DẠNG TIỀN VÀ NGÀY
    ====================================================== */

   const moneyFormatter =
    new Intl.NumberFormat("en-US");

function formatMoney(value) {
    return `${moneyFormatter.format(value)} VND`;
}

    function formatDate(dateString) {
        if (!dateString) {
            return "";
        }

        const [year, month, day] =
            dateString.split("-");

        return `${day}/${month}/${year}`;
    }

    function formatDateTime(item) {
        return `${formatDate(item.date)} ${item.time}`;
    }

    function getTransactionSign(item) {
        return item.type === "income"
            ? "+"
            : "-";
    }


    /* =====================================================
       5. NHÓM GIAO DỊCH THEO NGÀY
    ====================================================== */

    function groupTransactionsByDate(items) {
        return items.reduce(
            (groups, transaction) => {
                if (!groups[transaction.date]) {
                    groups[transaction.date] = [];
                }

                groups[transaction.date].push(
                    transaction
                );

                return groups;
            },
            {}
        );
    }


    /* =====================================================
       6. TẠO MỘT DÒNG GIAO DỊCH
    ====================================================== */

    function createTransactionItem(item) {
        const isIncome =
            item.type === "income";

        const transactionItem =
            document.createElement("article");

        transactionItem.className =
            "transaction-item";

        transactionItem.tabIndex = 0;

        transactionItem.setAttribute(
            "role",
            "button"
        );

        transactionItem.setAttribute(
            "aria-label",
            isIncome
                ? `Xem giao dịch nhận ${formatMoney(item.amount)}`
                : `Xem giao dịch trừ ${formatMoney(item.amount)}`
        );

        transactionItem.dataset.transactionId =
            item.id;

        transactionItem.innerHTML = `
            <span
                   class="transaction-type-icon ${
        isIncome ? "income-icon" : "outcome-icon"
    }"
>

    <img
        src="${
            isIncome
                ? "./img/icon-income.png"
                : "./img/icon-outcome.png"
        }"
        class="${
            isIncome
                ? "transaction-income-icon-img"
                : "transaction-outcome-icon-img"
        }"
        alt=""
        draggable="false"
    >
            </span>

            <div class="transaction-information">

                <div class="transaction-primary-row">

                    <span class="transaction-type">
                        ${
                            isIncome
                                ? "TIỀN VÀO"
                                : "TIỀN RA"
                        }
                    </span>

                    <strong
                        class="transaction-amount ${
                            isIncome
                                ? "income"
                                : ""
                        }"
                    >
                        ${getTransactionSign(item)}${formatMoney(item.amount)}
                    </strong>

                </div>

                <div class="transaction-secondary-row">

                    <div class="transaction-description">

                        <p>
                            ${item.accountName}
                        </p>

                      <span>
    ${cutDescription(item.description)}
    function cutDescription(text, maxLength = 38) {
    if (!text) return "";

    if (text.length <= maxLength) {
        return text;
    }

    return text.substring(0, maxLength) + ",,,";
}
</span>

                    </div>

                    <time>
                        ${item.time.slice(0, 5)}
                    </time>

                </div>

            </div>
        `;

        transactionItem.addEventListener(
            "click",
            () => {
                openTransactionSheet(item);
            }
        );

        transactionItem.addEventListener(
            "keydown",
            (event) => {
                if (
                    event.key !== "Enter" &&
                    event.key !== " "
                ) {
                    return;
                }

                event.preventDefault();

                openTransactionSheet(item);
            }
        );

        return transactionItem;
    }


    /* =====================================================
       7. HIỂN THỊ DANH SÁCH GIAO DỊCH
    ====================================================== */

    function renderTransactions(items) {
        if (!history) {
            return;
        }

        history.innerHTML = "";

        if (!items.length) {
            history.innerHTML = `
                <div class="transaction-empty">
                    <i class="bx bx-receipt"></i>

                    <p>
                        Không có giao dịch trong khoảng thời gian này
                    </p>
                </div>
            `;

            return;
        }

        const groupedTransactions =
            groupTransactionsByDate(items);

        const sortedDates =
            Object.keys(groupedTransactions)
                .sort(
                    (dateA, dateB) =>
                        dateB.localeCompare(dateA)
                );

        sortedDates.forEach((date) => {
            const dayCard =
                document.createElement("article");

            dayCard.className =
                "transaction-day-card";

            const dayHeader =
                document.createElement("header");

            dayHeader.className =
                "transaction-day-header";

            dayHeader.innerHTML = `
                <h3>${formatDate(date)}</h3>
            `;

            const transactionList =
                document.createElement("div");

            transactionList.className =
                "transaction-list";

            groupedTransactions[date]
                .sort((itemA, itemB) => {
                    return itemB.time.localeCompare(
                        itemA.time
                    );
                })
                .forEach((transaction) => {
                    transactionList.appendChild(
                        createTransactionItem(
                            transaction
                        )
                    );
                });

            dayCard.append(
                dayHeader,
                transactionList
            );

            history.appendChild(dayCard);
        });
    }


    /* =====================================================
       8. MỞ BOTTOM SHEET
    ====================================================== */

function openTransactionSheet(item) {
    if (!overlay || !sheet) {
        console.error(
            "Không tìm thấy bottom sheet giao dịch"
        );

        return;
    }

    const isIncome =
        item.type === "income";


    /* ICON */

    if (sheetIcon) {
        sheetIcon.innerHTML = `
            <img
                src="${
                    isIncome
                        ? "./img/icon-income1.png"
                        : "./img/outcome1.png"
                }"
                class="${
                    isIncome
                        ? "transaction-sheet-income-icon-img"
                        : "transaction-sheet-outcome-icon-img"
                }"
                alt=""
                draggable="false"
            >
        `;
    }


    /* SỐ TIỀN — BẠN ĐANG THIẾU ĐOẠN NÀY */

    if (sheetAmount) {
        sheetAmount.textContent =
            formatMoney(item.amount);
    }


    /* PHẦN CHUYỂN KHOẢN */

    if (isIncome) {
        if (sheetFromSection) {
            sheetFromSection.hidden = true;
        }

        if (sheetDirectionTitle) {
            sheetDirectionTitle.textContent =
                "Chuyển khoản đến";
        }

        if (sheetAccountName) {
            sheetAccountName.textContent =
                item.accountName;
        }

        if (sheetAccountNumber) {
            sheetAccountNumber.textContent =
                item.accountNumber;
        }
    } else {
        if (sheetFromSection) {
            sheetFromSection.hidden = false;
        }

        const currentAccountName =
            document.querySelector(
                ".account-owner-name"
            )?.textContent.trim() ||
            "HOANG DUY THANG";

        const currentAccountNumber =
            document.getElementById(
                "accountDetailNumber"
            )?.textContent.trim() ||
            "0051000548028";

        if (sheetFromAccountName) {
            sheetFromAccountName.textContent =
                currentAccountName;
        }

        if (sheetFromAccountNumber) {
            sheetFromAccountNumber.textContent =
                currentAccountNumber;
        }

        if (sheetDirectionTitle) {
            sheetDirectionTitle.textContent =
                "Chuyển khoản đến";
        }

        if (sheetAccountName) {
            sheetAccountName.textContent =
                item.accountName;
        }

        if (sheetAccountNumber) {
            sheetAccountNumber.textContent =
                item.accountNumber;
        }
    }

    if (sheetContent) {
        sheetContent.textContent =
            item.description;
    }

    if (sheetTime) {
        sheetTime.textContent =
            formatDateTime(item);
    }

    if (sheetCode) {
        sheetCode.textContent =
            item.code;
    }

    if (traceButton) {
        traceButton.hidden = isIncome;
    }

    sheet.style.transform = "";
    sheet.style.transition = "";
    overlay.style.opacity = "";

    document.body.classList.add(
        "transaction-sheet-open"
    );

    overlay.classList.add(
        "is-visible"
    );

    sheet.classList.add(
        "is-open"
    );

    overlay.setAttribute(
        "aria-hidden",
        "false"
    );

    sheet.setAttribute(
        "aria-hidden",
        "false"
    );
}

    /* =====================================================
       9. ĐÓNG BOTTOM SHEET
    ====================================================== */

    function closeTransactionSheet() {
        if (!overlay || !sheet) {
            return;
        }

        overlay.classList.remove(
            "is-visible"
        );

        sheet.classList.remove(
            "is-open"
        );

        overlay.setAttribute(
            "aria-hidden",
            "true"
        );

        sheet.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "transaction-sheet-open"
        );

        overlay.style.opacity = "";

        sheet.style.transform = "";
        sheet.style.transition = "";
    }


    /* =====================================================
       10. LỌC GIAO DỊCH THEO NGÀY
    ====================================================== */

    function filterTransactionsByDate() {
        const fromDate =
            fromInput?.value;

        const toDate =
            toInput?.value;

        if (!fromDate || !toDate) {
            renderTransactions(transactions);
            return;
        }

        if (fromDate > toDate) {
            alert(
                "Ngày bắt đầu không được lớn hơn ngày kết thúc."
            );

            return;
        }

        const filteredTransactions =
            transactions.filter(
                (transaction) => {
                    return (
                        transaction.date >= fromDate &&
                        transaction.date <= toDate
                    );
                }
            );

        renderTransactions(
            filteredTransactions
        );

        window.setTimeout(() => {
            history?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 50);
    }


    /* =====================================================
       11. NÚT QUAY LẠI VÀ TRANG CHỦ
    ====================================================== */

    backButton?.addEventListener(
        "click",
        () => {
            if (window.history.length > 1) {
                window.history.back();
                return;
            }

            window.location.href =
                "./account.html";
        }
    );

    homeButton?.addEventListener(
        "click",
        () => {
            window.location.href =
                "./home.html";
        }
    );


    /* =====================================================
       12. SAO CHÉP SỐ TÀI KHOẢN
    ====================================================== */

    function showCopyToast() {
        if (!copyToast) {
            return;
        }

        window.clearTimeout(
            copyToastTimer
        );

        copyToast.classList.add(
            "is-visible"
        );

        copyToastTimer =
            window.setTimeout(() => {
                copyToast.classList.remove(
                    "is-visible"
                );
            }, 1600);
    }

    async function copyAccountNumber() {
        const value =
            accountNumber?.textContent.trim();

        if (!value) {
            return;
        }

        try {
            await navigator.clipboard.writeText(
                value
            );

            showCopyToast();
        } catch (error) {
            const temporaryInput =
                document.createElement(
                    "textarea"
                );

            temporaryInput.value = value;

            temporaryInput.setAttribute(
                "readonly",
                ""
            );

            temporaryInput.style.position =
                "fixed";

            temporaryInput.style.opacity =
                "0";

            document.body.appendChild(
                temporaryInput
            );

            temporaryInput.select();

            document.execCommand("copy");

            temporaryInput.remove();

            showCopyToast();
        }
    }

    copyButton?.addEventListener(
        "click",
        copyAccountNumber
    );


    /* =====================================================
       13. CHỌN TÀI KHOẢN MẶC ĐỊNH
    ====================================================== */

    function updateDefaultAccountButton() {
        if (!defaultButton) {
            return;
        }

        defaultButton.classList.toggle(
            "is-selected",
            isDefaultAccount
        );

        defaultButton.textContent =
            isDefaultAccount
                ? "Đã chọn"
                : "Chọn";
    }

    defaultButton?.addEventListener(
        "click",
        () => {
            isDefaultAccount =
                !isDefaultAccount;

            updateDefaultAccountButton();
        }
    );


    /* =====================================================
       14. CẬP NHẬT NGÀY HIỂN THỊ
    ====================================================== */

    fromInput?.addEventListener(
        "change",
        () => {
            if (!fromText) {
                return;
            }

            fromText.textContent =
                formatDate(
                    fromInput.value
                );
        }
    );

    toInput?.addEventListener(
        "change",
        () => {
            if (!toText) {
                return;
            }

            toText.textContent =
                formatDate(
                    toInput.value
                );
        }
    );


    /* =====================================================
       15. NÚT TRUY VẤN
    ====================================================== */

    queryButton?.addEventListener(
        "click",
        filterTransactionsByDate
    );


    /* =====================================================
       16. BẤM NỀN TỐI ĐỂ ĐÓNG SHEET
    ====================================================== */

    overlay?.addEventListener(
        "click",
        closeTransactionSheet
    );


    /* =====================================================
       17. NHẤN ESC ĐỂ ĐÓNG SHEET
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Escape" &&
                sheet?.classList.contains(
                    "is-open"
                )
            ) {
                closeTransactionSheet();
            }
        }
    );


    /* =====================================================
       18. KÉO SHEET XUỐNG ĐỂ ĐÓNG
    ====================================================== */

    dragArea?.addEventListener(
        "touchstart",
        (event) => {
            if (!event.touches.length) {
                return;
            }

            sheetStartY =
                event.touches[0].clientY;

            sheetCurrentY =
                sheetStartY;

            isSheetDragging = true;

            if (sheet) {
                sheet.style.transition =
                    "none";
            }
        },
        {
            passive: true
        }
    );

    dragArea?.addEventListener(
        "touchmove",
        (event) => {
            if (
                !isSheetDragging ||
                !event.touches.length ||
                !sheet
            ) {
                return;
            }

            sheetCurrentY =
                event.touches[0].clientY;

            const dragDistance =
                Math.max(
                    0,
                    sheetCurrentY -
                        sheetStartY
                );

            sheet.style.transform =
                `translate3d(0, ${dragDistance}px, 0)`;

            if (overlay) {
                overlay.style.opacity =
                    String(
                        Math.max(
                            0.25,
                            1 -
                                dragDistance /
                                    420
                        )
                    );
            }
        },
        {
            passive: true
        }
    );

    dragArea?.addEventListener(
        "touchend",
        () => {
            if (
                !isSheetDragging ||
                !sheet
            ) {
                return;
            }

            isSheetDragging = false;

            const dragDistance =
                sheetCurrentY -
                sheetStartY;

            if (overlay) {
                overlay.style.opacity = "";
            }

            if (
                dragDistance >=
                sheetCloseThreshold
            ) {
                closeTransactionSheet();
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
    );


    /* =====================================================
       19. KHỞI TẠO TRANG
    ====================================================== */

    updateDefaultAccountButton();

    renderTransactions(
        transactions
    );
});
function cutDescription(text, maxLength = 38) {
    if (!text) return "";

    if (text.length <= maxLength) {
        return text;
    }

    return text.substring(0, maxLength) + ",,,";
}
