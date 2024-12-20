import { twMerge } from "tailwind-merge";
import StarIcon from "@/assets/icons/star.svg";

export const CardHeader = ({
  title,
  description,
  classname,
}: {
  title: string;
  description: string;
  classname?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", classname)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-calistoga text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base text-white/60 mt-2">{description}</p>
    </div>
  );
};
