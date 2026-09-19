import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { Header } from "@/global/Header";
import { Top } from "@/global/Top";
import { MantineProvider } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "@/global/Footer";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "LUXBN MIGRATION",
    description:
        "Luxbn Migration helps students with university admissions, student visas and scholarships for the UK, USA, Canada, Australia and Malaysia.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} antialiased`}>
                <MantineProvider>
                    <Top />
                    <Header />
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}
