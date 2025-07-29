"use client";
import { Button, Input, LoadingOverlay, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const mailFormat = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

export function QueryForm() {
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
        open();

        const isValid = mailFormat.test(email);
        if (!name) {
            setNameErr("Please enter your name");
            close();
        }
        if (!isValid) {
            setEmailErr("Please enter a valid mail address");
            close();
        }
        if (!mssg) {
            setMssgErr("Please enter your message to send");
            close();
        }
        if (isValid || name || mssg) {
            emailjs
                .sendForm(
                    "service_qghx23n",
                    "template_apo63v8",
                    e.target as string | HTMLFormElement,
                    "Jl7-8rR2TOR_6XGxA"
                )
                .then(() => {
                    Swal.fire({
                        title: "Your message is sent successfully",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                    });
                    setName("");
                    setEmail("");
                    setMssg("");
                })
                .finally(() => {
                    close();
                });
            close();
            return;
        }
        close();
    }
    return (
        <div className="bg-white shadow-md rounded-xl p-8 space-y-4 text-left">
            <h3 className="text-xl font-bold text-[#001F4D]">
                Make an{" "}
                <span className="font-normal text-gray-400">Enquiry</span>
            </h3>
            <p className="text-sm text-gray-500">
                Use this form to make a general enquiry.
            </p>

            <section className="relative p-5 mt-8 rounded-md">
                <LoadingOverlay
                    visible={visible}
                    zIndex={1000}
                    overlayProps={{ radius: "sm", blur: 1 }}
                />

                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input.Wrapper error={mssgErr}>
                        <Textarea
                            name="message"
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

                    <div className="flex flex-col md:flex-row gap-4">
                        <Input.Wrapper error={nameErr} className="grow">
                            <Input
                                name="user_name"
                                variant="filled"
                                size="lg"
                                placeholder="Name *"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Input.Wrapper>
                        <Input.Wrapper error={emailErr} className="grow">
                            <Input
                                name="user_email"
                                variant="filled"
                                size="lg"
                                placeholder="E-mail *"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Input.Wrapper>
                    </div>
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
