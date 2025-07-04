import { Group } from "@mantine/core";
import { ReactNode } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export interface OurFeatureCard_props {
    icon: ReactNode;
    title: string;
    message: string;
}

export function OurFeatureCard({ icon, title, message }: OurFeatureCard_props) {
    return (
        <div className="flex flex-col items-center gap-3 p-3 drop-shadow-md bg-white rounded-md transition hover:text-white hover:bg-primary duration-300 py-8 select-none">
            <section className="flex justify-center items-center gap-5">
                {icon}
                <h5 className="font-bold tracking-wider uppercase">{title}</h5>
            </section>
            <Group justify="space-between" mb="xs">
                <p className="text-center text-sm">
                    {message.slice(0, 100)}...
                </p>
                <FaLongArrowAltRight className="mx-auto" />
            </Group>
        </div>
    );
}
