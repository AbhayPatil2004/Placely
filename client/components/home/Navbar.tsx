import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#171717]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-7 w-7 place-items-center rounded-[6px] border border-[#7c3aed]/30 bg-[#1e1e1e] text-[10px] font-semibold text-[#a78bfa]">
            P
          </div>
          <span className="text-[15px] font-medium tracking-[-0.03em] text-[#eeeeee]">
            Placely
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-[13px] text-[#bcbcbc] sm:flex">
          <a href="#learn" className="transition-colors hover:text-[#eeeeee]">
            Learn
          </a>
          <a href="#practice" className="transition-colors hover:text-[#eeeeee]">
            Practice
          </a>
          <a href="#test" className="transition-colors hover:text-[#eeeeee]">
            Test
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
