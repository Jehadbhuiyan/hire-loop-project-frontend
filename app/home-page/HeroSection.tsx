
"use client";

import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  Star,
  UserSearch,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const trending = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

const stats = [
  { icon: BriefcaseBusiness, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: UserSearch, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full flex-col items-center overflow-hidden bg-black bg-[url('/globe.png')] bg-cover bg-center bg-no-repeat px-4 pb-8 pt-16 text-white sm:px-6 sm:pt-20 md:pt-24">

      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_70%)]" />

      {/* Badge */}
      <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
        <span className="h-px w-6 bg-linear-to-r from-transparent to-white/25 sm:w-24 md:w-40" />

        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wide text-white/50 sm:gap-2 sm:px-3 sm:text-xs">
          <span aria-hidden="true">🧰</span>
          <span>
            <b className="font-bold text-white">50,000+</b> new jobs this month
          </span>
        </div>

        <span className="h-px w-6 bg-linear-to-l from-transparent to-white/25 sm:w-24 md:w-40" />
      </div>

      {/* Heading */}
      <h1 className="mt-7 max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
        Find Your Dream Job Today
      </h1>

      <p className="mt-3 max-w-md text-center text-xs leading-relaxed text-white/60 sm:mt-4 sm:text-sm">
        HireLoop connects top talent with world-class companies. Browse
        thousands of curated opportunities and land your next role — faster.
      </p>

      {/* Search Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-7 flex w-full max-w-xl flex-col gap-2 rounded-xl border border-white/10 bg-white/4 p-2 backdrop-blur sm:mt-9 sm:flex-row sm:items-center sm:gap-0 sm:p-1.5"
      >
        {/* Job Search */}
        <div className="relative flex w-full flex-1 items-center sm:w-auto">
          <Search className="pointer-events-none absolute left-3 size-4 text-white/80" />

          <Input
            placeholder="Job title, skill or company"
            className="h-10 border-0 bg-transparent pl-9 text-xs text-white shadow-none placeholder:text-white/50 focus-visible:ring-0 sm:h-9"
          />
        </div>

        {/* Divider */}
        <div className="hidden h-5 w-px bg-white/15 sm:block" />

        {/* Location Search */}
        <div className="relative flex w-full flex-1 items-center sm:w-auto">
          <MapPin className="pointer-events-none absolute left-3 size-4 text-white/80" />

          <Input
            placeholder="Location or Remote"
            className="h-10 border-0 bg-transparent pl-9 text-xs text-white shadow-none placeholder:text-white/50 focus-visible:ring-0 sm:h-9"
          />
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          aria-label="Search jobs"
          className="h-10 w-full rounded-lg bg-[#5b4af5] text-white hover:bg-[#6f5ff7] sm:size-9 sm:w-9"
        >
          <Search className="size-4" />
          <span className="sm:hidden">Search Jobs</span>
        </Button>
      </form>

      {/* Trending Positions */}
      <div className="mt-5 flex w-full max-w-xl flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px]">
        <span className="mr-1 text-white/50">
          Trending Position
        </span>

        {trending.map((t) => (
          <button
            key={t}
            type="button"
            className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-white/90 transition-colors hover:bg-white/10"
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tagline */}
      <p className="mt-16 pt-0 text-center text-xl font-light leading-snug text-white/60 sm:mt-20 sm:text-2xl md:mt-auto md:pt-40 md:text-3xl">
        Assisting over{" "}
        <span className="font-medium text-white">
          15,000 job seekers
        </span>
        <br />
        find their dream positions.
      </p>

      {/* Stats Cards */}
      <div className="mt-8 grid w-full max-w-6xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex h-32 flex-col justify-between rounded-xl border border-white/10 bg-linear-to-b from-white/[0.07] to-white/1 p-3.5 sm:h-40 sm:p-5"
          >
            <Icon className="size-4 text-white/80" />

            <div>
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {value}
              </div>

              <div className="mt-1.5 text-[10px] text-white/70 sm:mt-2 sm:text-xs">
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
