import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const dishes = [
  {
    id: 1,
    name: "Dish name 1",
    cals: "312",
    image: "/assets/dish/dish-40.png",
  },
  {
    id: 2,
    name: "Dish name 2",
    cals: "255",
    image: "/assets/dish/dish-41.png",
  },
  {
    id: 3,
    name: "Dish name 3",
    cals: "330",
    image: "/assets/dish/dish-42.png",
  },
  {
    id: 4,
    name: "Dish name 4",
    cals: "158",
    image: "/assets/dish/dish-43.png",
  },
  {
    id: 5,
    name: "Dish name 5",
    cals: "142",
    image: "/assets/dish/dish-44.png",
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
              <div className="grid grod-cols-1 lg:grid-cols-5 gap-12">
                {dishes.map((dish) => (
                  <Card key={dish.id} className="border-0 shadow-none">
                    <div className="relative w-full h-[299px] rounded-xl">
                      <Image fill src={dish.image} alt="product-image" />
                    </div>
                    <div className="pt-5 text-center">
                      <h2 className="text-black text-xl font-bold">
                        {dish.name}
                      </h2>
                      <h6 className="text-base text-black font-medium mt-2">
                        {dish.cals} Cals
                      </h6>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-16 text-center">
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
        <hr className="container broder border-section-color" />
      </section>
    </>
  );
};

export default BestSellSection;
