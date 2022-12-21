import React from "react";
import dev from "../../../../assets/Services/dev.png";
import service from "../../../../assets/Services/service.png";

const Services = () => {
  return (
    <div className="text-center flex flex-col justify-around mx-5 sm:flex-row sm:gap-5">
      <div className="w-min-72 md:w-1/3 p-2 bg-transparent backdrop-blur-md rounded-lg h-96 mt-5 shadow-xl border border-black border-opacity-5 bg-gray-300 bg-opacity-20">
        <div className="flex justify-center w-full ">
          <img className="h-40 md:h-48 mt-5" src={dev} alt="" />
        </div>
        <div className="text-content p-3 lg:px-16">
          <h4 className="text-gray-300">Development</h4>
          <p className="text-left mt-3 text-gray-400">
            One page Static web site, Bug-fixing, WordPress site building and
            developing, Landing Page, E-commerce, Blog, Real estate site etc.
          </p>
        </div>
      </div>
      <div className="w-min-72 md:w-1/3 p-2 bg-transparent backdrop-blur-md bg-gray-300 bg-opacity-20 rounded-lg h-96 mt-5 shadow-xl border border-black border-opacity-5">
        <div className="flex justify-center w-full ">
          <img className="h-40 md:h-48 mt-5" src={service} alt="" />
        </div>
        <div className="text-content p-3 lg:px-16">
          <h4 className="text-gray-200">Design</h4>
          <p className="text-left mt-3 text-gray-300">
            Creative logo design, Banner design, Business Card Design, Custom
            Cover design, Flyer design, Commercial poster design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
