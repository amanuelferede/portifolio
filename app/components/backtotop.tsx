"use client";

import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function BackToTop() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const backtoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScrollPosition(window.scrollY);
      },
      { passive: true }
    );
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollPosition(window.scrollY);
      });
    };
  }, []);
  return (
    <div
      className={`cursor-pointer animate-bounce md:w-13 md:h-13 w-12 h-12 rounded-full bg-sky-800 fixed bottom-3.5 right-3.5 ${scrollPosition >= 695.2000122070312 ? "block" : "hidden"}`}
      onClick={backtoTop}
    >
      <MdOutlineKeyboardArrowDown className="w-full h-full p-2 text-white" />
    </div>
  );
}
