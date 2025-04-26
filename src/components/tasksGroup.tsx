import { PlusSquare, Repeat, Squircle } from "lucide-react";
import Image from "next/image";

export default function TasksGroup() {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="h-[144px] aspect-square rounded-2xl overflow-hidden hover:drop-shadow-lg cursor-pointer transition-all duration-200 ease-linear select-none bg-card flex flex-col">
        <div className="flex w-full h-[44px] mb-4 relative">
          <Image
            alt=""
            src={
              "https://idocode.com.br/wp-content/uploads/2021/07/programacao-scaled.jpg"
            }
            width={200}
            height={200}
            className="h-full w-full bg-gray-400 object-cover opacity-90"
            loading="eager"
          />
          <Repeat
            size={34}
            className="absolute -bottom-4 left-4 text-neutral-300"
          />
        </div>
        <div className="px-4 py-3 pb-3 flex flex-col justify-center flex-1">
          <span className="text-sm font-semibold">Programacao</span>
          <div className="flex gap-1 items-center text-[rgba(255,255,255,0.443)] mt-auto">
            <Squircle size={14} />
            <span className="text-xs">9 tarefas</span>
          </div>
        </div>
      </div>
      <div className="h-[144px] aspect-square rounded-2xl overflow-hidden hover:drop-shadow-lg cursor-pointer transition-all duration-200 ease-linear select-none bg-card flex flex-col">
        <div className="flex w-full h-[44px] mb-4 relative">
          <div className="w-full h-full bg-[rgba(127,127,127,0.1)]"></div>
          <PlusSquare
            size={34}
            className="absolute -bottom-4 left-4 text-neutral-300 opacity-50"
          />
        </div>
        <div className="px-4 py-3 pb-3 flex flex-col justify-start flex-1">
          <span className="font-semibold text-sm opacity-50">criar grupo</span>
        </div>
      </div>
    </div>
  );
}
