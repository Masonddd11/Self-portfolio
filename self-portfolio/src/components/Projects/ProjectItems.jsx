import React from "react";
import SelfProfolio from '../../assets/Projects Pics/Self-portfolio.png'
import Project from "./Project";
/** Skills */
import ReactSkill from "../../assets/Projects skills/React.png";
import TailwindCSS from "../../assets/Projects skills/TailwindCSS.png";


function ProjectItems() {
  const projects = [{
    Name: "Self-Portfolio",
    Description: "This is the project you are currenting viewing, this application mainly talks about my background and the skills I use. This is a single page application with a responsive design.",
    Image: SelfProfolio,
    Link: "#hero" ,
    Skill: ["React", "TailwindCSS"]
    },
  ]

 const processPictures = (skill) => {
    if (skill === "React") {
      return (
        <img
          src={ReactSkill}
          alt="React"
          className="w-[1.7rem] h-[1.7rem] object-contain"
        />
      );
    } else if (skill === "TailwindCSS") {
      return (
        <img
          src={TailwindCSS}
          alt="TailwindCSS"
          className="w-[1.7rem] h-[1.7rem] object-contain"
        />
      );
    } else if (skill === "JavaScript") {
      return <img src={JavaScript} alt="JavaScript" />;
    } else if (skill === "HTML") {
      return <img src={HTML} alt="HTML" />;
    } else if (skill === "CSS") {
      return <img src={CSS} alt="CSS" />;
    } else if (skill === "Python") {
      return <img src={Python} alt="Python" />;
    }
  };  

return projects.map((project) => {
  return (
    <div className="max-w-sm border-[1.5px] p-3 bg-white rounded-[20px]
    overflow-hidden border-gray-500">
      <a href="#">
        <img className="rounded-t-lg border-b-2 pb-2 " src={project.Image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {project.Name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500">
          {project.Description}
        </p>
        <div className="font-nomral mb-2 ml-[-5px] font-bold">Skilled used:</div>
        <div className="flex flex-wrap mb-2 space-x-1 text-sm font-medium lg:mb-4">
          {project.Skill.map((skill) => {
            return <div className=" h-[35px] w-[35px] rounded-full flex justify-center items-center bg-slate-300 mr-[2px]">{processPictures(skill)}</div>;
          })}
        </div>
        <a
          href="#"
          className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Link to my project
        </a>
      </div>
    </div>
  );
});
}
   
      
  

export default ProjectItems;
