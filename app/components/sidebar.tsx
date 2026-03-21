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
      <div className="md:w-[10%] md:block hidden z-20 h-screen  fixed top-0 left-0 right-0 bottom-0 bg-linear-to-b from-sky-950 to-black to-95%">
        <div className="grid grid-rows-6 ">
          {sideBarContents.map((sc, index) => {
            return (
              <div
                key={index}
                className={`flex  cursor-pointer hover:text-pink-200  h-30 items-center justify-center text-pink-200 border-b-2 border-t-2   transition-all duration-500 ease-in-out last:hover:border-b-transparent ${sc.isActive ? "border-b-pink-600 border-t-pink-600 bg-linear-to-b from-sky-00 to-sky-900 to-95%" : "md:hover:bg-linear-to-b from-sky-00 to-sky-900 to-95% hover:border-b-pink-600 hover:border-t-pink-600 border-b-transparent border-t-transparent"}`}
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
