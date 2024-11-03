"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slides() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      fixedText: "Our solutions for your business growth.",
      movingText: "WEB DEVELOPMENT",
      images: "./images/image2.2.jpeg"
    },
    {
      fixedText: "Our solutions for your business growth.",
      movingText: "DIGITAL MARKETING",
      images: "./images/image3.jpg"
    },
    {
      fixedText: "Our solutions for your business growth.",
      movingText: "INTERNSHIP",
      images: "./images/meeting.JPG"
    },
  ];

  return (
    <>
      <div className="relative w-full" style={{ minHeight: "100vh" }}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          allowSlidePrev={true} // Prevent sliding backward
          className="mySwiper mt-[-90px] w-full h-full"
          style={{ height: "100vh" }}
        >
          {slidesData.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img
                  src={`${slide.images}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#565A70] bg-opacity-60">
                  {/* Moving text with animation */}
                  <div className="absolute inset-0 flex top-[-75px] items-center justify-center md:justify-start md:top-[-65px] md:left-40 p-8">
                    <p
                      key={activeIndex} // Changing key triggers re-animation
                      className="text-white  text-3xl font-bold md:text-5xl transition-transform duration-1000 animate-slideIn mb-2"
                    >
                      {slide.movingText}
                    </p>
                  </div>

                  {/* Fixed text above the moving text */}
                  <div className="absolute top-80 transform -translate-y-1/2 text-white text-xl md:text-center text-center w-full md:w-auto md:left-48">
                    {slide.fixedText}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        /* Slide-in animation for moving text */
        @keyframes slideIn {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}
