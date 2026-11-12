import { contact } from "@/utils/constent";
import LinkButton from "./LinkButton";

interface LandingCallButtonProps {
  label?: string;
  className?: string;
}

export default function LandingCallButton({
  label = "Call Now",
  className = "",
}: LandingCallButtonProps) {
  return (
    <LinkButton
      href={contact.callCta}
      label={label}
      callIcon
      className={`min-h-12 justify-center rounded-lg border-none bg-[#a43e14] font-semibold text-white ${className}`}
    />
  );
}
