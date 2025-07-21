import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <p>No products are currently in stock.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
