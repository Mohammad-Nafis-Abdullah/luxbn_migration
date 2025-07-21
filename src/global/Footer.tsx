"use client";

import { Container, Text } from "@mantine/core";
import { FaPhoneAlt, FaEnvelope, FaHome, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#002855] text-white pt-10 pb-4 border-t border-blue-900">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-2xl mt-1 text-gray-300" />
            <div>
              <Text className="font-semibold text-white">Call Us</Text>
              <Text className="text-gray-300">+447342817542</Text>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-2xl mt-1 text-gray-300" />
            <div>
              <Text className="font-semibold text-white">Email Us</Text>
              <Text className="text-gray-300 break-all">
                mdsac@luxbn.com
              </Text>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <FaHome className="text-2xl mt-1 text-gray-300" />
            <div>
              <Text className="font-semibold text-white">Location</Text>
              <Text className="text-gray-300">
                G13A, Manchester, M22 5TG
                <br />
                Manchester Business Park, London
              </Text>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6">
          <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white text-lg">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white text-lg">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white text-lg">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white text-lg">
            <FaTwitter />
          </a>
        </div>

        {/* Bottom line */}
        <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} LuxBN Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

