import ImageBanner from "@/components/banners/ImageBanner";
import Accommodations from "./components/Accommodations";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import { swanSuitesPageData } from "./components/pageData";
import Testimonials from "./components/Testimonials";
import ValueProposition from "./components/ValueProposition";
import SlidingTitle2 from "@/components/sliders/SlidingTitle2";

export default function Home() {
  return (
    <main>
      <ImageBanner {...swanSuitesPageData.hero} />
      <ValueProposition {...swanSuitesPageData.valueProposition} />
      <Features {...swanSuitesPageData.features} />
      <Accommodations {...swanSuitesPageData.accommodations} />
      <SlidingTitle2 items={swanSuitesPageData.titles} />
      <Gallery {...swanSuitesPageData.gallery} />
      <Clients {...swanSuitesPageData.clients} />
      <Testimonials {...swanSuitesPageData.testimonials} />
    </main>
  );
}
