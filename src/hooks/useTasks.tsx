import { Task } from "@/components/listItem";
import { useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      isCompleted: false,
      priority: "alta",
      title: "Tarefa 1",
      group: "Grupo 1",
    },
    {
      isCompleted: false,
      priority: "baixa",
      title: "Tarefa 2",
      group: "Grupo 2",
    },
    {
      isCompleted: true,
      priority: "media",
      title: "Tarefa 3",
      group: "Grupo 3",
    },
    {
      date: "2025-05-05",
      isCompleted: false,
      priority: "alta",
      title: "Tarefa 1",
      group: "Grupo 1",
    },
    {
      date: "2025-05-05",
      isCompleted: false,
      priority: "alta",
      title: "Tarefa 10",
      group: "Grupo 1",
    },
    {
      date: "2025-06-05",
      isCompleted: false,
      priority: "baixa",
      title: "Tarefa 2",
      group: "Grupo 2",
    },
    {
      date: "2025-07-05",
      isCompleted: true,
      priority: "media",
      title: "Tarefa 3",
      group: "Grupo 3",
    },
    {
      date: "2025-08-05",
      isCompleted: false,
      priority: "alta",
      title: "lavar o carro",
      group: "aleatorio",
      repeat: true,
    },
    {
      date: "2025-09-05",
      isCompleted: false,
      priority: "baixa",
      title: "Tarefa 5",
      group: "Grupo 5",
      repeat: true,
    },
    {
      date: "2025-10-05",
      isCompleted: true,
      priority: "media",
      title: "Tarefa 6",
      group: "Grupo 6",
    },
  ]);

  const todayTasks = tasks.filter((task) => {
    if (!task.date) return false;
    const today = new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });
    const [day, month] = task.date.split("-").slice(1, 3);
    return `${day}/${month}` === today || task.repeat;
  });

  const filterTasksByDate = (tasks: Task[], date: string) => {
    return tasks.filter((task) => {
      if (!task.date) return false;
      const [month, day] = task.date.split("-").slice(1, 3);
      const formattedDate = `${month}/${day}`;
      return formattedDate === date || task.repeat;
    });
  };

  const toggleTaskCompletion = (title: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.title === title
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  return { tasks, todayTasks, toggleTaskCompletion, filterTasksByDate };
}
