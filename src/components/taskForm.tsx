import { Repeat } from "lucide-react";
import Button from "./button";

export default function TaskForm({callback}: {callback: () => void}) {
  return (
    <div
      className="flex items-center justify-center gap-4 fixed top-0 left-0 right-0 bottom-0 bg-black/30 p-4 w-full h-full overflow-y-auto"
      onClick={(e) => {
      if (e.target === e.currentTarget) {
        callback();
      }
      }}
    >
      <div className="h-[450px] w-[300px] bg-secondary p-4 rounded-2xl shadow-lg border flex flex-col gap-4 mb-24">
        <h1 className="text-2xl font-bold">Create a new task</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Task title"
            className="border border-gray-300 rounded p-2"
          />
          <Button variant={"default"} className="w-fit">
            <Repeat size={14} />
            Repetir
          </Button>
          <ul>
            <li>
              <input type="radio" name="repeat" value="daily" />
              <label>diariamente</label>
            </li>
            <li>
              <input type="radio" name="repeat" value="weekly" />
              <label>semanalmente</label>
            </li>
            <li>
              <input type="radio" name="repeat" value="monthly" />
              <label>mensalmente</label>
            </li>
          </ul>
          <button className="bg-blue-500 text-white rounded p-2">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}