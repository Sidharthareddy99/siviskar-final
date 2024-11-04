import React from 'react'

const WhatWeAbout = () => {
  return (
    <div className='p-5 bg-black pb-10'>
       <div className='flex flex-col md:flex-row py-10 items-center md:px-24 gap-16 md:py-32'>
       <div className='w-full hidden md:block'>
            <img src="https://i.ibb.co/wpXk9tn/Hackathon.png" alt="" />
        </div>
        <div className='p-10'>
            <h1 className='text-[#2DCDC4] text-5xl'>What We Are About</h1>
            <br />
            <p className='text-white text-2xl'>Welcome to Saviskar 2K24 where innovation meets action! This is not just a competition; it’s an opportunity to bring your boldest ideas to life. Join us for a 24-hour immersive experience where developers, designers, and innovators come together to tackle real-world challenges, showcase cutting-edge skills, and push the boundaries of technology.
            </p>
        </div>
       </div>
    </div>
  )
}

export default WhatWeAbout