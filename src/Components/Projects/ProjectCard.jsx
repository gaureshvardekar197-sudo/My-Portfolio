import React from 'react'
import ecommerce from "../../assets/Project.jpg"

const ProjectCard = ({ title, main, github, demo }) => {
  return (
    <div className="p-6 flex flex-col bg-[#0c0e19] shadow-lg rounded-2xl">
      
      <img className="rounded-xl mb-4" src={ecommerce} alt="project" />

      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      <p className="text-sm md:text-md py-2 text-gray-300">{main}</p>

      <div className="mt-4 flex gap-4">
        
        {/* Demo Button */}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697]">
              Demo
            </button>
          </a>
        )}

        {/* Source Code Button */}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        )}

      </div>
    </div>
  )
}

export default ProjectCard
