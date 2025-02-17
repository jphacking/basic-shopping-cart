// File: /types/index.ts

// This file exports the shared TypeScript type for a product used throughout the app.
export interface Product {
  id: string;
  image: string; // This should be the URL of the image (as a string)
  title: string;
  price: number;
  description: string;
}
