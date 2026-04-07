import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Bot,
  ChevronRight,
  CircuitBoard,
  Cpu,
  MessageSquareMore,
  PlugZap,
  ScanSearch,
  ShoppingCart,
  Layers3,
  CalendarRange,
  ShoppingBag,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const focusAreas = [
  {
    title: "E-commerce systems",
    description:
      "Tools and infrastructure for online stores, sales operations, customer flows, and post-purchase efficiency.",
    icon: ShoppingBag,
  },
  {
    title: "SaaS products",
    description:
      "Scalable products built around recurring value, lean operations, and measurable business outcomes.",
    icon: Layers3,
  },
  {
    title: "AI-powered workflows",
    description:
      "Automation, assistants, and decision-support tools that reduce manual work across business teams.",
    icon: Bot,
  },
  {
    title: "Hardware-connected solutions",
    description:
      "Software layers for devices, operational systems, and connected business environments where digital meets physical.",
    icon: Cpu,
  },
]

const productCapabilities = [
  {
    title: "Commerce operations",
    description:
      "Storefront support, order-side workflows, and internal systems that make e-commerce teams faster and more consistent.",
    icon: ShoppingCart,
  },
  {
    title: "Customer communication",
    description:
      "Shared inboxes, response flows, and support tooling for businesses that need structured client communication.",
    icon: MessageSquareMore,
  },
  {
    title: "Scheduling and service flow",
    description:
      "Appointment logic, booking experiences, and operational layers for teams that coordinate time-sensitive work.",
    icon: CalendarRange,
  },
  {
    title: "Integrations and automation",
    description:
      "Shopify-related apps, AI automations, and connected workflows that reduce repetitive manual steps.",
    icon: PlugZap,
  },
  {
    title: "Custom business software",
    description:
      "Purpose-built tools for bottlenecks that off-the-shelf products do not solve well enough.",
    icon: CircuitBoard,
  },
  {
    title: "Insight and process visibility",
    description:
      "Reporting, process tracking, and operational oversight for growing teams that need cleaner decision loops.",
    icon: ScanSearch,
  },
]

const operatingPrinciples = [
  {
    title: "Built around real operations",
    description:
      "We focus on software that fits how businesses actually sell, support, fulfill, and coordinate work.",
  },
  {
    title: "Fast to integrate",
    description:
      "Products are designed to connect with existing tools, storefronts, and business workflows with less friction.",
  },
  {
    title: "Structured for growth",
    description:
      "We aim for clear systems that can start lean, then scale into stronger platforms as business needs expand.",
  },
]

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(53,161,255,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(68,232,196,0.16),_transparent_24%),linear-gradient(180deg,_rgba(10,18,33,1)_0%,_rgba(7,12,23,1)_45%,_rgba(244,247,251,1)_45%,_rgba(244,247,251,1)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-white/[0.08] to-transparent" />

      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-6 lg:px-10">
        <header className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur md:px-6">
          <Link
            href="/"
            className="flex items-center rounded-full px-2 py-1 transition hover:bg-white/5"
          >
            <Image
              src="/mearsc-yatay-removebg.png"
              alt="Merasc Technologies logo"
              width={440}
              height={110}
              priority
              className="h-9 w-auto md:h-10"
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#focus" className="transition hover:text-white">
              Focus
            </a>
            <a href="#products" className="transition hover:text-white">
              Products
            </a>
            <a href="#process" className="transition hover:text-white">
              Approach
            </a>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact Page
            </Link>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-cyan-100 uppercase">
              <Sparkles className="size-3" />
              Software for modern business operations
            </div>
            <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Building practical digital products for commerce, SaaS, AI, and
              connected systems.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.72] md:text-lg">
              Merasc Technologies develops software products and digital tools
              for online businesses. We focus on e-commerce infrastructure,
              SaaS applications, AI-powered workflows, and hardware-aware
              software that helps teams operate with more clarity and less
              manual overhead.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-cyan-50"
              >
                <a href="#contact">
                  Start the conversation
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-full border-white/20 bg-white/5 px-5 text-sm text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#focus">
                  Explore our focus
                  <ChevronRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/75">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <p className="text-sm font-medium text-white">
                    Hero visual slot
                  </p>
                  <div className="flex gap-2">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="size-2 rounded-full bg-cyan-300" />
                    <span className="size-2 rounded-full bg-white/40" />
                  </div>
                </div>

                <div className="relative aspect-[4/5] bg-[radial-gradient(circle_at_20%_20%,_rgba(103,232,249,0.25),_transparent_24%),radial-gradient(circle_at_80%_30%,_rgba(59,130,246,0.26),_transparent_22%),linear-gradient(180deg,_rgba(2,6,23,1)_0%,_rgba(12,25,49,1)_100%)]">
                  <Image
                    src="/merasc-hero.jpg"
                    alt="Merasc Technologies hero visual"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.28)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm">
                        <p className="text-xs font-medium tracking-[0.18em] text-cyan-100 uppercase">
                          Aspect ratio
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          4:5 portrait
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          Best fit for this hero block
                        </p>
                      </div>

                      <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm">
                        <p className="text-xs font-medium tracking-[0.18em] text-cyan-100 uppercase">
                          Suggested size
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          1200 × 1500
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          Also safe at 1600 × 2000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur md:block">
              Image-ready slot
              <p className="mt-1 text-xs text-white/[0.55]">
                When your image is ready, this block can be swapped with
                `next/image` directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="focus"
        className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-10 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase">
            Focus Areas
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A technology company positioned at the intersection of digital
            commerce and operational efficiency.
          </h2>
        </div>

        <div className="grid gap-5 mb-20 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section
        id="products"
        className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white md:p-10">
          <p className="text-sm font-semibold tracking-[0.22em] text-cyan-200 uppercase">
            What We Build
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Products that remove friction from online business.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            Our product direction centers on software that supports customer
            communication, appointments, sales processes, and the day-to-day
            systems behind online operations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {productCapabilities.map((item) => {
            const Icon = item.icon

            return (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-200">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
            )
          })}
        </div>
      </section>

      <section
        id="process"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase">
              Approach
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              We prefer useful systems over noisy software.
            </h2>
          </div>
          <div className="grid gap-4">
            {operatingPrinciples.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.45)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,_#0f172a_0%,_#082f49_55%,_#164e63_100%)] p-8 text-white shadow-[0_30px_80px_-35px_rgba(8,47,73,0.6)] md:p-10">
          <p className="text-sm font-semibold tracking-[0.22em] text-cyan-100 uppercase">
            Next Step
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
                This page is ready as a base. Brand assets and visuals can be
                layered in next.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/[0.75] md:text-base">
                You can now replace placeholder copy blocks with final messaging
                and add logo, team photos, product screenshots, partner logos,
                or hardware visuals depending on what you want the first version
                to emphasize.
              </p>
              <p className="mt-4 text-sm font-medium text-cyan-100">
                Contact: merasclabs.support@gmail.com
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-cyan-50"
              >
                <a href="mailto:merasclabs.support@gmail.com">
                  Contact Merasc
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-full border-white/20 bg-white/10 px-5 text-sm text-white hover:bg-white/15 hover:text-white"
              >
                <a href="#top">Back to top</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
