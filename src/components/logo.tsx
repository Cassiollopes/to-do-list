import { Eclipse } from "lucide-react";

export default function Logo () {
  return (
    <div className="flex gap-0.5 items-center justify-center cursor-pointer font-poppins text-[22px] font-semibold md:text-2xl">
      <div className="max-md:hidden">
        <Eclipse size={20} />
      </div>
      <div className="md:hidden">
        <Eclipse size={22} />
      </div>
      <span className="leading-none">DayToDay</span>
    </div>
  );
}