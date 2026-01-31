"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            AI Video Gen
          </span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2 items-center">
            <SignedOut>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/sign-in">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <Button variant="ghost" size="sm" asChild>
                  <Link href="/dashboard">Dashboard</Link>
              </Button>
              <UserButton />
            </SignedIn>
          </div>
          <ModeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    href="#features"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Features
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#about"
                    className="text-lg font-medium hover:text-primary"
                  >
                    About
                  </Link>
                  <div className="flex flex-col gap-2 mt-4">
                    <SignedOut>
                      <Button variant="outline" className="w-full" asChild>
                          <Link href="/sign-in">Log in</Link>
                      </Button>
                      <Button className="w-full" asChild>
                          <Link href="/sign-up">Get Started</Link>
                      </Button>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex justify-center py-2">
                            <UserButton />
                        </div>
                    </SignedIn>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
