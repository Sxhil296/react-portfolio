import React from "react";
// import meowmeet from "../assets/portfolio/meowmeet.png";
// import malcolmx from "../assets/portfolio/malcolmx.png";
import quizzz from "../assets/portfolio/quizzz.png"
// import calculator from "../assets/portfolio/calculator.png";
// import glxtrvl from "../assets/portfolio/glxtrvl.png";
// import actvision from "../assets/portfolio/actvision.png";
import advocate from "../assets/portfolio/advocate.png"
import hackthisfeb from "../assets/portfolio/hackthisfeb.png";
// import blog from "../assets/portfolio/blog.png"
import parallaxport from "../assets/portfolio/parallax-port.png"
import blogosphere from "../assets/portfolio/blogosphere.png"
import imageai from "../assets/portfolio/imageai.png"

const Projects = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   src: meowmeet,
    //   name: "Meowmeet",
    //   href: "https://meowmeet.netlify.app/",
    //   code: "https://github.com/Sxhil296/meowmeet",
    //   details:
    //     "A simple tinder-like dating website for cats made by using HTML, CSS & Bootstrap.",
    // },
    {
      id: 2,
      src: quizzz,
      name: "Quizzz",
      href: "https://islam-quizzz.netlify.app/",
      code: "https://github.com/Sxhil296/quizzz",
      details:
        "An islamic quiz app that offers different quizzes developed by using ReactJS and ShadCN.",
    },

    {
      id: 3,
      src: parallaxport,
      name: "Portfolio 2.0",
      href: "https://sahilmalik2.netlify.app/",
      code: "https://github.com/Sxhil296/portfolio-parallax",
      details: "My portfolio website with parallax effect which I designed using HTML, CSS and JavaScript.",
    },

    {
      id: 4,
      src: imageai,
      name: "ImageAI",
      href: "https://github.com/Sxhil296/image-ai",
      code: "#",
      details: "An image generating platform built by using MERN stack and OpenAI.",
    },
    {
      id: 5,
      src: hackthisfeb,
      name: "HackThisFeb",
      href: "https://hackthisfeb.netlify.app/",
      code: "#",
      details:
        "HackThisFeb is a website designed for the hackathon. It is developed in React.js and TailwindCSS.",
    },
    {
      id: 6,
      src: advocate,
      name: "Advocate Portfolio.",
      href: "https://advamjad.netlify.app/",
      code: "https://github.com/Sxhil296/advocate-portfolio",
      details:
        "An advocate portfolio website developed using ReactJS, TailwindCSS.",
    },
    {
      id: 7,
      src: blogosphere,
      name: "Blogosphere",
      href: "#",
      code: "https://github.com/Sxhil296/Blogosphere",
      details:
        "A full stack blog application built by using MERN stack.",
    },
  ];
  return (
    <div
      name="projects"
      // className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20 pb-20"
      className=" w-full text-white md:h-screen pt-20 pb-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Some of my recent projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, name, src, href, code, details }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200" />
              <p className="text-xl text-center mt-2">{name}</p>
              <p className="text-center m-1 text-gray-500">{details}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 hover:font-bold">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 hover:font-bold">
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-20">
          Check my{" "}
          <a
            href="https://github.com/Sxhil296/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:scale-105"
          >
            GitHub{" "}
          </a>{" "}
          to see more
        </p>
      </div>
    </div>
  );
};

export default Projects;
