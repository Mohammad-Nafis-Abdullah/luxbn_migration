/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, Group, Text, Modal, Title, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {/* Modal */}
            <Modal
                opened={opened}
                onClose={close}
                size="lg"
                radius="md"
                centered
                withCloseButton
                classNames={{
                    header: "pb-0",
                    body: "pt-3",
                }}
                title={
                    <Title
                        order={1}
                        className="text-primary text-center w-full"
                    >
                        Study in {country}
                    </Title>
                }
            >
                <div className="flex flex-col items-center text-center space-y-4">
                    <img
                        src={src}
                        alt={country}
                        className="w-16 h-16 object-contain ring-2 ring-gray-200 rounded-full"
                    />
                    <Title order={4} className="text-lg font-semibold">
                        {title}
                    </Title>
                    <Divider className="w-1/2 mx-auto my-2" />
                    <Text className="leading-relaxed text-gray-700">
                        {message}
                    </Text>
                </div>
            </Modal>

            {/* Card */}
            <Card
                onClick={open}
                className="flex flex-col items-center gap-3 hover:drop-shadow-md transition cursor-pointer rounded-md"
                shadow="xs"
                padding="lg"
                radius="xs"
                withBorder
            >
                <img
                    src={src}
                    alt={country}
                    className="w-10 h-10 object-contain"
                />
                <h5 className="font-bold tracking-wide text-center">{title}</h5>
                <Group justify="space-between" mb="xs">
                    <Text size="sm" c="dimmed" className="text-center">
                        {message.slice(0, 200)}...
                    </Text>
                </Group>
            </Card>
        </>
    );
}
