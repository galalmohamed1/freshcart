"use client";

import React from "react";
import MyProvider from "@/components/MyProvider/MyProvider";
import CartContextProvider from "@/context/CartContext";
import WishlistContextProvider from "@/context/WishListContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MyProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          {children}
        </WishlistContextProvider>
      </CartContextProvider>
    </MyProvider>
  );
}