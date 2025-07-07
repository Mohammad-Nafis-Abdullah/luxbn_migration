import { GeneralEnquiry } from "@/global/GeneralEnquiry";
import { OurStudentSay } from "@/global/OurStudentSay";

// @flow
export function EnquiryAndStudentSay() {
    return (
        <div className="max-w-6xl mx-auto px-5 py-10 md:grid grid-cols-2 gap-x-16 gap-y-20 space-y-20 md:space-y-0">
            <GeneralEnquiry />
            <OurStudentSay />
        </div>
    );
}
