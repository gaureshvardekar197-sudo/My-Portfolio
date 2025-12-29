import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaBootstrap } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { SiLaravel } from "react-icons/si";

const Skill = () => {
    return (
        <div id="Skills" className="p-10 md:p-24 bg-gradient-to-b from-[#171d32] to-[#1a2038]">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-2">
                Technical <span className="text-[#465697]">Skills</span>
            </h1>
            <div className="w-24 h-1 bg-[#465697] mb-12"></div>
            
            <div className="max-w-6xl mx-auto">
                {/* Frontend Skills */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">Frontend Development</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#E34F26]/10 group-hover:bg-[#E34F26]/20 transition-colors">
                                <FaHtml5 color="#E34F26" size={60} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">HTML5</span>
                            <span className="text-gray-400 text-sm mt-1">Advanced</span>
                        </div>
                        
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#1572b6]/10 group-hover:bg-[#1572b6]/20 transition-colors">
                                <FaCss3 color="#1572b6" size={60} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">CSS3</span>
                            <span className="text-gray-400 text-sm mt-1">Advanced</span>
                        </div>
                        
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#F7DE1E]/10 group-hover:bg-[#F7DE1E]/20 transition-colors">
                                <FaJs color="#F7DE1E" size={60} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">JavaScript</span>
                            <span className="text-gray-400 text-sm mt-1">Advanced</span>
                        </div>
                        
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#61DAFB]/10 group-hover:bg-[#61DAFB]/20 transition-colors">
                                <FaReact color="#61DAFB" size={60} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">React.js</span>
                            <span className="text-gray-400 text-sm mt-1">Intermediate</span>
                        </div>
                        
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#7952B3]/10 group-hover:bg-[#7952B3]/20 transition-colors">
                                <FaBootstrap color="#7952B3" size={60} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">Bootstrap</span>
                            <span className="text-gray-400 text-sm mt-1">Advanced</span>
                        </div>
                        
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#06B6D4]/10 group-hover:bg-[#06B6D4]/20 transition-colors">
                                <SiTailwindcss color="#06B6D4" size={60} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">Tailwind CSS</span>
                            <span className="text-gray-400 text-sm mt-1">Advanced</span>
                        </div>
                    </div>
                </div>
                
                {/* Backend Skills */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">Backend Development</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#777BB4]/10 group-hover:bg-[#777BB4]/20 transition-colors">
                                <FaPhp color="#777BB4" size={70} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">PHP</span>
                            <span className="text-gray-400 text-sm mt-1">Advanced</span>
                        </div>
                        
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#FF2D20]/10 group-hover:bg-[#FF2D20]/20 transition-colors">
                                <SiLaravel color="#FF2D20" size={70} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">Laravel</span>
                            <span className="text-gray-400 text-sm mt-1">Intermediate</span>
                        </div>
                        
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            <div className="p-4 rounded-xl bg-[#4479A1]/10 group-hover:bg-[#4479A1]/20 transition-colors">
                                <SiMysql color="#4479A1" size={70} />
                            </div>
                            <span className="text-white mt-4 font-bold text-lg">MySQL</span>
                            <span className="text-gray-400 text-sm mt-1">Advanced</span>
                        </div>
                    </div>
                </div>
                
                {/* Additional Skills Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">Additional Technologies & Tools</h2>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            Git & GitHub
                        </span>
                        {/* <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            REST APIs
                        </span>
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            jQuery
                        </span>
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            Node.js
                        </span>
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            Express.js
                        </span>
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            MongoDB
                        </span>
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            Postman
                        </span> */}
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            VS Code
                        </span>
                        {/* <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            npm/yarn
                        </span> */}
                        <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
                            Responsive Design
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;