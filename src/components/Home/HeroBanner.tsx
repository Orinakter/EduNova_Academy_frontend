"use client";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  GraduationCap,
  Landmark,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: GraduationCap,
    title: "World-Class Learning",
    description: "Learn from experienced educators",
  },
  {
    icon: BookOpen,
    title: "Modern Programs",
    description: "Career-focused academic programs",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Connect, collaborate and grow",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#002147] text-white">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft warm glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c6a15b]/[0.07] blur-[120px]" />

        <div className="absolute -bottom-40 right-[-100px] h-[500px] w-[500px] rounded-full bg-[#484745]/30 blur-[100px]" />

        {/* Vertical line */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.06]" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.06]" />

        {/* Top line */}
        <div className="absolute left-0 right-0 top-20 h-px bg-white/[0.05]" />

        {/* Bottom line */}
        <div className="absolute bottom-20 left-0 right-0 h-px bg-white/[0.05]" />
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="relative z-10">
            {/* Small label */}
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-10 bg-[#FDC800]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FDC800]">
                EduNova Academy
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[76px]">
              Where
              <span className="block text-[#FDC800]">
                Knowledge
              </span>
              Meets
              <span className="block">Opportunity.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              EduNova Academy is a modern university management
              platform designed to create a smarter, more connected
              and meaningful academic experience for every student.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-13 rounded-lg bg-[#FDC800] px-7 text-sm font-semibold text-[#002147] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e3cc98]"
              >
                <Link
                  href="/admissions"
                  className="flex items-center gap-2"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-lg border-white/20 bg-transparent px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <Link
                  href="/programs"
                  className="flex items-center gap-2"
                >
                  Explore Programs
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust / stats */}
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-semibold text-white">
                  15K+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Students
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-semibold text-white">
                  120+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Programs
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-semibold text-white">
                  350+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Faculty
                </p>
              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT VISUAL
          ===================================== */}

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            {/* Decorative circle */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#c6a15b]/20" />

            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-white/10" />

            {/* Main visual */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101923] shadow-2xl shadow-black/30">
              {/* Top section */}
              <div className="relative border-b border-white/10 px-7 pb-7 pt-8">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#c6a15b]/10 blur-3xl" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FDC800]">
                      Discover
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                      Your Future
                      <br />
                      Starts Here.
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a15b]/30 bg-[#c6a15b]/10">
                    <Sparkles className="h-5 w-5 text-[#FDC800]" />
                  </div>
                </div>
              </div>

              {/* Academic illustration */}
              <div className="relative flex min-h-[290px] items-center justify-center overflow-hidden bg-[#16222d]">
                {/* Architecture lines */}
                <div className="absolute inset-x-8 bottom-8 h-px bg-white/10" />

                <div className="absolute bottom-8 left-1/2 h-36 w-px -translate-x-1/2 bg-white/[0.05]" />

                <div className="absolute bottom-8 left-[30%] h-24 w-px bg-white/[0.04]" />

                <div className="absolute bottom-8 right-[30%] h-24 w-px bg-white/[0.04]" />

                {/* Main icon */}
                <div className="relative">
                  <div className="absolute inset-[-35px] rounded-full border border-[#c6a15b]/10" />

                  <div className="absolute inset-[-60px] rounded-full border border-white/[0.04]" />

                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[#c6a15b]/30 bg-[#c6a15b]/10">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#101923] shadow-2xl">
                      <GraduationCap
                        className="h-12 w-12 text-[#FDC800]"
                        strokeWidth={1.4}
                      />
                    </div>
                  </div>
                </div>

                {/* Small floating label */}
                <div className="absolute bottom-7 left-7 flex items-center gap-3 rounded-xl border border-white/10 bg-[#101923]/90 px-4 py-3 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c6a15b]/10">
                    <Landmark className="h-4 w-4 text-[#FDC800]" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Established
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Academic Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom information */}
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="p-6">
                  <p className="text-3xl font-semibold text-[#FDC800]">
                    98%
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Student satisfaction
                  </p>
                </div>

                <div className="p-6">
                  <p className="text-3xl font-semibold text-white">
                    4.9
                    <span className="text-sm text-[#FDC800]">
                      /5
                    </span>
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Academic experience
                  </p>
                </div>
              </div>
            </div>

            {/* Floating admission card */}
            <div className="absolute -bottom-7 -right-5 hidden w-64 rounded-2xl border border-white/10 bg-[#0d1720] p-4 shadow-2xl shadow-black/30 sm:block">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c6a15b]/10">
                  <Check className="h-5 w-5 text-[#FDC800]" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Admissions Open
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Fall 2026 Applications
                  </p>

                  <Link
                    href="/admissions"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#FDC800] hover:text-white"
                  >
                    Apply Now
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            FEATURES
        ===================================== */}

        <div className="relative border-t border-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 px-1 py-7 sm:px-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-[#FDC800]" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}