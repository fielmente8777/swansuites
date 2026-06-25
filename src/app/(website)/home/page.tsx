import ImageBanner from "@/components/banners/ImageBanner";
import ValueProposition from "../components/ValueProposition";
import Features from "../components/Features";
import Accommodations from "../components/Accommodations";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import { HomePageData } from "../components/pageData";


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
