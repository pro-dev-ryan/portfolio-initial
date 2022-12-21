import React from "react";
import About from "./Section/About/About";
import Contact from "./Section/Contact/Contact";
import Hero from "./Section/Hero/Hero";
import Services from "./Section/Services/Services";
import Skills from "./Section/Skills/Skills";
import HomeCss from "./Home.module.css";
import Portfolio from "./Section/Portfolio/Portfolio";
const Home = () => {
  return (
    <div className={`${HomeCss.section} pb-5`}>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
