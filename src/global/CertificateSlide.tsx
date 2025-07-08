"use client"
/* eslint-disable @next/next/no-img-element */

import { Fragment } from "react";
import Slider, { Settings } from "react-slick";

const certificates: {
    id: number;
    img: string;
    title: string;
}[] = [
    {
        id: 0,
        img: "https://www.nhpeducationconsultants.com/images/authorization/manitoba-authorization.jpg",
        title: "Manitoba Authorization",
    },
    {
        id: 1,
        img: "https://www.nhpeducationconsultants.com/images/authorization/saskatchewan-authorization.jpg",
        title: "Saskatchewan Authorization",
    },
    {
        id: 2,
        img: "https://www.nhpeducationconsultants.com/images/authorization/brock-authorization.jpg",
        title: "Brock Authorization",
    },
    {
        id: 3,
        img: "https://www.nhpeducationconsultants.com/images/authorization/semo-authorization.jpg",
        title: "Semo Authorization",
    },
    {
        id: 4,
        img: "https://www.nhpeducationconsultants.com/images/authorization/unt-authorization.jpg",
        title: "Unt Authorization",
    },
    {
        id: 5,
        img: "https://www.nhpeducationconsultants.com/images/authorization/seneca-authorization.jpg",
        title: "Seneca Authorization",
    },
];

export function CertificateSlide() {
    const settings: Settings = {
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: "0px",
        className: "bg-secondary/30 rounded-xs p-3",
        // dots: true,
        // fade: true,
        infinite: true,
        pauseOnHover: false,
        speed: 1000,
        waitForAnimate: false,
        draggable: false,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {certificates?.map((data, i) => (
                    <Fragment key={i}>
                        <section className="">
                            <img
                                className="ring-3 ring-offset-2 ring-gray-300/30 w-full border-4 border-white"
                                src={data.img}
                                alt={data.title}
                            />
                        </section>
                    </Fragment>
                ))}
            </Slider>
        </div>
    );
}
