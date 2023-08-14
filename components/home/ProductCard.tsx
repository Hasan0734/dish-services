import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
  
const ProductCard = ({dish}:any) => {
  return (
    <>
      <Sheet key={dish.id}>
        <Card className="border-0 shadow-none ">
          <SheetTrigger asChild>
            <div className="relative w-full h-[299px] rounded-xl hover:cursor-pointer">
              <Image fill src={dish.image} alt="product-image" />
            </div>
          </SheetTrigger>

          <div className="pt-5 text-center">
            <h2 className="text-black text-xl font-bold">{dish.name}</h2>
            <h6 className="text-base text-black font-medium mt-2">
              {dish.cals} Cals
            </h6>
          </div>
        </Card>
        <SheetContent className="sm:max-w-[719px] p-8 flex flex-col">
          <div className="flex-grow">
            <div className="w-full mt-5">
              <img className="" src="assets/dish-81.png" alt="dish" />

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
                Okay understood
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProductCard;
