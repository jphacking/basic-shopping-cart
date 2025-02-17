// File: /app/page.tsx

// This is the main page of the application.
// It uses SWR to fetch product data from our API route and passes that data
// into the Shop component. It also connects to Redux to dispatch actions when products are added to the cart.

"use client"; // This page uses client-side interactivity

import React from "react";
import useSWR from "swr";
import Header from "@/components/header/Header";
import Shop from "@/components/shop/Shop";
import { Product } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/cartSlice";
import { toast } from "react-toastify";

// A simple fetcher function for SWR that returns the JSON response
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  // useSWR fetches product data from our API route "/api/products"
  // The generic <Product[]> tells SWR to expect an array of Product objects.
  const { data, error } = useSWR<Product[]>("/api/products", fetcher);
  // If data hasn't been loaded yet and there is no error, then we're still loading.
  const isLoading = !data && !error;
  const dispatch = useAppDispatch();

  // Handler to add an item to the cart based on the product ID.
  // It uses Redux to add the item and shows a toast notification.
  const handleAddItemToCart = (id: string) => {
    const product = data?.find((p) => p.id === id);
    if (product) {
      dispatch(
        addItem({
          id: product.id,
          name: product.title,
          price: product.price,
        })
      );
      toast.success(`${product.title} added to cart`);
    } else {
      toast.error("Product not found");
    }
  };

  // If there's an error fetching data, notify the user.
  if (error) {
    toast.error("Error loading products");
  }

  return (
    <>
      <Header />
      <Shop
        products={Array.isArray(data) ? data : []}
        isLoading={isLoading}
        onAddToCart={handleAddItemToCart}
      />
    </>
  );
}
