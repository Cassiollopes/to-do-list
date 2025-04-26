import Image from "next/image";

export default function Avatar ({ onlyImage }: {onlyImage?: boolean}) {
  return (
    <div className="flex gap-1 items-center justify-center cursor-pointer">
      <div className="h-[28px] w-[28px] relative rounded-full overflow-hidden border select-none bg-background">
        <Image
          alt=""
          src={
            "https://idocode.com.br/wp-content/uploads/2021/07/programacao-scaled.jpg"
          }
          width={50}
          height={50}
          className="h-full w-full bg-gray-400 object-cover"
          loading="eager"
        />
      </div>
      {onlyImage ? null : (
        <span className="font-poppins text-base font-semibold max-md:hidden">
          ola, Lucas
        </span>
      )}
    </div>
  );
}