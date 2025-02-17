// File: /app/components/header/Header.tsx

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import CartModal, { CartModalHandle } from "../cart/CartModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateItemQuantity } from "@/store/cartSlice";

const Header: React.FC = () => {
  const modalRef = useRef<CartModalHandle>(null);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Total quantity sums across items
  const cartQuantity = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleOpenCartClick = () => {
    modalRef.current?.open();
  };

  const handleUpdateCartItemQuantity = (id: string, amount: number) => {
    dispatch(updateItemQuantity({ id, amount }));
  };

  // Define modal actions with a “Close” button and (if items exist) a “Checkout” button.
  const modalActions = (
    <>
      <button
        className="mr-2 px-4 py-2 bg-gray-300 rounded"
        onClick={() => {
          const dialog = document.getElementById("modal") as HTMLDialogElement;
          dialog?.close();
        }}
      >
        Close
      </button>
      {cart.items.length > 0 && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            // Here you might call a checkout API, etc.
            alert("Proceeding to checkout...");
            const dialog = document.getElementById(
              "modal"
            ) as HTMLDialogElement;
            dialog?.close();
          }}
        >
          Checkout
        </button>
      )}
    </>
  );

  return (
    <>
      <CartModal
        ref={modalRef}
        cartItems={cart.items}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <Image src="/logo.png" width={500} height={500} alt="Elegant model" />

          <h1>Elegant Context</h1>
        </div>
        <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
      </header>
    </>
  );
};

export default Header;
