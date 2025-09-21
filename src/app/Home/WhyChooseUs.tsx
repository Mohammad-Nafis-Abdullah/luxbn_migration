"use client";

import { useEffect, useState } from "react";
import { FaGlobe, FaUserGraduate, FaHandshake, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUserGraduate className="text-4xl text-blue-600" />,
    title: "Expert Guidance",
    desc: "Our experienced counselors guide you step by step to achieve your study abroad goals.",
  },
  {
    icon: <FaGlobe className="text-4xl text-green-600" />,
    title: "Global Reach",
    desc: "Partnerships with top universities across the UK, USA, Canada, Australia, and Europe.",
  },
  {
    icon: <FaHandshake className="text-4xl text-purple-600" />,
    title: "Trusted Support",
    desc: "Thousands of students trust us every year for transparent and reliable services.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    title: "Smart Solutions",
    desc: "Scholarship guidance, visa assistance, and career counseling—all in one place.",
  },
];

const stats = [
  { label: "Years of Experience", value: 16, suffix: "+" },
  { label: "Countries", value: 5, suffix: "" },
  { label: "Universities", value: 50, suffix: "+" },
  { label: "Success Stories", value: 100, suffix: "+" },
];

export function WhyChooseUs() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, i) =>
      setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[i] < stat.value) newCounters[i] += 2;
          return newCounters;
        });
      }, 30)
    );

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why <span className="text-blue-600">Choose Us?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We help students unlock global opportunities with expert guidance,
            scholarship support, and trusted partnerships.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 text-center border hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition"
            >
              <h4 className="text-3xl font-bold text-blue-600">
                {counters[i]}
                {stat.suffix}
              </h4>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
