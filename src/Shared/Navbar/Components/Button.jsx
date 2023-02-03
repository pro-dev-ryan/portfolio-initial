import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="bg-indigo-600 text-white font-hyper py-1 px-6 rounded md:w-auto sm:w-1/3 text-sm md:text-lg  md:ml-8 hover:bg-indigo-700 
    duration-150"
    >
      {children}
    </button>
  );
};

export default Button;
