"use client";

import { Affix, Burger, Drawer, Transition } from "@mantine/core";
import {
    useDisclosure,
    useWindowScroll,
    UseWindowScrollTo,
} from "@mantine/hooks";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { FaAngleUp } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";

// @flow
export function Header() {
    const router = useRouter();
    const [opened, { close, toggle }] = useDisclosure(false);
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <header className="bg-white sticky top-0 left-0 right-0 text-black shadow-xs z-50">
            <div className="max-w-6xl px-3 py-5 mx-auto flex justify-between items-center">
                <span
                    onClick={() => {
                        router.push("/");
                        scrollTo({ y: 0 });
                    }}
                    className="inline-flex items-center gap-3 cursor-pointer"
                >
                    <SiNextdotjs className="size-12" />
                    <h3 className="text-xl font-bold">LUXBN MIGRATION</h3>
                </span>

                {/* pc navbar */}
                <nav className="hidden gap-5 lg:inline-flex *:cursor-pointer">
                    <NavOptions
                        router={router}
                        close={close}
                        scrollTo={scrollTo}
                    />
                </nav>

                {/* mobile navbar */}
                <nav className="lg:hidden">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        aria-label="Toggle navigation"
                    />
                    <Drawer
                        radius="sm"
                        position="right"
                        opened={opened}
                        onClose={close}
                        size={"xs"}
                        title=""
                    >
                        <nav className="*:cursor-pointer flex flex-col px-3 gap-5">
                            <NavOptions
                                router={router}
                                close={close}
                                scrollTo={scrollTo}
                            />
                        </nav>
                    </Drawer>
                </nav>
            </div>
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <FaAngleUp
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                            className="cursor-pointer size-10 rounded-full bg-primary text-white p-2 ring-2 ring-primary ring-offset-2"
                        />
                    )}
                </Transition>
            </Affix>
        </header>
    );
}

function NavOptions({
    router,
    close,
    scrollTo,
}: {
    router: AppRouterInstance;
    close: () => void;
    scrollTo: UseWindowScrollTo;
}) {
    return (
        <>
            <span
                onClick={() => {
                    router.push("/");
                    close();
                    scrollTo({ y: 0 });
                }}
                className={`font-bold`}
            >
                HOME
            </span>
            <span
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/#study-abroad");
                    close();
                    const section = document.getElementById("study-abroad");
                    section?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className={`font-bold scroll-smooth `}
            >
                STUDY ABROAD
            </span>
            <span
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/scholarship");
                    close();
                }}
                className={`font-bold `}
            >
                SCHOLARSHIP
            </span>
            <span
                onClick={() => {
                    router.push("/universities");
                    close();
                    // scrollTo({ y: 0 });
                }}
                className={`font-bold`}
            >
                UNIVERSITY
            </span>
            <span
                onClick={() => {
                    router.push("/contact-us");
                    close();
                    // scrollTo({ y: 0 });
                }}
                className={`font-bold `}
            >
                CONTACT
            </span>
        </>
    );
}
