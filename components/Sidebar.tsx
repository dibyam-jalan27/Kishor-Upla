"use client";

import { cn } from "@/lib/utils";
import { Book, Heart, Menu, Radio, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

const menuItems = [
  {
    label: "About Me",
    items: [
      {
        label: "About",
        icon: <Users className="h-4 w-4" />,
        href: "#about",
      },
      {
        label: "Skills",
        icon: <Radio className="h-4 w-4" />,
        href: "#skills",
      },
      {
        label: "Education",
        icon: <Book className="h-4 w-4" />,
        href: "#education",
      },
    ],
  },
  {
    label: "Professional",
    items: [
      {
        label: "Experience",
        icon: <Heart className="h-4 w-4" />,
        href: "#experience",
      },
      {
        label: "Awards and Recognition",
        icon: <Heart className="h-4 w-4" />,
        href: "#awards",
      },
      {
        label: "Internation Exposure",
        icon: <Heart className="h-4 w-4" />,
        href: "#international",
      },
    ],
  },
  {
    label: "Projects and Publications",
    items: [
      {
        label: "Publications",
        icon: <Heart className="h-4 w-4" />,
        href: "#publications",
      },
      {
        label: "Phd Students",
        icon: <Heart className="h-4 w-4" />,
        href: "#phd",
      },
      {
        label: "Masters Students",
        icon: <Heart className="h-4 w-4" />,
        href: "#masters",
      },
      {
        label: "Undergraduate Students",
        icon: <Heart className="h-4 w-4" />,
        href: "#undergraduate",
      },
    ],
  },
];

export function SideBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 fixed">
          <div className="flex h-14 items-center px-4 lg:h-[60px]">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <h1 className="text-4xl font-bold tracking-tighter">
                Kishor <span className="text-primary">Upla</span>
              </h1>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {menuItems.map((item) => (
                <div key={item.label} className="label mt-2 pt-2 pb-2">
                  <label htmlFor="">{item.label}</label>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                        pathname === subItem.href
                          ? "bg-muted text-primary hover:text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {subItem.icon}
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4 justify-center items-center flex flex-col space-y-2 w-full">
            <Link href="" className="w-full">
              <Button className="w-full" variant="secondary">
                Download CV
              </Button>
            </Link>
            <Link href="mailto:dibyam1jalan@gmail.com" className="w-full">
              <Button className="w-full">Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 md:h-0 bg-transparent items-center gap-4 px-4  lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden fixed"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <h1 className="text-4xl font-bold tracking-tighter">
                    Kishor <span className="text-primary">Upla</span>
                  </h1>
                </Link>
                {menuItems.map((item) => (
                  <div key={item.label} className="label mt-1 mb-1 pt-2 pb-2">
                    <label htmlFor="">{item.label}</label>
                    {item.items.map((subItem) => (
                      <SheetClose asChild key={subItem.label}>
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                            pathname === subItem.href
                              ? "bg-muted text-primary hover:text-primary"
                              : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {subItem.icon}
                          {subItem.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                ))}
              </nav>
              <div className="mt-auto ">
                <Link href="" className="w-full">
                  <Button className="w-full mb-2" variant="secondary">
                    Download CV
                  </Button>
                </Link>
                <Link href="mailto:dibyam1jalan@gmail.com" className="w-full">
                  <Button className="w-full">Contact Me</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1" />
        </header>
        {children}
      </div>
    </div>
  );
}

export default SideBar;
