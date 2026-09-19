"use client";

import { Affix, Burger, Drawer, Transition } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleUp, FaGraduationCap } from "react-icons/fa6";

const links: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Study Abroad", href: "/#study-abroad" },
    { label: "Scholarship", href: "/scholarship" },
    { label: "University", href: "/universities" },
    { label: "Contact", href: "/contact-us" },
];

export function Header() {
    const pathname = usePathname();
    const [opened, { close, toggle }] = useDisclosure(false);
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <header className="bg-white/95 backdrop-blur sticky top-0 left-0 right-0 shadow-sm z-50">
            <div className="max-w-6xl px-4 py-4 mx-auto flex justify-between items-center">
                <Link href="/" className="inline-flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-navy text-accent shadow-md">
                        <FaGraduationCap className="size-6" />
                    </span>
                    <span className="leading-tight">
                        <span className="block text-xl font-extrabold tracking-wide text-navy">
                            LUXBN
                        </span>
                        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary">
                            Migration
                        </span>
                    </span>
                </Link>

                {/* pc navbar */}
                <nav className="hidden lg:flex items-center gap-8">
                    <NavOptions pathname={pathname} onNavigate={close} />
                    <Link href="/contact-us" className="btn-accent !py-2.5">
                        Free Consultation
                    </Link>
                </nav>

                {/* mobile navbar */}
                <nav className="lg:hidden">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        aria-label="Toggle navigation"
                        color="#001f4d"
                    />
                    <Drawer
                        radius="sm"
                        position="right"
                        opened={opened}
                        onClose={close}
                        size={"xs"}
                        title=""
                    >
                        <nav className="flex flex-col px-3 gap-5">
                            <NavOptions pathname={pathname} onNavigate={close} />
                            <Link
                                href="/contact-us"
                                onClick={close}
                                className="btn-accent mt-2"
                            >
                                Free Consultation
                            </Link>
                        </nav>
                    </Drawer>
                </nav>
            </div>
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <button
                            type="button"
                            aria-label="Back to top"
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                            className="grid size-11 cursor-pointer place-items-center rounded-full bg-navy text-accent shadow-lg ring-2 ring-accent ring-offset-2 transition hover:bg-primary hover:text-white"
                        >
                            <FaAngleUp className="size-5" />
                        </button>
                    )}
                </Transition>
            </Affix>
        </header>
    );
}

function NavOptions({
    pathname,
    onNavigate,
}: {
    pathname: string;
    onNavigate: () => void;
}) {
    return (
        <>
            {links.map(({ label, href }) => {
                // "/#study-abroad" is a hash link on the home page, so only plain paths get an active state
                const isActive = !href.includes("#") && pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        onClick={onNavigate}
                        className={`nav-link ${isActive ? "active_link" : ""}`}
                    >
                        {label}
                    </Link>
                );
            })}
        </>
    );
}
