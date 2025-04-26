"use client";

import {
  Eclipse,
  FolderPlus,
  History,
  PanelLeftClose,
  PanelRightClose,
  Plus,
} from "lucide-react";
import Avatar from "./avatar";
import Logo from "./logo";
import { useRef, useState } from "react";
import { ActionButton } from "./button";
import Image from "next/image";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [photoFile, setPhotoFile] = useState<File | undefined>(undefined);

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

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
          <div className="flex flex-col items-start justify-start gap-4 mt-8 w-full px-4">
            <ActionButton
              icon={<FolderPlus size={22} />}
              content="Criar grupo"
              label="Adicionar grupo de tarefas"
              onClick={() => setShowForm(true)}
            />
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
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          />
          <div className="flex flex-col gap-4 items-center">
            <ActionButton
              icon={<PanelRightClose size={22} />}
              label="Abrir painel lateral"
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            />
            <ActionButton icon={<Plus size={22} />} label="Adicionar tarefa" />
            <ActionButton
              icon={<FolderPlus size={22} />}
              label="Adicionar grupo de tarefas"
              onClick={() => setShowForm(true)}
            />
            <ActionButton icon={<History size={22} />} label="Historico" />
          </div>
          <div className="mt-auto">
            <Avatar onlyImage={true} />
          </div>
        </div>
      </div>
      <div
        className={`fixed flex items-start justify-center pt-24 top-0 left-0 w-full h-full bg-black/40 max-md:hidden z-[100] pointer-events-none opacity-0 transition-opacity duration-500 ease-in-out ${
          showForm ? "opacity-100 pointer-events-auto" : ""
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowForm(false);
            setPhotoFile(undefined);
            setTitle("");
          }
        }}
      >
        <div
          className={`w-[300px] h-[450px] shadow-lg flex items-center justify-start overflow-hidden rounded-2xl bg-background flex-col border ${
            showForm ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className="h-[30%] bg-secondary w-full justify-center flex items-center relative group"
            onClick={onClick}
          >
            {photoFile && (
              <div className="relative group h-full w-full flex items-center justify-center">
                <Image
                  src={URL.createObjectURL(photoFile)}
                  alt="Imagem do grupo"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover opacity-85"
                  loading="eager"
                />
                <div
                  className="absolute right-4 top-4 flex items-center justify-center h-fit px-1.5 py-1 bg-secondary opacity-0 transition-all ease-in-out duration-200 rounded-lg gap-0.5 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none cursor-pointer border"
                  onClick={() => setPhotoFile(undefined)}
                >
                  <h1 className="text-xs opacity-85">Remover imagem</h1>
                </div>
              </div>
            )}
            <div
              className={`justify-center items-center ${
                photoFile ? "hidden" : "flex"
              } w-full h-full cursor-pointer`}
            >
              <div className="flex items-center justify-center h-fit px-2 py-1 group-hover:bg-card opacity-50 transition-all ease-in-out duration-75 rounded-lg gap-0.5">
                <Plus size={18} />
                <h1 className="text-md">Adicionar imagem</h1>
              </div>
              <input
                disabled={photoFile ? true : false}
                ref={inputRef}
                type="file"
                accept="image"
                onChange={(e) => {
                  if (e.target.files) {
                    setPhotoFile(e.target.files[0]);
                    e.target.value = "";
                  }
                }}
                hidden
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full px-6 py-8 gap-4">
            <h1
              contentEditable="true"
              suppressContentEditableWarning={true}
              onInput={(e) => {
                const content = (e.target as HTMLDivElement).textContent || "";
                setTitle(content);
                if (content === "") {
                  (e.target as HTMLDivElement).innerHTML = "";
                }
              }}
              data-placeholder={"Novo grupo"}
              className="text-3xl font-semibold outline-none w-full break-words empty:before:content-[attr(data-placeholder)] empty:before:opacity-50 cursor-text"
            >
              {title}
            </h1>
            <input type="hidden" name="text" value={title ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
}
