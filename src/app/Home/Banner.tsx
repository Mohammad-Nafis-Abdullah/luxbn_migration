/* eslint-disable @next/next/no-img-element */
"use client";

import Slider, { Settings } from "react-slick";

const images: { link: string; text: string }[] = [
    {
        link: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        text: "Experience you need, results you want",
    },
    {
        link: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1326947.jpg&fm=jpg",
        text: "UK. USA. CANADA. AUSTRALIA. MALAYSIA",
    },
    {
        link: "https://cdn.wallpapersafari.com/89/9/kQJnj8.jpg",
        text: "canadian university admission day",
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
                        className="h-[calc(100vh-137px)] object-cover w-full contrast-40"
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
