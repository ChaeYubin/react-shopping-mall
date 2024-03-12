import React from "react";
import CartProduct from "./CartProduct";

function CartProductList({ products, type }) {
  return products.map((product) => (
    <CartProduct key={product.id} product={product} type={type} />
  ));
}

export default CartProductList;
