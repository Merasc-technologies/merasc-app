import Link from "next/link"
import { ArrowRight, Bot, Cpu, Layers3, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

const pillars = [
  {
    title: "E-commerce enablement",
    description:
      "We build systems that help online businesses manage sales operations, customer workflows, and store-side execution more effectively.",
    icon: ShoppingBag,
  },
  {
    title: "SaaS product thinking",
    description:
      "Our approach is shaped by scalable software models, recurring value creation, and practical business use cases.",
    icon: Layers3,
  },
  {
    title: "AI and automation",
    description:
      "We design tools that reduce repetitive work, improve operational visibility, and help teams move faster with better structure.",
    icon: Bot,
  },
  {
    title: "Connected systems",
    description:
      "Where needed, we also think beyond browser-based products and support software layers that interact with hardware-driven environments.",
    icon: Cpu,
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[linear-gradient(180deg,_#f8fbff_0%,_#eef5fb_100%)]">
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase">
            About
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Merasc Technologies builds practical software for modern business
            operations.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            The company develops software products and digital tools for online
            businesses, with a focus on e-commerce, SaaS, AI-powered tools, and
            workflow automation. We are interested in software that improves how
            businesses communicate, sell, coordinate, and operate every day.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.3)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-cyan-200 uppercase">
                Company Direction
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-5xl">
                We want to build systems that are clear, useful, and durable.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-white/70">
                That includes software products, custom internal tools,
                integrations, automation layers, and digital services for
                business clients that need smarter operational infrastructure.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 h-11 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-cyan-50"
              >
                <Link href="/contact">
                  Contact us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
