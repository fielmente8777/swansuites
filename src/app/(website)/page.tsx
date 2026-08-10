import Banner from "@/components/banners/Banner";
import Form1 from "@/components/forms/Form1";
import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle2 from "@/components/sliders/SlidingTitle2";
import Testimonials from "../landing-page/components/Testimonials";
import Clients from "./components/Clients";
import Gallery from "./components/Gallery";
import ValueProposition from "./components/ValueProposition";
import { HomePageData } from "./components/pageData";
import Accommodations from "./locations/[slug]/components/Accommodations";
import BookingBar from "@/components/BookingBar";

export default function Home() {
  return (
    <main>
      <Banner {...HomePageData.hero} />
      <SectionWithContainer
        sectionClassName="bg-background"
        defaultPadding={false}
        containerClassName=" py-4"
      >
        <div
          className=" py-5  px-1.5  flex flex-col gap-5 max-w-6xl w-full mx-auto"
          id="form"
        >
          {/* <Form1 /> */}
          <BookingBar/>
          {/* <p
            className="text-sm text-light max-w-3xl text-center mx-auto"
            dangerouslySetInnerHTML={{ __html: HomePageData.hero.bookingBenefits }}
          /> */}
        </div>
      </SectionWithContainer>
      <ValueProposition {...HomePageData.valueProposition} />
      {/* <Features {...HomePageData.features} /> */}
      {/* <Accommodations {...HomePageData.accommodations} /> */}
      {/* <SlidingTitle2 items={swanSuitesPageData.titles} /> */}
      <Accommodations {...HomePageData.accommodations} />

      <SlidingTitle2 items={HomePageData.titles} />
      <Gallery {...HomePageData.gallery} />
      <Testimonials {...HomePageData.testimonials} />
      <Clients {...HomePageData.clients} />
    </main>
  );
}
