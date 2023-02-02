import React from "react";
import project1 from "../../../../assets/Projects/Arcadian.png";
import project2 from "../../../../assets/Projects/Shine-Life.png";
import project3 from "../../../../assets/Projects/Glass-Quiz.png";
import PortfolioCards from "./PortfolioCards";
import PortfolioMobile from "./PortfolioMobile";
const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      name: "Arcadian",
      img: project1,
      desc: "This is a simple full stack application base on E-Commerce fundamental, There is a dashboard and their functions varies by the user role, Strong Authentication using Json Web Token. Crud operation handled with MongoDB.",
      c: "https://github.com/pro-dev-ryan/Arcadian-Client.git",
      s: "https://github.com/pro-dev-ryan/Arcadian-server.git",
      l: "https://arcadian-e3ac0.web.app/",
      tech: [
        "Node JS",
        "React JS",
        "FireBase",
        "React-Query",
        "Axios",
        "TailwindCSS",
      ],
    },
    {
      id: 2,
      name: "Shine-Life",
      img: project2,
      desc: "A course selling website, people can choose a course to buy, but they need to create a an account or log in with their credentials to do that. It also has some backend functionalities.",
      c: "https://github.com/pro-dev-ryan/Shining-Life-Client.git",
      s: "https://github.com/pro-dev-ryan/Shining-Life-Server.git",
      l: "https://assi-10.web.app/",
      tech: ["Node JS", "React JS", "FireBase", "TailwindCSS", "JsonWebToken"],
    },
    {
      id: 3,
      name: "Skill-Test",
      img: project3,
      desc: "This is a simple news site designed with html and css, Third party APIs were used to show the news. To design UI, Tailwind-css has been used in here",
      c: "https://github.com/pro-dev-ryan/FlashBrain.git",
      l: "https://glass-quiz.netlify.app/",
      tech: [
        "Vite JS",
        "React",
        "TailwindCSS",
        "Recharts",
        "React-slick-carousel",
      ],
    },
  ];
  return (
    <div id="portfolio" className="md:mx-8 mx-2 ">
      <h3 className="backdrop-blur-sm w-fit md:ml-10 font-semibold text-gray-50 my-3 md:my-0 text-2xl  md:text-4xl lg:mb-10 font-Head">
        Portfolio
      </h3>
      <div className="hidden lg:block">
        {Projects.map((project) => (
          <PortfolioCards key={project.id} project={project} />
        ))}
      </div>
      <div className="md:hidden ">
        {Projects.map((project) => (
          <PortfolioMobile key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
