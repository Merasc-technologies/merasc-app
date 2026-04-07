import { Mail, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

const contactPoints = [
  {
    title: "Email",
    value: "merasclabs.support@gmail.com",
    icon: Mail,
  },
  {
    title: "Company",
    value: "Merasc Technologies",
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <main className="bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)]">
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase">
              Contact
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Let&apos;s discuss the next version of your product or workflow.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              If you want to talk about e-commerce systems, SaaS products,
              AI-supported workflows, automation, or a custom software need,
              this page is ready as the first contact point.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.3)] md:p-10">
            <div className="space-y-4">
              {contactPoints.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-cyan-200">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500">
                          {item.title}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-950">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-dashed border-sky-200 bg-sky-50/70 p-6">
              <p className="text-sm font-semibold text-slate-950">
                Simple next step
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Until a contact form is added, email is the primary contact
                method for inquiries, partnerships, and project conversations.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-5 h-11 rounded-full px-5 text-sm font-semibold"
              >
                <a href="mailto:merasclabs.support@gmail.com">
                  Send email
                  <Send className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
