import { OurRingProgress } from "@/global/OurRingProgress";

export function WhyDifferent() {
    return (
        <div
            className={`sm:bg-[url(/corporate_lady.png)] bg-no-repeat bg-position-[bottom_-2rem_left_45vw] bg-fixed bg-size-[40rem]`}
        >
            <div className="p-5 py-18 max-w-6xl mx-auto">
                <section className="space-y-8 max-w-3xl backdrop-brightness">
                    <article className="space-y-5">
                        <h3 className="font-medium text-5xl">
                            Why we are different?
                        </h3>
                        <h5 className="font-medium">
                            What makes us different makes us better.
                        </h5>
                        <p className="text-primary">
                            We are distinctive in the quality of our services
                            and stand out of the crowd. Unlike other consultancy
                            firms in Bangladesh, we really care for our
                            students. We always strive to give the best possible
                            guidelines and solutions that a student may require.
                            Our experienced consultants and in house lawyer are
                            always at hand to prepare your visa application
                            documents in a perfect way.
                        </p>
                    </article>
                    <section className="grid sm:inline-grid sm:grid-cols-3 justify-items-center-safe gap-3">
                        <OurRingProgress title="Free Advice" value={100} />
                        <OurRingProgress
                            title="Satisfied Clients"
                            value={100}
                        />
                        <OurRingProgress title="Visa Success" value={90} />
                    </section>
                </section>
            </div>
        </div>
    );
}
