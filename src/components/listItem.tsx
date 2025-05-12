import { Check, ChevronRight, Minus, Repeat, Squircle } from "lucide-react";

export interface Task {
  date?: string;
  isCompleted: boolean;
  priority: "alta" | "media" | "baixa";
  title: string;
  group?: string;
  repeat?: boolean;
}

export default function ListItem({
  task,
  calendar,
  onClick,
}: {
  task: Task;
  calendar?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between pl-4 pr-2 relative group w-full ${
        calendar ? "py-2 border-b" : " hover:pl-6 md:py-3 py-4"
      } transition-all duration-200 ease-linear cursor-pointer group ${
        task.isCompleted ? "opacity-50" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-start truncate leading-none gap-1 ${
          calendar ? "md:text-xs" : ""
        }`}
      >
        <span className="font-semibold flex items-center gap-2">
          {task.title}
          {task.repeat && !calendar && (
            <Repeat className="opacity-50" size={14} />
          )}
        </span>
        <div
          className={`flex items-center gap-1 text-[rgba(255,255,255,0.443)] text-sm leading-none ${
            calendar ? "hidden" : ""
          }`}
        >
          {task.group && <span>{task.group}</span>}
          <ChevronRight size={16} />
          <span>prioridade {task.priority}</span>
        </div>
      </div>
      {task.isCompleted ? (
        <Check
          className="cursor-pointer group-hover:scale-110 group-active:scale-100 transition-all duration-200 ease-linear group-hover:opacity-50"
          size={calendar ? 14 : 18}
        />
      ) : (
        <div>
          {calendar ? (
            <Minus size={calendar ? 10 : 18} />
          ) : (
            <Squircle
              className="cursor-pointer group-hover:scale-110 group-active:scale-100 transition-all duration-200 ease-linear"
              size={18}
            />
          )}
        </div>
      )}
      <div
        className={`absolute md:left-1 w-[4px] ${
          calendar ? "h-[13%] left-1" : "h-[60%] max-md:left-[-2.5px]"
        } ${
          task.priority === "alta"
            ? "bg-green-400"
            : task.priority === "media"
            ? "bg-yellow-400"
            : "bg-blue-400"
        }  rounded-full group-hover:h-[40%] transition-all duration-300 ease-linear`}
      ></div>
    </div>
  );
}
