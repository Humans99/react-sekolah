import {
  singleAtendance,
  singleBranch,
  singleClass,
  singleLesson,
} from "../assets/icons";

type Props = {
  title: string;
  desc: string;
  type: "attendance" | "branch" | "lesson" | "class";
};

const iconMap: Record<Props["type"], string> = {
  attendance: singleAtendance,
  branch: singleBranch,
  class: singleClass,
  lesson: singleLesson,
};

const SmallCard = ({ title, desc, type }: Props) => {
  return (
    <div className="flex gap-4 w-full bg-white border border-gray-200 shadow rounded-md p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
      <img src={iconMap[type]} width={24} height={24} className="h-6 w-6" />
      <div className="flex flex-col overflow-auto">
        <h1 className="text-xl font-semibold">{title}</h1>
        <span className="text-sm text-gray-500">{desc}</span>
      </div>
    </div>
  );
};

export default SmallCard;
