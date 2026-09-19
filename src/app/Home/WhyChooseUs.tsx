"use client";

import { useEffect, useState } from "react";
import { FaGlobe, FaUserGraduate, FaHandshake, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUserGraduate className="text-3xl" />,
    title: "Expert Guidance",
    desc: "Our experienced counselors guide you step by step to achieve your study abroad goals.",
  },
  {
    icon: <FaGlobe className="text-3xl" />,
    title: "Global Reach",
    desc: "Partnerships with top universities across the UK, USA, Canada, Australia, and Europe.",
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "Trusted Support",
    desc: "Thousands of students trust us every year for transparent and reliable services.",
  },
  {
    icon: <FaLightbulb className="text-3xl" />,
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
          // clamp so odd targets (e.g. 5 countries) don't overshoot to 6
          newCounters[i] = Math.min(newCounters[i] + 2, stat.value);
          return newCounters;
        });
      }, 30)
    );

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="section-eyebrow">Why Luxbn</span>
          <h2 className="section-title mt-2 !text-4xl md:!text-5xl">
            Why <span className="text-primary">Choose Us?</span>
          </h2>
          <div className="section-bar" />
          <p className="section-lead mt-5 max-w-2xl text-lg">
            We help students unlock global opportunities with expert guidance,
            scholarship support, and trusted partnerships.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto mb-5 grid size-16 place-items-center rounded-2xl bg-secondary text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-navy px-6 py-10 text-center shadow-xl sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/15">
          {stats.map((stat, i) => (
            <div key={i} className="px-4">
              <h4 className="text-4xl font-extrabold text-accent md:text-5xl">
                {counters[i]}
                {stat.suffix}
              </h4>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
