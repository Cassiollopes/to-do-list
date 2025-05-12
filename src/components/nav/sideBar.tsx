"use client";

import {
  Eclipse,
  FolderPlus,
  History,
  Home,
  PanelLeftClose,
  PanelRightClose,
  Plus,
} from "lucide-react";
import Avatar from "../avatar";
import Logo from "../logo";
import { useState } from "react";
import Button from "../button";
import { useRouter } from "next/navigation";
import TaskForm from "../taskForm";
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const [showTaskForm, setShowTaskForm] = useState(false);

  return (
    <div className="sticky h-full flex z-[1000] border-r bg-secondary">
      <div
        className={`h-full overflow-hidden truncate bg-transparent ${
          isOpen ? "w-[260px] pointer-events-auto" : "w-0 pointer-events-none"
        } transition-all duration-500 ease-in-out bg-background max-md:hidden`}
      >
        <div className="py-5 w-[260px] flex flex-col items-start h-full">
          <div className="flex justify-between items-end w-full px-5">
            <Logo />
            <PanelLeftClose
              size={22}
              className="stroke-[1.8] cursor-pointer hover:text-gray-600 transition-all duration-200 ease-in"
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2 mt-8 w-full px-4">
            <Button
              variant="sideBar"
              label="Home"
              onClick={() => router.push("/")}
            >
              <Home size={22} />
              Início
            </Button>
            <Button
              variant="sideBar"
              label="Criar tarefa"
              onClick={() => setShowTaskForm(true)}
            >
              <Plus size={22} />
              Criar tarefa
            </Button>
            <Button
              variant="sideBar"
              label="Criar grupo de tarefas"
              onClick={() => router.push("/taskGroup")}
            >
              <FolderPlus size={22} />
              Criar grupo
            </Button>
          </div>
          <div className="mt-auto px-5">
            <Avatar />
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden truncate h-full transition-all ease-in-out bg-transparent border-none ${
          !isOpen
            ? "pointer-events-auto flex w-[68px] duration-300"
            : "pointer-events-none duration-700 w-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-10 w-[68px] h-full">
          <Eclipse
            size={34}
            className="stroke-[1.8] cursor-pointer hover:text-gray-600 transition-all duration-200 ease-in"
            onClick={() => (router.push("/"))}
          />
          <div className="flex flex-col gap-4 items-center">
            <Button
              variant="sideBar"
              label="Abrir painel lateral"
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            >
              <PanelRightClose size={22} />
            </Button>
            <Button
              variant="sideBar"
              label="Criar tarefa"
              onClick={() => setShowTaskForm(true)}
            >
              <Plus size={22} />
            </Button>
            <Button
              variant="sideBar"
              label="Criar grupo de tarefas"
              onClick={() => router.push("/taskGroup")}
            >
              <FolderPlus size={22} />
            </Button>
            <Button variant="sideBar" label="Historico">
              <History size={22} />
            </Button>
          </div>
          <div className="mt-auto">
            <Avatar onlyImage={true} />
          </div>
        </div>
      </div>
      {showTaskForm && <TaskForm callback={() => setShowTaskForm(false)} />}
    </div>
  );
}
