import { HowWeWork } from "@/global/HowWeWork";
import { VisaSuccessRatio } from "@/global/VisaSuccessRatio";

export function VisaAndWork() {
    return (
        <div className="max-w-6xl mx-auto px-5 py-20 md:grid grid-cols-2 gap-x-16 gap-y-20 space-y-20 md:space-y-0">
            <VisaSuccessRatio />
            <HowWeWork />
        </div>
    );
}
