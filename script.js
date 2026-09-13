// ==========================================
// SHANE EXPORT RICE
// COMPLETE WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuBtn.classList.remove("active");
            });
        });
    }


    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    const pageLinks = document.querySelectorAll('a[href^="#"]');

    pageLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ==========================================
    // HEADER SCROLL
    // ==========================================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // ==========================================
    // QUOTE MODAL
    // ==========================================

    window.openQuote = function () {

        const quoteModal = document.getElementById("quoteModal");

        if (!quoteModal) {
            console.error("Quote modal not found.");
            return;
        }

        quoteModal.classList.add("active");

        document.body.style.overflow = "hidden";
    };


    window.closeQuote = function () {

        const quoteModal = document.getElementById("quoteModal");

        if (!quoteModal) {
            return;
        }

        quoteModal.classList.remove("active");

        document.body.style.overflow = "";
    };


    // ==========================================
    // CLOSE QUOTE MODAL WHEN CLICKING OUTSIDE
    // ==========================================

    const quoteModal = document.getElementById("quoteModal");

    if (quoteModal) {

        quoteModal.addEventListener("click", function (event) {

            if (event.target === quoteModal) {
                window.closeQuote();
            }

        });

    }


    // ==========================================
    // PRODUCT DATA
    // ==========================================

    const productData = {

        "1121 Basmati Rice": {
            variety: "1121 Basmati Rice",
            description:
                "Long-grain Basmati rice category for premium international markets."
        },

        "Non-Basmati Rice": {
            variety: "Non-Basmati Rice",
            description:
                "Versatile Indian rice varieties for wholesale and distribution."
        },

        "Sella Rice": {
            variety: "Sella Rice",
            description:
                "Prepared for buyers seeking parboiled rice formats."
        },

        "Steam Rice": {
            variety: "Steam Rice",
            description:
                "A widely traded rice format for international food markets."
        },

        "Parboiled Rice": {
            variety: "Parboiled Rice",
            description:
                "Suitable for bulk procurement and distribution programs."
        }

    };


    // ==========================================
    // PRODUCT MODAL
    // ==========================================

    window.openProduct = function (productName) {

        const productModal = document.getElementById("productModal");

        const productTitle = document.getElementById("productTitle");
        const productDescription =
            document.getElementById("productDescription");

        const specVariety =
            document.getElementById("specVariety");

        if (!productModal) {
            console.error("Product modal not found.");
            return;
        }

        const data = productData[productName];

        if (data) {

            if (productTitle) {
                productTitle.textContent = data.variety;
            }

            if (productDescription) {
                productDescription.textContent = data.description;
            }

            if (specVariety) {
                specVariety.textContent = data.variety;
            }

        } else {

            if (productTitle) {
                productTitle.textContent = productName;
            }

            if (productDescription) {
                productDescription.textContent =
                    "Please contact Shane Export Rice for product specifications and commercial details.";
            }

            if (specVariety) {
                specVariety.textContent = productName;
            }

        }

        productModal.classList.add("active");

        document.body.style.overflow = "hidden";
    };


    window.closeProduct = function () {

        const productModal =
            document.getElementById("productModal");

        if (!productModal) {
            return;
        }

        productModal.classList.remove("active");

        document.body.style.overflow = "";
    };


    // ==========================================
    // CLOSE PRODUCT MODAL OUTSIDE
    // ==========================================

    const productModal =
        document.getElementById("productModal");

    if (productModal) {

        productModal.addEventListener("click", function (event) {

            if (event.target === productModal) {
                window.closeProduct();
            }

        });

    }


    // ==========================================
    // ESC KEY CLOSE MODALS
    // ==========================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            window.closeQuote();
            window.closeProduct();

        }

    });


    // ==========================================
    // QUOTE FORM
    // ==========================================

    const quoteForm =
        document.getElementById("quoteForm");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();


            // --------------------------------------
            // GET FORM VALUES
            // --------------------------------------

            const country =
                document.getElementById("country")?.value.trim() || "";

            const product =
                document.getElementById("product")?.value.trim() || "";

            const packing =
                document.getElementById("packing")?.value.trim() || "";

            const quantity =
                document.getElementById("quantity")?.value.trim() || "";

            const fullName =
                document.getElementById("fullName")?.value.trim() || "";

            const companyName =
                document.getElementById("companyName")?.value.trim() || "";

            const buyerPhone =
                document.getElementById("buyerPhone")?.value.trim() || "";

            const buyerEmail =
                document.getElementById("buyerEmail")?.value.trim() || "";


            // --------------------------------------
            // VALIDATION
            // --------------------------------------

            if (!country) {
                alert("Please enter your country.");
                return;
            }

            if (!product) {
                alert("Please choose a product.");
                return;
            }

            if (!fullName) {
                alert("Please enter your full name.");
                return;
            }

            if (!buyerPhone) {
                alert("Please enter your WhatsApp / Phone number.");
                return;
            }


            // --------------------------------------
            // CREATE WHATSAPP MESSAGE
            // --------------------------------------

            const message =
`Hello Shane Export Rice,

I would like to request a rice export quotation.

━━━━━━━━━━━━━━━━━━━━
BUYER REQUIREMENT
━━━━━━━━━━━━━━━━━━━━

Country: ${country}
Product: ${product}
Packing: ${packing}
Quantity: ${quantity}

━━━━━━━━━━━━━━━━━━━━
BUYER DETAILS
━━━━━━━━━━━━━━━━━━━━

Name: ${fullName}
Company: ${companyName}
WhatsApp / Phone: ${buyerPhone}
Business Email: ${buyerEmail}

Please share your best quotation and available specifications.

Thank you.`;


            // --------------------------------------
            // WHATSAPP NUMBER
            // --------------------------------------

            const whatsappNumber =
                "918630651140";


            // --------------------------------------
            // CREATE WHATSAPP URL
            // --------------------------------------

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);


            // --------------------------------------
            // OPEN WHATSAPP
            // --------------------------------------

            window.open(
                whatsappURL,
                "_blank"
            );


            // --------------------------------------
            // SUCCESS MESSAGE
            // --------------------------------------

            const success =
                document.getElementById("success");

            if (success) {

                success.classList.add("active");

            }

        });

    }


    // ==========================================
    // QUICK ENQUIRY FORM
    // ==========================================

    const quickForm =
        document.getElementById("quickForm");

    if (quickForm) {

        quickForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("quickName")?.value.trim() || "";

            const company =
                document.getElementById("quickCompany")?.value.trim() || "";

            const product =
                document.getElementById("quickProduct")?.value.trim() || "";

            const quantity =
                document.getElementById("quickQty")?.value.trim() || "";

            const phone =
                document.getElementById("quickPhone")?.value.trim() || "";


            if (!name) {

                alert("Please enter your name.");
                return;

            }

            if (!phone) {

                alert("Please enter your WhatsApp / Phone number.");
                return;

            }


            const message =
`Hello Shane Export Rice,

I am interested in importing rice from India.

Name: ${name}
Company: ${company}
Product: ${product}
Quantity: ${quantity}
My WhatsApp / Phone: ${phone}

Please share your quotation and product details.

Thank you.`;


            const whatsappURL =
                "https://wa.me/918630651140?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    // ==========================================
    // FLOATING WHATSAPP
    // ==========================================

    const floatingWhatsApp =
        document.querySelector(".floating-wa");

    if (floatingWhatsApp) {

        floatingWhatsApp.addEventListener("click", function (event) {

            event.preventDefault();

            const message =
                "Hello Shane Export Rice, I am interested in your rice products. Please share your available products and quotation.";

            const whatsappURL =
                "https://wa.me/918630651140?text=" +
                encodeURIComponent(message);

            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    // ==========================================
    // REVEAL ANIMATION
    // ==========================================

    const animatedElements =
        document.querySelectorAll(
            ".product-card, .why-item, .timeline-item, .pack-card, .market-feature"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(function (element) {

            observer.observe(element);

        });

    }


    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================

    console.log(
        "SHANE EXPORT RICE website loaded successfully."
    );

});