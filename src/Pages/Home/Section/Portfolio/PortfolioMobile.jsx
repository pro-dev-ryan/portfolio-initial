import React from "react";

const PortfolioMobile = ({ project }) => {
  return (
    <div className="backdrop-blur-md mt-2 bg-gray-300 bg-opacity-20 pb-2 mb-4 rounded-md">
      <div className="w-full h-40 overflow-hidden">
        <img src={project.img} className="w-full rounded-md" alt="" />
      </div>
      <div className="flex flex-col mx-2 rounded-md gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xl w-fit">{project.name}</h4>
          <div className="flex gap-2 font-semibold text-indigo-600 mt-2 w-2/3  justify-end">
            <a
              href=""
              className="bg-white p-1 rounded-md focus:ring ring-indigo-500 ring-0"
            >
              Client
            </a>
            <a
              href=""
              className="bg-white p-1 rounded-md focus:ring ring-indigo-500 ring-0"
            >
              Server
            </a>
            <a
              href=""
              className="bg-white p-1 rounded-md focus:ring ring-indigo-500 ring-0"
            >
              Live-Site
            </a>
          </div>
        </div>
        <p>Tech-Stacks</p>
        <div className="flex flex-wrap gap-5">
          {project?.tech?.map((t) => (
            <div className="w-fit text-white p-1 bg-indigo-600 ring ring-indigo-500 rounded-xl">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMobile;
