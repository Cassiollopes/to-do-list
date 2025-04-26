export function ActionButton({
  label,
  icon,
  content,
  ...props
}: {
  content?: string;
  label: string;
  icon: React.ReactNode;
} & React.BaseHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex items-center cursor-pointer hover:bg-zinc-200/5 p-1.5 rounded-lg transition-all duration-200 ease-in text-primary/50 group gap-3 ${content ? "w-full" : ""} `}
      {...props}
    >
      {icon}
      {content}
      <span className="group-hover:opacity-100 opacity-0 pointer-events-none absolute left-[100%] rounded-lg p-2 text-white transition-opacity duration-200 ease-in bg-black z-50 text-sm shadow-lg">
        <span className="absolute left-[-5px] top-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black shadow-lg" />
        {label}
      </span>
    </button>
  );
}
