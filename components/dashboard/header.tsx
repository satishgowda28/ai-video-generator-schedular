"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
        <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
             <span className="font-bold text-lg hidden md:block">AI Video Gen</span>
        </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  );
}
