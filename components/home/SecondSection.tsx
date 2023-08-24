import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SecondSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/cap-dish-1.png",
    "/assets/cap-dish-2.png",
    "/assets/cap-dish-1.png",
  ]; // Replace with your image paths

  const imageCount = images.length;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const imageHeight = windowHeight;

    let newIndex = Math.floor(scrollPosition / imageHeight);

    // Ensure the newIndex remains within the valid image index range
    newIndex = newIndex < 0 ? 0 : newIndex;
    newIndex = newIndex >= imageCount ? imageCount - 1 : newIndex;

    setCurrentImageIndex(newIndex);
  };
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="mt-20">
        <div className="container py-32 px-4 md:px-8">
          <div className="flex items-center gap-4 sm:gap-10 justify-center">
            <svg
              className="w-[60px] h-[73px] md:w-[106px] md:h-[221px]"
              viewBox="0 0 106 221"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_22_55)">
                <path
                  d="M65.7715 196.34V63.0391C40.9668 82.082 24.2676 91.6035 15.6738 91.6035C11.5723 91.6035 7.91016 89.9922 4.6875 86.7695C1.5625 83.4492 0 79.6406 0 75.3438C0 70.3633 1.5625 66.7012 4.6875 64.3574C7.8125 62.0137 13.3301 58.9863 21.2402 55.2754C33.0566 49.709 42.4805 43.8496 49.5117 37.6973C56.6406 31.5449 62.9395 24.6602 68.4082 17.043C73.877 9.42578 77.4414 4.73828 79.1016 2.98047C80.7617 1.22266 83.8867 0.34375 88.4766 0.34375C93.6523 0.34375 97.8027 2.3457 100.928 6.34961C104.053 10.3535 105.615 15.8711 105.615 22.9023V190.627C105.615 210.256 98.9258 220.07 85.5469 220.07C79.5898 220.07 74.8047 218.068 71.1914 214.064C67.5781 210.061 65.7715 204.152 65.7715 196.34Z"
                  fill="#62A554"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_22_55"
                  x="0"
                  y="0.34375"
                  width="105.615"
                  height="227.727"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_22_55"
                  />
                </filter>
              </defs>
            </svg>
            <div className="w-[77px] h-[77px] md:w-[236px] md:h-[236px] rounded-full overflow-hidden">
              {/* <img
                className="w-full"
                src={"/assets/cap-dish-2.png"}
                alt="caption dish"
              /> */}

              {images.reverse().map((image, index) => (
                <motion.div
                  key={index}
                  className={currentImageIndex === index ? "visible" : "hidden"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    className="w-full"
                    src={image}
                    alt={`Image ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
            <div className="w-[77px] h-[77px] md:w-[236px] md:h-[236px] rounded-full overflow-hidden">
              {/* <img
                className="w-full"
                src={"/assets/cap-dish-2.png"}
                alt="caption dish"
              /> */}
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={currentImageIndex === index ? "visible" : "hidden"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    className="w-full"
                    src={image}
                    alt={`Image ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
            <svg
             className="w-[60px] h-[73px] md:w-[180px] md:h-[223px]"
             
              viewBox="0 0 180 223"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_22_53)">
                <path
                  d="M56.2305 26.0742L139.873 152.637V24.9023C139.873 16.6016 141.631 10.4004 145.146 6.29883C148.76 2.09961 153.594 0 159.648 0C165.898 0 170.83 2.09961 174.443 6.29883C178.057 10.4004 179.863 16.6016 179.863 24.9023V193.799C179.863 212.646 172.051 222.07 156.426 222.07C152.52 222.07 149.004 221.484 145.879 220.312C142.754 219.238 139.824 217.48 137.09 215.039C134.355 212.598 131.816 209.766 129.473 206.543C127.129 203.223 124.785 199.854 122.441 196.436L40.8496 71.3379V197.168C40.8496 205.371 38.9453 211.572 35.1367 215.771C31.3281 219.971 26.4453 222.07 20.4883 222.07C14.3359 222.07 9.4043 219.971 5.69336 215.771C1.98242 211.475 0.126953 205.273 0.126953 197.168V31.4941C0.126953 24.4629 0.908203 18.9453 2.4707 14.9414C4.32617 10.5469 7.40234 6.98242 11.6992 4.24805C15.9961 1.41602 20.6348 0 25.6152 0C29.5215 0 32.8418 0.634766 35.5762 1.9043C38.4082 3.17383 40.8496 4.88281 42.9004 7.03125C45.0488 9.17969 47.1973 11.9629 49.3457 15.3809C51.5918 18.7988 53.8867 22.3633 56.2305 26.0742Z"
                  fill="#62A554"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_22_53"
                  x="0.126953"
                  y="0"
                  width="179.736"
                  height="230.07"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_22_53"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="mt-20  text-center text-black">
            <h2 className="text-4xxl font-bold pb-8">Some caption</h2>
            <p className="text-xl">We give our 100% to deliver the best food</p>
          </div>
        </div>
        <hr className="container broder border-section-color" />
      </section>
    </>
  );
};

export default SecondSection;
