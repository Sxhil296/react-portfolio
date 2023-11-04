import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">Greetings, all!</p>
        <p className="text-xl">
          I'm Sahil Malik, a B.Tech CSE undergraduate, specializing in design
          and full-stack development. My passion lies in crafting cutting-edge
          and fully functional web applications. I am committed to continuous
          improvement in my roles as both a designer and developer.
        </p>
        <br />

        <p className='text-xl'>For clients: Elevate your digital presence and user experiences with my expertise.</p>
        <br />
        <p className='text-xl'>For HRs: Consider me as a dynamic addition to your team, contributing creativity and technical skills.</p>
        <br className='text-xl'/>
        <p>Let's connect to achieve your goals. Success is the destination, and I'm here to help you reach it!</p>
        {/* <p><a href="https://www.buymeacoffee.com/leviack629i" target="_blank" rel="noopener noreferrer"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=leviack629i&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" alt="coffee"/></a></p> */}
      </div>
    </div>
  );
};

export default About;
