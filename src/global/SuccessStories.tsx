"use client";

const alumni = [
  {
    name: "Ayesha Rahman",
    uni: "University of Toronto",
    program: "B.Sc Computer Science",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    success: "Secured 50% scholarship and now working at Microsoft Canada.",
  },
  {
    name: "Khalid Hasan",
    uni: "University of Leeds",
    program: "MBA",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
    success: "Graduated with distinction and placed in PwC UK.",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Student <span className="text-green-600">Success Stories</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Meet our students who achieved their dreams with our guidance.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          {alumni.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{a.name}</h3>
              <p className="text-sm text-gray-500">{a.program}</p>
              <p className="text-sm font-medium text-[#001F4D]">{a.uni}</p>
              <p className="text-sm text-center text-gray-600 mt-3">{a.success}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
