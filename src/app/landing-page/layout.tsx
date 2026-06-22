import LandingFooter from "@/components/footer/LandingFooter";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <LandingFooter />
    </>
  );
}
