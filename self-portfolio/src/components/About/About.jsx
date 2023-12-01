import React from "react";
import Bitmoji from "../../assets/bitmoji.png";

function About() {
  return (
    <div classNameName="container min-w-full min-h-screen ">
      <div className="flex min-h-screen bg-gray-100 ">
        <div className="mx-auto">
          <div className="mx-auto mb-[40px] mt-[98px] h-[250px] w-[250px] rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            <img src={Bitmoji} alt="" />
          </div>
          <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-black">
            I do code and <br />
            passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
              about it!
            </span>
          </h1>
          <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-black text-center max-w-lg">
            I am a fullstack developer with 1 year of experience, specializing
            in front-end development. I am currently a Bachelor student of the
            City University of Hong Kong in Computer Science(2023-2027).
          </p>
          <div class="text-center">
            <button class="text-black inline-block px-[30px] py-[16px] mr-[18px] border-2 border-black rounded-full font-semibold text-[22px]">
              See my projects
            </button>
            <button class="text-white bg-gray-500 inline-block px-[47px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
