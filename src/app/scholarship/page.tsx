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
    { id: "uk", name: "UK", icon: "🎓" },
    { id: "usa", name: "USA", icon: "🎓" },
    { id: "canada", name: "Canada", icon: "🎓" },
    { id: "australia", name: "Australia", icon: "🎓" },
    { id: "eu", name: "EU", icon: "🎓" },
];

export default function Scholarship() {
    const [activeCountry, setActiveCountry] = useState("uk");

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside className="w-24 md:w-48 border-r bg-white shadow-sm">
                <ul className="flex md:flex-col justify-between md:justify-start overflow-x-auto">
                    {countries.map((country) => (
                        <li
                            key={country.id}
                            className={`flex flex-col items-center md:items-start px-4 py-5 cursor-pointer hover:bg-gray-100 ${
                                activeCountry === country.id
                                    ? "text-red-600 font-bold border-l-4 border-red-600"
                                    : "text-gray-700"
                            }`}
                            onClick={() => setActiveCountry(country.id)}
                        >
                            <span className="text-2xl md:text-xl">
                                {country.icon}
                            </span>
                            <span className="text-sm md:ml-2 md:mt-1">
                                {country.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Content */}
            <main className="flex-1 p-5 md:p-10">
                <h1 className="text-2xl font-bold mb-6 capitalize">
                    {activeCountry} Scholarships
                </h1>
                <div className="space-y-8">
                    {scholarships[activeCountry]?.map((uni, i) => (
                        <div
                            key={i}
                            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
                        >
                            {/* Text */}
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-red-600">
                                    {uni.name}
                                </h2>
                                <p className="text-gray-700 mt-2">
                                    {uni.description}
                                </p>

                                <h3 className="text-blue-600 font-medium mt-4">
                                    Scholarship Details
                                </h3>
                                <ul className="list-disc pl-5 text-gray-800 mt-1">
                                    <li>{uni.scholarship}</li>
                                    <li>Tuition Fees: {uni.tuitionFees}</li>
                                    <li>{uni.extraDetails}</li>
                                </ul>
                            </div>

                            {/* Logo */}
                            <div className="md:w-40 flex justify-center items-center mt-4 md:mt-0">
                                <img
                                    src={uni.logo}
                                    alt={uni.name}
                                    className="max-h-20 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
