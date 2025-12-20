import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-[#465697] to-[#2f3b73] text-white px-6 py-12 md:px-24"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
          <p className="mt-2 text-sm md:text-lg text-gray-200">
            Feel free to reach out — let’s work together 🚀
          </p>
        </div>

        {/* Right Content */}
        <ul className="flex flex-col gap-4 text-sm md:text-lg">

          {/* Email */}
          <li>
            <a
              href="mailto:gaureshvardekar197@gmail.com"
              className="flex items-center gap-3 hover:text-gray-300 transition duration-300"
            >
              <MdOutlineEmail size={22} />
              <span>gaureshvardekar197@gmail.com</span>
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/gauresh-vardekar-905911386/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gray-300 transition duration-300"
            >
              <CiLinkedin size={24} />
              <span>linkedin.com/in/gaureshvardekar</span>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/gaureshvardekar197-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gray-300 transition duration-300"
            >
              <FaGithub size={22} />
              <span>github.com/gaureshvardekar197-sudo</span>
            </a>
          </li>
        </ul>

      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs md:text-sm text-gray-300">
        © {new Date().getFullYear()} Gauresh Vardekar. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
