"use client";

import { FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10">
      {/* Contact Info Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Card: Call Us */}
        <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center space-y-3 hover:shadow-lg transition">
          <FaPhone className="text-4xl text-[#001F4D]" />
          <h3 className="text-xl font-bold text-[#001F4D]">Call Us</h3>
          <p className="text-center text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold">Phone:</span> <br />
            +44 7342817542, +8801303043453 <br />
            +8801889193550
          </p>
        </div>

        {/* Card: Office Location */}
        <div className="bg-[#001F4D] shadow-md rounded-xl p-8 flex flex-col items-center space-y-3 text-white hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-4xl text-red-500" />
          <h3 className="text-xl font-bold">Office Location</h3>
          <p className="text-center text-sm leading-relaxed">
            G13A, Manchester, M22 5TG <br />
            Manchester Business Park, London, <br />
            UK
          </p>
        </div>

        {/* Card: Email Us */}
        <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center space-y-3 hover:shadow-lg transition">
          <FaEnvelope className="text-4xl text-[#001F4D]" />
          <h3 className="text-xl font-bold text-[#001F4D]">Email Us</h3>
          <p className="text-center text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold">Mail: </span>
            mdsac@luxbn.com
          </p>
        </div>
      </div>

      {/* Social + Enquiry Form */}
      <div className="max-w-4xl mx-auto mt-16 px-4 text-center">
        {/* Social Links */}
        <h2 className="text-2xl font-bold text-[#001F4D] mb-2">
          SOCIALISE <span className="font-normal text-gray-400">WITH US</span>
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          {[
            FaFacebookF,
            FaTwitter,
            FaLinkedinIn,
            FaYoutube,
           
          ].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-[#001F4D] hover:text-white transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white shadow-md rounded-xl p-8 space-y-4 text-left">
          <h3 className="text-xl font-bold text-[#001F4D]">
            Make an <span className="font-normal text-gray-400">Enquiry</span>
          </h3>
          <p className="text-sm text-gray-500">
            Use this form to make a general enquiry.
          </p>
          <textarea
            placeholder="Message"
            className="w-full border p-3 rounded-md h-32 focus:outline-none focus:border-[#001F4D]"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="flex-1 border p-3 rounded-md focus:outline-none focus:border-[#001F4D]"
            />
            <input
              type="email"
              placeholder="Email *"
              className="flex-1 border p-3 rounded-md focus:outline-none focus:border-[#001F4D]"
            />
          </div>
          <button className="bg-[#001F4D] text-white px-6 py-3 rounded-md hover:bg-[#002a6e]">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
