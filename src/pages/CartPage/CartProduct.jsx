import React from "react";

function CartProduct({ product }) {
  return (
    <div className="cart-product">
      <img src={product.image} alt="" />
      <div className="cart-product-desc">
        <p className="cart-product-category">{product.category}</p>
        <p className="cart-product-title">{product.title}</p>
        <p className="cart-product-price">
          {product.price} x {product.count} = $ {product.price * product.count}
        </p>
      </div>
      <div className="product-count">
        <button className="product-count-decrease-button">-</button>
        <p className="product-count-value">{product.count}</p>
        <button className="product-count-increase-button">+</button>
      </div>
      <div className="cart-product-remove">
        <button className="cart-product-remove-button"></button>
      </div>
    </div>
  );
}

export default CartProduct;
