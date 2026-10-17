"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Building2,
  ChevronDown,
  GraduationCap,
  Menu,
  School,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const COLORS = {
  primary: "#002147",
  secondary: "#484745",
  background: "#FFFFFF",
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Notice", href: "/notices" },
];

const academicItems = [
  {
    title: "Academic Programs",
    description: "Explore degrees and programs.",
    href: "/programs",
    icon: BookOpen,
  },
  {
    title: "Our Faculties",
    description: "Meet our academic faculties.",
    href: "/faculties",
    icon: Building2,
  },
  {
    title: "Courses",
    description: "Discover available courses.",
    href: "/courses",
    icon: School,
  },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl"
      style={
        {
          "--university-primary": COLORS.primary,
          "--university-secondary": COLORS.secondary,
        } as React.CSSProperties
      }
    >
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="UniSphere homepage"
          className="group flex shrink-0 items-center gap-3"
        >
          <div
            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:rounded-2xl"
            style={{ backgroundColor: COLORS.primary }}
          >
            <GraduationCap
              className="h-7 w-7 text-white transition-transform duration-300 group-hover:-rotate-6"
              strokeWidth={1.7}
            />

            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/25" />
          </div>

          <div className="flex flex-col">
            <span
              className="text-[23px] font-extrabold leading-tight tracking-tight"
              style={{ color: COLORS.primary }}
            >
             EduNova Academy
              <span style={{ color: COLORS.secondary }}></span>
            </span>

            <span
              className="mt-1 text-[9px] font-semibold uppercase tracking-[0.19em]"
              style={{ color: COLORS.secondary }}
            >
              University Management
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 hover:bg-slate-100"
              style={{ color: COLORS.secondary }}
            >
              {item.name}
            </Link>
          ))}

          {/* ACADEMICS DROPDOWN */}
          <DropdownMenu>
            <DropdownMenuTrigger
            render={<Button
                variant="ghost"
                className="gap-1.5 rounded-lg px-3 py-2.5 text-[13px] font-semibold hover:bg-slate-100"
                style={{ color: COLORS.secondary }}
              >
                Academics
                <ChevronDown className="h-3.5 w-3.5" />
              </Button>}>
              
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              sideOffset={14}
              className="w-[320px] rounded-2xl border-slate-200 bg-white p-2 shadow-xl"
            >
              <DropdownMenuLabel
                className="px-3 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: COLORS.secondary }}
              >
                Explore Academics
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              {academicItems.map((item) => {
                const Icon = item.icon;

                return (
                  <DropdownMenuItem
                    key={item.title}
                    
                    className="cursor-pointer rounded-xl p-0 focus:bg-slate-50"
                  >
                    <Link
                      href={item.href}
                      className="flex w-full items-center gap-3 px-3 py-3"
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${COLORS.primary}0D`,
                          color: COLORS.primary,
                        }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>

                      <div className="flex flex-col gap-1">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: COLORS.primary }}
                        >
                          {item.title}
                        </span>

                        <span className="text-xs text-slate-500">
                          {item.description}
                        </span>
                      </div>

                      <ArrowDownRight className="ml-auto h-4 w-4 text-slate-400" />
                    </Link>
                  </DropdownMenuItem>
                );
              })}

              <DropdownMenuSeparator />

              <DropdownMenuItem  className="rounded-lg">
                <Link
                  href="/programs"
                  className="flex cursor-pointer items-center justify-between py-2 font-semibold"
                  style={{ color: COLORS.primary }}
                >
                  View all academics
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 hover:bg-slate-100"
              style={{ color: COLORS.secondary }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link href="/login">
            <Button
              variant="ghost"
              className="rounded-lg px-4 font-semibold hover:bg-slate-100"
              style={{ color: COLORS.primary }}
            >
              Login
            </Button>
          </Link>

          <Link href="/admissions/apply">
            <Button
              className="group h-11 rounded-lg px-5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: COLORS.primary }}
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger
            render={<Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
                className="h-10 w-10 rounded-xl border-slate-200 bg-white hover:bg-slate-50"
                style={{ color: COLORS.primary }}
              >
                <Menu className="h-5 w-5" />
              </Button>} >
              
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] overflow-y-auto border-l border-slate-200 bg-white p-0 sm:w-[380px]"
            >
              {/* MOBILE HEADER */}
              <SheetHeader className="border-b border-slate-100 px-5 py-5 text-left">
                <SheetTitle>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <p
                        className="text-xl font-extrabold"
                        style={{ color: COLORS.primary }}
                      >
                       EduNova Academy
                      </p>

                      <p
                        className="text-[9px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: COLORS.secondary }}
                      >
                        University Management
                      </p>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>

              {/* MOBILE LINKS */}
              <div className="px-5 py-5">
                <p
                  className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: COLORS.secondary }}
                >
                  Main Menu
                </p>

                <nav className="flex flex-col gap-1">
                  {navItems.slice(0, 2).map((item) => (
                    <SheetClose key={item.name}>
                      <Link
                        href={item.href}
                        className="rounded-xl px-3 py-3 text-sm font-semibold transition-colors hover:bg-slate-50"
                        style={{ color: COLORS.secondary }}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}

                  {/* MOBILE ACADEMICS */}
                  <div className="mt-1 rounded-xl bg-slate-50 p-3">
                    <p
                      className="mb-2 px-1 text-sm font-bold"
                      style={{ color: COLORS.primary }}
                    >
                      Academics
                    </p>

                    {academicItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <SheetClose key={item.title}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-white"
                          >
                            <Icon
                              className="h-4 w-4"
                              style={{ color: COLORS.primary }}
                            />

                            <span
                              className="text-sm font-medium"
                              style={{ color: COLORS.secondary }}
                            >
                              {item.title}
                            </span>

                            <ArrowRight className="ml-auto h-3.5 w-3.5 text-slate-400" />
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>

                  {navItems.slice(2).map((item) => (
                    <SheetClose key={item.name}>
                      <Link
                        href={item.href}
                        className="rounded-xl px-3 py-3 text-sm font-semibold transition-colors hover:bg-slate-50"
                        style={{ color: COLORS.secondary }}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* MOBILE ACTIONS */}
                <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6">
                  <SheetClose>
                    <Link href="/login" className="block">
                      <Button
                        variant="outline"
                        className="h-11 w-full rounded-xl border-slate-200 font-semibold"
                        style={{ color: COLORS.primary }}
                      >
                        Login to Portal
                      </Button>
                    </Link>
                  </SheetClose>

                  <SheetClose>
                    <Link href="/admissions/apply" className="block">
                      <Button
                        className="h-11 w-full rounded-xl font-semibold text-white shadow-md"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </SheetClose>
                </div>

                {/* MOBILE BOTTOM BANNER */}
                <div
                  className="relative mt-8 overflow-hidden rounded-2xl p-5"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10" />

                  <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-white/10" />

                  <div className="relative">
                    <GraduationCap className="mb-3 h-7 w-7 text-white/90" />

                    <p className="text-base font-bold text-white">
                      Your Future Starts Here.
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/70">
                      Discover your potential and explore new academic
                      opportunities with UniSphere.
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* BOTTOM BRAND ACCENT */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary}, transparent)`,
        }}
      />
    </header>
  );
}