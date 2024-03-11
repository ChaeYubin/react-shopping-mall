import React from "react";
import Category from "./Category";

function CategoryList({ categories }) {
  return (
    <div className="category-container">
      {categories.map((item, index) => {
        return <Category key={index} index={index} category={item} />;
      })}
    </div>
  );
}

export default CategoryList;
