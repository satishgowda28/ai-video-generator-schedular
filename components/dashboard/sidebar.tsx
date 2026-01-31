"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
    ChevronLeft,
    ChevronRight,
    CreditCard,
    Film,
    LayoutDashboard,
    Menu,
    Plus,
    Settings,
    Sparkles,
    User,
    Video
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    {
      title: "Series",
      href: "/dashboard/series",
      icon: Film,
    },
    {
      title: "Videos",
      href: "/dashboard/videos",
      icon: Video,
    },
    {
      title: "Guide",
      href: "/dashboard/guide",
      icon: LayoutDashboard,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const bottomNavItems = [
    {
      title: "Upgrade",
      href: "/dashboard/upgrade",
      icon: Sparkles,
    },
    {
      title: "Profile",
      href: "/user-profile", // Clerk's user profile usually
      icon: User,
    },
  ];

  return (
    <>
        {/* Mobile Sidebar */}
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-40">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
                 <div className="flex items-center gap-2 p-6 border-b">
                    <div className="relative h-8 w-8">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl">AI Video Gen</span>
                </div>
                 <div className="p-4">
                     <Button className="w-full gap-2 mb-6" size="lg">
                        <Plus className="h-4 w-4" />
                        Create New Series
                     </Button>
                      <div className="space-y-1">
                        {navItems.map((item) => (
                          <Button
                            key={item.href}
                            variant={pathname === item.href ? "secondary" : "ghost"}
                            className="w-full justify-start gap-2"
                            asChild
                          >
                            <Link href={item.href}>
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                      <div className="mt-8 pt-8 border-t space-y-1">
                         {bottomNavItems.map((item) => (
                           <Button
                             key={item.href}
                             variant="ghost"
                             className="w-full justify-start gap-2"
                             asChild
                           >
                             <Link href={item.href}>
                               <item.icon className="h-4 w-4" />
                               {item.title}
                             </Link>
                           </Button>
                         ))}
                      </div>
                 </div>
            </SheetContent>
        </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "relative hidden md:flex flex-col h-screen border-r bg-background transition-all duration-300 ease-in-out",
          collapsed ? "w-20" : "w-72",
          className
        )}
      >
        <div className="flex items-center gap-2 p-6 h-16 border-b justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
               <div className="relative h-8 w-8">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
               </div>
               <span className="font-bold text-xl whitespace-nowrap overflow-hidden">
                AI Video Gen
               </span>
            </div>
          )}
          {collapsed && (
              <div className="mx-auto relative h-8 w-8">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={cn("absolute -right-3 top-20 z-10 h-6 w-6 rounded-full border bg-background shadow-md hidden", !collapsed && "inline-flex")}
            onClick={toggleCollapse}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
           <Button
            variant="ghost"
            size="icon"
             className={cn("absolute -right-3 top-20 z-10 h-6 w-6 rounded-full border bg-background shadow-md hidden", collapsed && "inline-flex")}
            onClick={toggleCollapse}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 flex-1 flex flex-col gap-4">
             {collapsed ? (
                  <Button size="icon" className="mx-auto" title="Create New Series">
                      <Plus className="h-4 w-4" />
                  </Button>
             ) : (
                  <Button className="w-full gap-2" size="lg">
                    <Plus className="h-4 w-4" />
                    Create New Series
                 </Button>
             )}


          <ScrollArea className="flex-1 -mx-4 px-4 overflow-hidden hover:overflow-y-auto">
            <div className="space-y-1 py-4">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2",
                    collapsed ? "justify-center px-0" : ""
                  )}
                  asChild
                  title={collapsed ? item.title : undefined}
                >
                  <Link href={item.href}>
                    <item.icon className={cn("h-4 w-4", collapsed ? "h-5 w-5" : "")} />
                    {!collapsed && item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-auto border-t pt-4 space-y-1">
             {bottomNavItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                   className={cn(
                    "w-full justify-start gap-2",
                    collapsed ? "justify-center px-0" : ""
                  )}
                  asChild
                   title={collapsed ? item.title : undefined}
                >
                  <Link href={item.href}>
                    <item.icon className={cn("h-4 w-4", collapsed ? "h-5 w-5" : "")} />
                     {!collapsed && item.title}
                  </Link>
                </Button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
