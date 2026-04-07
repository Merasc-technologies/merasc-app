import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-4">
              <Image
                src="/merasc-kare-siyah-removebg.png"
                alt="Merasc Technologies square logo"
                width={96}
                height={96}
                className="size-14 object-contain"
              />
              <p className="font-heading text-lg font-semibold text-slate-950">
                Merasc Technologies
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Software products and digital tools for e-commerce, SaaS, AI, and
              connected business operations.
            </p>
          </div>

          <div className="grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-slate-950">Navigation</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/" className="transition hover:text-slate-950">
                  Home
                </Link>
                <Link href="/about" className="transition hover:text-slate-950">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="transition hover:text-slate-950"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-950">Contact</p>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="mailto:merasclabs.support@gmail.com"
                  className="transition hover:text-slate-950"
                >
                  merasclabs.support@gmail.com
                </a>
                <p>Merasc Technologies OÜ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Merasc Technologies. All rights reserved.</p>
          <p>Built for modern commerce and operational software.</p>
        </div>
      </div>
    </footer>
  )
}
