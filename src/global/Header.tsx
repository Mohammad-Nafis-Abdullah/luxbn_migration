"use client";

import { Affix, Burger, Drawer, Transition } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleUp } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";

// @flow
export function Header() {
    const path = usePathname();
    const [opened, { close, toggle }] = useDisclosure(false);
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <header className="bg-white sticky top-0 left-0 right-0 text-black shadow-xs z-50">
            <div className="max-w-6xl px-3 py-5 mx-auto flex justify-between items-center">
                <section className="inline-flex items-center gap-3">
                    <SiNextdotjs className="size-12" />
                    <h3 className="text-xl font-bold">LUXBN MIGRATION</h3>
                </section>

                {/* pc navbar */}
                <nav className="hidden gap-5 lg:inline-flex">
                    <Link
                        href="/"
                        className={`font-bold ${path === "/" && "active_link"}`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/study-abroad"
                        className={`font-bold ${
                            path === "/study-abroad" && "active_link"
                        }`}
                    >
                        STUDY ABROAD
                    </Link>
                    <Link
                        href="/scholarship"
                        className={`font-bold ${
                            path === "/scholarship" && "active_link"
                        }`}
                    >
                        SCHOLARSHIP
                    </Link>
                    <Link
                        href="/university"
                        className={`font-bold ${
                            path === "/university" && "active_link"
                        }`}
                    >
                        UNIVERSITY
                    </Link>
                    <Link
                        href="/contact"
                        className={`font-bold ${
                            path === "/contact" && "active_link"
                        }`}
                    >
                        CONTACT
                    </Link>
                </nav>

                {/* mobile navbar */}
                <nav>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        aria-label="Toggle navigation"
                        className="lg:hidden"
                    />
                    <Drawer
                        radius="sm"
                        position="right"
                        opened={opened}
                        onClose={close}
                        size={"xs"}
                        title=""
                    >
                        {/* Drawer content */}
                    </Drawer>
                </nav>
            </div>
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <FaAngleUp
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                            className="cursor-pointer size-10 rounded-full bg-gray-800 text-white p-2"
                        />
                    )}
                </Transition>
            </Affix>
        </header>
    );
}
