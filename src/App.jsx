import React, { useState } from "react";
import ProductList from "./components/ProductList";

const initialProducts = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 699, inStock: false },
  { id: 3, name: "Tablet", price: 499, inStock: true },
];

const App = () => {
  // State to hold all products
  const [products, setProducts] = useState(initialProducts);

  // State to manage filter: 'all', 'inStock', or 'outOfStock'
  const [filter, setFilter] = useState("all");

  // Filter products based on current filter state
  const filteredProducts = products.filter((product) => {
    if (filter === "inStock") return product.inStock;
    if (filter === "outOfStock") return !product.inStock;
    return true; // 'all'
  });

  // Remove product handler
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* Filter buttons */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("inStock")}>In Stock</button>
        <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>
      </div>

      {/* Render the ProductList and pass products and remove handler */}
      <ProductList products={filteredProducts} onRemove={removeProduct} />
    </div>
  );
};

export default App;
