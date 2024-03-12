import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../../store/cartSlice";
import { open, close } from "../../store/modalSlice";
import { getAuth } from "firebase/auth";
import { addToCart, removeFromCart } from "../../store/productSlice";
import { useNavigate } from "react-router-dom";

function Product({ id, title, price, image, category, description, wish }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartAddClick = () => {
    const auth = getAuth();

    // 현재 로그인되어있다면
    if (auth.currentUser) {
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
      dispatch(addToCart({ id: id }));

      dispatch(open());

      setTimeout(() => {
        dispatch(close());
      }, 3000);
    } else {
      alert("로그인이 필요한 기능입니다.");
    }
  };

  const handleCartRemoveClick = () => {
    dispatch(
      remove({
        id: id,
      })
    );
    dispatch(removeFromCart({ id: id }));
  };

  const handleProductClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      navigate(`/${id}`, {
        state: {
          id: id,
          title: title,
          price: price,
          image: image,
          category: category,
          description: description,
          wish: wish,
        },
      });
    }
  };

  return (
    <div className="product" onClick={handleProductClick}>
      <img src={image} alt="" />
      <p className="product-title">{title}</p>
      <div className="footer">
        {wish === "true" ? (
          <button className="cart" onClick={handleCartRemoveClick}>
            장바구니에 담긴 제품
          </button>
        ) : (
          <button onClick={handleCartAddClick}>장바구니에 담기</button>
        )}
        <p>$ {price}</p>
      </div>
    </div>
  );
}

export default Product;
