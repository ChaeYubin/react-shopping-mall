import React, { useEffect } from "react";
import "./ProductPage.css";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { useDispatch } from "react-redux";
import instance from "../../api/axios";
import { getProducts } from "../../store/productSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const categories = ["모두", "전자기기", "쥬얼리", "남성의류", "여성의류"];
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    instance
      .get("products")
      .then((result) => result.data)
      .then((products) =>
        dispatch(getProducts({ category: 0, products: products }))
      );
  }, []);

  return (
    <div className="product-page-container">
      <h2>Products</h2>
      <CategoryList categories={categories} />
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
