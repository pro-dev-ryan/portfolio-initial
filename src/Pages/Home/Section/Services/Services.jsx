import React from "react";
import dev from "../../../../assets/Services/dev.png";
// import service from "../../../../assets/Services/service.png";

const Services = () => {
  const service =
    "https://cdni.iconscout.com/illustration/premium/thumb/web-designer-6311239-5211311.png?f=webp";
  return (
    <div className="mb-5">
      <h3 className="backdrop-blur-sm ml-2 lg:ml-10 text-4xl font-Head font-semibold w-fit text-white">
        My Offerings
      </h3>
      <div className="text-center flex flex-col justify-around mx-5 sm:flex-row sm:gap-5">
        <div className="w-min-72 md:w-1/3 p-2 rounded-lg h-96 mt-5 shadow-xl bg-gray-900 bg-opacity-70  border-y-2 border-gray-400 border-opacity-20">
          <div className="flex justify-center w-full ">
            <img
              className="h-40 md:h-48 mt-3"
              src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-programming-4315061-3610795.png"
              alt=""
            />
          </div>
          <div className="text-content p-3 lg:px-16">
            <h4 className="text-gray-200 text-2xl">Development</h4>
            <p className="text-left mt-1 text-gray-300 text-lg">
              SPA with React, Backend application structured by NodeJS with
              Express Js. No Sql Database with MongoDb.
            </p>
          </div>
        </div>
        <div className="w-min-72 md:w-1/3 p-2 bg-gray-900 bg-opacity-70 rounded-lg h-96 mt-5 shadow-sm border-y-2 border-gray-400 border-opacity-20">
          <div className="flex justify-center w-full ">
            <img className="h-40 md:h-48 mt-3" src={service} alt="" />
          </div>
          <div className="text-content p-3 lg:px-16">
            <h4 className="text-gray-200 text-2xl">Design</h4>
            <p className="text-left mt-3 text-gray-200 text-lg">
              Designing UI with Adobe XD, Various designs for social Banner with
              canva and Adobe AI, Figma to React or HTML service .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
