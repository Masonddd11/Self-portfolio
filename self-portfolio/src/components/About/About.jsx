import React from "react";
import Bitmoji from "../../assets/bitmoji.png";

function About() {
  return (
    <div classNameName="container min-w-full min-h-screen ">
      <div className="flex min-h-screen bg-gray-100 ">
        <div className="mx-auto">
          <div className="mx-auto mb-[20px] mt-[40px] md:mb-[40px] md:mt-[98px] h-[180px] w-[180px] rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]">
            <img src={Bitmoji} alt="" />
          </div>
          <h1 className="max-w-screen-sm text-center text-[35px] font-extrabold text-black sm:text-[35px] md:text-[45px]">
            I do code and <br />
            passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
              about it!
            </span>
          </h1>
          <p className="mx-auto mt-[10px] md:mt-[40px] mb-[30px] text-[18px] font-light text-black text-center max-w-lg sm:text-[15px] md:text-[23px] md:mb-[40px]  ">
            I am a fullstack developer with 1 year of experience, specializing
            in front-end development. I am currently a Bachelor student of the
            City University of Hong Kong in Computer Science(2023-2027).
          </p>
          <div class="text-center ">
            <button class="text-black inline-block  border-2 border-black rounded-full font-semibold text-[22px] w-[200px] h-[70px]">
              See my projects
            </button>
            <button class="text-white bg-black inline-block  bg-transparent border-2 rounded-full font-semibold text-[22px] w-[200px] h-[70px] ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
