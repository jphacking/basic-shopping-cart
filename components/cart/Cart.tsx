// File: /app/components/cart/Cart.tsx

import React from "react";
import { CartItem } from "@/store/cartSlice";

interface CartProps {
  items: CartItem[];
  onUpdateItemQuantity: (id: string, amount: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateItemQuantity }) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart" className="p-4">
      {items.length === 0 ? (
        <p>No items in cart!</p>
      ) : (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div>
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <span>{formattedTotalPrice}</span>
      </p>
    </div>
  );
};

export default Cart;
