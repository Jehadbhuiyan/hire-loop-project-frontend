
import * as React from "react";
import {
  Bookmark,
  Building2,
  ChartLine,
  FileUser,
  Hexagon,
  MousePointerClick,
  Search,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: ChartLine,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: MousePointerClick,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileUser,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: Hexagon,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#171717] px-4 py-14 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
            <span className="size-1.5 rounded-full bg-[#5b4af5]" />
            Features Job
            <span className="size-1.5 rounded-full bg-[#5b4af5]" />
          </div>

          <h2 className="mt-3 max-w-sm text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:max-w-lg md:text-4xl">
            Everything you need to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-12 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:mt-14 lg:grid-cols-4 lg:gap-x-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex min-w-0 items-start gap-2.5 sm:gap-3 lg:gap-4"
            >
              {/* Icon */}
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-linear-to-b from-[#202020] to-black shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-300 group-hover:border-[#5b4af5]/50 group-hover:bg-[#5b4af5]/10 sm:size-11 lg:size-12">
                <Icon className="size-4 text-[#f0d4ff] sm:size-5" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-[11px] font-semibold leading-snug text-white sm:text-xs lg:text-sm">
                  {title}
                </h3>

                <p className="mt-1.5 text-[10px] leading-relaxed text-white/50 sm:max-w-40 sm:text-[11px] lg:text-xs">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
