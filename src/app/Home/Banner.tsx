/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
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
        dots: true,
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
        className: "h-[calc(100vh-137px)] min-h-[28rem] hero-slider",
        pauseOnHover: false,
    };
    return (
        <Slider {...settings}>
            {images.map((img, i) => (
                <div key={i} className="relative">
                    <img
                        className="h-[calc(100vh-137px)] min-h-[28rem] object-cover w-full"
                        src={img.link}
                        alt={img.text}
                    />
                    {/* dark navy wash keeps the headline readable on any photo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/60 to-transparent" />
                    <article className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center gap-6 px-6 text-white">
                        <span className="section-eyebrow !text-accent">
                            Study abroad, made simple
                        </span>
                        <h2 className="max-w-3xl text-4xl font-extrabold uppercase leading-tight tracking-wide sm:text-5xl lg:text-6xl">
                            {img.text}
                        </h2>
                        <div className="h-1 w-20 rounded-full bg-accent" />
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact-us" className="btn-accent">
                                Book Free Consultation
                            </Link>
                            <Link href="/#study-abroad" className="btn-outline-light">
                                Explore Countries
                            </Link>
                        </div>
                    </article>
                </div>
            ))}
        </Slider>
    );
}
