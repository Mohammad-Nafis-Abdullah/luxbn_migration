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

export function CountryCard({ src, country, title, message }: CountryCard_props) {
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
          <Title order={2} className="text-navy text-center w-full">
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
          <Text className="leading-relaxed text-gray-700">{message}</Text>
        </div>
      </Modal>

      {/* Card */}
      <Card
        onClick={open}
        className="group flex flex-col items-center gap-3 cursor-pointer rounded-2xl bg-white border-t-4 !border-t-transparent transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:!border-t-accent"
        shadow="sm"
        padding="xl"
        radius="lg"
        withBorder
      >
        <span className="grid size-20 place-items-center rounded-full bg-secondary ring-4 ring-white shadow-inner transition duration-300 group-hover:scale-110">
          <img src={src} alt={country} className="size-12 object-contain" />
        </span>
        <h5 className="text-lg font-bold tracking-wide text-center text-navy">
          {title}
        </h5>
        <Group justify="space-between" mb="xs">
          <Text size="sm" c="dimmed" className="text-center">
            {message.slice(0, 100)}...
          </Text>
        </Group>
        <span className="mt-auto text-sm font-bold uppercase tracking-wider text-primary transition-all duration-300 group-hover:tracking-[0.15em]">
          Learn more &rarr;
        </span>
      </Card>
    </>
  );
}
