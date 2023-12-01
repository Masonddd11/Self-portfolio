import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmailIcon from '@mui/icons-material/Email';

function Navbar() {
  return (
    <div className="navbar flex justify-center p-3">
      <div className="navbar-options flex gap-[5rem]">
      <a
        href="#hero"
        className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
      "
      >
        <HomeIcon style={{ fontSize: "1.7rem" }} />
      </a>
      <a
        href="#about"
        className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <PersonIcon style={{ fontSize: "1.7rem" }} />
      </a>
      <a
        href="#projects"
        className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <LightbulbIcon style={{ fontSize: "1.7rem" }} />
      </a>
      <a
        href="#contact"
        className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <EmailIcon style={{ fontSize: "1.7rem" }} />
      </a>
    </div>
    </div>
  )
}

export default Navbar