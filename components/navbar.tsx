"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const routes = [
  { title: "Home", href: "/" },
  { title: "Our Dishes", href: "/dishes" },
  { title: "About Us", href: "/about-us" },
  { title: "Blogs", href: "/blogs" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className=" inset-x-0 top-0 z-20 fixed bg-white">
      <div className="container md:px-8  shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] px-4">
        <div className="py-4 flex items-center justify-between  ">
          <div>
            <Image
              width={150}
              height={48}
              alt="logo"
              src={"/assets/logo.png"}
            />
          </div>
          <div className="hidden md:flex  items-center justify-between gap-5">
            <ul className="flex items-center gap-4">
              {routes.map((route) => (
                <li
                  key={route.href}
                  className={cn("mx-4", pathname === route.href && "pt-3")}
                >
                  <Link
                    className={cn(
                      " text-base text-black font-medium inline-block ",
                      pathname === route.href &&
                        "text-custom font-bold flex-col flex items-center justify-center"
                    )}
                    href={route.href}
                  >
                    {route.title}
                    {pathname === route.href && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="11"
                        viewBox="0 0 50 11"
                        fill="none"
                      >
                        <path
                          d="M39.5836 8.33321V9.37499C39.5836 9.65122 39.4741 9.91594 39.2788 10.1116C39.0831 10.3069 38.8184 10.4164 38.5421 10.4164H11.4582C10.8831 10.4164 10.4168 9.95012 10.4168 9.375V8.33321C8.00714 8.27706 5.68286 7.43125 3.80089 5.92562C1.91893 4.42036 0.583482 2.33812 0 0H50C49.4165 2.33821 48.0811 4.42036 46.1991 5.92562C44.3171 7.43125 41.993 8.27705 39.5832 8.33321L39.5836 8.33321Z"
                          fill="#62A554"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <button className="bg-custom px-5 py-2.5 rounded-full flex items-center gap-5 text-white font-bold">
                <span> View our menu </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                >
                  <path
                    d="M29.2908 10.3223L19.4153 0.730638C18.9663 0.271721 18.3456 0.00831071 17.6938 0.000194093C17.0422 -0.00793553 16.4146 0.239613 15.9536 0.687141C15.4927 1.13448 15.2369 1.74381 15.2449 2.3767C15.2529 3.00959 15.5234 3.61282 15.9955 4.04919L21.833 9.71053H2.41794C1.55414 9.71053 0.755852 10.1583 0.323925 10.8848C-0.107975 11.6114 -0.107975 12.5065 0.323925 13.2331C0.755825 13.9597 1.55414 14.4074 2.41794 14.4074H21.7789L15.9955 20.0339C15.4102 20.6318 15.1911 21.4842 15.4182 22.2793C15.6453 23.0743 16.2852 23.6953 17.104 23.9151C17.9226 24.1348 18.8002 23.9212 19.4154 23.3524L29.2908 13.7607C29.746 13.3213 30.0008 12.7232 29.9987 12.1C30.0004 12.0805 30.0004 12.061 29.9987 12.0417C30.0002 12.0224 30.0002 12.0029 29.9987 11.9834C29.9985 11.3606 29.7439 10.7633 29.2908 10.3227L29.2908 10.3223Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
