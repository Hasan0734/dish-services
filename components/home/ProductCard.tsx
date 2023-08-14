"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { useWindowSize } from "@/lib/hooks";

const ProductCard = ({ dish }: any) => {
  const windowSize = useWindowSize();

  return (
    <>
      <Sheet key={dish.id}>
        <Card className="border-0 shadow-none w-[238px] flex-grow flex-shrink-0">
          <SheetTrigger asChild>
            <div className="relative w-full h-[299px] rounded-xl hover:cursor-pointer">
              <Image fill src={dish.image} alt="product-image" />

              {/* status */}
              <div className="absolute border border-warning right-5 top-5 w-6 h-6 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-warning block"></span>
              </div>
              
            </div>
          </SheetTrigger>

          <div className="pt-5 text-center">
            <h2 className="text-black text-xl font-bold">{dish.name}</h2>
            <h6 className="text-base text-black font-medium mt-2">
              {dish.cals} Cals
            </h6>
          </div>
        </Card>

        <SheetContent
          side={windowSize.width > 719 ? "right" : "bottom"}
          className="sm:max-w-[719px] p-8 flex flex-col"
        >
          <div className="flex-grow">
            <div className="w-full mt-5 relative">
              <img className="" src="assets/dish-81.png" alt="dish" />
              <div className="absolute border border-warning right-5 top-5 w-6 h-6 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-warning block"></span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-green text-2xl font-bold">{dish.name}</h3>
              <p className="text-xl font-medium text-black">312 Cals</p>
            </div>
            <div className="mt-8">
              <h4 className="text-black text-base font-bold">Ingredients</h4>
              <p className="text-black text-base mt-2">
                Some text, Some text, Some text, Some text, Some text, Some text
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-black text-base font-bold">Nutrition</h4>
              <ul className="text-black text-base  max-w-sm mt-2">
                <li className="flex items-center justify-between">
                  <span>Energy</span>
                  <span>0</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Fat</span>
                  <span>20g</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Cholestrol</span>
                  <span>20g</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Protein</span>
                  <span>20g</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Some text</span>
                  <span>xxg</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center flex-grow-0">
            <SheetClose asChild>
              <Button
                variant={null}
                className="text-warning rounded-full px-5 py-3 font-bold text-xl border border-gray"
              >
                <span className="hidden md:block">Okay understood</span>
                <span className="block md:hidden">Close</span>
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProductCard;
