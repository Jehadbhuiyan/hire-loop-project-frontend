
import { Button } from "@/components/ui/button"

const links = [
  { label: "Browse Jobs", href: "#" },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
]



export default function Navbar() {
  return (
    <div className="w-full bg-[#141414] px-7 py-2">
      <nav className="mx-auto flex h-[57px] w-full max-w-6xl items-center justify-between rounded-2xl bg-[#1f1f1f] pl-5 pr-3">
        <img src={'/logo.png'}/>

        <div className="flex items-center">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] text-white transition-colors hover:text-white/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mx-5 hidden h-5 w-px bg-white/20 md:block" />

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="px-4 text-[14px] font-medium text-[#6c5ce7] hover:bg-transparent hover:text-[#8577f0]"
            >
              Sign In
            </Button>
            <Button className="h-10 rounded-xl bg-[#5b4af5] px-5 text-[14px] font-medium text-white shadow-none hover:bg-[#6f5ff7]">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}