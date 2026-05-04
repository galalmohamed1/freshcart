"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import gift from "@images/gift.svg";
import car from "@images/car.svg";
import Logo from "@images/Logo.svg";
import hedphone from "@images/hedphone.svg";
import { Heart, Mail, Phone, Search, User, UserPlus } from "lucide-react";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
  {
    title: "All Categories",
    href: "/categories",
  },
  {
    title: "Electronics",
    href: "/singleSubcategories/6407f3a8b575d3b90bf957e2",
  },
  {
    title: "Women's Fashion",
    href: "/singleSubcategories/6407f1bcb575d3b90bf95797",
  },
  {
    title: "Men's Fashion",
    href: "/singleSubcategories/6407f243b575d3b90bf957ac",
  },
  {
    title: "Beauty & Health",
    href: "/singleSubcategories/6407f0cbb575d3b90bf95779",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden lg:block text-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex item-center text-gray-500 gap-6">
              <span className="flex gap-2 item-center">
                <Image width={15} height={12} src={car} alt="Car" />
                <span>Free Shipping on Orders 500 EGP</span>
              </span>
              <span className="flex gap-2 item-center">
                <Image width={15} height={12} src={gift} alt="Gift" />
                <span>New Arrivals Daily</span>
              </span>
            </div>
            <div className="flex item-center gap-6">
              <div className="flex items-center gap-4 text-gray-500">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-1.5 hover:text-[#16a34a] transition-colors"
                >
                  <Phone size={15} className="text-xs shrink-0 items-center" />
                  <span>+1 (800) 123-4567</span>
                </Link>
                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-1.5 hover:text-[#16a34a] transition-colors"
                >
                  <Mail size={15} className="text-xs shrink-0" />
                  support@freshcart.com
                </Link>
              </div>
              <span className="w-px h-4 bg-gray-200"></span>
              <div className="flex item-center gap-4">
                <Link
                  href=""
                  className="flex items-center gap-1.5 text-[#4A5565] hover:text-[#16a34a]"
                >
                  <User size={15} />
                  <span>Sign In</span>
                </Link>
                <Link
                  href=""
                  className="flex items-center gap-1.5 text-[#4A5565] hover:text-[#16a34a]"
                >
                  <UserPlus size={15} />
                  <span>Sign Up</span>
                </Link>
                {/* <span className="flex items-center gap-1.5 text-[#4A5565]">
                  <User size={15} />
                  <span>Galal</span>
                </span>
                <Link href="" className="flex items-center gap-1.5 text-[#4A5565]">
                  <LogOut size={15} />
                  <span>Sign In</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
            <Link href="/" className="crusor-pointer shrink-0">
              <Image width={165} height={32} src={Logo} alt="Logo" />
            </Link>
            <form className="hidden lg:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-[#16a34a] focus:ring-[#16a34a]/20 transition-all text-sm"
                  defaultValue=""
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#16a34a] text-white flex items-center justify-center hover:bg-[#15803d] transition-colors"
                >
                  <Search size={15} />
                </button>
              </div>
            </form>
            <nav className="hidden xl:flex items-center gap-6">
              <Link
                className={`link ${pathname === "/" ? "font-medium active hover:text-[#16a34a]" : "font-medium hover:text-[#16a34a]"}`}
                href="/"
              >
                Home
              </Link>

              <Link
                className={`link ${pathname === "/about" ? "font-medium active hover:text-[#16a34a]" : "font-medium hover:text-[#16a34a]"}`}
                href="/products"
              >
                Shop
              </Link>

              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1.5 bg-transparent text-gray-700 font-medium">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="cursor-pointer text-md bg-transparent!
                        hover:bg-transparent! focus:bg-transparent!
                        data-[state=open]:bg-transparent!
                        hover:text-[#16a34a] focus:text-[#16a34a]
                        data-[state=open]:text-[#16a34a]"
                    >
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-50">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                className={`link ${pathname === "/about" ? "font-medium active hover:text-[#16a34a]" : "font-medium hover:text-[#16a34a]"}`}
                href="/brands"
              >
                Brands
              </Link>
            </nav>
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                href="/content"
                className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center">
                  <Image
                    width={20}
                    height={16}
                    src={hedphone}
                    alt="HeadPhone"
                  />
                </div>
                <div className="text-xs">
                  <div className="text-gray-400">Support</div>
                  <div className="font-semibold text-gray-700">24/7 Help</div>
                </div>
              </Link>
              <Link
                href="/wishlist"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart className="hover:text-[#16a34a] text-gray-500" />
              </Link>
              <Link
                href="/cart"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  data-prefix="fas"
                  data-icon="cart-shopping"
                  className=" h-5 text-gray-500 hover:text-[#16a34a] transition-colors"
                  role="img"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                  />
                </svg>
              </Link>
              <Link
                href=""
                className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-semibold transition-colors shadow-sm shadow-[#16a34a33]"
              >
                <User size={15} />
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-3
          hover:bg-transparent! focus:bg-transparent!
          hover:text-[#16a34a] focus:text-[#16a34a]
          transition-colors"
        >
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
