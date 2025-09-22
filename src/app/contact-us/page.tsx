"use client";

import {
    FaPhone,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { QueryForm } from "./QueryForm";

// Dynamically import the map component with SSR disabled
const MapLocation = dynamic(
    () => import("./MapLocation").then((mod) => mod.MapLocation),
    {
        ssr: false,
    }
);

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 pb-10">
            {/* map location section */}
            <MapLocation />
            {/* Contact Info Section */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-20">
                {/* Card: Call Us */}
                <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center space-y-3 hover:shadow-lg transition">
                    <FaPhone className="text-4xl text-[#001F4D]" />
                    <h3 className="text-xl font-bold text-[#001F4D]">
                        Call Us
                    </h3>
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
                        Manchester Business Park, Manchester, <br />
                        UK
                    </p>
                </div>

                {/* Card: Email Us */}
                <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center space-y-3 hover:shadow-lg transition">
                    <FaEnvelope className="text-4xl text-[#001F4D]" />
                    <h3 className="text-xl font-bold text-[#001F4D]">
                        Email Us
                    </h3>
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
                    SOCIALISE{" "}
                    <span className="font-normal text-gray-400">WITH US</span>
                </h2>
                <div className="flex justify-center space-x-4 mb-8">
                    {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
                        (Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-[#001F4D] hover:text-white transition"
                            >
                                <Icon />
                            </a>
                        )
                    )}
                </div>

                {/* Form */}
                <QueryForm />
            </div>
        </div>
    );
}
