import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";

const dishes = [
  {
    id: 1,
    name: "Dish name 1",
    cals: "312",
    image: "/assets/dish/dish-40.png",
    status: ''
  },
  {
    id: 2,
    name: "Dish name 2",
    cals: "255",
    image: "/assets/dish/dish-41.png",
    status: ''
  },
  {
    id: 3,
    name: "Dish name 3",
    cals: "330",
    image: "/assets/dish/dish-42.png",
    status: ''
  },
  {
    id: 4,
    name: "Dish name 4",
    cals: "158",
    image: "/assets/dish/dish-43.png",
    status: ''
  },
  {
    id: 5,
    name: "Dish name 5",
    cals: "142",
    image: "/assets/dish/dish-44.png",
    status: ''
  },
  { id: 6, name: "Dish name 6", cals: "26", image: "/assets/dish/dish-45.png" },
  { id: 7, name: "Dish name 7", cals: "80", image: "/assets/dish/dish-46.png" },
  { id: 8, name: "Dish name 8", cals: "60", image: "/assets/dish/dish-47.png" },
  {
    id: 9,
    name: "Dish name 9",
    cals: "288",
    image: "/assets/dish/dish-48.png",
  },
  {
    id: 10,
    name: "Dish name 10",
    cals: "655",
    image: "/assets/dish/dish-49.png",
  },
];

const BestSellSection = () => {
  return (
    <>
      <section className="">
        <div className="container py-12 px-4 md:px-8">
          <Tabs defaultValue="best-sellers">
            <TabsList className="w-full bg-white justify-start p-0 gap-10 mb-4">
              <TabsTrigger
                className="px-0 relative data-[state=active]:after:absolute data-[state=active]:after:top-14 data-[state=active]:after:rounded-md data-[state=active]:after:inset-x-0 data-[state=active]:after:w-full data-[state=active]:after:h-[6px] data-[state=active]:after:bg-orange-400 data-[state=active]:md:text-3xl data-[state=active]:text-black text-xs md:text-2xl font-bold text-lightGray data-[state=active]:text-sm"
                value="best-sellers"
              >
                Our best sellers
              </TabsTrigger>
              <TabsTrigger
                className="px-0 relative data-[state=active]:after:absolute data-[state=active]:after:top-14 data-[state=active]:after:rounded-md data-[state=active]:after:inset-x-0 data-[state=active]:after:w-full data-[state=active]:after:h-[6px] data-[state=active]:after:bg-orange-400 data-[state=active]:md:text-3xl data-[state=active]:text-black text-xs md:text-2xl font-bold text-lightGray data-[state=active]:text-sm"
                value="must-try"
              >
                Must try
              </TabsTrigger>
              <TabsTrigger
                className="px-0 relative data-[state=active]:after:absolute data-[state=active]:after:top-14 data-[state=active]:after:rounded-md data-[state=active]:after:inset-x-0 data-[state=active]:after:w-full data-[state=active]:after:h-[6px] data-[state=active]:after:bg-orange-400 data-[state=active]:md:text-3xl data-[state=active]:text-black text-xs md:text-2xl font-bold text-lightGray data-[state=active]:text-sm"
                value="unique-dishes"
              >
                Unique dishes
              </TabsTrigger>
            </TabsList>

            <p className="text-base text-black font-medium py-5">
              These dishes were ordered multiple times by our customers
            </p>

            <TabsContent value="best-sellers">
              <div className="lg:grid flex lg:grid-cols-5 gap-8 lg:gap-12 overflow-scroll pb-5 scrollbar-none">
                {dishes.map((dish) => (
                  <ProductCard key={dish.id} dish={dish} />
                ))}
              </div>

              <div className="mt-16 text-center hidden md:block">
                <Button
                  variant={null}
                  className="rounded-full border border-[#ccc] px-7 py-6 text-warning text-xl font-bold"
                >
                  View more
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <hr className="container broder border-section-color hidden md:block" />
      </section>
    </>
  );
};

export default BestSellSection;
