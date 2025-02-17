// File: /store/cartSlice.ts

// This file creates a Redux slice for managing the cart state.
// It defines the initial state, actions, and reducers for adding items and updating quantities.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type for a single cart item.
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Type for the overall cart state.
export interface CartState {
  items: CartItem[];
}

// Initial cart state is an empty array of items.
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add an item to the cart. If the item exists, increase its quantity.
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Action to update an item's quantity. Remove the item if quantity goes to zero.
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.amount;
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addItem, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
