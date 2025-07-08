"use client";
import { Button, Input, LoadingOverlay, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormEvent, useState } from "react";

const mailFormat = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/g;

export function GeneralEnquiry() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [visible, { close, open }] = useDisclosure(false);

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const [mssg, setMssg] = useState("");
    const [mssgErr, setMssgErr] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setNameErr("");
        setEmailErr("");
        setMssgErr("");
        // open();

        const isValid = mailFormat.test(email);
        if (!isValid) {
            setEmailErr("Please enter a valid mail address");
        }
        if (!name) {
            setNameErr("Please enter your name");
        }
        if (!mssg) {
            setMssgErr("Please enter your message to send");
        }
        if (!isValid || !name || !mssg) {
            // close();
            return;
        }
    }
    return (
        <div className="">
            <h3 className="text-4xl font-bold mb-2">
                General <span className="text-primary">Enquiry</span>
            </h3>
            <p className="text-primary">
                If you wish to make a query, please complete the form below and
                submit.
            </p>
            <section className="relative p-5 mt-8 rounded-md">
                <LoadingOverlay
                    visible={visible}
                    zIndex={1000}
                    overlayProps={{ radius: "sm", blur: 1 }}
                />

                <form onSubmit={handleSubmit} className="space-y-5 max-w-sm">
                    <Input.Wrapper error={nameErr}>
                        <Input
                            variant="filled"
                            size="lg"
                            placeholder="Full Name *"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper error={emailErr}>
                        <Input
                            variant="filled"
                            size="lg"
                            placeholder="Your E-mail *"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper error={mssgErr}>
                        <Textarea
                            placeholder="Enter your message here..."
                            required
                            autosize
                            size="lg"
                            variant="filled"
                            minRows={5}
                            maxRows={5}
                            value={mssg}
                            onChange={(e) => setMssg(e.target.value)}
                        />
                    </Input.Wrapper>
                    <Button
                        type="submit"
                        variant="filled"
                        size="md"
                        color="#819A91"
                    >
                        Send
                    </Button>
                </form>
            </section>
        </div>
    );
}
