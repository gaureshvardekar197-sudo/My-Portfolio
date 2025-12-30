import React from "react";
import AboutImg from "../../assets/GaureshVardekar.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 "
    >
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-12 mt-10">
          About <span className="text-red-500">Me</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={AboutImg}
              alt="About"
              className="w-64 h-54 md:w-80 md:h-80 object-cover rounded-2xl 
                         shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            
            {/* Card 1 */}
            <div className="group flex gap-4 p-5 rounded-xl bg-white/5 
                            hover:bg-red-500/10 transition-all duration-300">
              <IoArrowForward
                size={28}
                className="text-red-500 group-hover:translate-x-2 transition-transform"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Frontend Developer
                </h2>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  I build modern, responsive, and user-friendly interfaces using
                  React, Tailwind CSS, and JavaScript.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex gap-4 p-5 rounded-xl bg-white/5 
                            hover:bg-red-500/10 transition-all duration-300">
              <IoArrowForward
                size={28}
                className="text-red-500 group-hover:translate-x-2 transition-transform"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Backend Developer
                </h2>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Handling APIs, application logic, and server-side workflows.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex gap-4 p-5 rounded-xl bg-white/5 
                            hover:bg-red-500/10 transition-all duration-300">
              <IoArrowForward
                size={28}
                className="text-red-500 group-hover:translate-x-2 transition-transform"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Database Developer
                </h2>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Designing optimized, scalable, and secure databases.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
