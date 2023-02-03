import React from "react";

const Footer = () => {
  return (
    <div className="effectGlass rounded-none flex flex-col justify-center  bg-gray-900 ">
      <div className="md:mx-10 mx-2 flex gap-5 mt-5 items-center justify-between ">
        <p className="md:text-2xl title">Ryan's Space</p>
        <span className="text-gray-300 font-head font-semibold">
          &copy; 2022
        </span>
        <p className="text-sm">Structured By Azizul Islam</p>
      </div>
    </div>
  );
};

export default Footer;
