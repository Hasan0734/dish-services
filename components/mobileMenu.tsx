"use client";

import {
  AboutIcon,
  DishIcon,
  HomeIcon,
  MenuIcon,
  BlogIcon,
} from "@/public/assets/icons/icons";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const menus = [
  { id: 1, name: "Home", icon: <HomeIcon />, href: "/" },
  { id: 2, name: "Our Dishes", icon: <DishIcon />, href: "/dishes" },
  { id: 3, name: "View Menu", icon: <MenuIcon />, href: "#" },
  { id: 4, name: "About us", icon: <AboutIcon />, href: "/about-us" },
  { id: 5, name: "Blogs", icon: <BlogIcon />, href: "/blogs" },
];

const MobileMenu = () => {
  const pathname = usePathname();



  return (
    <>
 
      <div className="fixed bottom-0 left-0 right-0 bg-white z-20 mobile-menu px-4 md:hidden">
        <ul className="flex justify-between items-center">
          {menus.map((item, index) => (
            <li key={item.id} className="relative">
              <Link
                href={item.href}
                className={`p-3 flex items-center flex-col justify-center gap-2 
                ${pathname === item.href ? "text-warning" : "text-black"} ${
                  index === 2 ? "-mt-2.5 relative" : ""
                }`}
              >
                {/* <span className={`${i === 2 ? 'absolute inset-x-0 w-full' : ''}`}>{item.icon}</span> */}
                {index === 2 ? (
                  <div
                    className=" rounded-full absolute -top-7 bg-green h-[70px] flex items-center justify-center shadow-[inset_0_-3px_4px_rgba(0,0,0,0.15)]
                    w-[70px]"
                  >
                    <div className="bg-warning flex items-center  rounded-full
                  justify-center h-[50px] w-[50px] text-white drop-shadow-[-2px_0px_4px_rgba(0,0,0,0.40)]">{item.icon}</div>
             
                  </div>
                ) : (
                  item.icon
                )}
                <span
                  className={cn(
                    "block text-black text-sm font-medium",
                    `${poppins.className} ${
                      pathname === item.href ? "text-warning " : "text-black"
                    } ${index === 2 ? "mt-[38px]" : ""}`
                  )}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
