/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Rating } from "@mantine/core";
import { Fragment } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider, { Settings } from "react-slick";

const users: {
    id: number;
    img: string;
    name: string;
    program: string;
    university: string;
    stars: number;
    message: string;
}[] = [
    {
        id: 0,
        img: "https://www.nhpeducationconsultants.com/images/testimonials/salih-toki-h.jpg",
        name: "Downs Crosby",
        program: "BBA",
        university: "University of Manitoba",
        stars: 3,
        message:
            "nulla in ea commodo dolor proident irure tempor labore est occaecat non nulla velit ipsum consequat est aliquip nostrud aute",
    },
    {
        id: 1,
        img: "https://www.nhpeducationconsultants.com/images/testimonials/nur-afra-h.jpg",
        name: "May Giles",
        program: "B.Sc",
        university: "University of Toronto",
        stars: 4,
        message:
            "nulla in ea commodo dolor proident irure tempor labore est occaecat non nulla velit ipsum consequat est aliquip nostrud aute",
    },
    {
        id: 2,
        img: "https://www.nhpeducationconsultants.com/images/testimonials/redwan-ahsan-h.jpg",
        name: "Dillon Juarez",
        program: "B.Sc",
        university: "University of Alberta",
        stars: 4,
        message:
            "nulla in ea commodo dolor proident irure tempor labore est occaecat non nulla velit ipsum consequat est aliquip nostrud aute",
    },
    {
        id: 3,
        img: "https://www.nhpeducationconsultants.com/images/testimonials/marzana-mehdi-h.jpg",
        name: "Carr Stephenson",
        program: "B.Sc",
        university: "Universtiy of Toronto",
        stars: 5,
        message:
            "nulla in ea commodo dolor proident irure tempor labore est occaecat non nulla velit ipsum consequat est aliquip nostrud aute",
    },
    {
        id: 4,
        img: "https://www.nhpeducationconsultants.com/images/testimonials/tashfia-shams-h.jpg",
        name: "Rosella Lynch",
        program: "BBA",
        university: "University of Alberta",
        stars: 5,
        message:
            "nulla in ea commodo dolor proident irure tempor labore est occaecat non nulla velit ipsum consequat est aliquip nostrud aute",
    },
];

export function OurStudentSay() {
    const settings: Settings = {
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: "0px",
        className: "bg-gray-300/30 p-5 rounded-lg mt-5",
        // dots: true,
        // fade: true,
        infinite: true,
        pauseOnHover: false,
        speed: 1000,
        waitForAnimate: false,
        draggable:false,
    };
    return (
        <div>
            <h3 className="text-4xl font-bold mb-2">
                What our Students <span className="text-primary">Say?</span>
            </h3>
            <p className="text-primary">
                We’ve chosen a selection of student testimonials to give you a
                better insight about us, our honesty, transparency and our
                devotion towards our students.
            </p>
            <div className="slider-container">
                <Slider {...settings}>
                    {users?.map((user, i) => (
                        <Fragment key={i}>
                            <section className="flex justify-center gap-5">
                                <section className="space-y-2 grow-0 w-[35%] flex flex-col items-center">
                                    <img
                                        className="ring-3 ring-offset-2 ring-gray-300/30 mb-5 object-scle-down"
                                        src={user.img}
                                        alt={user.name}
                                    />
                                    <h4 className="text-xl font-semibold text-center">
                                        {user.name}
                                    </h4>
                                    <h5 className="text-sm font-bold text-center">
                                        {user.university}
                                    </h5>
                                </section>
                                <section className="py-5 grow w-[60%] flex flex-col">
                                    <h4 className="text-lg font-semibold ">
                                        {user.program}
                                    </h4>
                                    <Rating
                                        defaultValue={user.stars}
                                        readOnly
                                    />
                                    <article className="mt-5">
                                        <FaQuoteLeft className="inline-flex mr-1 size-5 -mt-2" />
                                        <span>
                                            {user.message.slice(0, 120)}...
                                        </span>
                                        <FaQuoteRight className="inline-flex ml-1 size-5 -mt-2" />
                                    </article>
                                    <Button
                                        variant="light"
                                        color="#819A91"
                                        className="self-center mt-5"
                                    >
                                        View More
                                    </Button>
                                </section>
                            </section>
                        </Fragment>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
