import ImageBanner from "@/components/banners/ImageBanner";
import SlidingTitle2 from "@/components/sliders/SlidingTitle2";
import Accommodations from "./components/Accommodations";
import Clients from "./components/Clients";
import Features from "./components/Features";
import { swanSuitesPageData } from "./components/pageData";
import Testimonials from "./components/Testimonials";
import ValueProposition from "./components/ValueProposition";
import Gallery from "./components/Gallery";
import Attractions from "./components/Attractions";
import ComesWithYourStay from "./components/ComesWithYourStay";

export default function Home() {
  return (
    <main className="background-color-1">
      <ImageBanner {...swanSuitesPageData.hero} />
      <Clients {...swanSuitesPageData.clients} />
      <div className="h-px w-full max_screen_width bg-[linear-gradient(to_right,#fff,#EF6C22,#fff)]" />
      <ValueProposition {...swanSuitesPageData.valueProposition} />
      <SlidingTitle2 items={swanSuitesPageData.titles} />
      <Accommodations {...swanSuitesPageData.accommodations} />
      <ComesWithYourStay {...swanSuitesPageData.comesWithYourStay} />
      <Gallery images={swanSuitesPageData.images} />
      <Features {...swanSuitesPageData.features} />
      <Attractions {...swanSuitesPageData.attractions} />
      <SlidingTitle2 items={swanSuitesPageData.titles} />
      <Testimonials {...swanSuitesPageData.testimonials} />
    </main>
  );
}
