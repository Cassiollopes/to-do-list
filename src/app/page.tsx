import Logo from "@/components/logo";
import TasksList from "@/components/taskList";
import TasksGroup from "@/components/tasksGroup";
import Title from "@/components/title";
import WeekDays from "@/components/weekDays";
import {
  CalendarRange,
  GalleryVerticalEnd,
  ListTodo,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden max-md:pb-28 md:justify-center max-w-[900px] gap-8 max-md:mt-1 md:p-8 max-md:gap-10">
      <div className="max-md:hidden py-4">
      <Logo />
      </div>
      <div className="flex flex-col">
        <Title
          icon={<CalendarRange size={14} />}
          label="Agenda"
          className="max-md:ml-4 max-md:hidden"
        />
        <WeekDays />
      </div>
      <div className="flex flex-col gap-8 max-md:px-3 max-md:flex-col-reverse">
        <div className="flex flex-col">
          <Title
            icon={<GalleryVerticalEnd size={14} />}
            label="Grupo de Tarefas"
          />
          <TasksGroup />
        </div>
        <div className="flex flex-col flex-1 w-full">
          <Title
            icon={<ListTodo size={14} />}
            label={`${new Date()
              .toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })
              .replace(/^\w/, (c) => c.toUpperCase())}`}
            className="md:hidden"
          />
          <Title
            icon={<ListTodo size={14} />}
            label="Tarefas"
            className="max-md:hidden"
          />
          <TasksList />
        </div>
      </div>
    </div>
  );
}
