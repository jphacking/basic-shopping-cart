// File: /app/components/product/Product.tsx

import React from "react";

import Image from "next/image";
import { Product as ProductType } from "@/types";

interface ProductProps extends ProductType {
  onAddToCart: (id: string) => void;
}

const Product: React.FC<ProductProps> = ({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <article className="product">
      <Image src={image} width={500} height={500} alt={title} />
      <div className="product-content">
        <h3>{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <p>{description}</p>
        <div className="mt-4">
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
};

export default Product;
