/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import { useSession } from "next-auth/react";
import { getLoggedUserCart } from "@/actions/addToCart.action";

type CartContextType = {
  numOfCartItems: number;
  setnumOfCartItems: React.Dispatch<React.SetStateAction<number>>;
  refreshCart: () => Promise<void>;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  const [numOfCartItems, setnumOfCartItems] = useState(0);

  const refreshCart = useCallback(async () => {
    try {
      const res = await getLoggedUserCart();

      if (res?.status === "success" && Array.isArray(res.data?.products)) {
        const totalItems = res.data.products.reduce(
          (
            total: number,
            product: {
              count?: number;
            }
          ) => total + (product.count ?? 0),
          0
        );

        setnumOfCartItems(totalItems);
      } else {
        setnumOfCartItems(0);
      }
    } catch (error) {
      console.error(
        "Failed to get cart count:",
        error instanceof Error ? error.message : error
      );

      setnumOfCartItems(0);
    }
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      refreshCart();
    }

    if (status === "unauthenticated") {
      setnumOfCartItems(0);
    }
  }, [status, refreshCart]);

  return (
    <CartContext.Provider
      value={{
        numOfCartItems,
        setnumOfCartItems,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}