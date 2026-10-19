import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  Dumbbell,
  GraduationCap,
  Map,
  MapPin,
  Search,
} from "lucide-react";
import { FunnelCanvas } from "../components/FunnelCanvas";
import { ConsultationForm } from "../components/ConsultationForm";
import { ScrollReveal } from "../components/ScrollReveal";
import logoAsset from "@/assets/acquisition-labs-logo-transparent.png";
import founderAsset from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acquisition Labs. Your Next Client Is One Conversation Away" },
      {
        name: "description",
        content:
          "Acquisition Labs builds Meta ad funnels that turn attention into enquiries, bookings and sales through focused strategy, creative and conversion systems.",
      },
      {
        property: "og:title",
        content: "Acquisition Labs. Your Next Client Is One Conversation Away",
      },
      {
        property: "og:description",
        content:
          "Paid Meta ad funnels that start conversations with people ready to buy. You show up. You talk. You close.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcquisitionLabsLanding,
});

const resultExamples = [
  { value: "13%", label: "More purchases" },
  { value: "64%", label: "Lower cost per purchase" },
  { value: "28%", label: "More incremental subscriptions" },
  { value: "54%", label: "More daily bookings" },
];

const clientScenarios = [
  {
    title: "Inconsistent enquiries",
    text: "A business relying on referrals needs a more predictable flow of opportunities. We build a focused campaign and follow up journey designed to turn attention into qualified conversations.",
  },
  {
    title: "Leads that go nowhere",
    text: "A business may be generating interest without enough real sales conversations. We align the offer, message and qualification process so the right people know what to do next.",
  },
  {
    title: "Ad spend without clarity",
    text: "A business can spend money without knowing what is working. We connect campaign decisions to meaningful actions such as enquiries, bookings and sales, then improve from real data.",
  },
];

const callOutcomes = [
  {
    icon: Search,
    title: "You'll see where leads are leaking",
    desc: "We audit your current marketing live on the call and show you exactly why interested people aren't reaching you.",
  },
  {
    icon: Map,
    title: "You'll get your funnel blueprint",
    desc: "The exact Meta ad funnel we'd build for your business: the hook, the page, the offer and the follow up. Yours to keep either way.",
  },
  {
    icon: CalendarCheck,
    title: "You'll leave with a number",
    desc: "A clear projection of the leads, calls and clients your funnel could produce, so you can decide with facts, not feelings.",
  },
];

function AcquisitionLabsLanding() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center">
            <img src={logoAsset} alt="Acquisition Labs" className="h-9 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#results" className="transition-colors hover:text-foreground">
              Results
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#call" className="transition-colors hover:text-foreground">
              The Call
            </a>
            <a href="#reviews" className="transition-colors hover:text-foreground">
              Scenarios
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-blue-soft"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* Hero headline */}
      <section id="top" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-70">
          <FunnelCanvas />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center md:py-44">
          <span className="mb-6 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-soft uppercase">
            Client Acquisition Through Meta Ad Funnels
          </span>
          <h1 className="font-display max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
            Your next client is one <span className="text-primary">conversation</span> away
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We don't sell you ads. We sell you conversations with people already looking for what
            you do. Acquisition Labs builds Meta ad funnels that turn attention into booked calls,
            and booked calls into paying clients.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:bg-blue-soft"
            >
              Start the Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#results"
              className="rounded-full border border-border px-8 py-3.5 font-semibold transition-colors hover:border-primary/60 hover:text-blue-soft"
            >
              See the Numbers
            </a>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ScrollReveal>
            <h2 className="font-display mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">
              Attention is cheap. <span className="text-primary">Results are measurable.</span>
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {resultExamples.map((s) => (
              <ScrollReveal key={s.label} className="text-center">
                <div className="font-display text-4xl font-bold text-primary md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mx-auto mt-14 max-w-3xl border-t border-border pt-10">
            <h3 className="font-display text-center text-2xl font-semibold md:text-3xl">
              What this means for your business
            </h3>
            <div className="mt-5 space-y-4 text-center leading-relaxed text-muted-foreground">
              <p>
                These examples do not guarantee the same results for every business. Results depend
                on the offer, creative, audience, budget, sales process and how effectively campaigns
                are managed.
              </p>
              <p>
                They demonstrate the potential of Meta advertising to generate purchases, enquiries,
                bookings and sales when the right strategy, creative and conversion system are in place.
              </p>
              <p>
                Our goal is to apply these principles to your business and build campaigns around your
                specific offer and target customer, rather than putting money behind an ad and hoping it works.
              </p>
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Source: Meta, “How Businesses Are Driving Results with Meta's AI Powered Ads,” 3 September 2026. Individual advertiser examples.
              {" "}
              <a
                href="https://www.facebook.com/business/news/businesses-driving-results-with-meta-ai-ads"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-soft underline decoration-primary/50 underline-offset-4"
              >
                Read the source
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Face: the people behind Acquisition Labs */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[minmax(240px,300px)_1fr] md:gap-20">
          <ScrollReveal className="w-full max-w-[300px] justify-self-center">
            <div className="relative overflow-visible">
              <div className="overflow-hidden rounded-md border border-border/60 bg-muted">
              <img
                src={founderAsset}
                alt="Jayden Fourie, Founder and CEO of Acquisition Labs"
                  className="aspect-[892/1307] h-auto w-full object-contain"
              />
              </div>
              <div className="absolute -right-3 bottom-4 rounded-sm bg-foreground px-4 py-2 text-xs font-semibold text-background shadow-sm">
                Founder & CEO
              </div>
            </div>
            <ul className="mt-7 divide-y divide-border border-y border-border">
              <li className="flex items-center gap-4 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/20 text-blue-soft">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold text-foreground">Strategy focused</strong>
                  <span className="text-sm text-muted-foreground">Strategy management graduate</span>
                </span>
              </li>
              <li className="flex items-center gap-4 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/20 text-blue-soft">
                  <Dumbbell className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold text-foreground">Always in motion</strong>
                  <span className="text-sm text-muted-foreground">Business, running, fitness and travel</span>
                </span>
              </li>
              <li className="flex items-center gap-4 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/20 text-blue-soft">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold text-foreground">Proudly South African</strong>
                  <span className="text-sm text-muted-foreground">Based in beautiful South Africa</span>
                </span>
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-widest text-blue-soft uppercase">
              Meet the founder
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Most agencies sell you traffic. We sell you conversations.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Traffic is easy to buy and easy to waste. A conversation with someone who wants what
              you sell is worth more than a thousand impressions, and our entire job is to
              manufacture them for you.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We build every funnel ourselves: the ads that stop the scroll, the page that earns
              the click, the follow up that books the call. When we work together, you'll never
              open an ads dashboard again. You'll just answer your phone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Outcome after the call */}
      <section id="call" className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-widest text-blue-soft uppercase">
              What one call gives you
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              30 minutes. Zero pressure. <span className="text-primary">Total clarity.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether we end up working together or not, you'll walk away from this call knowing
              exactly how to get more leads and what it's costing you to wait.
            </p>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {callOutcomes.map((o) => (
              <ScrollReveal
                key={o.title}
                className="group h-full rounded-2xl border border-border/60 bg-background/60 p-8 transition-[opacity,transform,border-color] hover:border-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-blue-soft transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <o.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold">{o.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{o.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Honest illustrative scenarios until verified client reviews are available */}
      <section id="reviews" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-blue-soft uppercase">
            Common challenges
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            From the problem to a clearer path forward
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Illustrative scenarios showing how we approach common acquisition problems. These are not client testimonials.
          </p>
        </ScrollReveal>
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {clientScenarios.map((scenario) => (
            <ScrollReveal
              key={scenario.title}
              className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/60 px-8 py-7 transition-[opacity,transform,border-color] hover:border-primary/40"
            >
              <div className="font-display text-xl font-semibold">{scenario.title}</div>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{scenario.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Consultation request */}
      <section id="contact" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start md:gap-20 md:py-32">
          <ScrollReveal className="md:sticky md:top-28">
            <span className="text-xs font-semibold tracking-widest text-blue-soft uppercase">
              Request a consultation
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Let your next client start with <span className="text-primary">this conversation.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tell us where growth is getting stuck. We will review your situation before the call so
              the conversation starts with your business, not a sales pitch.
            </p>
            <div className="mt-8 border-l-2 border-primary pl-5">
              <p className="font-display text-lg font-semibold">A focused 30 minute conversation</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Clear next steps, honest feedback and no pressure.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="rounded-md border border-border bg-card p-6 shadow-sm sm:p-8 md:p-10">
            <ConsultationForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <img src={logoAsset} alt="Acquisition Labs" className="h-8 w-auto" />
          <span>© {new Date().getFullYear()} Acquisition Labs. All rights reserved.</span>
          <a href="mailto:hello.acquisitionlabs@gmail.com" className="transition-colors hover:text-blue-soft">
            hello.acquisitionlabs@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
