import React from "react";

const Contact = () => {
  return (
    <div className="border mx-8 rounded-lg lg:mt-10 backdrop-blur-lg">
      <h4 className="text-center text-3xl font-Head text-gray-400 mt-5">
        Let's discuss
      </h4>
      <div className="flex flex-col items-center">
        <div className="lg:my-10 lg:w-1/2">
          <form>
            <div className="flex justify-between">
              <div className="flex flex-col my-auto gap-5 w-2/5 mx-5">
                <input
                  type="text"
                  className="border border-gray-100 rounded-md shadow-md w-full px-2 py-2"
                  placeholder="Name Here"
                />
                <input
                  type="email"
                  className="border border-gray-100 rounded-md shadow-md w-full px-2 py-2"
                  placeholder="Email Here"
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="8"
                  placeholder="Your Message"
                  className="border border-gray-100 mt-5 rounded-md shadow-md w-full px-2 py-2"
                ></textarea>
                <button
                  type="submit"
                  className="ring-2 ring-indigo-400 hover:ring-0 transition-ring duration-100 hover:bg-indigo-500 text-white text-lg font-hyper px-4 rounded-md shadow-md py-2 mt-5"
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
