import { HowWeWork } from "@/global/HowWeWork";
import { VisaSuccessRation } from "@/global/VisaSuccessRation";

export function VisaAndWork() {
  return (
    <div className="max-w-6xl mx-auto border-4 p-3 py-10">
      <VisaSuccessRation/>
      <HowWeWork/>
    </div>
  );
};