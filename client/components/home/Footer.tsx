export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-4 text-sm text-[#bcbcbc] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-6 w-6 place-items-center rounded-[5px] border border-[#7c3aed]/30 bg-[#1e1e1e] text-[9px] font-semibold text-[#a78bfa]">
            P
          </div>
          <span className="text-[#eeeeee]">Placely</span>
        </div>

        <nav className="flex items-center gap-5 text-[12px] uppercase tracking-[0.2em] text-[#a3a3a3]">
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
      </div>
    </footer>
  );
}
