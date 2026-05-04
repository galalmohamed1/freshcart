"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({
  spaceBetween = 0,
  sliderPerView = 1,
  listOfSlides,
}: {
  spaceBetween?: number;
  sliderPerView?: number;
  listOfSlides: {
    image: string;
    title: string;
    desc: string;
    link: string;
    linkDesc: string;
    link2?: string;
    linkDesc2?: string;
    color?: string;
  }[];
}) {
  return (
    <Swiper
      className="
    h-100 relative

    [&_.swiper-pagination]:!bottom-5
    [&_.swiper-pagination-bullet]:!w-2.5
    [&_.swiper-pagination-bullet]:!h-2.5
    [&_.swiper-pagination-bullet]:!bg-white
    [&_.swiper-pagination-bullet]:!opacity-70
    [&_.swiper-pagination-bullet]:!transition-all
    [&_.swiper-pagination-bullet]:!duration-300
    [&_.swiper-pagination-bullet-active]:!w-7
    [&_.swiper-pagination-bullet-active]:!rounded-full
    [&_.swiper-pagination-bullet-active]:!bg-white
    [&_.swiper-pagination-bullet-active]:!opacity-100

    [&_.swiper-slide-active_.slide-title]:translate-y-0
    [&_.swiper-slide-active_.slide-title]:opacity-100
    [&_.swiper-slide-active_.slide-desc]:translate-y-0
    [&_.swiper-slide-active_.slide-desc]:opacity-100
    [&_.swiper-slide-active_.slide-btn-left]:translate-x-0
    [&_.swiper-slide-active_.slide-btn-left]:opacity-100
    [&_.swiper-slide-active_.slide-btn-right]:translate-x-0
    [&_.swiper-slide-active_.slide-btn-right]:opacity-100
  "
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={spaceBetween}
      slidesPerView={sliderPerView}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      loop={true}
    >
      {listOfSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-100 flex items-center justify-center relative"
          >
            <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50 overflow-hidden">
              <div className="container p-4 md:px-18 h-full content-center overflow-hidden">
                <h2
                  className="
        slide-title
        text-white text-3xl font-bold mb-4 max-w-96
        translate-y-14 opacity-0
        transition-all duration-700 ease-out
      "
                >
                  {slide.title}
                </h2>

                <p
                  className="
        slide-desc
        text-white text-sm sm:text-base md:text-lg mb-4
        translate-y-14 opacity-0
        transition-all duration-700 delay-150 ease-out
      "
                >
                  {slide.desc}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 overflow-hidden">
                  <Link
                    className={`slide-btn-left px-4 py-2 font-semibold text-[16px] bg-white border-2 border-white/50 rounded-lg hover:scale-105 transition-all duration-700 delay-300 ease-out -translate-x-20 opacity-0 ${
                      slide.color === "green-500"
                        ? "text-green-500"
                        : slide.color === "blue-500"
                          ? "text-blue-500"
                          : slide.color === "purple-500"
                            ? "text-purple-500"
                            : "text-black"
                    }`}
                    href={slide.link}
                  >
                    {slide.linkDesc}
                  </Link>

                  {slide.link2 && slide.linkDesc2 && (
                    <Link
                      className="
            slide-btn-right
            px-4 py-2 rounded-lg font-semibold text-[16px]
            bg-transparent border-2 border-white/50 text-white
            hover:scale-105
            transition-all duration-700 delay-300 ease-out
            translate-x-20 opacity-0
          "
                      href={slide.link2}
                    >
                      {slide.linkDesc2}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <button
        type="button"
        className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        type="button"
        className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={26} />
      </button>
    </Swiper>
  );
}
