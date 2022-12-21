import React from "react";

const Portfolio = () => {
  return (
    <div className="border backdrop-blur-lg mx-8 ">
      <h3 className="text-center text-gray-400 text-3xl">Portfolio</h3>
      <div className="cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div>
          <img src="" alt="" />
          <h4>Arcadian</h4>
          <p>Tech-Stack</p>
          <div>
            <div className="badge bg-indigo-700 w-fit px-2 rounded-xl ring ring-indigo-600">
              <p className="hover:text-white font-hyper">Node JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
