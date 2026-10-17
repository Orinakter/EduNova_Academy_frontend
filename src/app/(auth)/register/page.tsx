
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
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f8f6] px-4 py-10 sm:px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#002147]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#484745]/[0.07] blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[#002147]/10 bg-white shadow-2xl shadow-[#002147]/[0.08] lg:grid-cols-2">

        {/* Left branding panel */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-[#002147] p-10 text-white lg:flex xl:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#484745]/40 blur-3xl" />

          {/* Brand */}
          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6bd83] text-[#002147]">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                EduNova Academy
              </p>
              <p className="text-xs tracking-wide text-white/60">
                Learn Today. Lead Tomorrow.
              </p>
            </div>
          </div>

          {/* Welcome content */}
          <div className="relative my-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-[#e2d1a8]">
              <BookOpen className="h-4 w-4" />
              Begin your academic journey
            </div>

            <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
              Your future
              <span className="block text-[#d6bd83]">
                begins here.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              Create your EduNova account to connect with your academic
              community, explore learning opportunities and take the
              next step toward your ambitions.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {[
                "A connected academic experience",
                "Access to learning resources",
                "Your journey, all in one place",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d6bd83]/15">
                    <Check className="h-3.5 w-3.5 text-[#d6bd83]" />
                  </div>
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom text */}
          <div className="relative flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-xs text-white/50">
              Empowering minds through education.
            </p>
            <GraduationCap className="h-5 w-5 text-[#d6bd83]" />
          </div>
        </section>

        {/* Right register form */}
        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-10 xl:p-12">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#002147] text-[#d6bd83]">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <p className="font-bold text-[#002147]">
                  EduNova Academy
                </p>
                <p className="text-xs text-[#484745]/70">
                  Learn Today. Lead Tomorrow.
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8d7440]">
                Join Our Community
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#002147] sm:text-4xl">
                Create account
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#484745]/75">
                Fill in your details to get started with EduNova Academy.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={(event) => {
                event.preventDefault();

                const formData = new FormData(event.currentTarget);
                const password = formData.get("password");
                const confirmPassword = formData.get("confirmPassword");

                if (password !== confirmPassword) {
                  alert("Passwords do not match. Please try again.");
                  return;
                }

                alert("Registration UI is ready. Connect your registration API to continue.");
              }}
            >
              <FieldGroup className="gap-4">

                {/* Full name */}
                <Field>
                  <FieldLabel
                    htmlFor="register-name"
                    className="text-sm font-semibold text-[#002147]"
                  >
                    Full Name
                  </FieldLabel>

                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#484745]/60" />

                    <Input
                      id="register-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                      minLength={2}
                      className="h-11 rounded-xl border-[#002147]/15 bg-[#fafaf9] pl-10 text-sm placeholder:text-[#484745]/40 focus-visible:border-[#002147] focus-visible:ring-[#002147]/15"
                    />
                  </div>
                </Field>

                {/* Email */}
                <Field>
                  <FieldLabel
                    htmlFor="register-email"
                    className="text-sm font-semibold text-[#002147]"
                  >
                    Email Address
                  </FieldLabel>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#484745]/60" />

                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      autoComplete="email"
                      required
                      className="h-11 rounded-xl border-[#002147]/15 bg-[#fafaf9] pl-10 text-sm placeholder:text-[#484745]/40 focus-visible:border-[#002147] focus-visible:ring-[#002147]/15"
                    />
                  </div>
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel
                    htmlFor="register-password"
                    className="text-sm font-semibold text-[#002147]"
                  >
                    Password
                  </FieldLabel>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#484745]/60" />

                    <Input
                      id="register-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      autoComplete="new-password"
                      minLength={8}
                      required
                      className="h-11 rounded-xl border-[#002147]/15 bg-[#fafaf9] pl-10 pr-11 text-sm placeholder:text-[#484745]/40 focus-visible:border-[#002147] focus-visible:ring-[#002147]/15"
                    />

                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#484745]/60 transition-colors hover:text-[#002147]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <FieldDescription className="text-xs text-[#484745]/60">
                    Use at least 8 characters.
                  </FieldDescription>
                </Field>

                {/* Confirm password */}
                <Field>
                  <FieldLabel
                    htmlFor="register-confirm-password"
                    className="text-sm font-semibold text-[#002147]"
                  >
                    Confirm Password
                  </FieldLabel>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#484745]/60" />

                    <Input
                      id="register-confirm-password"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      minLength={8}
                      required
                      className="h-11 rounded-xl border-[#002147]/15 bg-[#fafaf9] pl-10 pr-11 text-sm placeholder:text-[#484745]/40 focus-visible:border-[#002147] focus-visible:ring-[#002147]/15"
                    />

                    <button
                      type="button"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#484745]/60 transition-colors hover:text-[#002147]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </Field>

                {/* Submit */}
                <Button
                  type="submit"
                  className="mt-2 h-12 w-full rounded-xl bg-[#002147] font-semibold text-white shadow-lg shadow-[#002147]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#484745]"
                >
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </FieldGroup>
            </form>

            {/* Login link */}
            <div className="mt-7 border-t border-[#002147]/10 pt-6 text-center">
              <p className="text-sm text-[#484745]/75">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#002147] underline-offset-4 transition-colors hover:text-[#8d7440] hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Footer */}
            <p className="mt-6 text-center text-xs text-[#484745]/50">
              © {new Date().getFullYear()} EduNova Academy. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
