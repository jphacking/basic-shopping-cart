// File: /store/store.ts

// This file configures the Redux store and combines all slices (currently just the cart slice).
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Create the Redux store with the cart reducer.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer types for the RootState and AppDispatch from the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
