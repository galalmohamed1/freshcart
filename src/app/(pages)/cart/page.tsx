import { FaCartShopping, FaTrash, FaTruck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import hedphone from "@images/home-slider-1.png";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export default function page() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link className="hover:text-[#16a34a] transition" href="/">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Shopping Cart</span>
            </nav>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="bg-[#16a34a] text-white w-12 h-12 rounded-xl flex items-center justify-center">
                    <FaCartShopping />
                  </span>
                  Shopping Cart
                </h1>
                <p className="text-gray-500 mt-2">
                  You have
                  <span className="font-semibold text-[#16a34a]"> 1 item </span>
                  in your cart
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
                  <div className="flex gap-4 sm:gap-6">
                    <Link className="relative shrink-0 group" href="/prudect">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
                        <Image src={hedphone} alt="HeadPhone" />
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="mb-3">
                        <Link
                          className="group/title"
                          href="/products/6428eb43dc1175abc65ca0b3"
                        >
                          <h3 className="font-semibold text-gray-900 group-hover/title:text-[#16a34a] transition-colors leading-relaxed text-base sm:text-lg">
                            Woman Shawl
                          </h3>
                        </Link>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-block px-2.5 py-1 bg-primary-50 text-[#15803d] text-xs font-medium rounded-full">
                            Women`s Fashion
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-[#16a34a] font-bold text-lg">
                          145 EGP
                        </span>
                      </div>
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                          <button className="h-8 w-8 rounded-lg cursor-pointer bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all">
                            <FiMinus />
                          </button>
                          <span className="w-12 text-center font-bold text-gray-900">
                            1
                          </span>
                          <button className="h-8 w-8 rounded-lg cursor-pointer bg-[#16a34a] shadow-sm flex items-center justify-center text-white hover:bg-[#15803d] transition-all">
                            <FaPlus />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-gray-400 mb-0.5">
                              Total
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                              145
                              <span className="text-sm font-medium text-gray-400">
                                EGP
                              </span>
                            </p>
                          </div>
                          <button className="h-10 w-10 rounded-xl cursor-pointer border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
                  <div className="flex gap-4 sm:gap-6">
                    <Link className="relative shrink-0 group" href="/prudect">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
                        <Image src={hedphone} alt="HeadPhone" />
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="mb-3">
                        <Link
                          className="group/title"
                          href="/products/6428eb43dc1175abc65ca0b3"
                        >
                          <h3 className="font-semibold text-gray-900 group-hover/title:text-[#16a34a] transition-colors leading-relaxed text-base sm:text-lg">
                            Woman Shawl
                          </h3>
                        </Link>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-block px-2.5 py-1 bg-primary-50 text-[#15803d] text-xs font-medium rounded-full">
                            Women`s Fashion
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-[#16a34a] font-bold text-lg">
                          145 EGP
                        </span>
                      </div>
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                          <button className="h-8 w-8 rounded-lg cursor-pointer bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all">
                            <FiMinus />
                          </button>
                          <span className="w-12 text-center font-bold text-gray-900">
                            1
                          </span>
                          <button className="h-8 w-8 rounded-lg cursor-pointer bg-[#16a34a] shadow-sm flex items-center justify-center text-white hover:bg-[#15803d] transition-all">
                            <FaPlus />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-gray-400 mb-0.5">
                              Total
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                              145
                              <span className="text-sm font-medium text-gray-400">
                                EGP
                              </span>
                            </p>
                          </div>
                          <button className="h-10 w-10 rounded-xl cursor-pointer border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <Link
                  className="text-[#16a34a] hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                  href="/"
                >
                  <span>←</span> Continue Shopping
                </Link>
                <button className="group flex cursor-pointer items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors">
                  <FaTrash />
                  <span>Clear all items</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 sticky shadow-sm top-4 oerflow-hidden">
                <div className="bg-linear-to-br from-[#16A34A] rounded-t-2xl to-[#15803D] px-5 py-2">
                  <h2 className="text-white font-bold text-lg flex item-center gap-2">
                    <BiSolidShoppingBag size={20} className="mt-1" />
                    Order Summary
                  </h2>
                  <p className="text-[#DCFCE7] font-medium text-sm leading-5">
                    4 items in your cart
                  </p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-linear-to-br from-[#F0FDF4] to-[#F3F4F6] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCFCE7]">
                      <FaTruck className="text-xl text-green-700" />
                    </div>

                    <div>
                      {" "}
                      <p className="font-semibold text-[#008236] leading-5">
                        Free Shipping!
                      </p>{" "}
                      <p className="font-medium text-[#00A63E] leading-5 text-sm">
                        You qualify for free delivery
                      </p>{" "}
                    </div>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal (5 items)</span>
                    <span className="font-semibold">1,385 EGP</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">
                      Calculated at checkout
                    </span>
                  </div>
                  <hr className="border-gray-200"></hr>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Estimated Total</span>
                    <span className="text-[#16a34a]">1,385 EGP</span>
                  </div>
                  <div className="pt-4 space-y-3">
                    <Link
                      className="w-full flex items-center justify-center gap-2 bg-[#16a34a] text-white py-3.5 rounded-xl font-semibold hover:bg-[#15803d] transition-all"
                      href="/cart"
                    >
                      <FaUser className="text-white" />
                      Login to Checkout
                    </Link>
                    <p className="text-xs text-gray-400 text-center">
                      Dont have an account?
                      <Link
                        className="text-[#16a34a] hover:underline"
                        href="/cart"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <p className="text-xs text-gray-500">
                      ✓ Your cart items will be saved
                    </p>
                    <p className="text-xs text-gray-500">
                      ✓ Track your orders easily
                    </p>
                    <p className="text-xs text-gray-500">
                      ✓ Access exclusive member deals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
