"use client";

import { CountryCard } from "@/global/CountryCard";
import { Divider } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

// demo data
const data: {
    src: string;
    country: string;
    title: string;
    message: string;
}[] = [
    {
        src: "https://www.nhpeducationconsultants.com/images/uk-flag.png",
        country: "UK",
        title: "Study in UK",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        src: "https://www.nhpeducationconsultants.com/images/usa-flag.png",
        country: "USA",
        title: "Study in USA",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        src: "https://www.nhpeducationconsultants.com/images/canada-flag.png",
        country: "Canada",
        title: "Study in Canada",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        src: "https://www.nhpeducationconsultants.com/images/australia-flag.png",
        country: "Australia",
        title: "Study in Australia",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        src: "https://www.nhpeducationconsultants.com/images/malaysia-flag.png",
        country: "Malaysia",
        title: "Study in Malaysia",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
    {
        src: "https://www.nhpeducationconsultants.com/images/world-map.png",
        country: "World",
        title: "Other Visa Services",
        message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat inventore in delectus praesentium voluptatem neque rerum nostrum laudantium nisi ducimus nihil ex aliquam, dicta iure deleniti quam assumenda numquam? Reiciendis, qui recusandae eos commodi asperiores neque officiis, ullam est distinctio earum harum odit excepturi fuga autem rerum, doloribus consequuntur?",
    },
];

export function ChooseCountry() {
    const { width } = useViewportSize();
    return (
        <div className="p-5 max-w-6xl mx-auto">
            <section className="flex flex-col lg:flex-row gap-10 py-12">
                <h3 className="text-5xl whitespace-nowrap font-bold">
                    Choose Your Country
                </h3>
                <Divider
                    color="black"
                    size="md"
                    orientation={width >= 1024 ? "vertical" : "horizontal"}
                />
                <article>
                    NHP processes Student Visa, Student Spouse Visa and Parents
                    Visitors Visa for UK, USA, Canada, Australia and Malaysia.
                </article>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                {data.map((v, i) => (
                    <CountryCard
                        key={i}
                        country={v.country}
                        src={v.src}
                        title={v.title}
                        message={v.message}
                    />
                ))}
            </section>
        </div>
    );
}
