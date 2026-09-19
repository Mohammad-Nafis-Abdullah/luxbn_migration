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
                sections={[{ value: value, color: "#0e7c86" }]}
                rootColor="#d9eef0"
                label={
                    <p className="text-center text-4xl font-bold bg-transparent text-navy">
                        {value}%
                    </p>
                }
            />
            <span className="text-lg font-semibold text-center tracking-wider text-navy ">
                {title}
            </span>
        </section>
    );
}
