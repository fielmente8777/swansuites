import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

interface Props {
  title: string;
  contacts: {
    location: string;
    links: {
      label: string;
      href: string;
      label2?: string;
      href2?: string;
      icon: JSX.Element;
    }[];
  }[];
}

const ContactInfoSection: React.FC<Props> = ({ title, contacts }) => {
  return (
    <SectionWithContainer sectionClassName="background-color-2">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16">
        <div className="space-y-5">
          <SectionHeading title={title} />
          {contacts.map((contact, i) => (
            <div className="space-y-4" key={i}>
              <p className="font-primary text-primary text-3xl">
                {contact.location}
              </p>
              <ul className="space-y-3">
                {contact.links.map((link, i) => (
                  <li className="grid grid-cols-[auto_1fr] gap-2" key={i}>
                    <span className="">{link.icon}</span>
                    <span className="flex flex-wrap gap-1">
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </Link>
                      {link.label2 && (
                        <span className="md:block hidden">|</span>
                      )}
                      {link.href2 && (
                        <Link
                          href={link.href2}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label2}
                        </Link>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border border-primary rounded-2xl p-6 space-y-4">
          <p className="font-primary text-3xl text-dark">Enquire Now</p>
          <Form2 />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactInfoSection;
