"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Browse Jobs", href: "#" },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-[#141414] px-3 py-2 sm:px-5 md:px-7">
      <nav className="relative mx-auto flex h-14.25 w-full max-w-6xl items-center justify-between rounded-2xl bg-[#1f1f1f] px-4 sm:px-5">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-auto w-25 sm:w-28.75"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[13px] text-white transition-colors hover:text-white/70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-5 h-5 w-px bg-white/20" />

          {/* Desktop Buttons */}
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

        {/* Mobile Buttons + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-1 flex size-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-15.25 left-0 z-50 w-full rounded-2xl border border-white/10 bg-[#1f1f1f] p-4 shadow-xl md:hidden">
            <div className="flex flex-col gap-2">
              <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-[#6c5ce7] hover:bg-white/10">
                Sign In
              </button>

              <button className="h-10 w-full rounded-lg bg-[#5b4af5] px-3 text-sm font-medium text-white hover:bg-[#6f5ff7]">
                Get Started
              </button>
            </div>
            <ul className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}
