import { products } from "./product.js";

import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./findProductInCart.js";


console.log(products)

const productContainer = document.getElementById("products");
const filterContainer = document.querySelector(".side-bar");
const searchName = document.querySelector(".s");


const totalCartCount = document.querySelector(".cart-count");
const totalFavoriteCount = document.querySelector(".favorite-count");



let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cart1 = JSON.parse(localStorage.getItem("cart1")) || [];

var cartCount = cart.length;
var favoriteCount = cart1.length;

totalCartCount.innerHTML = cartCount;
totalFavoriteCount.innerHTML = favoriteCount;
/*
let findProductInCart = (cart, prodId) => {
    let isProductInCart = cart && cart.length > 0 && cart.some(({ _id }) => _id === prodId);
    return isProductInCart;
}*/
/*
for (let product of products) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add(
        "card",
        "card-vertical",
        "d-flex",
        "direction-column",
        "shadow");

    // image conatiner 
    const cardImageContainer = document.createElement("div");
    cardImageContainer.classList.add("card-image-conatiner");
    const imageContainer = document.createElement("img");
    imageContainer.classList.add("card-img");
    imageContainer.setAttribute("src", product.img);
    imageContainer.setAttribute("alt", product.name)
    cardImageContainer.appendChild(imageContainer);

    //car-details 

    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = product.brand;
    cardDetails.appendChild(cardTitle);

    // card-description 

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-discription");

    // product name 

    const name = document.createElement("p");
    name.classList.add("card-des");
    name.innerText = product.name;
    cardDescription.appendChild(name);

    // price 

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
    cardDiscount.innerText = `( ${product.discount}% OFF ) `
    cardDescription.appendChild(cardDiscount);

    // rating

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
    const cart = document.createElement("span");
    cart.classList.add("material-symbols-outlined")
    cart.innerText = "shopping_cart";


    cartBtn.appendChild(cart);
    const btnText = document.createElement("span");
    btnText.innerText = "Add To Cart";
    cartBtn.appendChild(btnText);

    ctaButton.appendChild(cartBtn);


    cardContainer.appendChild(cardImageContainer);
    cardContainer.appendChild(cardDetails);
    cardContainer.appendChild(ctaButton);
    productContainer.appendChild(cardContainer);
};
*/
let m = [];
searchName.addEventListener("keyup", (event) => {
    let dataName = event.target.value;

    //console.log(dataName);
    let productName = products.filter(({ name }) => name === dataName);
    m = [...m, ...productName];
    console.log(m);

})

productContainer.addEventListener("click", (event) => {
    //console.log(event.target);
    let cartId = event.target.dataset.id;
    let type = event.target.dataset.type;
    let isProductInCart;
    switch (type) {
        case "cart-Btn":
            isProductInCart = findProductInCart(cart, cartId);
            if (!isProductInCart) {
                const addProductInCart = products.filter(({ _id }) => _id === cartId);
                cart = [...cart, ...addProductInCart];
                console.log(cart);
                cartCount++;
                totalCartCount.innerHTML = cartCount;
                localStorage.setItem("cart", JSON.stringify(cart));

                let ctaBtn = event.target;
                ctaBtn.innerHTML = `Go To Cart <span class=" nav-icon material-symbols-outlined">
                shopping_cart
                </span>`

            } else {
                location.href = "./cart.html";
            }
            break;
        case "favorite":

            isProductInCart = findProductInCart(cart1, cartId);
            //console.log(isProductInCart);
            if (!isProductInCart) {
                const addProductInCart = products.filter(({ _id }) => _id === cartId);
                cart1 = [...cart1, ...addProductInCart];
                console.log(cart1);
                favoriteCount++;
                totalFavoriteCount.innerHTML = favoriteCount;
                localStorage.setItem("cart1", JSON.stringify(cart1));


            } else {
                location.href = "./whislist.html";
            }
            break;
        default:
            console.log("none");
            break;
    }
    //console.log(isProductInCart);


})


filterContainer.addEventListener("click", (event) => {
    let rate = event.target.dataset.rating;
    let dis = event.target.dataset.discount;
    const updatedProducts = products.filter(({ rating }) => rating >= Number(rate));

    const updated = products.filter(({ discount }) => discount >= Number(dis));


    productContainer.innerHTML = "";

    createProductCard(updatedProducts, productContainer, findProductInCart, "products");

    createProductCard(updated, productContainer, findProductInCart, "products");




})





createProductCard(products, productContainer, findProductInCart, "products");