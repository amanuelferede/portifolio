export default function Contact() {
  return (
    <div className="" id="contact">
      <p className="mb-10 md:text-6xl text-pink-400 text-center">
        Let us contact each other.
      </p>

      <div className="md:max-w-5xl md:rounded-xl rounded-md max-w-full  mx-auto md:p-10 p-3 bg-white">
        <div className="grid grid-cols-1 gap-10">
          <div className="">
            <input
              placeholder="Your name"
              className="placeholder:text-black text-black block w-full md:p-4 p-2.5 border-2 border-gray-400 rounded-2xl"
            />
          </div>
          <div className="">
            <input
              placeholder="Your email"
              className="placeholder:text-black text-black block w-full md:p-4 p-2.5 border-2 border-gray-400 rounded-2xl"
            />
          </div>
          <div className="">
            <textarea
              rows={7}
              placeholder="Your message"
              className="placeholder:text-black text-black block w-full md:p-4 p-2.5 border-2 border-gray-400 rounded-2xl"
            />
          </div>
          <div className="flex justify-center ">
            <button className="w-2/3 py-4 rounded-2xl bg-pink-700 text-white">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
