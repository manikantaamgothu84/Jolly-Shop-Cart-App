export let findProductInCart = (cart, prodId) => {
    let isProductInCart = cart && cart.length > 0 && cart.some(({ _id }) => _id === prodId);
    return isProductInCart;
}