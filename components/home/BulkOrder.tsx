import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const BulkOrder = () => {
  return (
    <>
      <section>
        <div className="container py-32 px-0 md:px-8 ">
          <div className="flex flex-col lg:flex-row md:shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] md:rounded-2.5xl">
            <div className="w-full lg:w-[772px] flex-shrink-0">
              <img className="w-full" src="/assets/dish-80.png" alt="dish" />
            </div>

            <div className=" h-full px-8 md:px-16 flex-shrink py-7">
              <form action="">
                <div>
                  <h2 className="text-2xl sm:text-4xxl font-bold text-black">
                    Do you have a <br />{" "}
                    <span className="text-green">Bulk Order?</span>
                  </h2>
                  <p className="text-black  text-xs sm:text-xl mt-4">
                    Please do share your contact and requirement, we will get
                    back to you with a quote.
                  </p>
                </div>

                <div className="mt-5 space-y-5">
                  <div className="space-y-2">
                    <Label
                      className="text-sm sm:text-base text-black"
                      htmlFor="name"
                    >
                      Your name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="border py-3 border-gray rounded placeholder:text-xs placeholder:sm:text-sm placeholder:text-gray focus-visible:ring-0  focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      className="text-sm sm:text-base text-black"
                      htmlFor="contact"
                    >
                      Contact number
                    </Label>
                    <Input
                      id="contact"
                      placeholder="Contact number"
                      className="border py-3 border-gray rounded placeholder:text-xs placeholder:sm:text-sm placeholder:text-gray focus-visible:ring-0  focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      className="text-sm sm:text-base text-black"
                      htmlFor="requirement"
                    >
                      Requirement
                    </Label>
                    <Textarea
                      rows={5}
                      id="requirement"
                      placeholder="Requirement"
                      className="resize-none border py-3 border-gray rounded placeholder:text-xs placeholder:sm:text-sm placeholder:text-gray focus-visible:ring-0  focus-visible:ring-offset-0"
                    />

                  </div>
                <div className="text-right">
                <Button variant={null} className="rounded-full bg-warning text-white text-xl px-5 py-3 font-bold">Send</Button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="container broder border-section-color" />
      </section>
    </>
  );
};

export default BulkOrder;
