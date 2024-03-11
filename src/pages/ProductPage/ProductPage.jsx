import React, { useState } from "react";
import "./ProductPage.css";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

function ProductPage() {
  const categories = ["모두", "전자기기", "쥬얼리", "남성의류", "여성의류"];
  const products = useSelector((state) => state.product.products);

  return (
    <div className="product-page-container">
      <h2>Products</h2>
      <CategoryList categories={categories} />
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
