// @flow
import { RingProgress } from "@mantine/core";

export interface OurRingProgress_props {
    value: number;
    title: string;
}

export function OurRingProgress({ title, value }: OurRingProgress_props) {
    return (
        <section className="inline-flex flex-col items-center justify-center content-center align-middle">
            <RingProgress
                roundCaps
                size={160}
                thickness={7}
                sections={[{ value: value, color: "dark" }]}
                label={
                    <p className="text-center text-4xl bg-transparent text-primary">
                        {value}%
                    </p>
                }
            />
            <span className="text-lg font-medium text-center tracking-wider text-primary ">
                {title}
            </span>
        </section>
    );
}
