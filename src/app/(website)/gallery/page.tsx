import Gallery from "./components/Gallery";
import { pageData } from "./pageData";

export default function GalleryPage() {
  return <Gallery data={pageData.gallery} />;
}