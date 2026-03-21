import Image from "next/image";
export default function Skills() {
  return (
    <div className="max-w-full md:px-10 px-3  mx-auto pt-20" id="skills">
      <p className="mb-10 md:text-6xl text-3xl text-pink-400 text-center">
        Skills and experiences.
      </p>
      <div className="grid grid-cols-12 md:gap-10 gap-3">
        <div className="md:col-span-5 col-span-12">
          <div className="md:sticky md:h-1/2 md:top-10">
            <div className="grid md:grid-cols-2 grid-cols-2 gap-6">
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                HTML
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                CSS
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                Javascript
              </div>

              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                Typescript
              </div>

              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                React
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                Next.js
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                Node.js
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                Tailwind CSS
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                Redux
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                REST-FULL API
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                Prisma ORM
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                SQL
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                MONGO DB
              </div>
              <div className="rounded-xl  text-white px-3 py-2.5 text-center">
                POSTGRESS SQL
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 col-span-12">
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
              <div className="flex flex-col space-y-3 text-white  items-center">
                <Image
                  src={`/why choose us/programming.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />

                <div className="flex flex-col space-y-2 text-white">
                  <p className="font-semibold text-2xl">
                    Creative and proffessional design
                  </p>
                  <p className="text-pink-200">
                    I design websites that reflect your brand&apos;s values,
                    personality, and bussiness goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
              <div className="flex flex-col space-y-3 text-white items-center">
                <Image
                  src={`/why choose us/stack.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <div className="flex flex-col space-y-2 text-white">
                  <p className="font-semibold text-2xl">
                    Latest technology stack
                  </p>
                  <p className="text-pink-200">
                    From HTML5 and CSS3 to advanced frameworkds like React,
                    Laravel and WordPress, we use technologies that ensure
                    performance and scalabilyty.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
              <div className="flex flex-col space-y-3 text-white items-center">
                <Image
                  src={`/why choose us/search-engine-optimization.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <div className="flex flex-col space-y-2 text-white">
                  <p className="font-semibold text-2xl">
                    SEO-optimized websites
                  </p>
                  <p className="text-pink-200">
                    Every project I deliver is strurected for search engines to
                    help you achieve better visisblity and higher rankings.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
              <div className="flex flex-col space-y-3 text-white items-center">
                <Image
                  src={`/why choose us/responsive.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <div className="flex flex-col space-y-2 text-white">
                  <p className="font-semibold text-2xl">
                    Mobile first approach.
                  </p>
                  <p className="text-pink-200">
                    Our designs are 100% responsive, ensuring your website looks
                    perfect on every device.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
              <div className="flex flex-col space-y-3 text-white items-center">
                <Image
                  src={`/why choose us/technical-support.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <div className="flex flex-col space-y-2 text-white">
                  <p className="font-semibold text-2xl">
                    Dedicated local support.
                  </p>
                  <p className="text-pink-200">
                    {" "}
                    I am based in Ethiopian, so you can always rely on quick
                    communication and on-ground assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
