import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { dishes } from "@/utils/data";


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
              <div className="lg:grid flex lg:grid-cols-5 gap-8 overflow-scroll pb-5 scrollbar-none">
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
