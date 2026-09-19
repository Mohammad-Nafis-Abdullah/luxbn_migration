import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Scholarship", href: "/scholarship" },
  { label: "Universities", href: "/universities" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy" },
];

// there are no per-country pages yet, so these all jump to the destinations section
const destinations = ["UK", "USA", "Canada", "Australia", "Malaysia"];

const socials = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Instagram", Icon: FaInstagram },
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "Twitter", Icon: FaTwitter },
];

const headingClass =
  "mb-5 text-sm font-bold uppercase tracking-[0.2em] text-accent";
const linkClass =
  "inline-flex items-center gap-2 text-white/70 transition duration-200 hover:translate-x-1 hover:text-white";

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-navy-dark text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 text-sm lg:grid-cols-12 lg:gap-x-8">
          {/* Brand */}
          <div className="col-span-2 space-y-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-accent">
                <FaGraduationCap className="size-6" />
              </span>
              <span className="leading-tight">
                <span className="block text-2xl font-extrabold tracking-wide">
                  LUXBN
                </span>
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent">
                  Migration
                </span>
              </span>
            </Link>
            <p className="max-w-xs leading-relaxed text-white/70">
              Expert guidance for students on university admissions, visas and
              scholarships, from first counselling session to departure.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-white/10 text-white/80 transition duration-300 hover:-translate-y-1 hover:bg-accent hover:text-navy-dark"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <h4 className={headingClass}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destinations */}
          <div className="lg:col-span-2">
            <h4 className={headingClass}>Study Abroad</h4>
            <ul className="space-y-3">
              {destinations.map((name) => (
                <li key={name}>
                  <Link href="/#study-abroad" className={linkClass}>
                    Study in {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="col-span-2 space-y-5 not-italic lg:col-span-4">
            <h4 className={headingClass}>Get In Touch</h4>
            <div className="flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-accent">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="font-semibold">Call Us</p>
                <a
                  href="tel:+447352991215"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  +44 7352 991215
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-accent">
                <FaEnvelope />
              </span>
              <div>
                <p className="font-semibold">Email Us</p>
                <a
                  href="mailto:mdsac@luxbn.com"
                  className="break-all text-white/70 transition-colors hover:text-white"
                >
                  mdsac@luxbn.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-accent">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-white/70">
                  G13A, Manchester, M22 5TG
                  <br />
                  Manchester Business Park, Manchester
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-accent">
                <FaRegClock />
              </span>
              <div>
                <p className="font-semibold">Opening Hours</p>
                <p className="text-white/70">Monday - Friday</p>
              </div>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Luxbn Ltd. All rights reserved.
          </span>
          <Link
            href="/privacy"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
