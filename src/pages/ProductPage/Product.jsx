import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

function Product({ id, title, price, image, category, description }) {
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(
      add({
        id: id,
        title: title,
        price: price,
        image: image,
        category: category,
        description: description,
      })
    );
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <p className="product-title">{title}</p>
      <div className="footer">
        <button onClick={handleCartClick}>장바구니에 담기</button>
        <p>$ {price}</p>
      </div>
    </div>
  );
}

export default Product;
