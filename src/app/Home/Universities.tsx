/* eslint-disable @next/next/no-img-element */
"use client";
import Slider, { Settings } from "react-slick";

const universities: { id: number; img: string }[] = [
    {
        id: 1,
        img: "https://www.nhpeducationconsultants.com/images/uwr/torontomet-logo.png",
    },
    {
        id: 2,
        img: "https://www.nhpeducationconsultants.com/images/uwr/saskatchewan-logo.png",
    },
    {
        id: 3,
        img: "https://www.nhpeducationconsultants.com/images/uwr/winnipeg-logo.png",
    },
    {
        id: 4,
        img: "https://www.nhpeducationconsultants.com/images/uwr/upei-logo.png",
    },
    {
        id: 5,
        img: "https://www.nhpeducationconsultants.com/images/uwr/seneca-logo.png",
    },
    {
        id: 6,
        img: "https://www.nhpeducationconsultants.com/images/uwr/brock-logo.png",
    },
    {
        id: 7,
        img: "https://www.nhpeducationconsultants.com/images/uwr/rru-logo.png",
    },
    {
        id: 8,
        img: "https://www.nhpeducationconsultants.com/images/uwr/unb-logo.png",
    },
    {
        id: 9,
        img: "https://www.nhpeducationconsultants.com/images/uwr/northumbria-logo.png",
    },
    {
        id: 10,
        img: "https://www.nhpeducationconsultants.com/images/uwr/uwe-logo.png",
    },
    {
        id: 11,
        img: "https://www.nhpeducationconsultants.com/images/uwr/uca-logo.png",
    },
    {
        id: 12,
        img: "https://www.nhpeducationconsultants.com/images/uwr/chester-logo.png",
    },
    {
        id: 13,
        img: "https://www.nhpeducationconsultants.com/images/uwr/ulster-logo.png",
    },
    {
        id: 14,
        img: "https://www.nhpeducationconsultants.com/images/uwr/cardiff-logo.png",
    },
    {
        id: 15,
        img: "https://www.nhpeducationconsultants.com/images/uwr/surrey-logo.png",
    },
    {
        id: 16,
        img: "https://www.nhpeducationconsultants.com/images/uwr/regina-logo.png",
    },
    {
        id: 17,
        img: "https://www.nhpeducationconsultants.com/images/uwr/leeds-logo.png",
    },
    {
        id: 18,
        img: "https://www.nhpeducationconsultants.com/images/uwr/semo-logo.png",
    },
    {
        id: 19,
        img: "https://www.nhpeducationconsultants.com/images/uwr/unt-logo.png",
    },
    {
        id: 20,
        img: "https://www.nhpeducationconsultants.com/images/uwr/wright-logo.png",
    },
    {
        id: 21,
        img: "https://www.nhpeducationconsultants.com/images/uwr/kent-logo.png",
    },
    {
        id: 22,
        img: "https://www.nhpeducationconsultants.com/images/uwr/tarleton-logo.png",
    },
    {
        id: 23,
        img: "https://www.nhpeducationconsultants.com/images/uwr/manitoba-logo.png",
    },
    {
        id: 24,
        img: "https://www.nhpeducationconsultants.com/images/uwr/waterloo-logo.png",
    },
];

export function Universities() {
    const settings: Settings = {
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: "0px",
        className: "p-3 sm:p-5 rounded-xs",
        // dots: true,
        // fade: true,
        infinite: true,
        pauseOnHover: true,
        slidesToShow: 5,
        speed: 1000,
        waitForAnimate: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="py-20 mx-auto max-w-[1440px]">
            <div className="mb-8 flex flex-col items-center px-5 text-center">
                <span className="section-eyebrow">Partners</span>
                <h3 className="section-title mt-2">Our Partner Universities</h3>
                <div className="section-bar" />
            </div>
            <Slider {...settings}>
                {universities?.map((v) => (
                    <div key={v.id} className="p-1">
                        <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg sm:p-10">
                            <img
                                src={v.img}
                                alt=""
                                className="w-full grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
                            />
                        </section>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
