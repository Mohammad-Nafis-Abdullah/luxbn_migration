import { Authorization } from "@/global/Authorization";
import { CertificateSlide } from "@/global/CertificateSlide";

export function AuthorizationAndCertificate() {
    return (
        <div className="bg-[url(/authorization-bg.webp)] bg-no-repeat bg-cover">
            <div className="bg-black/70">
                <section className="max-w-6xl mx-auto px-5 py-30 md:grid grid-cols-2 gap-x-16 gap-y-20 space-y-20 md:space-y-0">
                    <Authorization />
                    <CertificateSlide />
                </section>
            </div>
        </div>
    );
}
