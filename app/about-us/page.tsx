import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="mt-20">
        <div className="container relative about-section">
          <img
            className="w-full h-[695px] lg:h-auto"
            src="/assets/about.png"
            alt="background image"
          />

          <div className="absolute top-0 md:right-28 w-full h-full flex items-center justify-center md:justify-end">
            <div className=" p-5 sm:p-10 about-card">
              <p className="text-white text-base sm:text-2xl">
                One day, not so long ago, a bunch of foodies in the corporate
                world realized how fruits and veggies are being neglected in our
                daily meal and decided to address this, to bring a smile on
                every face. The rationale behind the brand 100N is, introducing
                fruits and vegetables back into our everyday meal to bring the
                right nutrition required in this new age,{" "}
                <span className="font-medium text-warning block">
                  #NewAgeNutrition.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container p-5 py-14 sm:p-24">
          <h3 className="text-black text-3xl sm:text-[56px] font-bold">Our motto</h3>
          <h1 className="text-5xl sm:text-[99px] font-bold space-y-2 sm:space-x-6 mt-5 sm:mt-10">
            <span className="text-warning inline-block">EAT GOOD.</span>
            <span className="text-green inline-block">FEEL GOOD.</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
