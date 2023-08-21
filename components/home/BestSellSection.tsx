import React, { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { dishes } from "@/utils/data";

const tabItems = [
  { title: "Our best sellers", slug: "our-best-sellers" },
  { title: "Must try", slug: "must-try" },
  { title: "Unique dishes", slug: "unique-dishes" },
];

const BestSellSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);



  return (
    <>
      <section className="">
        <div className="container py-12 px-4 md:px-8">
          <Tabs defaultValue="best-sellers" className="">
            <div className="relative mb-4">
              <TabsList className="w-full bg-white justify-start p-0 gap-10 sm:mb-3">
                {tabItems.map((tab, idx) => (
                  <TabsTrigger
                    key={idx}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    onClick={() => setActiveTabIndex(idx)}
                    className="px-0 relative data-[state=active]:md:text-3xl data-[state=active]:text-black text-xs md:text-2xl font-bold text-lightGray data-[state=active]:text-sm"
                    value={tab.slug}
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              
              </TabsList>
              <div className="border-b border-gray md:border-0">
                <span
                  className={`absolute bottom-0 h-[3px] sm:h-2 block bg-warning rounded-full transition-all duration-300 `}
                  style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                ></span>
              </div>
            </div>

            <p className="text-base text-black font-medium py-5">
              These dishes were ordered multiple times by our customers
            </p>

            <TabsContent value="our-best-sellers">
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
            <TabsContent value="must-try">
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
            <TabsContent value="unique-dishes">
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
          </Tabs>
        </div>
        <hr className="container broder border-section-color hidden md:block" />
      </section>
    </>
  );
};

export default BestSellSection;
