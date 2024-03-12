import React from "react";
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount, remove } from "../../store/cartSlice";
import { removeFromCart } from "../../store/productSlice";

function CartProduct({ product, type }) {
  const dispatch = useDispatch();

  const handleIncreaseButton = () => {
    dispatch(increaseCount({ id: product.id }));
  };

  const handleDecreaseButton = () => {
    dispatch(decreaseCount({ id: product.id }));
  };

  const handleRemoveButton = () => {
    dispatch(removeFromCart({ id: product.id }));
    dispatch(remove({ id: product.id }));
  };

  if (type === "modal") {
    return (
      <div className="cart-modal-product">
        <img src={product.image} alt="" />
        <div className="cart-product-desc">
          <p className="cart-product-category">{product.category}</p>
          <p className="cart-product-title">{product.title}</p>
          <p className="cart-product-price">
            {product.price} x {product.count} = ${" "}
            {product.price * product.count}
          </p>
        </div>
        <div className="cart-product-remove">
          <button
            className="cart-product-remove-button"
            onClick={handleRemoveButton}
          ></button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-product">
        <img src={product.image} alt="" />
        <div className="cart-product-desc">
          <p className="cart-product-category">{product.category}</p>
          <p className="cart-product-title">{product.title}</p>
          <p className="cart-product-price">
            {product.price} x {product.count} = ${" "}
            {Math.floor(product.price * product.count)}
          </p>
        </div>
        <div className="product-count">
          {product.count > 1 ? (
            <button
              className="product-count-decrease-button"
              onClick={handleDecreaseButton}
            >
              -
            </button>
          ) : (
            <button
              className="product-count-decrease-button disabled"
              onClick={handleDecreaseButton}
              disabled
            >
              -
            </button>
          )}

          <p className="product-count-value">{product.count}</p>
          <button
            className="product-count-increase-button"
            onClick={handleIncreaseButton}
          >
            +
          </button>
        </div>
        <div className="cart-product-remove">
          <button
            className="cart-product-remove-button"
            onClick={handleRemoveButton}
          ></button>
        </div>
      </div>
    );
  }
}

export default CartProduct;
