import { AuthorizationAndCertificate } from "./Home/AuthorizationAndCertificate";
import { Banner } from "./Home/Banner";
import { ChooseCountry } from "./Home/ChooseCountry";
import { EnquiryAndStudentSay } from "./Home/EnquiryAndStudentSay";
import { EventAndUniversity } from "./Home/EventAndUniversity";
import { Universities } from "./Home/Universities";
import { VisaAndWork } from "./Home/VisaAndWork";
import { WhyChooseUs } from "./Home/WhyChooseUs";
import { WhyDifferent } from "./Home/WhyDifferent";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Banner/>
      <ChooseCountry/>
      <WhyChooseUs/>
      <WhyDifferent/>
      <VisaAndWork/>
      <EnquiryAndStudentSay/>
      <AuthorizationAndCertificate/>
      <EventAndUniversity/>
      <Universities/>
    </div>
  );
}
