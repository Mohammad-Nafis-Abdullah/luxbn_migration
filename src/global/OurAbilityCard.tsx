import { ReactNode } from "react";

export interface OurAbilityCard_props {
    icon: ReactNode;
    quantity: number;
    text: string;
    showPlus?: boolean;
}

export function OurAbilityCard({
    icon,
    quantity,
    showPlus = false,
    text,
}: OurAbilityCard_props) {
    return (
        <div className="inline-flex w-48 mx-auto items-center gap-2 rounded-full p-2.5">
            {icon}
            <div className="h-15 w-1 bg-primary rounded-full shrink-0"/>
            <section className="inline-flex flex-col">
                <span className="text-lg md:text-3xl font-bold">{`${quantity} ${showPlus ? "+" : ""}`}</span>
                <span className="text-xs md:text-base">{text}</span>
            </section>
        </div>
    );
}
