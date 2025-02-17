// File: /app/api/products/route.ts

// /app/api/products/route.ts
// This API route returns the dummy products after validating them using Zod.
// If validation fails, it returns a 500 error with an error message.

import { NextResponse } from "next/server";
import { DUMMY_PRODUCTS } from "@/data/dummy-products";
import { z } from "zod";

// Define the schema for a single product. Note that image must be a string (URL).
const productSchema = z.object({
  id: z.string(),
  image: z.string(), // Expecting a URL string for the image
  title: z.string(),
  price: z.number(),
  description: z.string(),
});

// Define a schema for an array of products.
const productsSchema = z.array(productSchema);

export async function GET() {
  try {
    // Validate dummy data using the schema.
    const products = productsSchema.parse(DUMMY_PRODUCTS);
    return NextResponse.json(products);
  } catch (error) {
    // If validation fails, return an error response.
    return NextResponse.json(
      { error: "Invalid product data" },
      { status: 500 }
    );
  }
}
