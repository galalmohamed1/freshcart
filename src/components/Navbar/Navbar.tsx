/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useContext } from 'react';
import Logo from "@images/Logo.svg";
import { FaTruck } from 'react-icons/fa';
import { IoIosGift } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FaRightFromBracket } from 'react-icons/fa6';
import { FaBoxOpen } from 'react-icons/fa';
import { FaRegAddressBook } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { signOut, useSession } from 'next-auth/react';
import { FaRegUserCircle } from 'react-icons/fa';

import { CartContext } from '@/context/CartContext';
import { WishlistContext } from '@/context/WishListContext';

export default function Navbar() {
   const { numOfCartItems, setnumOfCartItems } = useContext(CartContext);
  const { numOfWishlistItems, setnumOfWishlistItems } = useContext(WishlistContext);
  const { data: myData, status } = useSession();
  function mySignOut() {
    signOut({ redirect: true, callbackUrl: '/login' });
  }
  return (
    <>
      <div className="hidden lg:block text-sm relative bg-white  z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaTruck className="text-green-600" />
                Free Shipping on Orders 500 EGP
              </div>
              <div className="flex items-center gap-2">
                <IoIosGift className="text-green-600" />
                New Arrivals Daily
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="tel:+1 (800) 123-4567"
                  className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors"
                >
                  <FaPhoneAlt />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors"
                >
                  <MdOutlineMailOutline />
                  <span>support@freshcart.com</span>
                </a>
              </div>
              <span className="w-px h-4 bg-gray-200"></span>
              <div className="flex items-center gap-4">
                {status === 'unauthenticated' ? (
                  <>
                    <Link
                      className="flex items-center gap-2 hover:text-green-600 transition-colors"
                      href="/login"
                    >
                      <FiUser />
                      <span>Sign In</span>
                    </Link>
                    <Link
                      className="flex items-center gap-2 hover:text-green-600 transition-colors"
                      href="/register"
                    >
                      <FaUserPlus />
                      <span>Sign Up</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors"
                      href="/profile/addresses"
                    >
                      <FiUser className="text-md" />
                      <span>{myData?.user?.name}</span>
                    </Link>
                    <button
                      onClick={mySignOut}
                      className="flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <FaRightFromBracket className="text-xs" />
                      <span>Sign Out</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
            <Link href="/" className="crusor-pointer shrink-0">
               <Image width={165} height={32} src={Logo} alt="Logo" />
             </Link>
            <form className="hidden lg:flex flex-1 max-w-2xl">
              <Field orientation="horizontal" className="relative ">
                <Input
                  type="search"
                  className="w-full! px-5! py-5! pr-12! rounded-full! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                  placeholder="Search for products, brands and more..."
                />
                <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                  <FaSearch />
                </Button>
              </Field>
            </form>
            <nav className="hidden xl:flex items-center gap-5">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Shop
              </Link>
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 hover:bg-white font-medium transition-colors">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md cursor-pointer">
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-50">
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href="/categories">All Categories</Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f3a8b575d3b90bf957e2`}>
                            Electronics
                          </Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f1bcb575d3b90bf95797`}>
                            {"Women's Fashion"}
                          </Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f243b575d3b90bf957ac`}>
                            {"Men's Fashion"}
                          </Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f0cbb575d3b90bf95779`}>
                            Beauty & Health
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/brands"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Brands
              </Link>
            </nav>
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                href="/content"
                className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <FaHeadset className=" text-green-500" />
                </div>
                <div className="text-xs">
                  <div>
                    <div className="text-gray-400">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </div>
              </Link>
              <Link
                href="/wishlist"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <FaRegHeart className=" text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
                {numOfWishlistItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    {numOfWishlistItems}
                  </span>
                )}
              </Link>
              {/* 16307 */}
              <Link
                href="/cart"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <FaCartShopping className=" text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
                {numOfCartItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    {numOfCartItems}
                  </span>
                )}
              </Link>
              {status === 'unauthenticated' ? (
                <>
                  <Link
                    href="/login"
                    className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-green-600/20"
                  >
                    <FiUser />
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hidden lg:flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors cursor-pointer">
                      <div className="flex items-center justify-center  w-10 h-10 rounded-full hover:bg-gray-100 transition-colors group border-0">
                        <FaRegUserCircle className="text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuLabel className="flex items-center gap-3 p-4 border-b mb-1 border-gray-100">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <FaRegUserCircle className="text-xl text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 truncate">
                              {myData?.user?.name}
                            </p>
                            <p className="font-semibold text-gray-500 truncate">
                              {myData?.user?.email}
                            </p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/profile/addresses"
                          >
                            <FiUser className="w-4 text-gray-400" />
                            My Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/allorders"
                          >
                            <FaBoxOpen className="w-4 text-gray-400" />
                            My Orders
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/wishlist"
                          >
                            <FaRegHeart className="w-4 text-gray-400" />
                            My Wishlist
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/profile/addresses"
                          >
                            <FaRegAddressBook className="w-4 text-gray-400" />
                            Addresses
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/profile/settings"
                          >
                            <IoMdSettings className="w-4 text-gray-400" />
                            Settings
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <div
                          onClick={mySignOut}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:text-red-500 hover:bg-red-50 transition-colors w-full text-left cursor-pointer"
                        >
                          <FaRightFromBracket className="text-xs" />
                          <span>Sign Out</span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
              <Sheet>
                <SheetTrigger className="lg:hidden cursor-pointer ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
                  <FaBars />
                </SheetTrigger>
                <SheetContent className="lg:hidden w-80! right-0! max-w-[85vw] overflow-y-auto!">
                  <SheetHeader className="border-b border-gray-100">
                    <SheetTitle>
                      <Image className="w-auto" src={Logo} alt="freshcart" />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <form className="flex flex-1 max-w-2xl pb-4 border-b border-gray-100">
                      <Field orientation="horizontal" className="relative ">
                        <Input
                          type="search"
                          className="w-full! px-5! py-6! pr-12! rounded-xl! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                          placeholder="Search products..."
                        />
                        <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                          <FaSearch />
                        </Button>
                      </Field>
                    </form>
                    <nav>
                      <div className="space-y-1 flex flex-col">
                        <SheetClose>
                          <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Home
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="/products"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Shop
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="/categories"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Categories
                          </Link>
                        </SheetClose>

                        <SheetClose>
                          <Link
                            href="/brands"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Brands
                          </Link>
                        </SheetClose>
                      </div>
                    </nav>
                    <div className="mx-4 border-t border-gray-100"></div>
                    <div className="flex flex-col">
                      <SheetClose>
                        <Link
                          href="/wish-list"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                              <FaRegHeart className="text-red-500 text-lg" />
                            </div>
                            <span className="font-medium text-gray-700">Wishlist</span>
                          </div>
                        </Link>
                      </SheetClose>
                      <SheetClose>
                        <Link
                          href="/cart"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-md">
                              <FaCartShopping className="text-green-600 text-lg" />
                            </div>
                            <span className="font-medium text-gray-700">Cart</span>
                          </div>
                        </Link>
                      </SheetClose>
                    </div>
                    {status === 'unauthenticated' ? (
                      <>
                        <div className="space-y-1">
                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                              <Link href="/login">Sign In</Link>
                            </SheetClose>
                            <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors">
                              <Link href="/register">Sign Up</Link>
                            </SheetClose>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col space-y-1 border-t border-gray-100 py-4">
                          <SheetClose>
                            <Link
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                              href="/profile/addresses"
                            >
                              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                                <FiUser className="text-gray-500" />
                              </div>
                              <span className="font-medium text-gray-700">
                                {myData?.user?.name}
                              </span>
                            </Link>
                          </SheetClose>
                          <SheetClose>
                            <button
                              onClick={mySignOut}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors w-full text-left cursor-pointer"
                            >
                              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                                <FaRightFromBracket className="text-red-500" />
                              </div>
                              <span className="font-medium text-red-600">Sign Out</span>
                            </button>
                          </SheetClose>
                        </div>
                      </>
                    )}
                    <SheetClose>
                      <Link
                        href="/contact"
                        className="mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <FaHeadset className="text-lg text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-start text-gray-700">
                            Need Help?
                          </div>
                          <div className="text-sm text-green-600">Contact Support</div>
                        </div>
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


// 'use client';

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import gift from "@images/gift.svg";
// import car from "@images/car.svg";
// import Logo from "@images/Logo.svg";
// import hedphone from "@images/hedphone.svg";
// import { Heart, Mail, Phone, Search, User, UserPlus } from "lucide-react";
// import * as React from "react";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { signOut, useSession } from "next-auth/react";
// import { FiUser } from "react-icons/fi";
// import { SheetClose } from "../ui/sheet";
// import { FaRightFromBracket } from "react-icons/fa6";

// const components: { title: string; href: string }[] = [
//   {
//     title: "All Categories",
//     href: "/categories",
//   },
//   {
//     title: "Electronics",
//     href: "/singleSubcategories/6407f3a8b575d3b90bf957e2",
//   },
//   {
//     title: "Women's Fashion",
//     href: "/singleSubcategories/6407f1bcb575d3b90bf95797",
//   },
//   {
//     title: "Men's Fashion",
//     href: "/singleSubcategories/6407f243b575d3b90bf957ac",
//   },
//   {
//     title: "Beauty & Health",
//     href: "/singleSubcategories/6407f0cbb575d3b90bf95779",
//   },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const { data: myData, status } = useSession();
//   function mySignOut() {
//     signOut({ redirect: true, callbackUrl: '/login' });
//   }
//   return (
//     <>
//       <div className="hidden lg:block text-sm border-b border-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-10">
//             <div className="flex item-center text-gray-500 gap-6">
//               <span className="flex gap-2 item-center">
//                 <Image width={15} height={12} src={car} alt="Car" />
//                 <span>Free Shipping on Orders 500 EGP</span>
//               </span>
//               <span className="flex gap-2 item-center">
//                 <Image width={15} height={12} src={gift} alt="Gift" />
//                 <span>New Arrivals Daily</span>
//               </span>
//             </div>
//             <div className="flex item-center gap-6">
//               <div className="flex items-center gap-4 text-gray-500">
//                 <Link
//                   href="tel:+18001234567"
//                   className="flex items-center gap-1.5 hover:text-[#16a34a] transition-colors"
//                 >
//                   <Phone size={15} className="text-xs shrink-0 items-center" />
//                   <span>+1 (800) 123-4567</span>
//                 </Link>
//                 <Link
//                   href="mailto:support@freshcart.com"
//                   className="flex items-center gap-1.5 hover:text-[#16a34a] transition-colors"
//                 >
//                   <Mail size={15} className="text-xs shrink-0" />
//                   support@freshcart.com
//                 </Link>
//               </div>
//               <span className="w-px h-4 bg-gray-200"></span>
//               <div className="flex item-center gap-4">
//                 <Link
//                   href="/login"
//                   className="flex items-center gap-1.5 text-[#4A5565] hover:text-[#16a34a]"
//                 >
//                   <User size={15} />
//                   <span>Sign In</span>
//                 </Link>
//                 <Link
//                   href="/register"
//                   className="flex items-center gap-1.5 text-[#4A5565] hover:text-[#16a34a]"
//                 >
//                   <UserPlus size={15} />
//                   <span>Sign Up</span>
//                 </Link>
//                 {/* <span className="flex items-center gap-1.5 text-[#4A5565]">
//                   <User size={15} />
//                   <span>Galal</span>
//                 </span>
//                 <Link href="/login" className="flex items-center gap-1.5 text-[#4A5565]">
//                   <LogOut size={15} />
//                   <span>Sign In</span>
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <header className="sticky top-0 z-40 bg-white shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
//             <Link href="/" className="crusor-pointer shrink-0">
//               <Image width={165} height={32} src={Logo} alt="Logo" />
//             </Link>
//             <form className="hidden lg:flex flex-1 max-w-2xl">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Search for products, brands and more..."
//                   className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-[#16a34a] focus:ring-[#16a34a]/20 transition-all text-sm"
//                   defaultValue=""
//                 />
//                 <button
//                   type="submit"
//                   className="absolute cursor-pointer right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#16a34a] text-white flex items-center justify-center hover:bg-[#15803d] transition-colors"
//                 >
//                   <Search size={15} />
//                 </button>
//               </div>
//             </form>
//             <nav className="hidden xl:flex items-center gap-6">
//               <Link
//                 className={`link ${pathname === "/" ? "font-medium active hover:text-[#16a34a]" : "font-medium hover:text-[#16a34a]"}`}
//                 href="/"
//               >
//                 Home
//               </Link>

//               <Link
//                 className={`link ${pathname === "/about" ? "font-medium active hover:text-[#16a34a]" : "font-medium hover:text-[#16a34a]"}`}
//                 href="/products"
//               >
//                 Shop
//               </Link>

//               <NavigationMenu>
//                 <NavigationMenuList className="flex items-center gap-1.5 bg-transparent text-gray-700 font-medium">
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger
//                       className="cursor-pointer text-md bg-transparent!
//                         hover:bg-transparent! focus:bg-transparent!
//                         data-[state=open]:bg-transparent!
//                         hover:text-[#16a34a] focus:text-[#16a34a]
//                         data-[state=open]:text-[#16a34a]"
//                     >
//                       Categories
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                       <ul className="min-w-50">
//                         {components.map((component) => (
//                           <ListItem
//                             key={component.title}
//                             title={component.title}
//                             href={component.href}
//                           ></ListItem>
//                         ))}
//                       </ul>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>
//                 </NavigationMenuList>
//               </NavigationMenu>

//               <Link
//                 className={`link ${pathname === "/about" ? "font-medium active hover:text-[#16a34a]" : "font-medium hover:text-[#16a34a]"}`}
//                 href="/brands"
//               >
//                 Brands
//               </Link>
//             </nav>
//             <div className="flex items-center gap-1 lg:gap-2">
//               <Link
//                 href="/content"
//                 className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
//               >
//                 <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center">
//                   <Image
//                     width={20}
//                     height={16}
//                     src={hedphone}
//                     alt="HeadPhone"
//                   />
//                 </div>
//                 <div className="text-xs">
//                   <div className="text-gray-400">Support</div>
//                   <div className="font-semibold text-gray-700">24/7 Help</div>
//                 </div>
//               </Link>
//               <Link
//                 href="/wishlist"
//                 className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <Heart className="hover:text-[#16a34a] text-gray-500" />
//                 {/* {numOfWishlistItems > 0 && (
//                   <span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
//                     {numOfWishlistItems}
//                   </span>
//                 )} */}
//               </Link>
//               <Link
//                 href="/cart"
//                 className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <svg
//                   data-prefix="fas"
//                   data-icon="cart-shopping"
//                   className=" h-5 text-gray-500 hover:text-[#16a34a] transition-colors"
//                   role="img"
//                   viewBox="0 0 640 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
//                   />
//                 </svg>
//               </Link>
//               {/* <Link
//                 href="/login"
//                 className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-semibold transition-colors shadow-sm shadow-[#16a34a33]"
//               >
//                 <User size={15} />
//                 Sign In
//               </Link> */}
//               {status === 'unauthenticated' ? (
//                       <>
//                         <div className="space-y-1">
//                           <div className="grid grid-cols-2 gap-3 pt-2">
//                             <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
//                               <Link href="/login">Sign In</Link>
//                             </SheetClose>
//                             <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors">
//                               <Link href="/register">Sign Up</Link>
//                             </SheetClose>
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="flex flex-col space-y-1 border-t border-gray-100 py-4">
//                           <SheetClose>
//                             <Link
//                               className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
//                               href="/profile/addresses"
//                             >
//                               <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
//                                 <FiUser className="text-gray-500" />
//                               </div>
//                               <span className="font-medium text-gray-700">
//                                 {myData?.user?.name}
//                               </span>
//                             </Link>
//                           </SheetClose>
//                           <SheetClose>
//                             <button
//                               onClick={mySignOut}
//                               className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors w-full text-left cursor-pointer"
//                             >
//                               <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
//                                 <FaRightFromBracket className="text-red-500" />
//                               </div>
//                               <span className="font-medium text-red-600">Sign Out</span>
//                             </button>
//                           </SheetClose>
//                         </div>
//                       </>
//                     )}
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// function ListItem({
//   title,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link
//           href={href}
//           className="block rounded-md p-3
//           hover:bg-transparent! focus:bg-transparent!
//           hover:text-[#16a34a] focus:text-[#16a34a]
//           transition-colors"
//         >
//           <div className="flex flex-col gap-1 text-sm">
//             <div className="leading-none font-medium">{title}</div>
//           </div>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
