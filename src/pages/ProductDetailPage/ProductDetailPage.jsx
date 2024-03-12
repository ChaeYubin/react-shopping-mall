import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetailPage.css";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { add, remove } from "../../store/cartSlice";
import { addToCart, removeFromCart } from "../../store/productSlice";

function ProductDetailPage() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [wish, setWish] = useState(state.wish);

  const handleCartAddClick = () => {
    const auth = getAuth();

    // 현재 로그인되어있다면
    if (auth.currentUser) {
      dispatch(
        add({
          id: state.id,
          title: state.title,
          price: state.price,
          image: state.image,
          category: state.category,
          description: state.description,
        })
      );

      dispatch(addToCart({ id: state.id }));

      setWish("true");
    } else {
      alert("로그인이 필요한 기능입니다.");
    }
  };

  const handleCartRemoveClick = () => {
    dispatch(
      remove({
        id: state.id,
      })
    );
    dispatch(removeFromCart({ id: state.id }));
    setWish("false");
  };

  const handleGoToCartButton = () => {
    navigate("/cart");
  };

  return (
    <div className="product-detail-page-container">
      <img src={state.image} alt={state.title} />
      <div className="product-detail-page-right-container">
        <p className="product-detail-page-category">{state.category}</p>
        <p className="product-detail-page-title">{state.title}</p>
        <p className="product-detail-page-price">$ {state.price}</p>
        <p className="product-detail-page-desc">{state.description}</p>
        <div className="detail-page-buttons">
          {wish === "true" ? (
            <button className="cart" onClick={handleCartRemoveClick}>
              장바구니에 담긴 제품
            </button>
          ) : (
            <button onClick={handleCartAddClick}>장바구니에 담기</button>
          )}
          <button onClick={handleGoToCartButton}>장바구니로 이동</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
