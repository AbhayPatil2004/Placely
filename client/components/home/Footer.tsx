import Link from "next/link";
import { SiGithub } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-280 flex-col gap-5 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-white">
            Placely
          </Link>
        </div>

        <p className="text-xs text-white">© 2026 Placely. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-white">
          <a
            href="https://github.com/AbhayPatil2004"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
          >
            <SiGithub className="size-4" aria-hidden="true" />
            Abhay
          </a>
          <a
            href="https://github.com/rutikraundale"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
          >
            <SiGithub className="size-4" aria-hidden="true" />
            Rutik
          </a>
        </div>
      </div>
    </footer>
  );
}
