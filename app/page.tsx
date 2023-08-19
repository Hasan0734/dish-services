"use client";
import BestSellSection from "@/components/home/BestSellSection";
import BulkOrder from "@/components/home/BulkOrder";
import SecondSection from "@/components/home/SecondSection";
import TipsSection from "@/components/home/TipsSection";
import VideoSection from "@/components/home/VideoSection";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [currentDashOffset, setCurrentDashOffset] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setCurrentDashOffset(currentDashOffset - 100 / 60);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentDashOffset]);

  return (
    <>
      <section className="mt-20">
        <div className="container relative bg-warning h-[500px] md:h-[700px]">
          <div className="absolute inset-0 flex justify-center py-10 z-10">
            <div className="text-white">
              <div className="text-center">
                <h1 className="text-2xl md:text-[40px] md:leading-[48px] font-bold">
                  {time.getHours() < 12 && "Good Morning"}
                  {time.getHours() >= 12 &&
                    time.getHours() <= 18 &&
                    "Good Afternoon"}
                </h1>
                <p className="font-normal text-sm md:text-xl">
                  Having a healthy breakfast reduces chances of blood sugar by{" "}
                  <b>75%</b>
                </p>
              </div>
              <div className="flex justify-center mt-12 relative">
                {time.getHours() < 12 && (
                  <img
                    className="w-[210px] lg:w-[375px] h-[207px] lg:h-[372px] rounded-full absolute"
                    src="/assets/cap-dish-2.png"
                    alt="dish"
                  />
                )}
                {time.getHours() >= 12 && time.getHours() <= 18 && (
                  <img
                    className="w-[210px] lg:w-[375px] h-[207px] lg:h-[372px] rounded-full absolute"
                    src="/assets/cap-dish-1.png"
                    alt="dish"
                  />
                )}

                <div className="clock-svg relative  w-[200px] lg:w-[365px] h-[200px] lg:h-[365px]">
                  <svg viewBox="0 0 62 62">
                    <circle
                      className="pie1"
                      cx="29.9"
                      cy="31"
                      r="15.9"
                      style={{
                        strokeDasharray: `${
                          100 - (100 * time.getMinutes()) / 60
                        } 100`,
                      }}
                    />
                  </svg>

                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full">
                    <img
                      className=" w-full rounded-full"
                      src="/assets/clock.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" w-[200px] lg:w-[365px] h-[200px] lg:h-[365px] rounded-full absolute">
                  <div className="clock relative w-full h-full flex items-center justify-center">
                    <div className="hour">
                      <div
                        style={{
                          transform: `rotateZ(${time.getHours() * 30}deg)`,
                        }}
                        className="hr"
                        id="hr"
                      ></div>
                    </div>
                    <div className="min">
                      <div
                        style={{
                          transform: `rotateZ(${time.getMinutes() * 6}deg)`,
                        }}
                        className="mn"
                        id="mn"
                      ></div>
                    </div>
                    {/* <div className="sec">
                      <div style={{transform: `rotateZ(${time.getSeconds() * 6}deg)`}} className="sc" id="sc"></div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-sm md:text-2xl font-normal">
                  Healthy food for you all day
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-9 md:-bottom-[9.25rem] md:inset-x-0 ">
            <img
              className="w-full"
              src="/assets/bg-shape-2.png"
              alt="background-img"
            />
          </div>

          <div className="absolute -bottom-[3rem] md:-bottom-[167px]  inset-x-0 ">
            <img
              className="w-full"
              src="/assets/bg-shape-1.png"
              alt="background-img"
            />
          </div>
        </div>
      </section>

      <SecondSection />

      <BestSellSection />
      <BulkOrder />
      <VideoSection />
      <TipsSection />
    </>
  );
}
