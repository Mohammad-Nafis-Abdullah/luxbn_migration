import { Banner } from "./Home/Banner";
import { ChooseCountry } from "./Home/ChooseCountry";
import { EnquiryAndStudentSay } from "./Home/EnquiryAndStudentSay";
import { VisaAndWork } from "./Home/VisaAndWork";
import { WhyChooseUs } from "./Home/WhyChooseUs";
import { WhyDifferent } from "./Home/WhyDifferent";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <ChooseCountry/>
      <WhyChooseUs/>
      <WhyDifferent/>
      <VisaAndWork/>
      <EnquiryAndStudentSay/>
    </div>
  );
}
