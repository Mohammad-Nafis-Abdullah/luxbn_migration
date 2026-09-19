/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

interface scholarship_schema {
    [key: string]: {
        name: string;
        logo: string;
        description: string;
        scholarship: string;
        tuitionFees: string;
        extraDetails: string;
    }[];
}

const scholarships: scholarship_schema = {
    uk: [
        {
            name: "Northumbria University - London Campus",
            logo: "https://www.nhpeducationconsultants.com/images/uwr/northumbria-logo.png",
            description:
                "Offers 2-year Masters in Business, IT. AACSB accredited Business faculty and top-ranked in UK.",
            scholarship:
                "15%-25% Scholarship for Masters & Pre-Masters programs",
            tuitionFees: "£13,000 - £17,000/year",
            extraDetails:
                "Located in London; popular for business and IT programs.",
        },
        {
            name: "UWE Bristol",
            logo: "https://www.nhpeducationconsultants.com/images/uwr/uwe-logo.png",
            description:
                "11th in UK for student satisfaction; TEF Gold rated. Public research university in Bristol.",
            scholarship: "£1,000 to £2,000 for most programs (except Law)",
            tuitionFees: "£14,000 - £18,000/year",
            extraDetails: "Strong engineering and design programs.",
        },
        {
            name: "University of Leeds",
            logo: "https://www.nhpeducationconsultants.com/images/uwr/leeds-logo.png",
            description:
                "Top Russell Group university in UK with strong research and international student support.",
            scholarship: "20% off tuition fees for high achievers",
            tuitionFees: "£15,500 - £20,000/year",
            extraDetails: "Known for business, law, and engineering.",
        },
    ],
    usa: [
        {
            name: "Harvard University",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
            description:
                "Need-based aid covering full tuition and living for eligible international students.",
            scholarship: "Up to 100% based on financial need",
            tuitionFees: "$50,000/year (covered for need-based students)",
            extraDetails: "Top Ivy League with global recognition.",
        },
        {
            name: "University of North Texas",
            logo: "https://www.nhpeducationconsultants.com/images/uwr/unt-logo.png",
            description:
                "Affordable public university with scholarships for international STEM programs.",
            scholarship: "Up to $5,000/year",
            tuitionFees: "$22,000/year",
            extraDetails: "Popular for engineering and computer science.",
        },
        {
            name: "Wright State University",
            logo: "https://www.nhpeducationconsultants.com/images/uwr/wright-logo.png",
            description:
                "Public research university in Ohio offering merit-based scholarships for undergraduates.",
            scholarship: "$2,500 to $5,000 annually",
            tuitionFees: "$18,000/year",
            extraDetails: "Focus on aviation and health sciences.",
        },
    ],
    canada: [
        {
            name: "University of Toronto",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/University_of_Toronto_coat_of_arms.svg",
            description:
                "Lester B. Pearson International Scholarship covers tuition, books, and living expenses for 4 years.",
            scholarship: "100% full scholarship for top international students",
            tuitionFees: "CAD 45,000/year (covered under scholarship)",
            extraDetails: "Canada’s #1 ranked university.",
        },
        {
            name: "University of Manitoba",
            logo: "https://www.nhpeducationconsultants.com/images/uwr/manitoba-logo.png",
            description:
                "Offers international undergraduate scholarships up to CAD 16,000 over 4 years.",
            scholarship: "CAD 4,000/year",
            tuitionFees: "CAD 18,000/year",
            extraDetails: "Strong research and agricultural programs.",
        },
        {
            name: "University of Waterloo",
            logo: "https://www.nhpeducationconsultants.com/images/uwr/waterloo-logo.png",
            description:
                "Known for co-op programs; scholarships for STEM and business students.",
            scholarship: "Up to CAD 10,000",
            tuitionFees: "CAD 22,000/year",
            extraDetails: "Famous for computer science and engineering.",
        },
    ],
    australia: [
        {
            name: "University of Melbourne",
            logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/University_of_Melbourne_coat_of_arms.svg",
            description:
                "International Undergraduate Scholarships offer 50% fee remission.",
            scholarship: "50% tuition fee waiver",
            tuitionFees: "AUD 30,000/year",
            extraDetails: "Ranked #1 in Australia for academic excellence.",
        },
        {
            name: "University of Sydney",
            logo: "https://upload.wikimedia.org/wikipedia/en/e/e3/University_of_Sydney_coat_of_arms.svg",
            description:
                "Vice-Chancellor’s International Scholarships Scheme offering up to AUD 40,000.",
            scholarship: "Up to AUD 40,000",
            tuitionFees: "AUD 36,000/year",
            extraDetails: "Historic campus, top in law and medicine.",
        },
        {
            name: "Monash University",
            logo: "https://upload.wikimedia.org/wikipedia/en/e/e2/Monash_University_logo.svg",
            description:
                "Monash International Leadership Scholarship covers 100% course fees.",
            scholarship: "100% full tuition fee waiver",
            tuitionFees: "AUD 32,000/year",
            extraDetails: "Top in engineering and pharmacy.",
        },
    ],
    eu: [
        {
            name: "University of Amsterdam",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/University_of_Amsterdam_logo.svg",
            description:
                "Amsterdam Merit Scholarship for outstanding non-EU students in master’s programs.",
            scholarship: "€5,000 - €25,000",
            tuitionFees: "€13,000/year",
            extraDetails: "Top-ranked in social sciences and economics.",
        },
        {
            name: "Lund University (Sweden)",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Lund_University_logo.svg",
            description:
                "Global Scholarship Programme offers 25%-100% tuition fee waivers.",
            scholarship: "25%-100% waiver",
            tuitionFees: "€15,000/year",
            extraDetails: "Ranked among top 100 universities globally.",
        },
    ],
};

const countries = [
    { id: "uk", name: "UK" },
    { id: "usa", name: "USA" },
    { id: "canada", name: "Canada" },
    { id: "australia", name: "Australia" },
    { id: "eu", name: "EU" },
];

export default function Scholarship() {
    const [activeCountry, setActiveCountry] = useState("uk");
    const activeName =
        countries.find((c) => c.id === activeCountry)?.name ?? activeCountry;

    return (
        <div className="min-h-screen bg-surface">
            {/* Page banner */}
            <section className="bg-gradient-to-r from-navy-dark via-navy to-primary-dark px-5 py-16 text-center text-white">
                <span className="section-eyebrow !text-accent">
                    Funding your future
                </span>
                <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
                    Scholarships
                </h1>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
                <p className="mx-auto mt-5 max-w-2xl text-white/80">
                    Explore scholarships offered by our partner universities and
                    find the one that fits your destination and budget.
                </p>
            </section>

            <div className="mx-auto max-w-5xl px-5 pb-16">
                {/* Country tabs, overlapping the banner */}
                <div
                    role="tablist"
                    aria-label="Scholarships by country"
                    className="-mt-6 flex justify-start gap-2 overflow-x-auto rounded-full bg-white p-2 shadow-lg sm:justify-center"
                >
                    {countries.map((country) => {
                        const isActive = activeCountry === country.id;
                        return (
                            <button
                                key={country.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveCountry(country.id)}
                                className={`shrink-0 cursor-pointer rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition duration-300 ${
                                    isActive
                                        ? "bg-navy text-white shadow-md"
                                        : "text-navy hover:bg-secondary"
                                }`}
                            >
                                {country.name}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <main className="mt-12">
                    <h2 className="section-title mb-2">
                        {activeName}{" "}
                        <span className="text-primary">Scholarships</span>
                    </h2>
                    <div className="section-bar mb-8" />

                    <div className="space-y-6">
                        {scholarships[activeCountry]?.map((uni) => (
                            <article
                                key={uni.name}
                                className="flex flex-col gap-6 rounded-2xl border-l-4 border-primary bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row md:p-8"
                            >
                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-navy">
                                        {uni.name}
                                    </h3>
                                    <p className="mt-2 leading-relaxed text-muted">
                                        {uni.description}
                                    </p>

                                    <div className="mt-5 rounded-xl bg-secondary/60 p-4">
                                        <p className="text-xs font-bold uppercase tracking-widest text-primary">
                                            Scholarship
                                        </p>
                                        <p className="mt-1 font-bold text-navy">
                                            {uni.scholarship}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2 text-sm">
                                        <span className="rounded-full bg-navy px-4 py-1.5 font-medium text-white">
                                            Tuition: {uni.tuitionFees}
                                        </span>
                                        <span className="rounded-full bg-surface px-4 py-1.5 font-medium text-muted ring-1 ring-gray-200">
                                            {uni.extraDetails}
                                        </span>
                                    </div>
                                </div>

                                {/* Logo */}
                                <div className="flex items-center justify-center rounded-xl bg-surface p-4 md:w-44">
                                    <img
                                        src={uni.logo}
                                        alt={uni.name}
                                        className="max-h-20 object-contain"
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
