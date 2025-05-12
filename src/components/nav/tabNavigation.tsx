"use client";

import {
  CalendarRange,
  GalleryVerticalEnd,
  History,
  ListTodo,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function TabNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const tabItems = useMemo(
    () => [
      { name: "Tarefas", icon: <ListTodo size={22} />, page: "/" },
      { name: "Grupo", icon: <GalleryVerticalEnd size={22} />, page: "/taskGroup" },
      { name: "Historico", icon: <History size={22} />, page: "/" },
      { name: "Calendario", icon: <CalendarRange size={22} />, page: "/" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState<number | undefined>(undefined);

  const handleTabClick = (index: number, page: string) => {
    setActiveTab(index);
    router.push(page);
  };

  useEffect(() => {
    const currentPath = pathname;
    console.log("Current path:", currentPath);
    const currentTabIndex = tabItems.findIndex((item) => item.page === currentPath);
    if (currentTabIndex !== -1) {
      setActiveTab(currentTabIndex);
    }
  }, [pathname, tabItems]);

  return (
    <div className="flex items-center justify-around sticky bottom-0 z-[1000] bg-background p-4 border-t md:hidden">
      {tabItems.map((item, i) => (
        <div
          key={item.name}
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-out gap-0.5 font-semibold w-full group ${
            activeTab === i ? "text-white" : ""
          }`}
          onClick={() => handleTabClick(i, item.page)}
        >
          <div
            className={`flex justify-center py-1.5 px-2 ${
              activeTab === i ? "px-5 bg-zinc-100/10" : ""
            } transition-all duration-300 ease-in rounded-full`}
          >
            <div className="group-active:scale-125 transition-all duration-500 ease-out">
              {item.icon}
            </div>
          </div>
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
