import React from 'react'
import meowmeet from "../assets/portfolio/meowmeet.png";
import malcolmx from "../assets/portfolio/malcolmx.png";
import rocket from "../assets/portfolio/rocket.png";
import parallax from "../assets/portfolio/parallax.png";
import calculator from "../assets/portfolio/calculator.png";
// import blackjack from "../assets/portfolio/blackjack.png";
import counter from "../assets/portfolio/counter.png";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: meowmeet,
            name: 'Meowmeet',
            href: 'https://meowmeet.netlify.app/',
            code: 'https://github.com/Sxhil296/meowmeet',
        },
        {
            id: 2,
            src: malcolmx,
            name: 'Malcolm-X',
            href: 'https://malcolmx.netlify.app/',
            code: 'https://github.com/Sxhil296/malcolmx-tribute-page'
        },
        {
            id: 3,
            src: rocket,
            name: 'Acne Rocket',
            href: '#',
            code: '#'
        },
        {
            id: 4,
            src: parallax,
            name: 'Parallax Webpage',
            href: '#',
            code: 'https://github.com/Sxhil296/parallax-website'
        },
        {
            id: 5,
            src: calculator,
            name: 'A Basic Calculator',
            href: 'https://lucent-gnome-f932a7.netlify.app/',
            code: 'https://github.com/Sxhil296/vanillajscalculator '
        },
        // {
        //     id: 6,
        //     src: blackjack,
        //     name: 'Blackjack',
        //     href: ' ',
        //     code: 'https://github.com/Sxhil296/blackjackgame'
        // },
        {
            id: 7,
            src: counter,
            name: 'Passenger-Counter',
            href: 'https://gentle-mochi-011a41.netlify.app/',
            code: 'https://github.com/Sxhil296/passenger-counter'
        }
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Some of my recent projects:</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {
                portfolios.map(({id, name, src, href, code}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>
                    <p className='text-xl text-center mt-2'>{name}</p>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold'><a href={href} target='_blank' rel="noopener noreferrer">Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold'><a href={code} target="_blank" rel="noopener noreferrer">Code</a></button>
                    </div>
                </div>
                ))
            }
                
            </div>
            <p className='mt-20'>Check my <a href="https://github.com/Sxhil296/" target="_blank" rel="noopener noreferrer" className='font-bold hover:scale-105'>GitHub </a> to see more</p>
        </div>
    </div>
  )
}

export default Portfolio