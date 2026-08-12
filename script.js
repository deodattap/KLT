const shopButton = document.querySelector(".shop-button");

const learnButton = document.querySelector(".learn-button");

const contactButton = document.querySelector(".contact-button");


shopButton.addEventListener("click", function () {

    alert("Shop Now");

});


learnButton.addEventListener("click", function () {

    alert("Learn More");

});


contactButton.addEventListener("click", function () {

    alert("Contact Us");

});

/* =========================================================
   PRODUCT PAGE
========================================================= */


/* ================= SIZE SELECTION ================= */

const sizeButtons = document.querySelectorAll(".sizes button");


sizeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        sizeButtons.forEach(function (item) {

            item.classList.remove("selected");

        });


        button.classList.add("selected");

    });

});



/* ================= IMAGE THUMBNAILS ================= */

const thumbnails =
    document.querySelectorAll(".thumbnail");


const mainProductImage =
    document.querySelector(".product-main-image img");


thumbnails.forEach(function (thumbnail) {

    thumbnail.addEventListener("click", function () {

        const image =
            thumbnail.querySelector("img");


        mainProductImage.src =
            image.src;


        thumbnails.forEach(function (item) {

            item.classList.remove("active");

        });


        thumbnail.classList.add("active");

    });

});



/* ================= ADD TO BAG ================= */

const addToBag =
    document.getElementById("addToBag");


if (addToBag) {

    addToBag.addEventListener("click", function () {

        const selectedSize =
            document.querySelector(".sizes .selected");


        if (!selectedSize) {

            alert("Please select a size.");

            return;

        }


        const product = {

            name: "Relaxed Essential",

            price: 1999,

            size: selectedSize.textContent,

            image: "assets/1.jpg"

        };


        localStorage.setItem(
            "kltCart",
            JSON.stringify(product)
        );


        addToBag.querySelector("span").textContent =
            "ADDED TO BAG ✓";


        setTimeout(function () {

            addToBag.querySelector("span").textContent =
                "ADD TO BAG";

        }, 2000);

    });

}



/* ================= WISHLIST ================= */

const addWishlist =
    document.getElementById("addWishlist");


if (addWishlist) {

    addWishlist.addEventListener("click", function () {

        addWishlist.textContent =
            "♥ ADDED TO WISHLIST";

    });

}

/* =========================================================
   KLT PRODUCT DATA
========================================================= */

const products = {

    "mens-01": {

        name: "OVERSIZED SHIRT",

        category: "KLT / MENSWEAR",

        price: "₹2,499",

        image: "assets/mens/product-01.jpg",

        description:
            "A relaxed oversized shirt designed for everyday styling.",

        details:
            "Relaxed fit<br>Everyday silhouette<br>Easy layering"

    },


    "mens-02": {

        name: "RELAXED T-SHIRT",

        category: "KLT / MENSWEAR",

        price: "₹1,799",

        image: "assets/mens/product-02.jpg",

        description:
            "An effortless everyday T-shirt with a comfortable relaxed fit.",

        details:
            "Relaxed fit<br>Soft everyday construction<br>Easy styling"

    },


    "mens-03": {

        name: "UTILITY JACKET",

        category: "KLT / MENSWEAR",

        price: "₹3,999",

        image: "assets/mens/product-03.jpg",

        description:
            "A structured utility jacket built for everyday movement.",

        details:
            "Structured fit<br>Utility-inspired design<br>Layering piece"

    },


    "mens-04": {

        name: "WIDE-LEG PANTS",

        category: "KLT / MENSWEAR",

        price: "₹2,699",

        image: "assets/mens/product-04.jpg",

        description:
            "Relaxed wide-leg pants designed with an effortless silhouette.",

        details:
            "Wide-leg fit<br>Relaxed silhouette<br>Everyday comfort"

    },


    "mens-05": {

        name: "KNIT SWEATSHIRT",

        category: "KLT / MENSWEAR",

        price: "₹2,999",

        image: "assets/mens/product-05.jpg",

        description:
            "A soft knit layer designed for comfortable everyday wear.",

        details:
            "Relaxed fit<br>Soft knit construction<br>Easy layering"

    },


    "mens-06": {

        name: "UTILITY SET",

        category: "KLT / MENSWEAR",

        price: "₹4,499",

        image: "assets/mens/product-06.jpg",

        description:
            "A complete coordinated set combining utility and everyday style.",

        details:
            "Complete set<br>Relaxed silhouette<br>Coordinated styling"

    },


    "womens-01": {

        name: "OVERSIZED TOP",

        category: "KLT / WOMENSWEAR",

        price: "₹1,999",

        image: "assets/womens/product-01.jpg",

        description:
            "A relaxed oversized top designed for effortless everyday styling.",

        details:
            "Relaxed silhouette<br>Comfortable fit<br>Everyday styling"

    },


    "womens-02": {

        name: "STATEMENT JACKET",

        category: "KLT / WOMENSWEAR",

        price: "₹3,499",

        image: "assets/womens/product-02.jpg",

        description:
            "A statement jacket with a strong structured silhouette.",

        details:
            "Structured fit<br>Statement silhouette<br>Layering piece"

    },


    "womens-03": {

        name: "WIDE-LEG PANTS",

        category: "KLT / WOMENSWEAR",

        price: "₹2,699",

        image: "assets/womens/product-03.jpg",

        description:
            "Wide-leg pants designed with a relaxed and fluid silhouette.",

        details:
            "Wide-leg fit<br>Relaxed silhouette<br>Everyday comfort"

    },


    "womens-04": {

        name: "MINIMAL DRESS",

        category: "KLT / WOMENSWEAR",

        price: "₹2,999",

        image: "assets/womens/product-04.jpg",

        description:
            "A clean minimal dress designed for effortless movement.",

        details:
            "Easy silhouette<br>Minimal design<br>Everyday styling"

    },


    "womens-05": {

        name: "SOFT KNIT",

        category: "KLT / WOMENSWEAR",

        price: "₹2,799",

        image: "assets/womens/product-05.jpg",

        description:
            "A soft knit layer designed for comfortable everyday wear.",

        details:
            "Soft construction<br>Relaxed fit<br>Comfortable layering"

    },


    "womens-06": {

        name: "KNIT BUTTON-UP",

        category: "KLT / WOMENSWEAR",

        price: "₹2,499",

        image: "assets/womens/product-06.jpg",

        description:
            "A relaxed knit button-up combining comfort with a clean silhouette.",

        details:
            "Relaxed fit<br>Knit construction<br>Button-up design"

    }

};



/* =========================================================
   LOAD SELECTED PRODUCT
========================================================= */

const productPage =
    document.getElementById("productImage");


if (productPage) {


    const params =
        new URLSearchParams(window.location.search);


    const productId =
        params.get("product");


    const product =
        products[productId];


    if (product) {


        /* IMAGE */

        const image =
            document.getElementById("productImage");


        image.src =
            product.image;


        image.alt =
            product.name;



        /* THUMBNAILS */

        document.getElementById("thumb1").src =
            product.image;


        document.getElementById("thumb2").src =
            product.image;


        document.getElementById("thumb3").src =
            product.image;



        /* NAME */

        document.getElementById("productName")
            .textContent =
            product.name;



        /* CATEGORY */

        document.getElementById("productCategory")
            .textContent =
            product.category;



        /* PRICE */

        document.getElementById("productPrice")
            .textContent =
            product.price;



        /* DESCRIPTION */

        document.getElementById("productDescription")
            .textContent =
            product.description;



        /* DETAILS */

        document.getElementById("productDetails")
            .innerHTML =
            product.details;


        /* PAGE TITLE */

        document.title =
            "KLT — " + product.name;


    }

}