"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import {
  FaGraduationCap,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaArrowUp,
  FaCheck,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Departments", href: "/departments" },
  { name: "Admissions", href: "/admissions" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Notices", href: "/notices" },
  { name: "Contact Us", href: "/contact" },
];

const academicLinks = [
  { name: "Programs", href: "/programs" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Research & Innovation", href: "/research" },
  { name: "Scholarships", href: "/scholarships" },
  { name: "Academic Calendar", href: "/academic-calendar" },
  { name: "Examination", href: "/examination" },
  { name: "Results", href: "/results" },
];

const studentLinks = [
  { name: "Student Portal", href: "/student-portal" },
  { name: "Library", href: "/library" },
  { name: "Career Services", href: "/career" },
  { name: "Hostel Services", href: "/hostel" },
  { name: "IT Support", href: "/support" },
  { name: "FAQ", href: "/faq" },
  { name: "Downloads", href: "/downloads" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://youtube.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
  },
];

function FooterLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between gap-2 py-1.5 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
      >
        <span>{name}</span>

        <FaArrowRight className="shrink-0 text-[10px] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </Link>
    </li>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold tracking-wide text-white">
        {children}
      </h3>

      <div className="mt-3 h-[3px] w-8 rounded-full bg-[#FDC800]" />
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    // UI demonstration only.
    // Connect your backend/API to save newsletter subscriptions.
    setSubscribed(true);
    setEmail("");
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative overflow-hidden bg-[#101923] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-400/[0.06] blur-3xl" />

      {/* Newsletter section */}
      <div className="relative border-b border-white/10 bg-[#002147]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147] via-[#062b50] to-[#101923] opacity-90" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-2 md:py-14 lg:px-10">
          {/* Newsletter text */}
          <div className="flex gap-4">
            <div className="hidden h-20 w-1 shrink-0 rounded-full bg-[#FDC800] sm:block" />

            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-sky-100">
                <FaEnvelope />
                Stay Updated
              </div>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Get the Latest Updates from
                <span className="mt-1 block text-[#FDC800]">
                  EduNova Academy
                </span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
                Subscribe to our newsletter and never miss important
                announcements, events and academic updates.
              </p>
            </div>
          </div>

          {/* Newsletter form */}
          <div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-2 sm:flex-row sm:items-center"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <FaEnvelope className="shrink-0 text-slate-400" />

                <Input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  required
                  className="h-11 min-w-0 border-0 bg-transparent text-white shadow-none placeholder:text-slate-400 focus-visible:ring-0"
                />
              </div>

              <Button
                type="submit"
                className="h-11 rounded-xl bg-white px-5 font-semibold text-[#002147] transition-all hover:bg-sky-100"
              >
                Subscribe
                <FaArrowRight className="ml-2 text-xs" />
              </Button>
            </form>

            {subscribed && (
              <p
                role="status"
                className="mt-3 flex items-center gap-2 text-sm text-emerald-300"
              >
                <FaCheck />
                Thanks for subscribing!
              </p>
            )}

            <p className="mt-3 text-xs text-slate-400">
              Join our community and stay informed.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              href="/"
              aria-label="EduNova Academy home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDC800] text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:-translate-y-1">
                <FaGraduationCap className="text-3xl" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  EduNova
                </h2>

                <p className="text-base font-medium tracking-wide text-slate-300">
                  Academy
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm font-medium text-[#FDC800]">
              Learn Today. Lead Tomorrow.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              EduNova Academy is a modern university management system
              designed to connect students, faculty and administration
              in one smart platform. We are committed to providing
              quality education and creating opportunities for a
              better future.
            </p>

            {/* Social media */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#FDC800] hover:bg-[#FDC800] hover:text-white"
                >
                  <Icon className="text-sm" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 lg:pl-4">
            <SectionTitle>Quick Links</SectionTitle>

            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div className="lg:col-span-2">
            <SectionTitle>Academic</SectionTitle>

            <ul className="space-y-1">
              {academicLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </div>

          {/* Student resources */}
          <div className="lg:col-span-2">
            <SectionTitle>Student Resources</SectionTitle>

            <ul className="space-y-1">
              {studentLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-3">
            <SectionTitle>Get In Touch</SectionTitle>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[#FDC800]">
                  <FaLocationDot />
                </div>

                <div className="text-sm leading-6 text-slate-400">
                  <p>123 Education Road</p>
                  <p>Mirpur, Dhaka 1216</p>
                  <p>Bangladesh</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[#FDC800]">
                  <FaPhone />
                </div>

                <div className="text-sm leading-6 text-slate-400">
                  <a
                    href="tel:+8801234567890"
                    className="block transition-colors hover:text-white"
                  >
                    +880 1234 567890
                  </a>

                  <a
                    href="tel:+8809876543210"
                    className="block transition-colors hover:text-white"
                  >
                    +880 9876 543210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[#FDC800]">
                  <FaEnvelope />
                </div>

                <div className="break-words text-sm leading-6 text-slate-400">
                  <a
                    href="mailto:info@edunovaacademy.edu.bd"
                    className="block transition-colors hover:text-white"
                  >
                    info@edunovaacademy.edu.bd
                  </a>

                  <a
                    href="mailto:admission@edunovaacademy.edu.bd"
                    className="block transition-colors hover:text-white"
                  >
                    admission@edunovaacademy.edu.bd
                  </a>
                </div>
              </div>

              {/* Office hours */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[#FDC800]">
                  <FaClock />
                </div>

                <div className="text-sm leading-6 text-slate-400">
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Brand callout */}
            <Link
              href="/about"
              className="group mt-7 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.04] p-3 transition-all duration-300 hover:border-sky-400/40 hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDC800] text-white">
                  <FaGraduationCap className="text-xl" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Empowering Dreams
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Through Education
                  </p>
                </div>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-slate-300 transition-all duration-300 group-hover:bg-[#FDC800] group-hover:text-white">
                <FaArrowRight className="text-xs" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-center text-sm text-slate-400 md:text-left">
            © {new Date().getFullYear()} EduNova Academy. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-slate-400">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="hidden text-slate-600 sm:inline">|</span>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>

            <span className="hidden text-slate-600 sm:inline">|</span>

            <Link
              href="/sitemap"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-slate-300 transition-all duration-300 hover:border-[#FDC800] hover:bg-[#FDC800] hover:text-white md:mx-0"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}