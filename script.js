/* =========================================================
   KLT — GLOBAL SCRIPT
   Shared interactions across the website
========================================================= */


/* =========================================================
   KLT — LOADING ANIMATION
========================================================= */

(function () {

    /*
     * Create the loader dynamically so we do not need
     * to add loader HTML to every page.
     */

    const loader =
        document.createElement("div");

    loader.className =
        "klt-loader";


    loader.innerHTML = `

        <div class="klt-loader-content">

            <div class="klt-loader-logo">
                KLT
            </div>

            <div class="klt-loader-line">
                <span></span>
            </div>

            <div class="klt-loader-text">
                LOADING
            </div>

        </div>

    `;


    /*
     * Add loader to the page immediately.
     */

    document.documentElement.prepend(
        loader
    );


    /*
     * Prevent scrolling while the loader
     * is visible.
     */

    document.documentElement.style
        .overflow = "hidden";


    /*
     * Remove the loader after the page
     * has finished loading.
     */

    window.addEventListener(
        "load",
        function () {

            setTimeout(
                function () {

                    loader.classList.add(
                        "klt-loader-hidden"
                    );


                    document.documentElement.style
                        .overflow = "";


                    /*
                     * Remove the loader completely
                     * after the fade-out animation.
                     */

                    setTimeout(
                        function () {

                            if (loader.parentNode) {

                                loader.parentNode.removeChild(
                                    loader
                                );

                            }

                        },
                        500
                    );

                },
                550
            );

        }
    );

})();



/* =========================================================
   NAVIGATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ================= SHOP BUTTON ================= */

        const shopButton =
            document.querySelector(
                ".shop-button"
            );


        if (shopButton) {

            shopButton.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "mens.html";

                }
            );

        }



        /* ================= LEARN MORE ================= */

        const learnButton =
            document.querySelector(
                ".learn-button"
            );


        if (learnButton) {

            learnButton.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "discover.html";

                }
            );

        }



        /* ================= CONTACT ================= */

        const contactButton =
            document.querySelector(
                ".contact-button"
            );


        if (contactButton) {

            contactButton.addEventListener(
                "click",
                function () {

                    /*
                     * Contact page will be added later.
                     * For now, take the user to Discover.
                     */

                    window.location.href =
                        "discover.html";

                }
            );

        }



        /* =====================================================
           NEW SHOP NAVBAR
        ===================================================== */


        /* ================= SEARCH ================= */

        const searchButton =
            document.querySelector(
                ".shop-search"
            );


        if (searchButton) {

            searchButton.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "search.html";

                }
            );

        }



        /* ================= WISHLIST ================= */

        const wishlistButton =
            document.querySelector(
                '.shop-actions button[aria-label="Wishlist"]'
            );


        if (wishlistButton) {

            wishlistButton.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "wishlist.html";

                }
            );

        }



        /* ================= SHOPPING BAG ================= */

        const bagButton =
            document.querySelector(
                '.shop-actions button[aria-label="Shopping bag"]'
            );


        if (bagButton) {

            bagButton.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "bag.html";

                }
            );

        }



        /* =====================================================
           OLD HOMEPAGE NAVBAR
           Used only by index.html
        ===================================================== */


        const oldSearch =
            document.querySelector(
                ".nav-right .search"
            );


        if (oldSearch) {

            oldSearch.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "search.html";

                }
            );

        }



        const oldNavButtons =
            document.querySelectorAll(
                ".nav-right button"
            );


        oldNavButtons.forEach(
            function (button) {


                const label =
                    button.getAttribute(
                        "aria-label"
                    );


                if (
                    label === "Wishlist"
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            window.location.href =
                                "wishlist.html";

                        }
                    );

                }


                if (
                    label === "Shopping Bag"
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            window.location.href =
                                "bag.html";

                        }
                    );

                }

            }
        );

    }
);



/* =========================================================
   PRODUCT PAGE — IMAGE THUMBNAILS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const thumbnails =
            document.querySelectorAll(
                ".thumbnail"
            );


        const mainProductImage =
            document.querySelector(
                ".product-main-image img"
            );


        /*
         * Only run this on pages that
         * actually contain product thumbnails.
         */

        if (
            !thumbnails.length ||
            !mainProductImage
        ) {

            return;

        }


        thumbnails.forEach(
            function (thumbnail) {


                thumbnail.addEventListener(
                    "click",
                    function () {


                        const image =
                            thumbnail.querySelector(
                                "img"
                            );


                        if (!image) {

                            return;

                        }


                        mainProductImage.src =
                            image.src;


                        thumbnails.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        thumbnail.classList.add(
                            "active"
                        );

                    }
                );

            }
        );

    }
);



/* =========================================================
   KLT — GENERAL LINK SAFETY
========================================================= */

/*
 * Prevent buttons placed inside product links
 * from accidentally opening the product page.
 *
 * The actual wishlist functionality is handled
 * by the individual product/page scripts.
 */

document.addEventListener(
    "click",
    function (event) {


        const wishlist =
            event.target.closest(
                ".wishlist"
            );


        if (!wishlist) {

            return;

        }


        event.preventDefault();


        event.stopPropagation();

    }
);