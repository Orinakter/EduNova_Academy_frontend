
"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  BookOpen,
  Check,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@base-ui/react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f7f4] px-4 py-8 sm:px-6 lg:py-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#002147]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-[#c6a15b]/[0.08] blur-3xl" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-[#002147]/10 bg-white shadow-2xl shadow-[#002147]/[0.08] lg:min-h-[690px] lg:grid-cols-[0.95fr_1.05fr]">

        {/* LEFT: BRANDING */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-[#002147] p-10 text-white lg:flex xl:p-14">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#484745]/40 blur-3xl" />

          {/* Brand */}
          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6bd83] text-[#002147] shadow-lg shadow-black/10">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                EduNova Academy
              </p>
              <p className="mt-0.5 text-xs tracking-wide text-white/55">
                Learn Today. Lead Tomorrow.
              </p>
            </div>
          </div>

          {/* Main message */}
          <div className="relative my-12">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-[#e3d2a9]">
              <Sparkles className="h-4 w-4" />
              Your future starts with learning
            </div>

            <h1 className="max-w-lg text-4xl font-semibold leading-[1.15] tracking-tight xl:text-[54px]">
              Welcome back to
              <span className="mt-1 block text-[#d6bd83]">
                your next chapter.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              Continue your academic journey with EduNova Academy.
              Access your learning space, stay organized and move
              closer to your goals.
            </p>

            {/* Benefits */}
            <div className="mt-9 space-y-4">
              {[
                "Your academic resources in one place",
                "Stay connected with your learning community",
                "A simpler way to manage your studies",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d6bd83]/15">
                    <Check className="h-3.5 w-3.5 text-[#d6bd83]" />
                  </div>

                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom panel */}
          <div className="relative flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <p className="text-sm font-medium text-white/85">
                Knowledge opens doors.
              </p>
              <p className="mt-1 text-xs text-white/45">
                Your journey. Your possibilities.
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6bd83]/25 bg-[#d6bd83]/10">
              <BookOpen className="h-5 w-5 text-[#d6bd83]" />
            </div>
          </div>
        </section>

        {/* RIGHT: LOGIN FORM */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-12 sm:py-12 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#002147] text-[#d6bd83]">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <p className="font-bold text-[#002147]">
                  EduNova Academy
                </p>
                <p className="text-xs text-[#484745]/65">
                  Learn Today. Lead Tomorrow.
                </p>
              </div>
            </div>

            {/* Form heading */}
            <div className="mb-9">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#002147]/10 bg-[#002147]/[0.04]">
                <LockKeyhole className="h-5 w-5 text-[#002147]" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8d7440]">
                Member Access
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#002147] sm:text-4xl">
                Sign in
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#484745]/70">
                Welcome back! Enter your details to access your account.
              </p>
            </div>

            {/* Login form */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                // Connect your login API/action here.
              }}
            >
              <FieldGroup className="gap-5">

                {/* Email */}
                <Field>
                  <FieldLabel
                    htmlFor="login-email"
                    className="text-sm font-semibold text-[#002147]"
                  >
                    Email Address
                  </FieldLabel>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#484745]/55" />

                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="h-12 rounded-xl border-[#002147]/15 bg-[#fafaf9] pl-10 text-sm placeholder:text-[#484745]/40 transition-all focus-visible:border-[#002147] focus-visible:ring-[#002147]/15"
                    />
                  </div>
                </Field>

                {/* Password */}
                <Field>
                  <div className="flex items-center justify-between gap-3">
                    <FieldLabel
                      htmlFor="login-password"
                      className="text-sm font-semibold text-[#002147]"
                    >
                      Password
                    </FieldLabel>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-semibold text-[#8d7440] transition-colors hover:text-[#002147]"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#484745]/55" />

                    <Input
                      id="login-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      className="h-12 rounded-xl border-[#002147]/15 bg-[#fafaf9] pl-10 pr-11 text-sm placeholder:text-[#484745]/40 transition-all focus-visible:border-[#002147] focus-visible:ring-[#002147]/15"
                    />

                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#484745]/55 transition-colors hover:text-[#002147]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </Field>

                {/* Remember me */}
                <div className="flex items-center justify-between gap-3">
                  <label className="flex cursor-pointer items-center gap-2.5">
                    {/* <Checkbox
                      checked={rememberMe}
                     
                      className="border-[#002147]/30 data-[state=checked]:border-[#002147] data-[state=checked]:bg-[#002147]"
                    /> */}

                    <span className="text-sm text-[#484745]/80">
                      Remember me
                    </span>
                  </label>

                  <div className="flex items-center gap-1.5 text-xs text-[#484745]/55">
                    <ShieldCheck className="h-4 w-4" />
                    Secure sign in
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="mt-2 h-12 w-full rounded-xl bg-[#002147] font-semibold text-white shadow-lg shadow-[#002147]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#484745]"
                >
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </FieldGroup>
            </form>

            {/* Register */}
            <div className="mt-8 border-t border-[#002147]/10 pt-6 text-center">
              <p className="text-sm text-[#484745]/75">
                New to EduNova?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#002147] underline-offset-4 transition-colors hover:text-[#8d7440] hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>

            {/* Footer */}
            {/* <div className="mt-8 flex items-center justify-center gap-2 text-center">
              <div className="h-px flex-1 bg-[#002147]/10" />
              <p className="px-2 text-[11px] text-[#484745]/45">
                © {new Date().getFullYear()} EduNova Academy
              </p>
              <div className="h-px flex-1 bg-[#002147]/10" />
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
}
