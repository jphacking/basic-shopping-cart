// File: /data/dummy-products.ts

// /data/dummy-products.ts
// This file contains dummy product data used by the API.
// IMPORTANT: When importing images in Next.js, the imported value is an object,
// so we need to use the .src property to extract the URL string.
// This ensures that our Zod validation (which expects a string) passes.

import mochaOvercoat from "@/public/assets/mocha-overcoat.jpg";
import dreamGown from "@/public/assets/dream-gown.jpg";
import rainJacket from "@/public/assets/rain-jacket.jpg";
import merlotSuit from "@/public/assets/merlot-suit.jpg";
import moonlightDress from "@/public/assets/moonlight-dress.jpg";
import denimPioneer from "@/public/assets/denim-pioneer.jpg";
import { Product } from "@/types";

// Update each product's image property to use the .src property of the imported image.
export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    image: "/assets/mocha-overcoat.jpg", //mochaOvercoat.src, // Use .src to get the URL string
    title: "Majestic Vintage Mocha Overcoat",
    price: 129.99,
    description:
      "Channel timeless sophistication with this stunning mocha overcoat. Crafted for the discerning gentleman who appreciates the fine blend of vintage charm and modern elegance.",
  },
  {
    id: "p2",
    image: "/assets/dream-gown.jpg",
    title: "Enchanting Blush Dream Gown",
    price: 189.99,
    description:
      "Bask in the glow of elegance with our Enchanting Blush Dream Gown. Embody the regality of a queen with a sweet touch of pink that whispers enchantment. This is the perfect piece for those seeking to create unforgettable moments.",
  },
  {
    id: "p3",
    image: "/assets/rain-jacket.jpg",
    title: "Vintage Sunshine Rain Jacket",
    price: 49.99,
    description:
      "Brace the showers in style! Our Vintage Sunshine Rain Jacket ensures that you stand out, even in the dullest weather. Because rain is never a reason to compromise on your fashion quotient.",
  },
  {
    id: "p4",
    image: "/assets/merlot-suit.jpg",
    title: "Classic Merlot Business Suit",
    price: 249.99,
    description:
      "Step into the boardroom with unmatched confidence in our Classic Merlot Business Suit. Exuding an air of refined class and understated power, it is ideal for the modern executive who values tradition and elegance.",
  },
  {
    id: "p5",
    image: "/assets/dream-gown.jpg",
    title: "Ethereal Moonlight Evening Dress",
    price: 159.99,
    description:
      "Sweep the room off its feet in our Ethereal Moonlight Evening Dress. Crafted to mimic the allure of the moonlight, this dress is a nod to those who appreciate subtle glamour and a standout silhouette.",
  },
  {
    id: "p6",
    image: "/assets/denim-pioneer.jpg",
    title: "Pioneer Rugged Denim Jacket",
    price: 79.99,
    description:
      "Our Pioneer Rugged Denim Jacket is a tribute to those who embody the spirit of adventure. Designed with durability and comfort in mind, this jacket is a wardrobe essential for the urban explorer.",
  },
];
