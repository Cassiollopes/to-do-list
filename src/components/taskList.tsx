import { Calendar, ChevronRight, Scan } from "lucide-react";

export default function TasksList() {
  return (
    <div className="flex flex-row-reverse bg-background hide-scrollbar select-none w-full md:rounded-2xl md:bg-card">
      <div className="w-1/2 max-md:hidden flex flex-col justify-center items-end px-12 border-l">
        <div className="text-sm opacity-50 font-semibold gap-4 flex flex-col items-end">
          <Calendar size={40}/>
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 w-full md:p-4 md:px-6 max-md:pl-2 relative max-md:border-l max-h-[350px] max-md:h-[400px] overflow-y-auto hide-scrollbar">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div
            className={`flex items-center justify-between py-4 pl-4 md:py-3 pr-2 relative group hover:pl-6 transition-all duration-200 ease-linear cursor-pointer group gap-4 ${
              i === 0 ? "border-none" : ""
            }`}
            key={item}
          >
            <div className="flex flex-col items-start truncate  leading-none">
              <span className="font-semibold">Tarefa {item}</span>
              <div className="flex items-center gap-1 text-[rgba(255,255,255,0.443)] text-sm">
                <span>programacao</span>
                <ChevronRight size={16} />
                <span>important</span>
              </div>
            </div>
            <Scan
              className="cursor-pointer group-hover:scale-110 group-active:scale-100 transition-all duration-200 ease-linear group-hover:opacity-50"
              size={18}
            />
            <div className="absolute max-md:left-[-2.5px] md:left-1 h-[60%] w-[4px] bg-green-400 rounded-full group-hover:h-[40%] transition-all duration-300 ease-linear"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
