"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";

const VideoSection = () => {
  const videoRef: any = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <>
      <section>
        <div className="container py-32">
          <h3 className="text-center text-4xxl font-bold text-black">
            Some caption
          </h3>
          <div className="w-full mt-8 relative h-[606px]">
            <video
              ref={videoRef}
              className="w-full h-full object-fill z-0"
              src="/assets/videos/dish.mp4"
              loop
              muted
              autoPlay
            />
            <div className="absolute inset-0 top-10 left-10 z-[5]">
              <h2 className="text-4xxl font-bold text-white">Some text</h2>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Button onClick={handlePause} variant={null} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <path
                    d="M34.8003 69.6006C25.5705 69.6006 16.7192 65.9342 10.1929 59.4077C3.66643 52.8817 0 44.0298 0 34.8003C0 25.5709 3.66643 16.7192 10.1929 10.193C16.7189 3.66651 25.5708 8.39233e-05 34.8003 8.39233e-05C44.0297 8.39233e-05 52.8813 3.66651 59.4076 10.193C65.9341 16.719 69.6005 25.5709 69.6005 34.8003C69.6005 40.9087 67.9925 46.91 64.9383 52.2003C61.8836 57.4907 57.4908 61.8834 52.2003 64.9384C46.9099 67.9926 40.9086 69.6006 34.8003 69.6006ZM45.9418 33.8585L29.0962 24.1326C28.7597 23.9384 28.3451 23.9384 28.0087 24.1326C27.6722 24.3268 27.4649 24.6861 27.4649 25.0745V44.5265C27.4649 44.9148 27.6722 45.2741 28.0087 45.4683C28.3451 45.663 28.7597 45.663 29.0962 45.4683L45.9418 35.7419V35.7424C46.2783 35.5482 46.4856 35.189 46.4856 34.8006C46.4856 34.4122 46.2783 34.0529 45.9418 33.8587V33.8585Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <hr className="container broder border-section-color" />
      </section>
    </>
  );
};

export default VideoSection;
