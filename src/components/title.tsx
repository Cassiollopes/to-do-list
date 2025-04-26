import { JSX } from "react";

export default function Title({icon, label, ...props}: {icon: JSX.Element, label: string} & React.HTMLProps<HTMLDivElement>) { 
  return (
    <div
      className={`flex gap-1 items-center px-3 max-md:px-0.5 mb-4 max-md:mb-3 ${props.className}`}
    >
      <div className="max-md:hidden">{icon}</div>
      <h1 className="text-sm max-md:text-2xl max-md:font-extrabold font-poppins">{label}</h1>
    </div>
  );
}