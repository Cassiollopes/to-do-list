import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
  "flex items-center cursor-pointer rounded-lg gap-0.5 transition-all ease-in-out duration-75",
  {
    variants: {
      variant: {
        default:
          "bg-card px-2.5 group border text-[15px] opacity-50 hover:opacity-100",
        transparent: "px-2 py-1 hover:bg-card opacity-50",
        noIcons: "px-1.5 py-1 bg-secondary duration-200 border",
        sideBar: "group hover:bg-card p-1.5 w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function Button({
  variant,
  label,
  ...props
}: { label?: string } & VariantProps<typeof buttonStyles> &
  React.BaseHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(buttonStyles({ variant }), props.className)}
    >
      {variant === "sideBar" ? <div className="flex gap-2 items-center opacity-70">{props.children}</div> : props.children}
      {label && (
        <span className="group-hover:opacity-100 opacity-0 pointer-events-none absolute left-[100%] rounded-lg p-2 text-white transition-opacity duration-200 ease-in bg-black z-50 text-sm shadow-lg">
          <span className="absolute left-[-5px] top-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black shadow-lg" />
          {label}
        </span>
      )}
    </button>
  );
}
