// File: /app/providers.tsx

// This client component wraps your app with the Redux provider and includes the ToastContainer for notifications.
// Removing NextAuth SessionProvider here since we're not using auth.

"use client";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      {children}
      {/* ToastContainer renders the notifications */}
      <ToastContainer />
    </ReduxProvider>
  );
}
