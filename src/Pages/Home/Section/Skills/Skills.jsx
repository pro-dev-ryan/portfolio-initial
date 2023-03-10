import React from "react";
import s1 from "../../../../assets/Skills/bootstrap.512x512.png";
import s2 from "../../../../assets/Skills/express-original.512x298.png";
import s3 from "../../../../assets/Skills/firebase.373x512.png";
import s4 from "../../../../assets/Skills/mongodb-original.231x512.png";
import s5 from "../../../../assets/Skills/node.455x512.png";
import s6 from "../../../../assets/Skills/react.512x456.png";
import s7 from "../../../../assets/Skills/styled component.512x512.png";
import s8 from "../../../../assets/Skills/tailwind-css.512x307.png";
import s9 from "../../../../assets/Skills/vercel.512x449.png";
const Skills = () => {
  const skillSet = [
    {
      name: "BootStrap",
      src: s1,
    },
    {
      name: "Express JS",
      src: s2,
    },
    {
      name: "Firebase",
      src: s3,
    },
    {
      name: "MongoDB",
      src: s4,
    },
    {
      name: "Node JS",
      src: s5,
    },
    {
      name: "React",
      src: s6,
    },
    {
      name: "Styled Component",
      src: s7,
    },
    {
      name: "Tailwind-CSS",
      src: s8,
    },
    {
      name: "Vercel",
      src: s9,
    },
  ];
  return (
    <div>
      <h3 className="w-fit ml-2 my-5 lg:ml-12 font-semibold text-gray-50 md:text-4xl text-2xl lg:mb-10 font-Head">
        I Know
      </h3>
      <div className="py-3 lg:my-10 border-l-8 border-gray-300 border-opacity-20 lg:p-5 lg:mx-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 effectGlass">
        {skillSet.map((skill) => (
          <>
            <div className="card mx-auto lg:mb-8">
              <img
                src={skill.src}
                className="mx-auto md:h-10 h-7 my-2 mb-3"
                alt=""
              />
              <h4 className="text-center text-gray-300 text-sm md:text-base font-Head">
                {skill.name}
              </h4>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
