import React from 'react'
import ProjectCard from './ProjectCard'
import ecommerceImg from "../../assets/React(E-Commerce).png"

import portfolioImg from "../../assets/Portfolio.png"


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <ProjectCard
          title="E-commerce Website"
          main="E-commerce website built using React.js , Tailwind css and Context API"
          github="https://github.com/gaureshvardekar197-sudo/React.js-Projects"
          demo="https://e-commerce-mystore-reactjs.netlify.app/"
          image={ecommerceImg}
        />

        {/* <ProjectCard
          title="E-Commerce Website"
          main="E-Commerce website built using Laravel and MySQL"
          github="https://github.com/gaureshvardekar197-sudo/Laravel-Project"
          demo="http://127.0.0.1:8000/"
        /> */}

        <ProjectCard
          title="My Portfolio"
          main="Portfolio built using React.js and Tailwind css"
          github="https://github.com/gaureshvardekar197-sudo/My-Portfolio"
          demo="https://gauresh-portfolio.netlify.app/"
           image={portfolioImg}
        />

      </div>
    </div>
  )
}

export default Projects
