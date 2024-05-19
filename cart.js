import { findProductInCart } from "./findProductInCart.js";
import { horizontalProductCard } from "./horizontalProductCard.js";


const cartContainer = document.getElementById("cart");
const totalCartCount = document.querySelector(".cart-count");
const totalFavoriteCount = document.querySelector(".favorite-count");




let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cart1 = JSON.parse(localStorage.getItem("cart1")) || [];
let cartCount = cart.length;
let favoriteCount = cart1.length;

totalCartCount.innerHTML = cartCount;
totalFavoriteCount.innerHTML = favoriteCount;


cartContainer.addEventListener("click", (event) => {
    let cartId = event.target.dataset.id;
    let type = event.target.dataset.type;

    switch (type) {
        case "remove":
            cart = cart.filter(({ _id }) => _id !== cartId);

            cartContainer.innerHTML = "";

            cartCount--;
            totalCartCount.innerHTML = cartCount;

            horizontalProductCard(cart, cartContainer, findProductInCart, "cart");

            localStorage.setItem("cart", JSON.stringify(cart));
            break;


        case "save":


            let isProductInCart = findProductInCart(cart1, cartId);
            //console.log(isProductInCart);
            if (!isProductInCart) {
                const addProductInCart = cart.filter(({ _id }) => _id === cartId);
                cart1 = [...cart1, ...addProductInCart];
                //console.log(cart1);
                favoriteCount++;
                totalFavoriteCount.innerHTML = favoriteCount;
                localStorage.setItem("cart1", JSON.stringify(cart1));

                let whislistBtn = event.target;
                whislistBtn.innerHTML = `Go To whishList <span class="favo material-symbols-outlined">
        favorite
        </span>`;
                //console.log(event.target);
            } else {
                location.href = "./whislist.html";
            }

            break;

        default:
            console.log("none");
    }



})

const heading = document.querySelector(".item");
heading.innerText = cart.length
const itemCount = document.querySelector(".item-count");
itemCount.innerText = cart.length;

const productPrice = document.querySelector(".product-price");


const priceBeforeDiscount = cart.reduce((acc, cur) => acc + cur.oldPrice, 0);
const priceAfterDiscount = cart.reduce((acc, cur) => acc + cur.newPrice, 0);
productPrice.innerText = priceBeforeDiscount;
const discountAmount = document.querySelector(".discount");

const discount = priceBeforeDiscount - priceAfterDiscount;
discountAmount.innerText = discount;


const totalAmount = document.querySelector(".total-amount");
const amount = priceBeforeDiscount - discount + 100;
totalAmount.innerText = amount;

const savingAmount = document.querySelector(".saving-amount");
savingAmount.innerText = discount;

horizontalProductCard(cart, cartContainer, findProductInCart, "cart");