import React from "react";
import dev from "../../../../assets/Services/dev.png";
import service from "../../../../assets/Services/service.png";

const Services = () => {
  return (
    <div className="text-center flex flex-col justify-center sm:flex-row sm:gap-5">
      <div className="w-min-72 md:w-2/5 p-2 border boder-slate-50 rounded-lg h-96 mt-5 shadow-xl shadow-slate-200">
        <div className="flex justify-center w-full ">
          <img className="h-40 md:h-48 mt-5" src={dev} alt="" />
        </div>
        <div className="text-content p-3 lg:px-20">
          <h4>Development</h4>
          <p className="text-left mt-3">
            One page Static web site, Bug-fixing, WordPress site building and
            developing, Landing Page, E-commerce, Blog, Real estate site etc.
          </p>
        </div>
      </div>
      <div className="w-min-72 md:w-2/5 p-2 border boder-slate-50 rounded-lg h-96 mt-5 shadow-xl shadow-slate-200">
        <div className="flex justify-center w-full ">
          <img className="h-40 md:h-48 mt-5" src={service} alt="" />
        </div>
        <div className="text-content p-3 lg:px-20">
          <h4>Design</h4>
          <p className="text-left mt-3">
            Creative logo design, Banner design, Business Card Design, Custom
            Cover design, Flyer design, Commercial poster design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
