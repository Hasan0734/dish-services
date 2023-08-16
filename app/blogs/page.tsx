import { Card } from "@/components/ui/card";
import React from "react";

const Blogs = () => {
  return (
    <section className="mt-20">
      <div className="container px-4 md:px-8 py-24">
        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-8 flex rounded-[20px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] p-4 gap-5">
         <div>
             <img
              className="w-full"
              src="/assets/blogs/b-image-1.png"
              alt="blog-image"
            />
         </div>
            <div>
              <h1 className="text-black text-2xl font-bold">Blog title</h1>
              <p className="text-xl text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Congue eu consequat ac felis donec et odio pellentesque diam.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
