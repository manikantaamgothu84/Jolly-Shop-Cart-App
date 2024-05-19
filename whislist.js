import { horizontal } from "./horizontal.js";
import { findProductInCart } from "./findProductInCart.js";

const whislistContainer = document.getElementById("whislist");

const totalFavoriteCount = document.querySelector(".favorite-count");
const totalCartCount = document.querySelector(".cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cart1 = JSON.parse(localStorage.getItem("cart1")) || [];


let cartCount = cart1.length;
totalCartCount.innerHTML = cart.length;
totalFavoriteCount.innerHTML = cartCount;

whislistContainer.addEventListener("click", (event) => {
    cart1 = cart1.filter(({ _id }) => _id !== event.target.dataset.id);
    whislistContainer.innerHTML = "";
    cartCount--;
    totalFavoriteCount.innerHTML = cartCount;
    horizontal(cart1, whislistContainer, findProductInCart, "whislist");
    localStorage.setItem("cart1", JSON.stringify(cart1));



})

const heading = document.querySelector(".item");
heading.innerText = cart1.length
const itemCount = document.querySelector(".item-count");
itemCount.innerText = cart1.length;

const productPrice = document.querySelector(".product-price");


const priceBeforeDiscount = cart1.reduce((acc, cur) => acc + cur.oldPrice, 0);
const priceAfterDiscount = cart1.reduce((acc, cur) => acc + cur.newPrice, 0);
productPrice.innerText = priceBeforeDiscount;
const discountAmount = document.querySelector(".discount");

const discount = priceBeforeDiscount - priceAfterDiscount;
discountAmount.innerText = discount;


const totalAmount = document.querySelector(".total-amount");
const amount = priceBeforeDiscount - discount + 100;
totalAmount.innerText = amount;

const savingAmount = document.querySelector(".saving-amount");
savingAmount.innerText = discount;

horizontal(cart1, whislistContainer, findProductInCart, "whislist");