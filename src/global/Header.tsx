"use client";

import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiNextdotjs } from "react-icons/si";

// @flow
export function Header() {
    const path = usePathname();
    const [opened, { toggle }] = useDisclosure();


    return (
        <header className="bg-white sticky top-0 left-0 right-0 text-black">
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
                    <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                </nav>
            </div>
        </header>
    );
}
