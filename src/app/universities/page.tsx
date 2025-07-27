/* eslint-disable @next/next/no-img-element */
"use client";

const universities: { id: number; img: string }[] = [
  { id: 1, img: "https://www.nhpeducationconsultants.com/images/uwr/torontomet-logo.png" },
  { id: 2, img: "https://www.nhpeducationconsultants.com/images/uwr/saskatchewan-logo.png" },
  { id: 3, img: "https://www.nhpeducationconsultants.com/images/uwr/winnipeg-logo.png" },
  { id: 4, img: "https://www.nhpeducationconsultants.com/images/uwr/upei-logo.png" },
  { id: 5, img: "https://www.nhpeducationconsultants.com/images/uwr/seneca-logo.png" },
  { id: 6, img: "https://www.nhpeducationconsultants.com/images/uwr/brock-logo.png" },
  { id: 7, img: "https://www.nhpeducationconsultants.com/images/uwr/rru-logo.png" },
  { id: 8, img: "https://www.nhpeducationconsultants.com/images/uwr/unb-logo.png" },
  { id: 9, img: "https://www.nhpeducationconsultants.com/images/uwr/northumbria-logo.png" },
  { id: 10, img: "https://www.nhpeducationconsultants.com/images/uwr/uwe-logo.png" },
  { id: 11, img: "https://www.nhpeducationconsultants.com/images/uwr/uca-logo.png" },
  { id: 12, img: "https://www.nhpeducationconsultants.com/images/uwr/chester-logo.png" },
  { id: 13, img: "https://www.nhpeducationconsultants.com/images/uwr/ulster-logo.png" },
  { id: 14, img: "https://www.nhpeducationconsultants.com/images/uwr/cardiff-logo.png" },
  { id: 15, img: "https://www.nhpeducationconsultants.com/images/uwr/surrey-logo.png" },
  { id: 16, img: "https://www.nhpeducationconsultants.com/images/uwr/regina-logo.png" },
  { id: 17, img: "https://www.nhpeducationconsultants.com/images/uwr/leeds-logo.png" },
  { id: 18, img: "https://www.nhpeducationconsultants.com/images/uwr/semo-logo.png" },
  { id: 19, img: "https://www.nhpeducationconsultants.com/images/uwr/unt-logo.png" },
  { id: 20, img: "https://www.nhpeducationconsultants.com/images/uwr/wright-logo.png" },
  { id: 21, img: "https://www.nhpeducationconsultants.com/images/uwr/kent-logo.png" },
  { id: 22, img: "https://www.nhpeducationconsultants.com/images/uwr/tarleton-logo.png" },
  { id: 23, img: "https://www.nhpeducationconsultants.com/images/uwr/manitoba-logo.png" },
  { id: 24, img: "https://www.nhpeducationconsultants.com/images/uwr/waterloo-logo.png" },
];

export default function Universities() {
  return (
    <div className="py-20 mx-auto max-w-[1200px] px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001F4D]">
          Our Partner Universities
        </h2>
        <div className="mt-3 w-20 h-1 bg-[#001F4D] mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Collaborating with top institutions worldwide
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {universities.map((uni) => (
          <div
            key={uni.id}
            className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center border border-gray-100 hover:border-[#001F4D] hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={uni.img}
              alt="University Logo"
              className="w-28 h-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

