import React from 'react'
import Logo from '../../assets/logo.png'

function Hero() {
  return (
    <div className='container min-w-full min-h-screen'>
      <div className="logo flex justify-center pt-[4rem]">
        <img src={Logo} alt="Picture of the author" width={400} height={400} className=' object-contain' />
      </div>
      <div className="hero-text flex flex-col justify-center items-center">
        <span id='Info-text' className='text-[1.5rem]'>Hello I'm</span><br />
        <div id='Name-text' className=' text-[4.5rem] '>
          Wong Yiu Man
        </div>
        <div id='Name-text' className=' text-[4.5rem] text-right w-4 '>
          ,Mason
        </div>
        <div id='Info-text' className="Description">
          <p>
            Through a fusion of cutting-edge design and user-centric approach, I create visually stunning websites that deliver an exceptional user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero