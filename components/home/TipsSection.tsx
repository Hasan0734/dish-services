"use client";

import React from "react";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const TipsSection = () => {
  return (
    <section>
      <div className="container px-4 md:px-8 py-32">
        <div className="">
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            speed={1500}
            loop
            autoplay={{ delay: 3000 }}
            className="h-full tips-swipper px-5 pb-20 md:py-5"
          >
            <SwiperSlide>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8
               h-auto lg:h-[300px] overflow-hidden
                shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] md:rounded-2.5xl bg-white">
                <div className="">
                  <img
                    className="w-full h-[300px] "
                    src="/assets/banner-dish.jpeg"
                    alt="banner dish"
                  />
                </div>
                <div className="px-4 py-6">
                  <h3 className="text-warning font-bold text-3xl">
                    100N Benefits
                  </h3>
                  <h5 className="text-black font-bold text-xl mt-2">
                    Benefit 1
                  </h5>
                  <p className="text-black text-xl font-normal mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Congue eu consequat ac felis donec et odio
                    pellentesque diam.u
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8
               h-auto lg:h-[300px] overflow-hidden
                shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] md:rounded-2.5xl bg-white">
                <div className="">
                  <img
                    className="w-full h-[300px] "
                    src="/assets/banner-dish.jpeg"
                    alt="banner dish"
                  />
                </div>
                <div className="px-4 py-6">
                  <h3 className="text-warning font-bold text-3xl">
                    100N Benefits
                  </h3>
                  <h5 className="text-black font-bold text-xl mt-2">
                    Benefit 1
                  </h5>
                  <p className="text-black text-xl font-normal mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Congue eu consequat ac felis donec et odio
                    pellentesque diam.u
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8
               h-auto lg:h-[300px] overflow-hidden
                shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] md:rounded-2.5xl bg-white">
                <div className="">
                  <img
                    className="w-full h-[300px] "
                    src="/assets/banner-dish.jpeg"
                    alt="banner dish"
                  />
                </div>
                <div className="px-4 py-6">
                  <h3 className="text-warning font-bold text-3xl">
                    100N Benefits
                  </h3>
                  <h5 className="text-black font-bold text-xl mt-2">
                    Benefit 1
                  </h5>
                  <p className="text-black text-xl font-normal mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Congue eu consequat ac felis donec et odio
                    pellentesque diam.u
                  </p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
