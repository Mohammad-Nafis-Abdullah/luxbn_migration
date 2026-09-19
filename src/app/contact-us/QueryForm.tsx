"use client";
import { Button, Input, LoadingOverlay, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// any address of the form name@domain.tld; the browser's type="email" check covers the finer rules
const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

        const isEmailValid = mailFormat.test(email);
        const hasName = name.trim() !== "";
        const hasMssg = mssg.trim() !== "";

        if (!hasName) setNameErr("Please enter your name");
        if (!isEmailValid) setEmailErr("Please enter a valid mail address");
        if (!hasMssg) setMssgErr("Please enter your message to send");

        // only send once every field passes
        if (!hasName || !isEmailValid || !hasMssg) return;

        open();
        emailjs
            .sendForm(
                "service_qghx23n",
                "template_apo63v8",
                e.currentTarget,
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
            .catch(() => {
                Swal.fire({
                    title: "Your message could not be sent",
                    text: "Please try again in a moment.",
                    icon: "error",
                });
            })
            .finally(() => {
                close();
            });
    }
    return (
        <div className="bg-white shadow-lg rounded-2xl border-t-4 border-accent p-8 space-y-4 text-left">
            <span className="section-eyebrow">Send a message</span>
            <h3 className="section-title !text-2xl">
                Make an <span className="text-primary">Enquiry</span>
            </h3>
            <p className="text-sm text-muted">
                Use this form to make a general enquiry.
            </p>

            <section className="relative mt-6 rounded-md">
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
                        color="#0e7c86"
                    >
                        Send
                    </Button>
                </form>
            </section>
        </div>
    );
}
