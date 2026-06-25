import ImageBanner from "@/components/banners/ImageBanner";
import Accommodations from "./components/Accommodations";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ValueProposition from "./components/ValueProposition";
import { HomePageData } from "./components/pageData";

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
