import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { TrustedIcon } from "@/utils/icons";

interface ClientsProps {
  title: string;
  logos: string[];
}

const Clients: React.FC<ClientsProps> = ({ title, logos }) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="py-10"
      containerClassName="grid grid-cols-1 md:grid-cols-[.25fr_1fr] gap-10 items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-3">
        <div>
          <TrustedIcon />
        </div>
        <h2 className="text-sm tracking-widest uppercase text-primary">
          {title}
        </h2>
      </div>
      <SlidingTitle items={logos} />
    </SectionWithContainer>
  );
};

export default Clients;
