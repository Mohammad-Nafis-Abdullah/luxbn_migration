"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegClock,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "X (Twitter)", Icon: FaXTwitter },
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "YouTube", Icon: FaYoutube },
];

export function Top() {
  return (
    <div className="bg-navy text-white">
      <section className="max-w-6xl px-4 py-2 mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-6 font-medium">
          <a
            href="tel:+447352991215"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <FaPhoneAlt className="text-accent" />
            +44 7352 991215
          </a>
          <span className="inline-flex items-center gap-2 text-white/80">
            <FaRegClock className="text-accent" />
            Monday - Friday
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="text-white/80 transition duration-300 hover:-translate-y-0.5 hover:text-accent"
            >
              <Icon />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
