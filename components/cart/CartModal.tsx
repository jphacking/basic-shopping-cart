// File: /app/components/cart/CartModal.tsx

"use client";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import { CartItem } from "@/store/cartSlice";

interface CartModalProps {
  cartItems: CartItem[];
  onUpdateCartItemQuantity: (id: string, amount: number) => void;
  title: string;
  actions: React.ReactNode;
}

export interface CartModalHandle {
  open: () => void;
}

const CartModal = forwardRef<CartModalHandle, CartModalProps>(
  function CartModal(
    { cartItems, onUpdateCartItemQuantity, title, actions },
    ref
  ) {
    // Ensure the component renders only on the client
    const [mounted, setMounted] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      setMounted(true);
    }, []);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
      },
    }));

    if (!mounted) return null;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      throw new Error("Modal root element not found");
    }

    return createPortal(
      <dialog id="modal" ref={dialogRef}>
        <h2>{title}</h2>
        <Cart
          items={cartItems}
          onUpdateItemQuantity={onUpdateCartItemQuantity}
        />
        <form method="dialog" id="modal-actions">
          {actions}
        </form>
      </dialog>,
      modalRoot
    );
  }
);

export default CartModal;
