import Image from "next/image";
export default function Services() {
  return (
    <div className="max-w-7xl mx-auto py-5 md:px-0 px-3" id="services">
      <p className="mb-10 md:text-3xl text-xl text-pink-400 text-center">
        Web desgin and development
      </p>

      <div className="grid md:grid-cols-4 gap-5 mb-5 ">
        <div className=" md:hover:-translate-y-3 md:h-auto h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white  items-center">
            <Image
              src={`/why choose us/programming.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />

            <div className="flex flex-col space-y-2 text-white">
              <p className="font-semibold text-lg">
                Creative and proffessional design
              </p>
            </div>
          </div>
        </div>
        <div className=" md:hover:-translate-y-3 md:h-auto h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white items-center">
            <Image
              src={`/why choose us/stack.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2 text-white">
              <p className="font-semibold text-lg">Latest technology stack</p>
            </div>
          </div>
        </div>
        <div className=" md:hover:-translate-y-3 md:h-auto h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white items-center">
            <Image
              src={`/why choose us/search-engine-optimization.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2 text-white">
              <p className="font-semibold text-lg">SEO-optimized websites</p>
            </div>
          </div>
        </div>
        <div className=" md:hover:-translate-y-3 md:h-auto h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white items-center">
            <Image
              src={`/why choose us/responsive.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2 text-white">
              <p className="font-semibold text-lg">Mobile first approach.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-7 gap-3">
        <div className="h-1/2 md:sticky md:top-10 md:border-2 md:p-20 p-5 md:border-white md:flex md:items-center md:justify-center">
          <div className="flex flex-col space-y-3 text-white">
            <p className="md:text-5xl text-3xl font-semibold text-pink-200">
              Web design service.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-7 gap-4">
          <div className=" bg-white md:hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-5  rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/headquarter.png`}
                width={0}
                height={0}
                className="w-20 h-20"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Corporate webiste design.
              </p>
              <p className="text-black">
                Professional and elegant designs that establish authority.
              </p>
            </div>
          </div>
          <div className=" bg-white md:hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-5 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/e-commerce.png`}
                width={0}
                height={0}
                className="w-20 h-20"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                E-commerce website design.
              </p>
              <p className="text-black">
                User-centric layouts with optimized product displays.
              </p>
            </div>
          </div>
          <div className=" bg-white md:hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-5 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/professional-portfolio.png`}
                width={0}
                height={0}
                className="w-20 h-20"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Portifolio and persoanl websites
              </p>
              <p className="text-black">
                Creative designs for professionals and artists.
              </p>
            </div>
          </div>
          <div className=" bg-white md:hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-5 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/landing-pages.png`}
                width={0}
                height={0}
                className="w-20 h-20"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Landing page design.
              </p>
              <p className="text-black">
                Conversion-driven designs for marketing compaings.
              </p>
            </div>
          </div>

          <div className=" bg-white md:hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-6 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/web-development.png`}
                width={0}
                height={0}
                className="w-20 h-20"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Custome webiste development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
