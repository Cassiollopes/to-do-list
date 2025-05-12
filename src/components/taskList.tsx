"use client";

import { Calendar } from "lucide-react";
import useTasks from "@/hooks/useTasks";
import ListItem from "./listItem";

export default function TasksList() {
  const { todayTasks, toggleTaskCompletion } = useTasks();

  return (
    <div className="flex flex-row-reverse bg-background hide-scrollbar select-none w-full md:rounded-2xl md:bg-card">
      <div className="w-1/2 max-md:hidden flex flex-col justify-center items-end px-12 border-l py-10">
        <div className="text-sm opacity-50 gap-2 flex flex-col items-end font-poppins">
          <Calendar size={36} className="stroke-[1.5]" />
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
        <div className="flex flex-col items-start gap-1.5 mt-auto w-full">
          <span className="text-sm font-semibold pl-1">Tarefas</span>
          <div className="flex items-center gap-2 text-[rgba(255,255,255,0.443)] text-sm">
            <span>
              . {todayTasks.filter((task) => task.isCompleted).length}{" "}
              finalizadas
            </span>
            <span>
              . {todayTasks.filter((task) => task.isCompleted === false).length}{" "}
              pendentes
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 w-full md:p-4 md:px-6 max-md:pl-2 relative max-md:border-l max-h-[350px] max-md:max-h-[400px] max-md:min-h-[200px] overflow-y-auto hide-scrollbar scroll-smooth">
        {todayTasks.map((task, i) => (
          <ListItem
            task={task}
            key={i}
            onClick={() => toggleTaskCompletion(task.title)}
          />
        ))}
      </div>
    </div>
  );
}
