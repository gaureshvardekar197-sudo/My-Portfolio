import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser, FaRegComment } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center bg-[#0c0e19] px-6 py-16"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-[#11132a] rounded-2xl shadow-xl p-8 md:p-12">

        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-gray-300 text-sm md:text-lg">
            Have a project in mind or just want to say hello?
            Feel free to reach out — I’d love to hear from you!
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <MdOutlineEmail size={20} />
              gaureshvardekar197@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#465697]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <MdOutlineEmail className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#465697]"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaRegComment className="absolute top-4 left-3 text-gray-400" />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#465697]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#465697] hover:bg-[#5a6bcf] text-white py-3 rounded-lg font-semibold transition duration-300 hover:scale-[1.02]"
          >
            Send Message 🚀
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
