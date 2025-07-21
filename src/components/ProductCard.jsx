import React from "react";
import styles from "../styles/ProductCard.module.css"; // CSS Module import

const ProductCard = ({ product, onRemove }) => {
  const cardClass = product.inStock
    ? styles.inStockClass
    : styles.outOfStockClass;

  return (
    <div className={cardClass}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
