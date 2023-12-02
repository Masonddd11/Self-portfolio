import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmailIcon from "@mui/icons-material/Email";
import { Switch } from "@headlessui/react";

function Navbar({ toggleTheme }) {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="navbar flex justify-center p-3">
      <div className="navbar-options flex gap-[5rem]">
        <a
          href="#hero"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center 
      "
        >
        <div>
        <HomeIcon style={document.documentElement.classList.contains('dark') ? { fontSize: "1.7rem", fill:"white"} : { fontSize: "1.7rem"}} />
        </div>
          
        </a>
        <a
          href="#about"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          <PersonIcon style={document.documentElement.classList.contains('dark') ? { fontSize: "1.7rem", fill:"white"} : { fontSize: "1.7rem"}} />
        </a>
        <a
          href="#projects"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          <LightbulbIcon style={document.documentElement.classList.contains('dark') ? { fontSize: "1.7rem", fill:"white"} : { fontSize: "1.7rem"}} />
        </a>
        <a
          href="#contact"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          <EmailIcon style={document.documentElement.classList.contains('dark') ? { fontSize: "1.7rem", fill:"white"} : { fontSize: "1.7rem"}} />
        </a>
        <div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            onClick={toggleTheme}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
