import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";

interface ClientsProps { 
    title: string;
    logos: string[];
}

const Clients: React.FC<ClientsProps> = ({
    title,
    logos
}) => {
    return (
        <SectionWithContainer sectionClassName="bg-[#121212]" containerClassName="space-y-8">
            <h2 className="text-sm uppercase text-center text-secondary">{title}</h2>
            <SlidingTitle items={logos} />
        </SectionWithContainer>
    );
}

export default Clients;