'use client';
import { getLoggedUserWishlist } from '@/actions/addToWishlist.action';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { toast } from 'sonner';
export const WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
  const [numOfWishlistItems, setnumOfWishlistItems] = useState(0);
  async function getProductWishlist() {
    try {
      const res = await getLoggedUserWishlist();
      if (res?.status === "success") {
        setnumOfWishlistItems(res.count ?? res.data?.length ?? 0);
      } else {
        setnumOfWishlistItems(0);
      }
    } catch (error) {
      console.log(error.message);
      setnumOfWishlistItems(0);
      
    }
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProductWishlist();
  }, []);
  return (
    <WishlistContext.Provider value={{ numOfWishlistItems, setnumOfWishlistItems, refreshWishlist:getProductWishlist, }}>
      {children}
    </WishlistContext.Provider>
  );
}