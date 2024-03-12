import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import ProductList from "./ProductList";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "./../../store/productSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const category = useSelector((state) => state.product.selectedCategory);
  const [currentProducts, setCurrentProducts] = useState([]);

  /* ----------------------------------------------------------------------------------------------
  currentProducts의 초기값으로 products를 넣어줬는데도 처음 렌더링할 때 제대로 보이지 않아서 이렇게 구현했습니다.
  스토어에서 products를 다 받아오기 전에 useState가 실행되기 때문인 것 같습니다.
  다른 방법이 있을까요?
  ------------------------------------------------------------------------------------------------ */
  // products와 category가 변경될 때마다 useEffect를 다시 실행
  useEffect(() => {
    // 현재 선택된 카테고리가 'all'이라면 모든 상품을, 아니라면 category로 필터링하여 보여준다.
    if (category === "all") {
      setCurrentProducts(products);
    } else {
      setCurrentProducts(
        products.filter((product) => product.category === category)
      );
    }
  }, [products, category]);

  const handleCategoryClick = (e) => {
    // 선택한 카테고리에만 selected 클래스 추가
    e.target.parentNode.childNodes.forEach((node) => {
      if (node === e.target) {
        node.classList.add("selected");
      } else {
        node.classList.remove("selected");
      }
    });

    dispatch(selectCategory({ category: e.target.id }));
  };

  return (
    <div className="product-page-container">
      <h2>Products</h2>
      <div className="category-container">
        <div
          id="all"
          className="category selected"
          onClick={handleCategoryClick}
        >
          모두
        </div>
        <div
          id="electronics"
          className="category"
          onClick={handleCategoryClick}
        >
          전자기기
        </div>
        <div id="jewelery" className="category" onClick={handleCategoryClick}>
          쥬얼리
        </div>
        <div
          id="men's clothing"
          className="category"
          onClick={handleCategoryClick}
        >
          남성의류
        </div>
        <div
          id="women's clothing"
          className="category"
          onClick={handleCategoryClick}
        >
          여성의류
        </div>
      </div>
      <ProductList products={currentProducts} />
    </div>
  );
}

export default ProductPage;
