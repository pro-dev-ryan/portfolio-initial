import React from "react";
import img from "../../../../assets/front.png";
import aboutCss from "./About.module.css";
const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse lg:mx-10 rounded lg:py-8 md:flex-row justify-center md:gap-10 ">
      <div className="sm:w-2/5 w-full p-5 border border-opacity-10 border-blue-500 backdrop-blur-2xl rounded-md shadow-lg">
        <h2 className={`${aboutCss.title} text-center md:mx-10 mb-5`}>
          Who am I?
        </h2>
        <p className="text-gray-100">
          Hey there! I'm Ryan. you can say I'm a tech guy. Actually I'm
          enthusiast about programming world. It's so cool. As a developer I
          think my life as a computer screen. What do I code today it shows me
          how'll be the result tomorrow. If I kept thinking about the future
          without doing nothing it doesn't gonna show anything right? So leave
          thinking about tomorrow and do what the heart desires today. Because I
          wanna see, how much I learned from the past. And it gonna help to
          improve my life coding skill. Thanks for read this blah blah! Have a
          good day. &#128522;
        </p>
      </div>
      <div class={`${aboutCss.picsec} w-2/5 hidden lg:block`}>
        <div class={aboutCss.meimg}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="md:hidden md:w-1/2 w-full">
        <img src={img} className="w-full mb-5 mx-auto md:w-1/2" alt="" />
      </div>
    </div>
  );
};

export default About;
