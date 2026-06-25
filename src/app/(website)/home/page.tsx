import ImageBanner from "@/components/banners/ImageBanner";
import Accommodations from "./components/Accommodations";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import { swanSuitesPageData } from "./components/pageData";
import Testimonials from "./components/Testimonials";
import ValueProposition from "./components/ValueProposition";
import SlidingTitle2 from "@/components/sliders/SlidingTitle2";
import { HomePageData } from "./pageData";

export default function Home() {
  return (
    <main>
      <ImageBanner {...HomePageData.hero} />
      <ValueProposition {...HomePageData.valueProposition} />
      <Features {...HomePageData.features} />
      <Accommodations {...HomePageData.accommodations} />
      {/* <SlidingTitle2 items={swanSuitesPageData.titles} /> */}
      <Gallery {...HomePageData.gallery} />
      <Testimonials {...HomePageData.testimonials} />
      <Clients {...HomePageData.clients} />
    </main>
  );
}
