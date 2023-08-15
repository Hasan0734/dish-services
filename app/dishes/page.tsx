"use client";

import ProductCard from "@/components/home/ProductCard";
import { categories, dishes } from "@/utils/data";
import { useState } from "react";

const Dishes = () => {
  const [category, setCategory] = useState("wraps");

  return (
    <section className="mt-20">
      <div className="container py-6 block md:hidden">
        <ul className="mt-5 flex items-center overflow-auto scrollbar-none  gap-5">
          {categories.map((cate) => (
            <li key={cate.id} className=" whitespace-nowrap first:pl-5 last:pr-5">
              <span
                onClick={() => setCategory(cate.slug)}
                className={`px-5 py-2.5 w-full ${
                  category === cate.slug
                    ? "bg-warning text-white"
                    : "text-black"
                } text-base font-medium text-left block cursor-pointer w-full rounded-full border border-gray`}
              >
                {cate.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container bg-white md:flex px-4 md:px-0">
        <div className="w-full md:w-72 px-4 pt-10 pb-5 md:border-r border-gray hidden md:block">
          <h3 className="text-2xl font-bold text-black text-center">
            Our dishes
          </h3>
          <ul className="mt-5 block md:space-y-4">
            {categories.map((cate) => (
              <li key={cate.id} className="flex-grow flex-shrink flex-1 w-full ">
                <span
                  onClick={() => setCategory(cate.slug)}
                  className={`px-5 py-2.5 w-full ${
                    category === cate.slug
                      ? "bg-warning text-white"
                      : "text-black"
                  } text-base font-medium text-left block cursor-pointer w-full`}
                >
                  {cate.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 pb-5 mt-20 md:pl-12 ">
          {dishes.map((dish) => (
            <ProductCard
              key={dish.id}
              dish={dish}
              className=" w-full xs:w-full sm:w-[238px]"
              height="h-[181px] sm:h-[299px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
