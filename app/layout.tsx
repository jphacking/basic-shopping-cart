// File: /app/layout.tsx

// This is the root layout component that wraps your entire app.
// It sets up global HTML and includes the Providers component (for Redux, toast notifications, etc.).
// The metadata export is used by Next.js for SEO and head tags.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // Wraps the app with Redux and other providers

// Load Google fonts and assign CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Export metadata used by Next.js for setting document head properties
export const metadata: Metadata = {
  title: "Elegant Context",
  description: "A modern shopping cart built with Next.js, Redux, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          {/* This div serves as the root for any modal portals rendered on the client */}
          <div id="modal-root" />
        </Providers>
      </body>
    </html>
  );
}
