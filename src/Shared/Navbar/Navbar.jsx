import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri/";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Components/Button";

const Navbar = () => {
  const [hide, setHide] = useState(false);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "#about" },
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "BLOG'S", link: "/blog" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <div className="w-full sticky -top-3 z-50">
      <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
        <div className="font-bold text-lg md:text-3xl cursor-pointer flex items-center font-head title">
          Ryan's Space
        </div>

        <div
          onClick={() => setHide(!hide)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {hide ? <AiOutlineClose /> : <RiMenu5Fill />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full font-hyper  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            hide ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Resume</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
