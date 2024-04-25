import React from "react";
// import HeroImage from "../assets/hero.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      // className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-20 pt-40"
      className="h-screen w-full"
    >
      {/* <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hey! I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Sahil
            </span>
          </h2>
          <p className="font-extrabold text-transparent sm:text-7xl text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Designer & Developer
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />{" "}
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="pfp"
            className="rounded-xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div> */}
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-screen">
        <div className="p-8">
          <h3 className="text-[16px] sm:text-[20px] text-[#8892b0] font-medium my-2">
            Hi, my name is
          </h3>
          <h1 className="text-4xl sm:text-7xl text-[#D1D5DB] font-bold ">
            Sahil Malik
          </h1>
          <h2 className="text-3xl sm:text-7xl text-[#8892b0] font-bold ">
            I'm a MERN Stack Developer.
          </h2>
          <p className="text-[#8892b0] text-xl sm:text-xl text-justify my-2">
            Passionate MERN Stack Developer specializing in modern web
            applications. Skilled in HTML, CSS, JavaScript, ReactJS, Node.js,
            Express, MongoDB, and MySQL. Committed to delivering innovative and
            user-friendly solutions.
          </p>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-4 sm:px-6 py-3 my-4 sm:my-2 flex items-center border-2 border-[#D1D5DB] hover:text-black hover:bg-[#D1D5DB] cursor-pointer"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300 ">
              <MdOutlineArrowRightAlt size={25} className="ml-1" />{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
