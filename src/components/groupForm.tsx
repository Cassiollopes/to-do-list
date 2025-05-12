"use client";

import { FolderPlus, ImageUp, Plus, Repeat, SquareMousePointer, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "./button";
import useTasks from "@/hooks/useTasks";
import ListItem from "./listItem";

export default function GroupForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [photoFile, setPhotoFile] = useState<File | undefined>(undefined);
  const editableTitleRef = useRef<HTMLDivElement>(null);
  const [favorite, setFavorite] = useState(false);
  const { tasks, toggleTaskCompletion } = useTasks();

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={`w-full max-w-[900px] m-auto`}>
      <div className="flex flex-col w-full items-start justify-between max-lg:h-fit gap-5">
        <div
          className="h-[160px] w-full justify-center flex items-center relative group"
          onClick={onClick}
        >
          <div className="h-full w-full rounded-2xl overflow-hidden relative group">
            {photoFile && (
              <div>
                <Image
                  src={URL.createObjectURL(photoFile)}
                  alt="Imagem do grupo"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover opacity-85"
                  loading="eager"
                />
                <Button
                  variant="noIcons"
                  className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none "
                  onClick={() => setPhotoFile(undefined)}
                >
                  <h1 className="text-xs opacity-85">Remover imagem</h1>
                </Button>
              </div>
            )}
            <div
              className={`justify-center items-center bg-secondary ${
                photoFile ? "hidden" : "flex"
              } w-full h-full cursor-pointer`}
            >
              <Button variant="transparent" className="group-hover:bg-card">
                <ImageUp size={15} />
                Adicionar imagem
              </Button>
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
          <div className="absolute left-10 -bottom-4 bg-background h-[80px] aspect-square rounded-full flex justify-center items-center p-[3px] drop-shadow-sm">
            <button className="bg-card h-full w-full rounded-full flex items-center justify-center group hover:bg-secondary transition-all ease-in-out duration-200">
              <Repeat size={40} />
            </button>
          </div>
        </div>
        <div className="flex max-lg:flex-col w-full items-start max-lg:justify-start justify-between gap-1 h-full max-lg:w-full px-2 relative">
          <div className="flex flex-col items-center justify-start gap-2">
            <h1
              ref={editableTitleRef}
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
              className="text-3xl font-semibold outline-none w-full break-words empty:before:content-[attr(data-placeholder)] empty:before:opacity-50 cursor-text font-poppins"
            />
            <input type="hidden" name="text" value={title ?? ""} />
            <p
              ref={editableTitleRef}
              contentEditable="true"
              suppressContentEditableWarning={true}
              onInput={(e) => {
                const content = (e.target as HTMLDivElement).textContent || "";
                setTitle(content);
                if (content === "") {
                  (e.target as HTMLDivElement).innerHTML = "";
                }
              }}
              data-placeholder={"descrição..."}
              className="outline-none w-full break-words empty:before:content-[attr(data-placeholder)] empty:before:opacity-50 opacity-70 cursor-text"
            />
            <input type="hidden" name="text" value={title ?? ""} />
          </div>
          <div className="mt-auto max-lg:mt-5 flex items-center justify-start gap-2">
            <Button
              variant="transparent"
              className="absolute right-0 max-lg:right-2 top-2"
              onClick={() =>
                favorite ? setFavorite(false) : setFavorite(true)
              }
            >
              <Star size={18} className={`${favorite ? "fill-white" : ""}`} />
            </Button>
            <Button>
              <FolderPlus size={15} />
               subgrupo
            </Button>
            <Button>
              <SquareMousePointer size={15} />
              adicionar tarefa
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-l px-2 w-full lg:w-1/2">
          {tasks.map((task, i) => (
            <ListItem
              key={i}
              task={task}
              onClick={() => toggleTaskCompletion(task.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
