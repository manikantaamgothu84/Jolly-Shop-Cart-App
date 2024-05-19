export const horizontal = (products, parentContainer, findProductInCart, pageType) => {

    for (let product of products) {

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "shadow");



        const imgContainer = document.createElement("div");
        imgContainer.classList.add("card-image-conatiner");
        const img = document.createElement("img");
        img.classList.add("img");
        img.setAttribute("src", product.img);
        img.setAttribute("alt", product.name);
        imgContainer.appendChild(img);
        cardContainer.appendChild(imgContainer);


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

        cardDetails.appendChild(cardDescription);

        // quality Container

        const qualityContainer = document.createElement("div");
        qualityContainer.classList.add("quality-container", "d-flex", "gap");

        const qualityTitle = document.createElement("p");
        qualityTitle.classList.add("q-title");
        qualityTitle.innerText = "Quality";
        qualityContainer.appendChild(qualityTitle);

        const countContainer = document.createElement("div");
        countContainer.classList.add("count-container");

        const incValue = document.createElement("button");
        incValue.classList.add("count", "ic", "cursor");
        incValue.innerText = "+";
        countContainer.appendChild(incValue);

        const value = document.createElement("span");
        value.classList.add("count-value");
        value.innerText = "1";
        countContainer.appendChild(value);

        const dicValue = document.createElement("button");
        dicValue.classList.add("count", "dc", "cursor");
        dicValue.innerText = "-";
        countContainer.appendChild(dicValue);

        qualityContainer.appendChild(countContainer);
        cardDetails.appendChild(qualityContainer);

        // cta  btn

        const ctaBtn = document.createElement("div");
        ctaBtn.classList.add("cta-btn");

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin");
        removeBtn.innerText = "Remove";
        removeBtn.setAttribute("data-id", product._id);
        removeBtn.setAttribute("data-type", "remove");
        ctaBtn.appendChild(removeBtn);

        const whislistBtn = document.createElement("button");
        whislistBtn.classList.add("button", "btn-primary", "btn-icon", "cart-btn1", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin");
        whislistBtn.innerText = " Whislisted";
        // whislistBtn.setAttribute("data-type", "save");
        //whislistBtn.setAttribute("data-id", product._id);
        //let isProductInCart = findProductInCart(JSON.parse(localStorage.getItem("cart1")), product._id);
        //whislistBtn.innerText = pageType === "whislist" ? "Whislisted" : pageType === "cart" && isProductInCart ? "Go To Whislist" : "save To Whislist";

        ctaBtn.appendChild(whislistBtn);

        cardDetails.appendChild(ctaBtn);

        cardContainer.appendChild(cardDetails);


        parentContainer.appendChild(cardContainer);
    };
}