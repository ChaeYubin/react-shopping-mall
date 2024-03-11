import React from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../redux/product";
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

  const handleCategoryClick = () => {
    instance
      .get(url)
      .then((result) => result.data)
      .then((products) =>
        dispatch(selectCategory({ category: index, products: products }))
      );
  };

  return (
    <div className="category" onClick={handleCategoryClick}>
      {category}
    </div>
  );
}

export default Category;
