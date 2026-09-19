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
    <div className="min-h-screen bg-surface pb-20">
      {/* Page banner */}
      <section className="bg-gradient-to-r from-navy-dark via-navy to-primary-dark px-5 pt-16 pb-24 text-center text-white">
        <span className="section-eyebrow !text-accent">Our network</span>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Our Partner Universities
        </h1>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Collaborating with top institutions worldwide
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* Count badge, overlapping the banner */}
        <div className="-mt-7 mx-auto flex w-fit items-center gap-3 rounded-full bg-white px-8 py-3 shadow-lg">
          <span className="text-3xl font-extrabold text-primary">
            {universities.length}
          </span>
          <span className="text-sm font-bold uppercase tracking-wider text-navy">
            Partner institutions
          </span>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {universities.map((uni) => (
            <div
              key={uni.id}
              className="group flex items-center justify-center rounded-2xl border-b-4 border-transparent bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl sm:p-8"
            >
              <img
                src={uni.img}
                alt="University Logo"
                className="h-auto w-28 object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

