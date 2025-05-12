"use client";

import {
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ListItem from "./listItem";
import useTasks from "@/hooks/useTasks";

export default function WeekDays() {
  const { tasks, toggleTaskCompletion, filterTasksByDate } = useTasks();

  const weekDays = [
    "Segunda",
    "Terca",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
    "Domingo",
  ];

  const scroll = useRef<HTMLDivElement>(null);
  const [scrollToStart, setScrollToStart] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [weekDates, setWeekDays] = useState<string[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const container = scroll.current;

  const scrollToRight = () => {
    if (container) {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToLeft = () => {
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  function getWeekDays() {
    const today = new Date();
    const weekDays = [];

    // Se for domingo (0), tratamos como ainda parte da semana atual
    const currentDay = today.getDay();
    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + diffToMonday);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(
        day.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        })
      );
    }

    setWeekDays(weekDays);
  }

  useEffect(() => {
    getWeekDays();

    if (container) {
      const handleScroll = () => {
        setScrollToStart(container.scrollLeft > 0);

        const isEnd =
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1;
        setIsAtEnd(isEnd);
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [container]);

  return (
    <div className="relative flex items-center justify-center">
      <div
        ref={scroll}
        className="flex justify-between gap-4 overflow-x-auto relative hide-scrollbar select-none max-md:pr-14 max-md:scroll-smooth max-md:pl-3 md:pr-10"
      >
        {weekDays.map((day, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`flex flex-col overflow-hidden flex-1 min-w-[140px] h-[180px] max-md:min-w-[150px] max-md:h-[190px] cursor-pointer bg-card rounded-xl rounded-b-2xl`}
          >
            <div className="flex justify-between items-end p-2 py-1.5 font-poppins">
              <span className="font-semibold text-lg uppercase leading-none">
                {day}
              </span>
              <span className="text-[9px] opacity-95">{weekDates[index]}</span>
            </div>
            <div className="text-center text-sm rounded-t-none h-full flex-col items-center justify-start bg-[rgba(127,127,127,0.1)] relative">
              {filterTasksByDate(tasks, weekDates[index]).length > 0 ? (
                <div className="flex flex-col items-center justify-justify-start px-2 py-1 w-full h-fit">
                  {filterTasksByDate(tasks, weekDates[index]).map((task) => (
                    <ListItem
                      key={task.title}
                      task={task}
                      calendar={true}
                      onClick={() => toggleTaskCompletion(task.title)}
                    />
                  ))}
                  {filterTasksByDate(tasks, weekDates[index]).every(
                    (task) => task.isCompleted
                  ) && (
                    <div className="absolute flex items-center justify-center gap-1 h-full w-full bg-black/25 top-0 backdrop-blur-md z-10">
                      <span className="text-xs opacity-60 font-poppins flex items-center justify-center gap-0.5">
                        <CheckCheck size={16} /> Dia concluído
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-xs opacity-50 font-poppins absolute w-full justify-center items-center flex top-1/2 -translate-y-1/2 pointer-events-none gap-0.5">
                  Sem tarefas
                </div>
              )}
              <div className="h-full w-full group">
                <div className="absolute bottom-2 right-2 flex items-center justify-center opacity-0 focus:pointer-events-auto group-hover:opacity-100 transition-all duration-200 ease-in-out active:scale-110 bg-card rounded-full p-1 drop-shadow-sm">
                  <Plus />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>
        <div
          onClick={() => (scrollToStart ? scrollToLeft() : scrollToRight())}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card rounded-full p-2 flex items-center justify-center transition-all duration-200 ease-linear max-md:hidden z-50 opacity-50 hover:opacity-100 hover:shadow-lg hover:scale-110 active:scale-100"
        >
          {scrollToStart ? (
            <ChevronLeft size={20} className="text-neutral-300" />
          ) : (
            <ChevronRight size={20} className="text-neutral-300" />
          )}
        </div>
      </button>
      <div
        className={`pointer-events-none absolute h-full top-0 right-0 max-md:hidden w-[150px] bg-gradient-to-l from-background to-transparent z-10  ${
          isAtEnd && "opacity-0"
        } transition-opacity duration-300 ease-linear`}
      />
      <div
        className={`pointer-events-none absolute h-full top-0 left-0 w-[150px] bg-gradient-to-r from-background to-transparent z-10  ${
          !scrollToStart && "opacity-0"
        } transition-opacity duration-300 ease-linear max-md:hidden`}
      />
    </div>
  );
}
