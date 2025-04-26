import { ChevronRight, Scan } from "lucide-react";

export default function TasksList() {
  return (
    <div className="flex flex-col max-md:border-l max-h-[500px] hide-scrollbar bg-background select-none relative w-full md:rounded-2xl md:p-2 md:px-4 md:bg-card max-md:ml-1">
      {[1, 2, 3, 4, 5, 6].map((item, i) => (
        <div
          className={`flex items-center justify-between py-4 pl-4 md:py-3.5 pr-2 relative group hover:pl-6 transition-all duration-200 ease-linear cursor-pointer group gap-4 ${
            i === 0 ? "border-none" : ""
          }`}
          key={item}
        >
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold">Tarefa {item}</span>
            <div className="flex items-center gap-1 text-[rgba(255,255,255,0.443)] text-sm">
              <ChevronRight size={16} />
              <span>programacao</span>
              <ChevronRight size={16} />
              <span>important</span>
            </div>
          </div>
          <Scan
            className="cursor-pointer group-hover:scale-110 group-active:scale-100 transition-all duration-200 ease-linear group-hover:opacity-50"
            size={18}
          />
          <div className="absolute max-md:left-[-2.5px] md:left-1 h-[50%] w-[4px] bg-green-400 rounded-full group-hover:h-[40%] transition-all duration-300 ease-linear"></div>
        </div>
      ))}
    </div>
  );
}
