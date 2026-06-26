import { FeaturesProps } from "@/@types/type";

const FeaturesCards: React.FC<FeaturesProps["items"][0]> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl p-5 box-shadow border-[0.2px] border-light">
      <div className="w-10 aspect-square rounded-lg bg-primary flex items-center justify-center">
        {icon}
      </div>
      <p className="text-xl font-semibold text-dark font-primary lg:text-3xl">
        {title}
      </p>
      <p className="text-light">{description}</p>
    </div>
  );
};

export default FeaturesCards;
