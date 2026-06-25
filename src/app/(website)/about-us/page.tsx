import AboutIntro from "./components/AboutIntro";
import Awards from "./components/Awards";
import WhyUs from "./components/WhyUs";
import { pageData } from "./pageData";

export default function AboutPage() {
  return (
    <>
      <AboutIntro data={pageData.aboutIntro} />
      <WhyUs data={pageData.whyUs} />
      <Awards data={pageData.awards} />
    </>
  );
}