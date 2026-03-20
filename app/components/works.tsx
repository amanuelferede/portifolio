"use client";
import Image from "next/image";
import Link from "next/link";
import { works } from "../data";
import { useState } from "react";
export default function Works() {
  const [currentProject, setCurrentProject] = useState<{
    title: string;
    desc: string;
    image: string;
    images: string[];
    learned: string;
  }>({
    desc: "",
    image: "",
    images: [],
    learned: "",
    title: "",
  });

  const [shouldShowProjectModal, setShouldShowProjectModal] =
    useState<boolean>(false);
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 md:px-0 px-5" id="works">
        <p className="mb-10 md:text-6xl text-3xl text-pink-400 text-center">
          Portifolio
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => {
            return (
              <div className="bg-white md:rounded-xl" key={index}>
                <Image
                  src={work.image}
                  alt="fb-clone"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full rounded-tr-xl rounded-tl-xl h-70 object-cover"
                />
                <div className="p-10 flex flex-col space-y-2.5">
                  <p className="md:text-3xl text-lg font-semibold ">
                    {work.title}
                  </p>
                  <p className="line-clamp-3">{work.desc}</p>
                  <button
                    className="my-2 w-1/2 py-3 rounded-xl bg-pink-600 text-white md:block hidden"
                    onClick={() => {
                      setCurrentProject(work);
                      setShouldShowProjectModal(true);
                    }}
                  >
                    View Project
                  </button>
                  <Link
                    href={`#`}
                    className=" bg-pink-500 text-white text-center py-3 md:hidden block w-1/2 rounded-md"
                  >
                    Live demo
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={` fixed bg-black/95 top-0 left-0 right-0 bottom-0 transition-all duration-500 ease-in-out  ${shouldShowProjectModal ? " scale-100" : " scale-0"}`}
      >
        <p
          className="absolute top-10 right-14 text-white cursor-pointer"
          onClick={() => {
            setShouldShowProjectModal(false);
          }}
        >
          Close
        </p>
        <div className="max-w-6xl mt-20 mx-auto p-20 bg-white">
          <div className="grid md:grid-cols-2">
            <div className="">
              <Image
                src={`/works/fb-clone/c.png`}
                width={0}
                height={0}
                className="w-full"
                sizes="100vh"
                alt="web desgin"
              />
            </div>
            <div className="p-10">
              <p className="text-lg">{currentProject.learned}</p>
              <button className="my-5 w-1/2 py-3 rounded-xl bg-sky-900 text-white">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
