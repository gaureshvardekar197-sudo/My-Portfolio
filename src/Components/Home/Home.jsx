import React from 'react';
import avatarImg from "../../assets/Myself.jpg";

const Home = () => {
    return (
        <div className="relative text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 min-h-screen bg-gradient-to-br from-[#171d32] via-[#0f1123] to-[#1a2038] overflow-hidden" id="Home">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-[#465697]/20 to-[#3a4a7d]/10"
                        style={{
                            width: `${Math.random() * 100 + 20}px`,
                            height: `${Math.random() * 100 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
                
                {/* Grid pattern */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="relative z-10 md:w-1/2 md:pt-10 order-2 md:order-1">
                <h1 className="text-3xl md:text-6xl font-bold leading-normal md:leading-tight tracking-tighter">
                    Hello, I am 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#465697] via-[#5d6bb8] to-[#465697] bg-[length:200%_auto] animate-gradient">
                        &nbsp;Gauresh
                    </span>
                </h1>
                
                {/* Content card with glass effect */}
                <div className="mt-4 md:mt-6 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl">
                    <p className="text-sm md:text-xl tracking-tight text-gray-300">
                        A passionate Full Stack Developer specializing in React, and modern web technologies. 
                        I create beautiful, functional, and user-friendly web applications.
                    </p>
                </div>

                <button className="group relative mt-5 md:mt-10 text-white py-3 px-8 text-sm md:text-lg font-semibold rounded-3xl bg-gradient-to-r from-[#465697] to-[#3a4a7d] hover:opacity-90 duration-300 hover:scale-105 transition-all overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#465697]/30">
                    <span className="relative z-10">Contact Me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5d6bb8] to-[#465697] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:animate-shine" />
                </button>
            </div>

            <div className="relative z-10 md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0">
                <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#465697] via-[#5d6bb8] to-[#465697] rounded-full blur-xl opacity-50 animate-pulse" />
                    
                    {/* Outer ring */}
                    <div className="absolute -ins-4 rounded-full border-2 border-transparent bg-gradient-to-r from-[#465697] to-[#3a4a7d] animate-spin-slow">
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#171d32] to-[#1a2038]" />
                    </div>

                    <img 
                        className="relative w-54 h-34 md:w-96 md:h-96 object-cover rounded-full border-4 border-[#465697] shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#465697]/50"
                        src={avatarImg} 
                        alt="Gauresh - Portfolio" 
                    />
                    
                    {/* Floating dots around avatar
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#465697] to-[#5d6bb8] animate-float"
                            style={{
                                left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                                top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                                animationDelay: `${i * 0.5}s`,
                            }}
                        />
                    ))} */}
                </div>
            </div>

          
        </div>
    );
}

export default Home;