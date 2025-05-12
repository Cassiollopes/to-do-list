import GroupForm from "@/components/groupForm";

export default function TaskGroup() {
  return (
    <div className="flex flex-col gap-4 w-full min-h-screen max-md:mt-1 pb-28 pt-12 max-lg:pt-0 md:px-8 max-lg:px-3">
      <GroupForm />
    </div>
  );
}