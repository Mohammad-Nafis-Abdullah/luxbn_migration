/* eslint-disable @next/next/no-img-element */
"use client";

import Slider, { Settings } from "react-slick";

const images: { link: string; text: string }[] = [
    {
        link: "/banner1.png",
        text: "Experience you need, results you want",
    },
    {
        link: "/banner2.png",
        text: "UK. USA. CANADA. AUSTRALIA. MALAYSIA",
    },
    {
        link: "/banner3.png",
        text: "canadian university admission day",
    },
    {
        link: "/banner4.png",
        text: "Australia university First day",
    },
];

export function Banner() {
    const settings: Settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        accessibility: false,
        arrows: false,
        autoplay: true,
        centerPadding: "0px",
        className: "h-[calc(100vh-137px)]",
        pauseOnHover: false,
    };
    return (
        <Slider {...settings}>
            {images.map((img, i) => (
                <div key={i} className="relative">
                    <img
                        className="h-[calc(100vh-137px)] object-cover w-full contrast-60"
                        src={img.link}
                        alt={img.text}
                    />
                    <article className="absolute top-0 right-0 left-0 bottom-0 text-white font-bold uppercase tracking-widest flex place-self-center p-3 text-5xl">
                        {img.text}
                    </article>
                </div>
            ))}
        </Slider>
    );
}
