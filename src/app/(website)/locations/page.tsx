import Accommodations from "../components/Accommodations";
import { HomePageData } from "../components/pageData";

export default function Location() {
  return (
    <main>
      <Accommodations {...HomePageData.accommodations} />
    </main>
  );
}
