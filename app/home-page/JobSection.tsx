import {
  ArrowRight,
  Briefcase,
  CircleDollarSign,
  MapPin,
  Clock3,
} from "lucide-react"

import { Button } from "@/components/ui/button"

// Local Job Data
const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "G",
    title: "Frontend Developer",
    description:
      "Build beautiful and responsive user interfaces using React and modern frontend technologies.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25–$40/hour",
    category: "Development",
  },
  {
    id: 2,
    company: "Meta",
    logo: "M",
    title: "UI/UX Designer",
    description:
      "Create user-friendly experiences and stunning interfaces for next-generation digital products.",
    location: "London, UK",
    type: "Remote",
    salary: "$30–$45/hour",
    category: "Design",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "MS",
    title: "Full Stack Developer",
    description:
      "Work with modern web technologies to develop scalable and high-performance applications.",
    location: "California, USA",
    type: "Full-time",
    salary: "$40–$60/hour",
    category: "Development",
  },
  {
    id: 4,
    company: "Netflix",
    logo: "N",
    title: "Product Designer",
    description:
      "Collaborate with product teams to design meaningful and engaging user experiences.",
    location: "Toronto, Canada",
    type: "Remote",
    salary: "$35–$50/hour",
    category: "Design",
  },
  {
    id: 5,
    company: "Amazon",
    logo: "A",
    title: "Backend Developer",
    description:
      "Develop secure APIs, optimize databases and build reliable backend services.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$30–$55/hour",
    category: "Development",
  },
  {
    id: 6,
    company: "Spotify",
    logo: "S",
    title: "Digital Marketing Manager",
    description:
      "Plan creative marketing campaigns and grow brand engagement across digital platforms.",
    location: "Berlin, Germany",
    type: "Full-time",
    salary: "$28–$42/hour",
    category: "Marketing",
  },
]

// Reusable Chip Component
function Chip({
  icon: Icon,
  children,
}: {
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 text-[9px] leading-tight text-white/75 sm:gap-1.5 sm:px-3 sm:text-[11px]">
      <Icon className="size-3 shrink-0 text-[#a99cff]" />
      <span className="warp-break-words">{children}</span>
    </span>
  )
}

export default function JobsSection() {
  return (
    <section className="w-full overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[2px] text-white/50 uppercase sm:text-xs">
            <span className="size-1.5 rounded-full bg-[#5b4af5]" />
            Smart Job Discovery
            <span className="size-1.5 rounded-full bg-[#5b4af5]" />
          </div>

          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The roles you’d never find by searching
          </h2>

          <p className="mt-3 max-w-lg text-xs leading-relaxed text-white/50 sm:text-sm">
            Discover exciting opportunities from top companies. Find the perfect
            role and take the next step in your career.
          </p>
        </div>

        {/* Job Cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="group flex min-w-0 flex-col rounded-xl border border-white/10 bg-[#161616] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#5b4af5]/50 sm:rounded-2xl sm:p-5 lg:p-6"
            >
              {/* Company Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-lg font-bold text-white">
                    {job.logo}
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate text-xs font-semibold text-white sm:text-sm">
                      {job.company}
                    </h4>

                    <p className="mt-0.5 text-[11px] text-white/40">
                      Verified Company
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-[#5b4af5]/15 px-2.5 py-1 text-[10px] font-medium text-[#a99cff]">
                  {job.category}
                </span>
              </div>

              {/* Job Details */}
              <div className="mt-6">
                <h3 className="text-sm leading-snug font-semibold tracking-tight text-white transition-colors group-hover:text-[#a99cff] sm:text-xl">
                  {job.title}
                </h3>

                <p className="mt-2 text-[10px] leading-relaxed text-white/50 sm:text-[13px]">
                  {job.description}
                </p>
              </div>

              {/* Job Chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip icon={MapPin}>{job.location}</Chip>

                <Chip icon={Briefcase}>{job.type}</Chip>

                <Chip icon={CircleDollarSign}>{job.salary}</Chip>
              </div>

              {/* Card Footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 p-3 sm:p-4">
                <div className="flex items-center gap-1.5 text-[9px] text-white/40 sm:text-[11px]">
                  <Clock3 className="size-3 shrink-0" />
                  <span>Recently posted</span>
                </div>

                <Button
                  variant="ghost"
                  className="group h-8 gap-1 rounded-full bg-[#5b4af5]/10 px-3 text-[10px] font-semibold text-[#a99cff] transition-all duration-300 hover:bg-[#5b4af5] hover:text-white sm:h-9 sm:px-4 sm:text-xs"
                >
                  Apply
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Jobs */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Button className="h-11 w-full rounded-xl bg-white px-6 text-xs font-semibold text-black transition-all hover:bg-white/85 sm:w-auto">
            View All Jobs
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
