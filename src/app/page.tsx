import { Banner } from "./Home/Banner";
import { ChooseCountry } from "./Home/ChooseCountry";
import { WhyChooseUs } from "./Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <ChooseCountry/>
      <WhyChooseUs/>
    </div>
  );
}
