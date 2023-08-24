"use client";

import React from "react";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const lists = [
  {
    id: 1,
    heading: "100N Benefits",
    title2: "Benefit 1",
    image: "/assets/banner-dish.jpeg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Congue eu consequat ac felis donec et odio  pellentesque diam.u",
  },
  {
    id: 2,
    heading: "100N Benefits",
    title2: "Benefit 2",
    image: "/assets/banner-dish.jpeg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Congue eu consequat ac felis donec et odio  pellentesque diam.u",
  },
  {
    id: 3,
    heading: "100N Benefits",
    title2: "Benefit 3",
    image: "/assets/banner-dish.jpeg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Congue eu consequat ac felis donec et odio  pellentesque diam.u",
  },
];

const TipsSection = () => {
  return (
    <section>
      <div className="container md:px-8 py-16 md:py-32">
        <div className="">
          <h3 className="text-warning font-bold text-3xl block lg:hidden text-center mb-10">
            100N Benefits
          </h3>

          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            speed={1500}
            loop
            autoplay={{ delay: 3000 }}
            className="h-full tips-swipper px-4 xs:px-5 pb-20 md:py-5"
          >
            {lists.map((list) => (
              <SwiperSlide key={list.id}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8
              h-auto lg:h-[300px] overflow-hidden
               shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] rounded-2.5xl bg-white"
                >
                  <div className="">
                    <img
                      className="w-full h-auto xs:h-[300px]"
                      src={list.image}
                      alt="banner dish"
                    />
                  </div>
                  <div className="px-4 py-4 sm:py-6">
                    <h3 className="text-warning font-bold text-3xl hidden lg:block">
                      {list.heading}
                    </h3>
                    <h5 className="text-black font-bold text-xl mt-2">
                      {list.title2}
                    </h5>
                    <p className="text-black text-xl font-normal mt-5">
                      {list.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
