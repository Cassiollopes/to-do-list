"use client";

import Logo from "./logo";
import Avatar from "./avatar";

export default function Nav() {  
  return (
    <div className="flex items-center justify-between py-4 px-4 sticky top-0 z-[1000] bg-background md:hidden">
      <Logo />
      <div className="flex max-md:gap-4 gap-2 items-center justify-center">
        <Avatar />
      </div>
    </div>
  );
}
