import React from "react";

const Contact = () => {
  return (
    <div className=" border-y-2 border-opacity-50 border-gray-400 md:mx-8 rounded-lg lg:mt-10 backdrop-blur-lg mx-2 bg-gray-300 bg-opacity-20 py-5">
      <h4 className="text-center text-2xl md:text-3xl font-Head text-gray-200 my-2 md:mt-5">
        Let's discuss
      </h4>
      <div className="flex flex-col items-center">
        <div className="lg:my-10 md:w-2/3 w-full mx-2  lg:w-1/2">
          <form>
            <div className="flex flex-col md:flex-row md:justify-between mx-2">
              <div className="flex flex-col md:my-auto gap-3 md:gap-5 md:w-2/5 w-full md:mx-5">
                <input
                  type="text"
                  className="rounded-md shadow-md px-2 py-2"
                  placeholder="Name Here"
                />
                <input
                  type="email"
                  className="rounded-md shadow-md px-2 py-2"
                  placeholder="Email Here"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <textarea
                  rows="10"
                  placeholder="Your Message"
                  className="mt-5 rounded-md shadow-md px-2 w-full py-2"
                ></textarea>
                <button
                  type="submit"
                  className="ring-2 ml-2 ring-indigo-400 hover:ring-0 transition-ring duration-100 hover:bg-indigo-500 text-white text-lg font-hyper px-4 rounded-md shadow-md py-2 mt-5"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
