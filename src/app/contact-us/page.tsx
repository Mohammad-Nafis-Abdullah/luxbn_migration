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
        <div className="min-h-screen bg-surface text-ink pb-16">
            {/* Page banner */}
            <section className="bg-gradient-to-r from-navy-dark via-navy to-primary-dark px-5 pt-16 pb-28 text-center text-white">
                <span className="section-eyebrow !text-accent">
                    We&apos;d love to hear from you
                </span>
                <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
                    Contact Us
                </h1>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
                <p className="mx-auto mt-5 max-w-2xl text-white/80">
                    Questions about admissions, visas or scholarships? Get in
                    touch and one of our counsellors will get back to you.
                </p>
            </section>

            {/* Contact Info Section, overlapping the banner */}
            <div className="-mt-16 mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
                {/* Card: Call Us */}
                <div className="flex flex-col items-center space-y-3 rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <span className="grid size-16 place-items-center rounded-full bg-secondary text-primary">
                        <FaPhone className="text-2xl" />
                    </span>
                    <h3 className="text-xl font-bold text-navy">Call Us</h3>
                    <p className="text-center text-sm leading-relaxed text-muted">
                        <span className="font-semibold">Phone:</span> <br />
                        +44 7342817542, +8801303043453 <br />
                        +8801889193550
                    </p>
                </div>

                {/* Card: Office Location */}
                <div className="flex flex-col items-center space-y-3 rounded-2xl bg-navy p-8 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <span className="grid size-16 place-items-center rounded-full bg-white/10 text-accent">
                        <FaMapMarkerAlt className="text-2xl" />
                    </span>
                    <h3 className="text-xl font-bold">Office Location</h3>
                    <p className="text-center text-sm leading-relaxed text-white/80">
                        G13A, Manchester, M22 5TG <br />
                        Manchester Business Park, Manchester, <br />
                        UK
                    </p>
                </div>

                {/* Card: Email Us */}
                <div className="flex flex-col items-center space-y-3 rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <span className="grid size-16 place-items-center rounded-full bg-secondary text-primary">
                        <FaEnvelope className="text-2xl" />
                    </span>
                    <h3 className="text-xl font-bold text-navy">Email Us</h3>
                    <p className="text-center text-sm leading-relaxed text-muted">
                        <span className="font-semibold">Mail: </span>
                        <a
                            href="mailto:mdsac@luxbn.com"
                            className="transition-colors hover:text-primary"
                        >
                            mdsac@luxbn.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Enquiry form + map */}
            <div className="mx-auto mt-16 grid max-w-6xl items-start gap-8 px-4 lg:grid-cols-2">
                <QueryForm />

                <div className="space-y-6">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                        <MapLocation />
                    </div>

                    {/* Social Links */}
                    <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
                        <h2 className="mb-4 text-xl font-bold text-navy">
                            SOCIALISE{" "}
                            <span className="font-normal text-gray-400">
                                WITH US
                            </span>
                        </h2>
                        <div className="flex justify-center gap-4">
                            {[
                                { label: "Facebook", Icon: FaFacebookF },
                                { label: "Twitter", Icon: FaTwitter },
                                { label: "LinkedIn", Icon: FaLinkedinIn },
                                { label: "YouTube", Icon: FaYoutube },
                            ].map(({ label, Icon }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="grid size-11 place-items-center rounded-full bg-secondary text-primary transition duration-300 hover:-translate-y-1 hover:bg-navy hover:text-accent"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
