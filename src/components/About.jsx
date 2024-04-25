import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      // className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      className="w-full text-white max-w-screen-lg mx-auto flex items-center justify-center h-screen p-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 text-[#8892b0]">Greetings, all!</p>
        <br />
        <p className="text-xl text-[#8892b0]">
          I'm Sahil Malik, a B.Tech CSE undergraduate, specializing in design
          and full-stack development. My passion lies in crafting cutting-edge
          and fully functional web applications. I am committed to continuous
          improvement in my roles as both a designer and developer.
        </p>
        <br />

        <p className='text-xl text-[#8892b0]'>For clients: Elevate your digital presence and user experiences with my expertise.</p>
        <br />
        <p className='text-xl text-[#8892b0]'>For HRs: Consider me as a dynamic addition to your team, contributing creativity and technical skills.</p>
        <br />
        <p className='text-xl text-[#8892b0]'>Let's <Link to="contact" className="font-bold cursor-pointer">connect</Link> to achieve your goals. Success is the destination, and I'm here to help you reach it!</p>
        {/* <p><a href="https://www.buymeacoffee.com/leviack629i" target="_blank" rel="noopener noreferrer"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=leviack629i&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" alt="coffee"/></a></p> */}
      </div>
    </div>
  );
};

export default About;
