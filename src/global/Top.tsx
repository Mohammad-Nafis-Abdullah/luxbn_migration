// "use client";

// import { Divider } from "@mantine/core";
// import { useViewportSize } from "@mantine/hooks";
// import {
//     FaFacebookSquare,
//     FaLinkedin,
//     FaPhoneAlt,
//     FaRegClock,
//     FaYoutube,
// } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

// // @flow
// export function Top() {
//     const { width } = useViewportSize();
//     return (
//         <div className="bg-secondary">
//             <section className="max-w-6xl p-3 mx-auto flex flex-row justify-between items-center ">
//                 <div className="flex flex-col md:flex-row gap-1 md:gap-3 font-bold text-gray-700 text-xs">
//                     <p className="inline-flex items-center gap-2">
//                         <FaPhoneAlt /> Phone: +44 7342817542
//                     </p>
//                     {width >= 768 ? (
//                         <Divider
//                             color="black"
//                             size="md"
//                             orientation="vertical"
//                         />
//                     ) : (
//                         <></>
//                     )}
//                     <p className="inline-flex items-center gap-2">
//                         <FaRegClock /> We are open: 24/7
//                     </p>
//                 </div>
//                 <div className="inline-flex gap-5 text-black scale-50 md:scale-100">
//                     <FaFacebookSquare className="size-6 cursor-pointer" />
//                     <FaSquareXTwitter className="size-6 cursor-pointer" />
//                     <FaLinkedin className="size-6 cursor-pointer" />
//                     <FaYoutube className="w-7 h-6 self-start cursor-pointer" />
//                 </div>
//             </section>
//         </div>
//     );
// }

"use client";

"use client";

"use client";

import { Divider } from "@mantine/core";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaRegClock,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export function Top() {
  return (
    <div className="bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-600 text-white shadow-lg backdrop-blur-md animate-slideDown">
      <section className="max-w-7xl px-4 md:px-8 py-3 mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-center md:text-left">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-medium text-xs sm:text-sm md:text-base">
          <p className="inline-flex items-center justify-center sm:justify-start gap-2 hover:text-yellow-200 transition-all duration-300 cursor-pointer">
            <FaPhoneAlt className="animate-pulse text-yellow-300" /> 
            <span className="hover:underline">+44 7342817542</span>
          </p>

          {/* Divider only visible on md+ */}
          <Divider
            color="white"
            size="sm"
            orientation="vertical"
            className="hidden md:block opacity-50"
          />

          <p className="inline-flex items-center justify-center sm:justify-start gap-2 hover:text-yellow-200 transition-all duration-300 cursor-pointer">
            <FaRegClock /> <span className="hover:underline">Open 24/7</span>
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 sm:gap-5 text-white text-lg sm:text-xl">
          <FaFacebookSquare className="cursor-pointer hover:text-blue-300 hover:scale-125 hover:drop-shadow-lg transform transition duration-300" />
          <FaSquareXTwitter className="cursor-pointer hover:text-gray-200 hover:scale-125 hover:drop-shadow-lg transform transition duration-300" />
          <FaLinkedin className="cursor-pointer hover:text-blue-200 hover:scale-125 hover:drop-shadow-lg transform transition duration-300" />
          <FaYoutube className="cursor-pointer hover:text-red-400 hover:scale-125 hover:drop-shadow-lg transform transition duration-300" />
        </div>
      </section>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

