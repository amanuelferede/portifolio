import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 md:px-0 px-5" id="works">
        <p className="mb-10 md:text-6xl text-3xl text-pink-400 text-center">
          Portifolio
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white group md:rounded-xl hover:-translate-y-3 transition-all duration-500 ease-in-out">
            <Image
              src={`/works/fb-clone/c.png`}
              alt="fb-clone"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full rounded-tr-xl group-hover:brightness-50 rounded-tl-xl h-70 object-cover"
            />
            <div className="p-10 flex flex-col space-y-2.5">
              <p className="md:text-3xl text-lg font-semibold ">
                Facebook like web application.
              </p>
              <p>
                A full-stack, responsive social media web application built
                using the Next.js framework. This project serves as a
                comprehensive platform for user interaction, featuring core
                functionalities inspired by modern social media platforms. The
                application leverages Next.js&apos;s capabilities for both
                client-side and server-side rendering (SSR), ensuring high
                performance, a seamless user experience, and SEO
                optimization.{" "}
              </p>
              <Link
                href={`/fb-clone`}
                target="_blank"
                className="my-2 text-center w-1/2 py-3 rounded-xl bg-pink-600 text-white md:block hidden"
              >
                View Project
              </Link>
              <Link
                href={`https://fb-clone-jade.vercel.app/`}
                className=" bg-pink-500 cursor-pointer text-white text-center py-3 md:hidden block w-1/2 rounded-md"
              >
                Live demo
              </Link>
            </div>
          </div>
          <div className="bg-white group md:rounded-xl hover:-translate-y-3 transition-all duration-500 ease-in-out">
            <Image
              src={`/works/hulu-fashion/c.png`}
              alt="fb-clone"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full rounded-tr-xl group-hover:brightness-50 rounded-tl-xl h-70 object-cover"
            />
            <div className="p-10 flex flex-col space-y-2.5">
              <p className="md:text-3xl text-lg font-semibold ">
                Hulu fashion e-commerce website.
              </p>
              <p>
                This project is a high-performance, full-stack e-commerce web
                application built using the Next.js framework for a modern,
                scalable, and SEO-ready solution. It features a responsive
                design and provides a seamless shopping experience for
                customers.{" "}
              </p>
              <Link
                href={`/fb-clone`}
                target="_blank"
                className="my-2 text-center w-1/2 py-3 rounded-xl bg-pink-600 text-white md:block hidden"
              >
                View Project
              </Link>
              <Link
                href={`https://fb-clone-jade.vercel.app/`}
                className=" bg-pink-500 cursor-pointer text-white text-center py-3 md:hidden block w-1/2 rounded-md"
              >
                Live demo
              </Link>
            </div>
          </div>
          <div className="bg-white group md:rounded-xl hover:-translate-y-3 transition-all duration-500 ease-in-out">
            <Image
              src={`/works/medico/c.png`}
              alt="fb-clone"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full rounded-tr-xl group-hover:brightness-50 rounded-tl-xl h-70 object-cover"
            />
            <div className="p-10 flex flex-col space-y-2.5">
              <p className="md:text-3xl text-lg font-semibold ">
                Organization sample website.
              </p>
              <p>
                A medical website built with Next.js is a high-performance,
                modern online platform for healthcare organizations and
                professionals, designed for fast loading, excellent SEO, and a
                seamless user experience across all devices.{" "}
              </p>
              <Link
                href={`/medico`}
                target="_blank"
                className="my-2 text-center w-1/2 py-3 rounded-xl bg-pink-600 text-white md:block hidden"
              >
                View Project
              </Link>
              <Link
                href={`https://fb-clone-jade.vercel.app/`}
                className=" bg-pink-500 cursor-pointer text-white text-center py-3 md:hidden block w-1/2 rounded-md"
              >
                Live demo
              </Link>
            </div>
          </div>
          <div className="bg-white group md:rounded-xl hover:-translate-y-3 transition-all duration-500 ease-in-out">
            <Image
              src={`/works/ebc-clone/c.png`}
              alt="fb-clone"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full rounded-tr-xl group-hover:brightness-50 rounded-tl-xl h-70 object-cover"
            />
            <div className="p-10 flex flex-col space-y-2.5">
              <p className="md:text-3xl text-lg font-semibold ">
                Media Company webiste.
              </p>
              <p>
                A modern, high-performance media news website built with Next.js
                (App Router), featuring server-side rendering for superior SEO,
                rapid load speeds, and real-time content updates. Utilizing
                Tailwind CSS and TypeScript, it offers a responsive, dynamic
                layout with customizable categories.{" "}
              </p>
              <Link
                href={`/ebc-clone`}
                target="_blank"
                className="my-2 text-center w-1/2 py-3 rounded-xl bg-pink-600 text-white md:block hidden"
              >
                View Project
              </Link>
              <Link
                href={`https://fb-clone-jade.vercel.app/`}
                className=" bg-pink-500 cursor-pointer text-white text-center py-3 md:hidden block w-1/2 rounded-md"
              >
                Live demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
