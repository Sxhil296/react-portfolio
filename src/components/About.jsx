import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
          
            <p className='text-xl mt-20 '>Hello everyone! I'm Sahil Malik, an undergraduate of B.Tech CSE. I'm a designer and full stack web developer. I love creating cool and fully functional web applications. Trying to be a better designer and developer.
            Currently learning web3 out of interest.</p>

            <br />

            <p className='text-xl'>I also love books and coffee. You can buy a coffee for me by clicking ob button below. Thanks &hearts; </p>
            <br />
            <p><a href="https://www.buymeacoffee.com/leviack629i" target="_blank" rel="noopener noreferrer"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=leviack629i&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" alt="coffee"/></a></p>
        </div>
     
    </div>
  )
}

export default About