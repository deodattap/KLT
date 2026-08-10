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