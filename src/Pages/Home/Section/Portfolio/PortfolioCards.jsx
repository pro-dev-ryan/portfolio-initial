import React from "react";
import portCss from "./Portfolio.module.css";

const PortfolioCards = ({ project }) => {
  return (
    <div className={`${portCss.cards} flex flex-col justify-end items-end`}>
      <div className="w-full flex gap-5 justify-end ">
        <div
          className={`w-1/3 h-64 overflow-clip rounded-xl border-2 border-opacity-30 shadow shadow-slate-400 border-gray-700 ${portCss.pic}`}
        >
          <img src={project.img} alt="project-1" className="rounded-xl" />
        </div>
        <div
          className={`bg-gray-900 bg-opacity-60 text-center rounded-xl lg:w-3/5 pb-5 m-3 p-2 pl-20 border-y-2 border-blue-700 border-opacity-50 ${portCss.desc}`}
        >
          <h1 className="title">{project.name}</h1>
          <p className="ml-10">{project.desc}</p>
          <p className="text-left ml-10 text-lg">Tech-Stack :</p>
          <div className="ml-11 mt-2 flex gap-3">
            {project?.tech.map((t) => (
              <div className="bg-indigo-700 px-3 rounded-xl ring ring-indigo-500">
                <p className="hover:text-white font-hyper w-fit">{t}</p>
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
  );
};

export default PortfolioCards;
