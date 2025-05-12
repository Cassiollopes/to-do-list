"use client";

import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function WeekDays() {
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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!container) return;

    const startX = e.pageX;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.pageX;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
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

  useEffect(() => {
    const today = new Date();
    const todayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;

    const currentItem = itemRefs.current[todayIndex];

    if (scroll.current && currentItem) {
      scroll.current.scrollLeft = currentItem.offsetLeft - 28;
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div
        onMouseDown={handleMouseDown}
        ref={scroll}
        className="flex justify-between gap-4 overflow-x-auto relative hide-scrollbar select-none max-md:pr-14 max-md:scroll-smooth max-md:pl-3"
      >
        {weekDays.map((day, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`flex flex-col overflow-hidden flex-1 min-w-[140px] h-[170px] cursor-pointer bg-card rounded-md rounded-b-2xl`}
          >
            <div className="flex justify-between items-end p-2 py-1.5 font-poppins">
              <span className="font-semibold text-lg uppercase leading-none">
                {day}
              </span>
              <span className="text-[9px] opacity-95">{weekDates[index]}</span>
            </div>
            <div className="text-center text-sm rounded-t-none p-10 h-full flex items-center justify-center group bg-[rgba(127,127,127,0.1)] rounded-b-2xl">
              <div className="flex flex-col items-center justify-center transition-all duration-200 ease-in opacity-50 group-hover:opacity-100">
                <Plus size={22} />
                <span className="leading-4">adicionar Tarefa</span>
              </div>
            </div>
          </div>
        ))}
      </div>
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
