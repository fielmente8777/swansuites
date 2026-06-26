import WebSiteFooter from "@/components/footer/WebSiteFooter";
import WebsiteNav from "@/components/navbar/WebsiteNav";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebsiteNav />
      {children}
      <WebSiteFooter />
    </>
  );
}
