/* eslint-disable @next/next/no-img-element */
import { Card, Group, Text } from "@mantine/core";
import Link from "next/link";

interface CountryCard_props {
    src: string;
    country: string;
    title: string;
    message: string;
}

export function CountryCard({
    src,
    country,
    title,
    message,
}: CountryCard_props) {
    return (
        <Link href={""} className="hover:drop-shadow-lg rounded-md transition">
            <Card
                className="flex flex-col items-center gap-3"
                shadow="xs"
                padding="lg"
                radius="xs"
                withBorder
            >
                <img src={src} alt={country} className="size-10" />
                <h5 className="font-bold tracking-wider">{title}</h5>
                <Group justify="space-between" mb="xs">
                    <Text size="sm" c="dimmed" className="text-center">
                        {message.slice(0, 200)}...
                    </Text>
                </Group>
            </Card>
        </Link>
    );
}
