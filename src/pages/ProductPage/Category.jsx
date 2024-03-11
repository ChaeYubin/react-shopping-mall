import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/product";
import instance from "../../api/axios";

function Category({ index, category }) {
  const dispatch = useDispatch();

  const categoryEng = [
    "",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const url =
    index === 0 ? "products" : `products/category/${categoryEng[index]}`;

  const handleCategoryClick = (e) => {
    // 선택한 카테고리에만 selected 클래스 추가
    e.target.parentNode.childNodes.forEach((node) => {
      if (node === e.target) {
        node.classList.add("selected");
      } else {
        node.classList.remove("selected");
      }
    });

    instance
      .get(url)
      .then((result) => result.data)
      .then((products) =>
        dispatch(getProducts({ category: index, products: products }))
      );
  };

  return (
    <div className="category" onClick={handleCategoryClick}>
      {category}
    </div>
  );
}

export default Category;
