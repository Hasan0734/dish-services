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

  // const style = { "--i": 1 } as React.CSSProperties;

  const style = (num: number) => {
    return { "--i": num } as React.CSSProperties;
  };

  console.log(time.getMinutes() )
 
 

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
                    time.getHours() >= 18 &&
                    "Good Afternoon"}
                </h1>
                <p className="font-normal text-sm md:text-xl">
                  Having a healthy breakfast reduces chances of blood sugar by{" "}
                  <b>75%</b>
                </p>
              </div>
              <div className="flex justify-center items-center mt-12 relative">
                {time.getHours() < 12 && (
                  <img
                    className="w-[200px] lg:w-[365px] h-[200px] lg:h-[365px] rounded-full absolute"
                    src="/assets/cap-dish-2.png"
                    alt="dish"
                  />
                )}
                {time.getHours() >= 12 && time.getHours() >= 18 && (
                  <img
                    className="w-[200px] lg:w-[365px] h-[200px] lg:h-[365px] rounded-full absolute"
                    src="/assets/cap-dish-1.png"
                    alt="dish"
                  />
                )}

                <div className="clock-svg relative  w-[200px] lg:w-[365px] h-[200px] lg:h-[365px]">
                  
                  <svg viewBox="0 0 32 32">
                    <circle r="16" cx="16" cy="16"  style={{
                        strokeDasharray: `${
                          100 - (100 * time.getMinutes()) / 60
                        } 100`,
                      }} />
                  </svg>

                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full">
                    {/* <img
                      className=" w-full rounded-full"
                      src="/assets/clock.svg"
                      alt=""
                    /> */}
                    <div className="clock-indicator relative h-full w-full rounded-full flex items-center justify-center">
                      <span style={style(1)}>
                      <b style={{display: time.getMinutes() >= 5 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(2)}>
                      <b style={{display: time.getMinutes() >=10 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(3)}>
                      <b style={{display: time.getMinutes() >= 15 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(4)}>
                      <b style={{display: time.getMinutes() >= 20 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(5)}>
                      <b style={{display: time.getMinutes() >= 25 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(6)}>
                      <b style={{display: time.getMinutes() >= 30 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(7)}>
                      <b style={{display: time.getMinutes() >= 35 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(8)}>
                      <b style={{display: time.getMinutes() >= 40 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(9)}>
                      <b style={{display: time.getMinutes() >= 45 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(10)}>
                      <b style={{display: time.getMinutes() >= 50 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(11)}>
                      <b style={{display: time.getMinutes() >= 55 ? 'none': 'inline-block'}}></b>
                      </span>
                      <span style={style(12)}>
                        <b style={{display: time.getMinutes() >= 1 ? 'none': 'inline-block'}}></b>
                      </span>
                    </div>
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
