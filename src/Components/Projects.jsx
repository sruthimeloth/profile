import React from "react";
import Netflix from '../assets/Netflix.jpg'
import CAERP from '../assets/CAERP.jpg'
const Projects = () => {

    const project = [
        {
          id: 1,
          name:"Netflix-webdesign",
          technologies:"React",
          image:Netflix,
        },
        {
          id: 2,
          name:"CAERP",
          technologies:"React,Python,Sql",
          image:CAERP,
        },
    ]
  return (
    <div className="bg-black text-white py-20" id="Projects">
      <div className=" container mx-auto px-8 md:px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
        {project.map(Projects=>(
           <div
           key={Projects.id}
           className="bg-gray-800 px-6 pb-6  rounded-lg hover:shadow-lg tansform transition-transform duration-300 hover:scale-105"
         >
                <img src={Projects.image} alt={Projects.name} className="rounded-lg mb-4 w-full pt-5 object-cover"/>
                <h3 className="text-2xl font-bold mb-2">{Projects.name}</h3>
                <p className="text-gray-400 mb-4">{Projects.technologies}</p>
            </div>
         ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
