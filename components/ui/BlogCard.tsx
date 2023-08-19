import React from "react";
import { Card } from "./card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BlogCard = ({ blog }: any) => {
  const {
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    gridColumn,
    gridRow,
    imgPosition,
  } = blog;

  const getColumn = gridColumn
    ? gridColumn === "auto"
      ? "col-auto"
      : `col-span-${gridColumn}`
    : "";
  const getColumnStart = colStart
    ? colStart === "auto"
      ? "col-start-auto"
      : `col-start-${colStart}`
    : "";
  const getColumnEnd = colEnd
    ? colEnd === "auto"
      ? "col-end-auto"
      : `col-end-${colEnd}`
    : "";

  const getRow = gridRow
    ? gridRow === "auto"
      ? "row-auto"
      : `row-span-${gridRow}`
    : "";
  const getRowStart = rowStart
    ? rowStart === "auto"
      ? "row-start-auto"
      : `row-start-${rowStart}`
    : "";
  const getRowEnd = rowEnd
    ? rowEnd === "auto"
      ? "row-end-auto"
      : `row-end-${rowEnd}`
    : "";

  // console.log(getColumn, getColumnStart, getColumnEnd, getRow, getRowStart, getRowEnd)

  // {gridColumn} ${gridRow} ${getColumnStart} ${getColumnEnd} ${getRowStart} ${getRowEnd}

  return (
    <>
      <div
        className={cn(
          `rounded-[20px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)]`,
          `${getColumn} ${getRow} ${getColumnStart} ${getColumnEnd} ${getRowStart} ${getRowEnd}`
        )}
      >
        <Card
          className={` p-5 gap-5 border-0 shadow-none h-full flex flex-col`}
        >
          <div
            className={`${
              imgPosition === "top" ? "" : "flex gap-5"
            } flex-grow `}
          >
            <img
              className={` ${
                imgPosition === "top"
                  ? "max-h-[234px] w-full"
                  : "h-[300px] w-[238px]"
              } rounded-3xl`}
              src={blog.image}
              alt="blog-image"
            />

            <div className={`${imgPosition === "top" ? "mt-8" : ""}`}>
              <h1 className="text-black text-2xl font-bold">{blog.title}</h1>
              <p className="text-xl text-black mt-3">{blog.description}</p>
            </div>
          </div>

          <div className="flex-grow-0 flex justify-end">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
              >
                <path
                  d="M29.2908 10.3223L19.4153 0.730638C18.9663 0.271721 18.3456 0.00831071 17.6938 0.000194093C17.0422 -0.00793553 16.4146 0.239613 15.9536 0.687141C15.4927 1.13448 15.2369 1.74381 15.2449 2.3767C15.2529 3.00959 15.5234 3.61282 15.9955 4.04919L21.833 9.71053H2.41794C1.55414 9.71053 0.755852 10.1583 0.323925 10.8848C-0.107975 11.6114 -0.107975 12.5065 0.323925 13.2331C0.755825 13.9597 1.55414 14.4074 2.41794 14.4074H21.7789L15.9955 20.0339C15.4102 20.6318 15.1911 21.4842 15.4182 22.2793C15.6453 23.0743 16.2852 23.6953 17.104 23.9151C17.9226 24.1348 18.8002 23.9212 19.4154 23.3524L29.2908 13.7607C29.746 13.3213 30.0008 12.7232 29.9987 12.1C30.0004 12.0805 30.0004 12.061 29.9987 12.0417C30.0002 12.0224 30.0002 12.0029 29.9987 11.9834C29.9985 11.3606 29.7439 10.7633 29.2908 10.3227L29.2908 10.3223Z"
                  fill="#62A554"
                />
              </svg>
            </Link>
          </div>
        </Card>
      </div>
      {/*    
    <div
      className={` block lg:hiddenrounded-[20px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] ${getColumn} ${getRow} ${getColumnStart} ${getColumnEnd} ${getRowStart} ${getRowEnd}`}
    >
      <Card className={` p-3 md:p-5 gap-5 border-0 shadow-none h-full flex flex-col`}>
        <div className={`${imgPosition === "top" ? "" : "block  gap-5"} flex-grow `}>
       
            <img
              className={` ${imgPosition === 'top' ? "max-h-[234px] w-full" : 'h-[128px] w-full'} rounded`}
              src={blog.image}
              alt="blog-image"
            />
         
          <div className={`${imgPosition === "top" ? "mt-8" : ""}`}>
            <h1 className="text-black text-2xl font-bold">{blog.title}</h1>
            <p className="text-xl text-black mt-3">{blog.description}</p>
          </div>
        </div>

        <div className="flex-grow-0 flex justify-end">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
            >
              <path
                d="M29.2908 10.3223L19.4153 0.730638C18.9663 0.271721 18.3456 0.00831071 17.6938 0.000194093C17.0422 -0.00793553 16.4146 0.239613 15.9536 0.687141C15.4927 1.13448 15.2369 1.74381 15.2449 2.3767C15.2529 3.00959 15.5234 3.61282 15.9955 4.04919L21.833 9.71053H2.41794C1.55414 9.71053 0.755852 10.1583 0.323925 10.8848C-0.107975 11.6114 -0.107975 12.5065 0.323925 13.2331C0.755825 13.9597 1.55414 14.4074 2.41794 14.4074H21.7789L15.9955 20.0339C15.4102 20.6318 15.1911 21.4842 15.4182 22.2793C15.6453 23.0743 16.2852 23.6953 17.104 23.9151C17.9226 24.1348 18.8002 23.9212 19.4154 23.3524L29.2908 13.7607C29.746 13.3213 30.0008 12.7232 29.9987 12.1C30.0004 12.0805 30.0004 12.061 29.9987 12.0417C30.0002 12.0224 30.0002 12.0029 29.9987 11.9834C29.9985 11.3606 29.7439 10.7633 29.2908 10.3227L29.2908 10.3223Z"
                fill="#62A554"
              />
            </svg>
          </Link>
        </div>
      </Card>
    </div> */}
    </>
  );
};

export default BlogCard;
