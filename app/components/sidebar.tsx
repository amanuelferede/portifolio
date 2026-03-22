"use client";

import { useState } from "react";
import { sideBarContentsData } from "../data";

export default function Sidebar() {
  const [sideBarContents, setSideBarContent] = useState<
    {
      name: string;
      value: string;
      isActive: boolean;
    }[]
  >(sideBarContentsData);

  const goToSection = (to: string, index: number) => {
    const newSideBarContents = sideBarContents.map((cs, _index) => {
      if (index === _index) {
        return {
          ...cs,
          isActive: true,
        };
      }
      return {
        ...cs,
        isActive: false,
      };
    });
    setSideBarContent(newSideBarContents);
    const element = document.getElementById(`${to}`);
    const offsetTop = element?.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="md:w-[10%] md:block hidden z-20 h-screen  fixed top-0 left-0 right-0 bottom-0 bg-linear-to-b from-gray-700 to-gray-800 to-95%">
        <div className="grid grid-rows-5 ">
          {sideBarContents.map((sc, index) => {
            return (
              <div
                key={index}
                className={`flex  last:hover:border-b-transparent cursor-pointer   h-30 items-center justify-center border-b-2 border-t-2   transition-all duration-500 ease-in-out text-white  ${sc.isActive ? "md:border-b-sky-600 md:border-t-gray-200 bg-linear-to-b from-gray-700 to-gray-800 to-95% md:hover:text-white" : " border-b-transparent border-t-transparent md:hover:text-sky-200 "}`}
                onClick={() => {
                  goToSection(sc.value, index);
                }}
              >
                {sc.name}
              </div>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
}
