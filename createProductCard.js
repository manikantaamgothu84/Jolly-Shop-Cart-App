export const createProductCard = (products, parentElement, findProductInCart, pageType) => {

    for (let product of products) {

        const cardContainer = document.createElement("div");
        cardContainer.classList.add(
            "card",
            "card-vertical",
            "d-flex",
            "direction-column",
            "shadow");

        // favorite icon adding
        const favoriteBtn = document.createElement("button");
        favoriteBtn.classList.add("btn1");

        const favorite = document.createElement("i");
        favorite.classList.add("f", "fa-sharp", "fa-solid", "fa-heart");
        favorite.setAttribute("data-type", "favorite");
        favorite.setAttribute("data-id", product._id);

        let isProductInCart = findProductInCart(JSON.parse(localStorage.getItem("cart")), product._id);
        favorite.innerText = pageType === "whislist" ? "Whislisted" : pageType === "products" && isProductInCart ? "" : "";
        favoriteBtn.appendChild(favorite);
        cardContainer.appendChild(favoriteBtn);

        /* image conatiner */
        const cardImageContainer = document.createElement("div");
        cardImageContainer.classList.add("card-image-conatiner");
        const imageContainer = document.createElement("img");
        imageContainer.classList.add("card-img");
        imageContainer.setAttribute("src", product.img);
        imageContainer.setAttribute("alt", product.name)
        cardImageContainer.appendChild(imageContainer);


        /*car-details */

        const cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details");
        const cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = product.brand;
        cardDetails.appendChild(cardTitle);


        /* card-description */

        const cardDescription = document.createElement("div");
        cardDescription.classList.add("card-discription");

        /* product name */

        const name = document.createElement("p");
        name.classList.add("card-des");
        name.innerText = product.name;
        cardDescription.appendChild(name);

        /* price */

        const price = document.createElement("span");
        price.classList.add("card-price");
        price.innerText = `Rs. ${product.newPrice}`
        cardDescription.appendChild(price);


        const oldPrice = document.createElement("span");
        oldPrice.classList.add("price-strike-through");
        oldPrice.innerText = `Rs. ${product.oldPrice}`
        cardDescription.appendChild(oldPrice);

        const cardDiscount = document.createElement("span");
        cardDiscount.classList.add("dicount");
        cardDiscount.innerText = `(${product.discount}% OFF) `
        cardDescription.appendChild(cardDiscount);

        /* rating*/

        const ratingContainer = document.createElement("p");
        ratingContainer.classList.add("star", "d-flex", "align-center");


        const rating = document.createElement("span");

        rating.innerText = product.rating;
        ratingContainer.appendChild(rating);

        const star = document.createElement("span");
        star.classList.add("material-symbols-outlined");
        star.innerText = "star_half";
        ratingContainer.appendChild(star);
        cardDescription.appendChild(ratingContainer);

        cardDetails.appendChild(cardDescription)

        // cta button;

        const ctaButton = document.createElement("div");
        ctaButton.classList.add("cta-btn");



        const cartBtn = document.createElement("button");
        cartBtn.classList.add(
            "button",
            "btn-primary",
            "btn-icon",
            "cart-btn",
            "d-flex",
            "align-center",
            "justify-center",
            "gap", "cursor",
            "btn-margin");
        cartBtn.setAttribute("data-id", product._id);
        cartBtn.setAttribute("data-type", "cart-Btn");
        const cart = document.createElement("span");
        cart.classList.add("material-symbols-outlined")

        cart.innerText = "shopping_cart";




        cartBtn.appendChild(cart);
        const btnText = document.createElement("span");
        // btnText.setAttribute("data-id", product._id);
        // btnText.setAttribute("data-type", "cart-Btn");
        btnText.innerText = "Add To Cart";
        isProductInCart = findProductInCart(JSON.parse(localStorage.getItem("cart")), product._id);
        btnText.innerText = pageType === "cart" ? "Remove" : pageType === "products" && isProductInCart ? "Go To Cart" : "Add To Cart";

        cartBtn.appendChild(btnText);

        ctaButton.appendChild(cartBtn);


        cardContainer.appendChild(cardImageContainer);
        cardContainer.appendChild(cardDetails);
        cardContainer.appendChild(ctaButton);
        parentElement.appendChild(cardContainer);
    };
}