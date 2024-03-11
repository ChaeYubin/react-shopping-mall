import React from "react";

function Product({ title, price, image }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p className="product-title">{title}</p>
      <div className="footer">
        <button>장바구니에 담기</button>
        <p>$ {price}</p>
      </div>
    </div>
  );
}

export default Product;
