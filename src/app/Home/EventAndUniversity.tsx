/* eslint-disable @next/next/no-img-element */
"use client";
import { Divider } from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { FaFacebookSquare, FaInfoCircle } from "react-icons/fa";
import Slider, { Settings } from "react-slick";

const events: {
    id: number;
    img: string;
    title: string;
    vanue: string;
    event_url: string;
    fb_url: string;
}[] = [
    {
        id: 1,
        img: "https://www.nhpeducationconsultants.com/images/events/canada-eventD20.jpg",
        title: "Canadian University Application Day",
        vanue: "Pan Pacific Sonargaon Hotel",
        event_url: "",
        fb_url: "",
    },
    {
        id: 2,
        img: "https://www.nhpeducationconsultants.com/images/events/brock-event.jpg",
        title: "Spot Assessment",
        vanue: "Brock University, Canada",
        event_url: "",
        fb_url: "",
    },
    {
        id: 3,
        img: "https://www.nhpeducationconsultants.com/images/events/winnipeg-event.jpg",
        title: "Spot Assessment",
        vanue: "University of Winnipeg, Canada",
        event_url: "",
        fb_url: "",
    },
];

export function EventAndUniversity() {
    const { width } = useViewportSize();
    const settings: Settings = {
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: "0px",
        className: "bg-gray-300/30 p-3 sm:p-5 rounded-xs",
        // dots: true,
        // fade: true,
        infinite: true,
        pauseOnHover: true,
        slidesToShow: 3,
        speed: 1000,
        waitForAnimate: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-[#f4f4f4]" id="university">
            <div className="p-5 pt-24 pb-10 sm:pb-20 max-w-6xl mx-auto space-y-10">
                <section className="flex flex-col lg:flex-row gap-10 ">
                    <h3 className="text-5xl text-center sm:whitespace-nowrap font-bold">
                        Event and University Visits
                    </h3>
                    {width >= 1024 ? (
                        <Divider
                            color="black"
                            size="md"
                            orientation="vertical"
                        />
                    ) : (
                        <div className="bg-gray-800 h-1 rounded-full w-48 mx-auto" />
                    )}
                    <article className="text-center lg:text-left text-lg">
                        {`Keep an eye on our regular Education Event, University Visits, Seminar, etc.`}
                    </article>
                </section>
                <Slider {...settings}>
                    {events?.map((data) => (
                        <Slide key={data.id} data={data} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

function Slide({
    data,
}: {
    data: {
        id: number;
        img: string;
        title: string;
        vanue: string;
        event_url: string;
        fb_url: string;
    };
}) {
    const [isHovered, { open, close }] = useDisclosure(false);
    return (
        <div>
            <section className="space-y-2 px-2">
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={open}
                    onMouseLeave={close}
                >
                    <img src={data.img} alt={data.title} />
                    <section
                        className={`absolute right-0 top-0 bottom-0 w-16 ${
                            isHovered ? "opacity-100" : "opacity-0"
                        } bg-primary/40 transition-opacity duration-500 flex flex-col justify-center items-center gap-1`}
                    >
                        <FaInfoCircle
                            className="size-8"
                            onClick={() => alert(`clicked url : ${data.title}`)}
                        />
                        <FaFacebookSquare
                            className="size-8"
                            onClick={() =>
                                alert(`clicked fb_url : ${data.title}`)
                            }
                        />
                    </section>
                </div>
                <h3 className="text-xl font-semibold text-center">
                    {data.title}
                </h3>
                <h5 className="text-sm font-medium text-center">
                    {data.vanue}
                </h5>
            </section>
        </div>
    );
}
