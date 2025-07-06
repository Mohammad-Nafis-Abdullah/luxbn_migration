import { HowWeWork } from "@/global/HowWeWork";
import { VisaSuccessRation } from "@/global/VisaSuccessRation";

export function VisaAndWork() {
    return (
        <div className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-x-16 gap-y-20">
            <VisaSuccessRation />
            <HowWeWork />
        </div>
    );
}
