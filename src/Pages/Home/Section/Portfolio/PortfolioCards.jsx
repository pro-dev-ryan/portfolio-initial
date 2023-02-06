import React from "react";
import portCss from "./Portfolio.module.css";

const PortfolioCards = ({ project }) => {
  return (
    <div className={`${portCss.cards} flex flex-col justify-center `}>
      <div className="w-full flex gap-5 justify-end bg-gray-900 p-16 bg-opacity-5 effect md:my-10 my-4">
        <div className="flex justify-end relative">
          <div className={`w-1/3 h-56 overflow-clip rounded-xl ${portCss.pic}`}>
            <img src={project.img} alt="project-1" className="rounded-xl" />
          </div>
          <div
            className={`text-center lg:w-3/5 pb-5 m-3 p-2 pl-20 border-y-4 mr-20 border-y-gray-800 border-opacity-70 effectGlass ${portCss.desc}`}
          >
            <h1 className="title">{project.name}</h1>
            <p className="ml-10 text-lg text-gray-300">{project.desc}</p>
            <p className="text-left ml-10 text-lg">Tech-Stack :</p>
            <div className="ml-11 mt-2 flex gap-3">
              {project?.tech.map((t) => (
                <div className="bg-black bg-opacity-50 px-4 py-px rounded-xl ring ring-indigo-800">
                  <p className="hover:text-gray-400 text-gray-200 font-hyper w-fit">
                    {t}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-5 justify-center">
              <a href={project.c} className="BTNcard">
                Client
              </a>
              {project.s && (
                <a href={project.s} className="BTNcard">
                  Server
                </a>
              )}
              <a href={project.l} className="BTNcard">
                Live-Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;
