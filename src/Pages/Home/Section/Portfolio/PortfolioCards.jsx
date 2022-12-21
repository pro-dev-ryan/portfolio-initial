import React from "react";
import portCss from "./Portfolio.module.css";

const PortfolioCards = ({ project }) => {
  return (
    <div className={`${portCss.cards} flex flex-col justify-end items-end`}>
      <div className="w-full flex gap-5 justify-end">
        <div className={`h-64 w-1/3 overflow-hidden ${portCss.pic} p-3`}>
          <img src={project.img} alt="project-1" className="ml-2" />
        </div>
        <div className="backdrop-blur-lg bg-gray-300 bg-opacity-20  text-center rounded-xl lg:w-3/5 h-72 m-3 p-2 pl-20">
          <h2 className="title">{project.name}</h2>
          <p className="ml-10">{project.desc}</p>
          <p className="text-left ml-10 text-lg">Tech-Stack :</p>
          <div className="ml-11 mt-2 flex gap-3">
            {project?.tech.map((t) => (
              <div className="badge bg-indigo-700 px-2 rounded-xl ring ring-indigo-600">
                <p className="hover:text-white font-hyper w-fit">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-5 justify-center">
            <a
              href={project.c}
              className="px-4 py-2 font-hyper rounded-md ring-0 hover:ring hover:bg-transparent ring-indigo-500 text-white bg-indigo-500 transition-ring duration-150"
            >
              Cient
            </a>
            {project.s && (
              <a
                href={project.s}
                className="px-4 py-2 font-hyper rounded-md ring-0 hover:ring hover:bg-transparent ring-indigo-500 text-white bg-indigo-500 transition-ring duration-150"
              >
                Server
              </a>
            )}
            <a
              href={project.l}
              className="px-4 py-2 font-hyper rounded-md ring-0 hover:ring hover:bg-transparent ring-indigo-500 text-white bg-indigo-500 transition-ring duration-150"
            >
              Live-Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;
