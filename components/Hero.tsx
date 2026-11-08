
import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  Star,
  UserSearch,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"]

const stats = [
  { icon: BriefcaseBusiness, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: UserSearch, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full flex-col items-center overflow-hidden bg-black px-6 pb-10 pt-20 text-white">
      {/* top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_70%)]" />

      {/* globe background (public/global.png) */}
      <img
        src="/globe.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-full max-w-[1200px] -translate-x-1/2 select-none object-contain object-bottom"
      />

      {/* badge */}
      <div className="flex items-center gap-3">
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-white/25 md:w-40" />
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-white/50">
          <span aria-hidden="true">🧰</span>
          <span>
            <b className="font-bold text-white">50,000+</b> new jobs this month
          </span>
        </div>
        <span className="h-px w-24 bg-gradient-to-l from-transparent to-white/25 md:w-40" />
      </div>

      {/* heading */}
      <h1 className="mt-8 text-center text-4xl font-bold tracking-tight md:text-5xl">
        Find Your Dream Job Today
      </h1>
      <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-white/60">
        HireLoop connects top talent with world-class companies. Browse
        thousands of curated opportunities and land your next role — faster.
      </p>

      {/* search */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-9 flex w-full max-w-xl items-center rounded-xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur"
      >
        <div className="relative flex flex-1 items-center">
          <Search className="pointer-events-none absolute left-3 size-4 text-white/80" />
          <Input
            placeholder="Job title, skill or company"
            className="h-9 border-0 bg-transparent pl-9 text-xs text-white shadow-none placeholder:text-white/50 focus-visible:ring-0"
          />
        </div>
        <div className="h-5 w-px bg-white/15" />
        <div className="relative flex flex-1 items-center">
          <MapPin className="pointer-events-none absolute left-3 size-4 text-white/80" />
          <Input
            placeholder="Location or Remote"
            className="h-9 border-0 bg-transparent pl-9 text-xs text-white shadow-none placeholder:text-white/50 focus-visible:ring-0"
          />
        </div>
        <Button
          type="submit"
          size="icon"
          aria-label="Search jobs"
          className="size-8 rounded-lg bg-[#5b4af5] text-white hover:bg-[#6f5ff7]"
        >
          <Search className="size-4" />
        </Button>
      </form>

      {/* trending */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px]">
        <span className="mr-1 text-white/50">Trending Position</span>
        {trending.map((t) => (
          <button
            key={t}
            type="button"
            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-white/90 transition-colors hover:bg-white/10"
          >
            {t}
          </button>
        ))}
      </div>

      {/* tagline over globe */}
      <p className="mt-auto pt-56 text-center text-2xl font-light leading-snug text-white/60 md:text-3xl">
        Assisting over{" "}
        <span className="font-medium text-white">15,000 job seekers</span>
        <br />
        find their dream positions.
      </p>

      {/* stats */}
      <div className="mt-10 grid w-full max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex h-40 flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.01] p-5"
          >
            <Icon className="size-4 text-white/80" />
            <div>
              <div className="text-4xl font-semibold tracking-tight">{value}</div>
              <div className="mt-2 text-xs text-white/70">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}