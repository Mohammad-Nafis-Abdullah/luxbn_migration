"use client";

import { OurAbilityCard, OurAbilityCard_props } from "@/global/OurAbilityCard";
import { OurFeatureCard, OurFeatureCard_props } from "@/global/OurFeatureCard";
import { Divider } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { FaMapLocationDot, FaUserCheck } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { HiMiniCubeTransparent } from "react-icons/hi2";
import {
    MdFamilyRestroom,
    MdOutlineDisplaySettings,
    MdOutlineMapsHomeWork,
    MdOutlinePermContactCalendar,
} from "react-icons/md";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { TbUserExclamation } from "react-icons/tb";

// demo data
const data: OurFeatureCard_props[] = [
    {
        icon: <TbUserExclamation className="size-16" />,
        title: "experience",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        icon: <HiMiniCubeTransparent className="size-16" />,
        title: "transparency",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        icon: <MdFamilyRestroom className="size-16" />,
        title: "pastoral care",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        icon: <GrCertificate className="size-16" />,
        title: "authorized agent",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        icon: <PiLightbulbFilamentLight className="size-16" />,
        title: "intelligency and skill",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        icon: <MdOutlineDisplaySettings className="size-16" />,
        title: "long term relationship",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
];

const abilities: OurAbilityCard_props[] = [
    {
        icon: (
            <MdOutlinePermContactCalendar className="size-7 md:size-10 shrink-0" />
        ),
        quantity: 16,
        text: "Years of Experience",
        showPlus: true,
    },
    {
        icon: <FaMapLocationDot className="size-7 md:size-10 shrink-0" />,
        quantity: 5,
        text: "Countries",
        showPlus: false,
    },
    {
        icon: <MdOutlineMapsHomeWork className="size-7 md:size-10 shrink-0" />,
        quantity: 100,
        text: "Universities",
        showPlus: true,
    },
    {
        icon: <FaUserCheck className="size-7 md:size-10 shrink-0" />,
        quantity: 2000,
        text: "Success Story",
        showPlus: true,
    },
];

export function WhyChooseUs() {
    const { width } = useViewportSize();
    return (
        <div className="bg-[#f4f4f4]">
            <div className="p-5 py-24 max-w-6xl mx-auto space-y-20">
                <section className="flex flex-col lg:flex-row gap-10 ">
                    <h3 className="text-5xl text-center sm:whitespace-nowrap font-bold">
                        Why Choose Us?
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
                    <article>
                        {`In confusion, many can't decide where to get proper knowing for his or her desired aim and sometimes it can be an unwise decision.`}
                    </article>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.map((v, i) => (
                        <OurFeatureCard
                            key={i}
                            icon={v.icon}
                            title={v.title}
                            message={v.message}
                        />
                    ))}
                </section>
                <section className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {abilities.map((v, i) => (
                        <OurAbilityCard
                            key={i}
                            icon={v.icon}
                            text={v.text}
                            quantity={v.quantity}
                            showPlus={v.showPlus}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
}
