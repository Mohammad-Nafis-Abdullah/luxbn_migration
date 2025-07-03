import { Card, Group, Text } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface CountryCard_props {
    icon: ReactNode;
    title: string;
    message: string;
}

export function OurFeatureCard({
    icon,
    title,
    message,
}: CountryCard_props) {
    return (
        <Link
            href={""}
            className="drop-shadow-md bg-white rounded-md transition hover:text-white hover:bg-gray-900 duration-300"
        >
            <div
                className="flex flex-col items-center gap-3 p-3"
            >
                <section className="flex justify-center items-center gap-5 mt-3">
                    {icon}
                    <h5 className="font-bold tracking-wider uppercase">{title}</h5>
                </section>
                <Group justify="space-between" mb="xs">
                    <p className="text-center text-sm">
                        {message.slice(0, 100)}...
                    </p>
                    <FaLongArrowAltRight className="mx-auto"/>
                </Group>
            </div>
        </Link>
    );
}
