import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="product-container">
      <p>Showing: {products.length}</p>
      <div className="product-grid-container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
