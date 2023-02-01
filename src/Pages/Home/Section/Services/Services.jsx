import React from "react";
import dev from "../../../../assets/Services/dev.png";
import service from "../../../../assets/Services/service.png";

const Services = () => {
  return (
    <div className="mb-5">
      <h3 className="backdrop-blur-sm ml-2 lg:ml-10 text-4xl font-Head font-semibold w-fit text-white">
        My Offerings
      </h3>
      <div className="text-center flex flex-col justify-around mx-5 sm:flex-row sm:gap-5">
        <div className="w-min-76 md:w-1/3 p-2 rounded-lg h-96 mt-5 shadow-xl bg-gray-700 bg-opacity-20  border-y-2 border-gray-400 border-opacity-20">
          <div className="flex justify-center w-full ">
            <img className="h-40 md:h-48 mt-3" src={dev} alt="" />
          </div>
          <div className="text-content p-3 lg:px-16">
            <h4 className="text-gray-200 text-2xl">Development</h4>
            <p className="text-left mt-1 text-gray-300 text-lg">
              One page Static web site, Bug-fixing, WordPress site building and
              developing, Landing Page, E-commerce, Blog, Real estate site etc.
            </p>
          </div>
        </div>
        <div className="w-min-72 md:w-1/3 p-2 bg-gray-700 bg-opacity-20 rounded-lg h-96 mt-5 shadow-xl border-y-2 border-gray-400 border-opacity-20">
          <div className="flex justify-center w-full ">
            <img className="h-40 md:h-48 mt-3" src={service} alt="" />
          </div>
          <div className="text-content p-3 lg:px-16">
            <h4 className="text-gray-200 text-2xl">Design</h4>
            <p className="text-left mt-3 text-gray-200 text-lg">
              Creative logo design, Banner design, Business Card Design, Custom
              Cover design, Flyer design, Commercial poster design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
