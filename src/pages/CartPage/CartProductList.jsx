import React from "react";
import CartProduct from "./CartProduct";

function CartProductList({ products }) {
  return products.map((product) => (
    <CartProduct key={product.id} product={product} />
  ));
}

export default CartProductList;
