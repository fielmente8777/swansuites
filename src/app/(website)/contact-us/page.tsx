import ContactInfoSection from "./components/ContactInfoSection";
import { contactPageData } from "./components/pagedata";

export default function ContactUs() {
  return (
    <main>
      <ContactInfoSection {...contactPageData.banner} />
    </main>
  );
}
