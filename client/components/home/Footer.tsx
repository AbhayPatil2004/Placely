export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-280 flex-col gap-4 px-4 text-sm text-medium-gray sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-6 w-6 place-items-center rounded-[5px] border border-amethyst/30 bg-surface text-[9px] font-semibold text-lavender">
            P
          </div>
          <span className="text-bright-gray">Placely</span>
        </div>

        <nav className="flex items-center gap-5 text-[12px] uppercase tracking-[0.2em] text-muted-gray">
          <a href="#learn" className="transition-colors hover:text-bright-gray">
            Learn
          </a>
          <a href="#practice" className="transition-colors hover:text-bright-gray">
            Practice
          </a>
          <a href="#test" className="transition-colors hover:text-bright-gray">
            Test
          </a>
        </nav>
      </div>
    </footer>
  );
}
