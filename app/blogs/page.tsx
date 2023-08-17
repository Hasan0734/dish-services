import BlogCard from "@/components/ui/BlogCard";
import { Card } from "@/components/ui/card";
import { reshapeArray } from "@/lib/helpers";
import { blogs } from "@/utils/data";
import React from "react";

const Blogs = () => {
  return (
    <section className="mt-20">
      <div className="container px-4 md:px-8 py-24 space-y-5">
        {reshapeArray(blogs).map((items, i) => (
          <div key={i} className="grid md:grid-cols-5 md:grid-rows-5 gap-5">
             {items.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
