// File: /app/components/shop/Shop.tsx

import React from "react";
import Product from "../product/Product";
import { Product as ProductType } from "@/types";

interface ShopProps {
  products: ProductType[];
  isLoading: boolean;
  onAddToCart: (id: string) => void;
}

const Shop: React.FC<ShopProps> = ({ products, isLoading, onAddToCart }) => {
  if (isLoading) {
    return <p className="p-4">Loading products...</p>;
  }

  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Shop;
