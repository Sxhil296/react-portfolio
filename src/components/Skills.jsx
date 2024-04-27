import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
// import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb2.png";
import expressjs from "../assets/exjs.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import git from "../assets/git.png";
// import github from "../assets/github.png";
import mysql from "../assets/mysql.png";
import python from "../assets/python-logo.png";
// import java from "../assets/java-logo.png";
import nextjs from "../assets/next.png";

const Skills = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: expressjs,
      title: "ExpressJS",
      style: "shadow-white",
    },
    {
      id: 8,
      src: reactImage,
      title: "ReactJS",
      style: "shadow-sky-600",
    },
    {
      id: 9,
      src: node,
      title: "NodeJS",
      style: "shadow-lime-500",
    },
    {
      id: 10,
      src: nextjs,
      title: "NextJS",
      style: "shadow-white",
    },

    {
      id: 11,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    // {
    //   id: 12,
    //   src: java,
    //   title: "Java",
    //   style: "shadow-red-600",
    // },

    {
      id: 13,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="skills"
      // className="bg-gradient-to-b from-gray-800 to-black w-full f-screen pt-20"
      className=" w-full f-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            These are the some technologies I've worked with:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
