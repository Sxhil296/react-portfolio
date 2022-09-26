import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, distinctio minus doloremque sit consectetur ab vel adipisci eos ipsa odio animi corporis deserunt magni quia cumque, excepturi quis? Placeat eos tempore quod? Sequi tenetur, nobis est natus, quaerat mollitia quis quam vero amet culpa id maxime temporibus ullam libero perferendis.</p>

            <br />

            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, ea, veniam vel illum illo cum tempora a beatae accusantium eos cupiditate fuga amet porro, voluptates delectus natus deleniti? Culpa a nemo cumque natus nihil aspernatur adipisci vero, nam iste provident minima, fugiat, perspiciatis delectus qui temporibus numquam in iure vel.</p>
        </div>
    </div>
  )
}

export default About