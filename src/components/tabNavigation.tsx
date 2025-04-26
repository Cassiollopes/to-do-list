"use client";

import {
  CalendarRange,
  GalleryVerticalEnd,
  History,
  ListTodo,
} from "lucide-react";
import { useState } from "react";

export default function TabNavigation() {
  const tabItems = [
    { name: "Tarefas", icon: <ListTodo size={22} /> },
    { name: "Grupo", icon: <GalleryVerticalEnd size={22} /> },
    { name: "Historico", icon: <History size={22} /> },
    { name: "Calendario", icon: <CalendarRange size={22} /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex items-center justify-around sticky bottom-0 z-[1000] bg-background p-4 border-t md:hidden">
      {tabItems.map((item, i) => (
        <div
          key={item.name}
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-out gap-0.5 font-semibold w-full group ${
            activeTab === i ? "text-white" : ""
          }`}
          onClick={() => handleTabClick(i)}
        >
          <div
            className={`flex justify-center py-1.5 ${
              activeTab === i ? "px-5 bg-zinc-100/10" : ""
            } transition-all duration-300 ease-in rounded-full`}
          >
            <div className="group-active:scale-150 transition-all duration-500 ease-out">
              {item.icon}
            </div>
          </div>
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
