import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="w-full fixed top-0 left-0 bg-[#171d32] flex justify-between items-center text-white px-4 md:px-10 py-6 z-50">
            <span className="text-xl font-bold tracking-wide">Portfolio</span>

            {/* Desktop Menu - Always visible on md and above */}
            <ul className="hidden md:flex gap-8 font-semibold">
                <a href="#Home">
                    <li className="text-md transition-all duration-300 hover:text-gray-300">
                        Home
                    </li>
                </a>
                <a href="#About">
                    <li className="text-md transition-all duration-300 hover:text-gray-300">
                        About
                    </li>
                </a>
                <a href="#Skills">
                    <li className="text-md transition-all duration-300 hover:text-gray-300">
                        Skills
                    </li>
                </a>
                <a href="#Projects">
                    <li className="text-md transition-all duration-300 hover:text-gray-300">
                        Projects
                    </li>
                </a>
                <a href="#Contact">
                    <li className="text-md transition-all duration-300 hover:text-gray-300">
                        Contact
                    </li>
                </a>
            </ul>

            {/* Mobile Menu - Toggleable */}
            <ul className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col absolute top-16 left-0 w-full bg-[#171d32] p-4 gap-4 font-semibold`}>
                <a href="#About" onClick={() => setIsMenuOpen(false)}>
                    <li className="text-md transition-all duration-300 p-1 hover:text-gray-300">
                        About
                    </li>
                </a>
                <a href="#Skills" onClick={() => setIsMenuOpen(false)}>
                    <li className="text-md transition-all duration-300 p-1 hover:text-gray-300">
                        Skills
                    </li>
                </a>
                <a href="#Projects" onClick={() => setIsMenuOpen(false)}>
                    <li className="text-md transition-all duration-300 p-1 hover:text-gray-300">
                        Projects
                    </li>
                </a>
                <a href="#Contact" onClick={() => setIsMenuOpen(false)}>
                    <li className="text-md transition-all duration-300 p-1 hover:text-gray-300">
                        Contact
                    </li>
                </a>
            </ul>
            
            {/* Mobile Menu Toggle Button (Hidden on Desktop) */}
            <button 
                className="md:hidden absolute right-4 top-6 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <RiCloseLine size={30} className="cursor-pointer" />
                ) : (
                    <RiMenu2Line size={30} className="cursor-pointer" />
                )}
            </button>
        </nav>
    );
};

export default Navbar;