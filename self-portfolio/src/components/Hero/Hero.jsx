import React from 'react'
import Logo from '../../assets/logo.png'

function Hero() {
  return (
    <div className='container min-w-full min-h-screen bg-white dark:bg-black'>
      <div className="logo flex justify-center pt-[4rem] ">
        <img src={Logo} alt="Picture of the author" className=' object-contain w-[325px] h-[325px] md:w-[350px] md:w-[350px] sm:w-[325px] sm:[325px] lg:w-[400px] lg:h-[400px] 2xl:h-[500px] 2xl:h-[500px]' />
      </div>
      <div className="hero-text flex flex-col justify-center items-center">
        <span id='Info-text' className='text-[1.5rem]'>Hello I'm</span><br />
        <div id='Name-text' className=' text-[2rem] sm:text-[2rem] md:text-[4rem]'>
          Wong Yiu Man
        </div>
        <div id='Name-text' className=' text-[2rem] text-right w-4 sm:text-[2rem] md:text-[4rem] '>
          ,Mason
        </div>
        <div id='Info-text' className="Description">
          <p className="w-[85%] mx-auto text-center md:text-[1.2rem] ">
            Through a fusion of cutting-edge design and user-centric approach, I create visually stunning websites that deliver an exceptional user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero