import React from "react";
import img from "../../../../assets/front.png";
import aboutCss from "./About.module.css";
const About = () => {
  const me = (
    <div>
      <p className="text-lg">
        <span className="text-xl text-indigo-300">H</span>ello There!!!
      </p>
      <p className="text-lg">
        {" "}
        This Is Azizul A passionate tech enthusiast person. With experience as a
        web developer, I've completed 10+ projects. Now I'm ready to utilize my
        learning to structure new projects. Whose vision is to produce some
        quality product for a company where I can grasp more experience and
        evolve my expertise.
      </p>
      <p className="text-lg">
        I'm interested in web3.0 my goal is to evaluate new design where my
        creativity has value.
      </p>
      <h5 className="text-lg font-semibold">My favourite quotes is:</h5>
      <dl className="text-lg">
        <blockquote>"Every professional Expert once was a fresher"</blockquote>
        <blockquote>"don't act smart, play as the stupid one"</blockquote>
        <blockquote>
          "There is always scope for improvement, nothing is best from
          beginning"
        </blockquote>
      </dl>
    </div>
  );
  return (
    <>
      <div id="about" className="p-1 "></div>
      <div className="flex flex-col-reverse lg:flex-row-reverse lg:mx-10 rounded lg:py-8 mt-20 mb-60 md:flex-row justify-between px-16 md:gap-20">
        <div className="sm:w-2/5 w-full p-5 effectGlass">
          <h2 className={`${aboutCss.title} text-center md:mx-10 mb-5`}>
            Who am I?
          </h2>
          <p className="text-gray-100 text-base">{me}</p>
        </div>
        <div class={`${aboutCss.picsec} w-2/5 hidden lg:block`}>
          <div class={aboutCss.meimg}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="block md:hidden w-full">
          <img src={img} className="w-4/5 mx-auto mb-2" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
