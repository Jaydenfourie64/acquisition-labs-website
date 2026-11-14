import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";
import { useState } from "react";
import { ConsultationForm } from "../components/ConsultationForm";
import { ScrollReveal } from "../components/ScrollReveal";
import founderAsset from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acquisition Labs | Customer Acquisition & Growth Systems" },
      { name: "description", content: "We help professional service businesses scale through strategic customer acquisition, Meta advertising, lead generation and conversion funnels." },
      { property: "og:title", content: "Acquisition Labs | Customer Acquisition & Growth Systems" },
      { property: "og:description", content: "Strategic customer acquisition systems that turn attention into qualified enquiries and a stronger sales pipeline." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcquisitionLabsLanding,
});

const services = [
  { number: "01", title: "Paid acquisition", text: "Strategic Meta advertising designed to put your offer in front of the right audience and generate demand." },
  { number: "02", title: "Lead generation", text: "Campaigns and lead capture journeys built to turn attention into qualified enquiries and sales conversations." },
  { number: "03", title: "Conversion funnels", text: "A considered path from first interaction to enquiry, with clear messaging and a friction-conscious next step." },
];

const stages = [
  { number: "01", title: "Attention", text: "Reach the right audience with relevant creative and a clear offer." },
  { number: "02", title: "Interest", text: "Build consideration by communicating value and addressing buying intent." },
  { number: "03", title: "Enquiry", text: "Give interested prospects a clear, simple way to take the next step." },
  { number: "04", title: "Opportunity", text: "Create a stronger pipeline of conversations your team can follow up." },
];

const process = [
  { number: "01", title: "Discover", text: "Understand your business, offer, audience and current acquisition bottlenecks." },
  { number: "02", title: "Build", text: "Develop the campaign strategy, creative direction and conversion journey." },
  { number: "03", title: "Launch", text: "Put the system into market and measure the actions that matter." },
  { number: "04", title: "Refine", text: "Use campaign data to identify opportunities and improve performance over time." },
];

function AcquisitionLabsLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#171716]/75 text-white backdrop-blur-lg">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" aria-label="Acquisition Labs home" className="flex flex-col font-display leading-none">
            <span className="text-sm font-bold tracking-[0.19em]">ACQUISITION</span>
            <span className="mt-1 text-center text-[9px] font-medium tracking-[0.58em]">LABS</span>
            <span className="mx-auto mt-1.5 h-0.5 w-9 bg-primary" />
          </a>
          <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.16em] text-white/75 md:flex">
            <a href="#approach" className="transition hover:text-white">Approach</a>
            <a href="#services" className="transition hover:text-white">Expertise</a>
            <a href="#results" className="transition hover:text-white">Results</a>
            <a href="#founder" className="transition hover:text-white">Founder</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#bd4518] md:inline-flex">Start a conversation <ArrowUpRight className="ml-2 h-4 w-4" /></a>
          <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#171716] px-6 py-6 text-sm uppercase tracking-widest md:hidden">
          {["approach", "services", "results", "founder", "contact"].map((item) => <a key={item} href={`#${item}`} onClick={closeMenu}>{item === "founder" ? "Meet the founder" : item}</a>)}
        </nav>}
      </header>

      <main>
        <section id="top" className="relative flex min-h-[760px] items-end overflow-hidden bg-[#242522] pt-28 text-white md:min-h-[850px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/cape-town-hero.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32">
            <ScrollReveal className="max-w-4xl">
              <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">Customer acquisition • South Africa</p>
              <h1 className="font-display max-w-4xl text-5xl leading-[1.04] font-medium tracking-[-0.045em] sm:text-6xl md:text-8xl">Good businesses.<br /><span className="text-[#E56A39]">Extraordinary</span> growth.</h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">We help professional service businesses scale through strategic customer acquisition, paid advertising and conversion systems that build a stronger sales pipeline.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center rounded-full bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#bd4518]">Discuss your growth <ArrowUpRight className="ml-3 h-4 w-4" /></a>
                <a href="#approach" className="inline-flex items-center rounded-full border border-white/45 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white/10">Explore our approach</a>
              </div>
            </ScrollReveal>
            <div className="mt-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-white/65"><span className="h-px w-12 bg-primary" /> Strategy-led. Performance-focused.</div>
          </div>
        </section>

        <section id="approach" className="bg-background px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-24">
            <ScrollReveal>
              <p className="section-kicker">A more considered approach</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium tracking-tight md:text-6xl">You focus on what you do best. <span className="text-primary">We help the right people find you.</span></h2>
            </ScrollReveal>
            <ScrollReveal className="flex flex-col justify-end">
              <p className="text-lg leading-8 text-muted-foreground">Growth requires more than visibility. It requires a clear offer, the right audience and a structured journey that turns interest into meaningful enquiries.</p>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">Acquisition Labs partners with professional service businesses to develop that journey — connecting paid media, lead generation and conversion strategy into one focused acquisition system.</p>
              <a href="#services" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">Explore our expertise <ArrowRight className="h-4 w-4 text-primary" /></a>
            </ScrollReveal>
          </div>
        </section>

        <section id="services" className="bg-[#242522] px-6 py-24 text-[#F3EEE3] md:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="max-w-2xl">
              <p className="section-kicker text-[#E56A39]">What we do</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">The components of a stronger acquisition engine.</h2>
            </ScrollReveal>
            <div className="mt-16 grid gap-0 border-t border-white/20 md:grid-cols-3">
              {services.map((service) => <ScrollReveal key={service.number} className="border-b border-white/20 py-9 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="text-xs tracking-[0.2em] text-[#E56A39]">{service.number}</span>
                <h3 className="mt-9 font-display text-2xl font-medium">{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">{service.text}</p>
              </ScrollReveal>)}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#E8DFD0] px-6 py-24 md:py-32">
          <div className="absolute right-0 top-0 h-full w-[42%] bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/architecture-01.jpg')" }} />
          <div className="relative mx-auto max-w-7xl">
            <ScrollReveal className="max-w-3xl">
              <p className="section-kicker">The acquisition journey</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">From first impression to a stronger pipeline.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">A clear customer journey gives every campaign a purpose — and every prospect a logical next step.</p>
            </ScrollReveal>
            <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stages.map((stage, index) => <ScrollReveal key={stage.number} className="border-t border-foreground/30 pt-5">
                <span className="text-xs tracking-[0.2em] text-primary">{stage.number} / 04</span>
                <h3 className="mt-8 font-display text-2xl font-medium">{stage.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{stage.text}</p>
                {index < stages.length - 1 && <div className="mt-8 hidden items-center text-primary lg:flex"><span className="h-px w-12 bg-primary/60" /><ArrowRight className="ml-1 h-4 w-4" /></div>}
              </ScrollReveal>)}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
              <ScrollReveal>
                <p className="section-kicker">How we work</p>
                <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">A disciplined process. Built around your business.</h2>
              </ScrollReveal>
              <div className="border-t border-foreground/20">
                {process.map((step) => <ScrollReveal key={step.number} className="grid grid-cols-[55px_1fr] gap-5 border-b border-foreground/20 py-7">
                  <span className="pt-1 text-xs tracking-widest text-primary">{step.number}</span>
                  <div><h3 className="font-display text-2xl font-medium">{step.title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">{step.text}</p></div>
                </ScrollReveal>)}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="bg-[#242522] px-6 py-24 text-[#F3EEE3] md:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="max-w-3xl">
              <p className="section-kicker text-[#E56A39]">Selected campaign results</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">Performance, measured in outcomes.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">A snapshot of campaign performance across lead generation and event registration. Figures reflect the reporting periods shown.</p>
            </ScrollReveal>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <ScrollReveal className="border border-white/20 bg-white/[0.035] p-7 md:p-10">
                <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.22em] text-[#E56A39]">Campaign results</p><h3 className="mt-3 font-display text-3xl font-medium">MDM Traders</h3><p className="mt-2 text-xs text-white/50">Seminar registrations · 23 Oct – 14 Nov 2026</p></div><span className="border border-white/20 px-3 py-1 text-[9px] uppercase tracking-widest text-white/60">Meta Ads</span></div>
                <div className="mt-10 grid grid-cols-2 gap-7">
                  <div><p className="font-display text-5xl font-medium text-[#E56A39] md:text-6xl">612</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Completed registrations</p></div>
                  <div><p className="font-display text-5xl font-medium md:text-6xl">R7.30</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Cost per registration</p></div>
                  <div><p className="font-display text-2xl font-medium">R4,469.24</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Ad spend</p></div>
                  <div><p className="font-display text-2xl font-medium">85,703</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Reach</p></div>
                </div>
                
              </ScrollReveal>
              <ScrollReveal className="border border-white/20 bg-white/[0.035] p-7 md:p-10">
                <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.22em] text-[#E56A39]">Campaign results</p><h3 className="mt-3 font-display text-3xl font-medium">Ruben</h3><p className="mt-2 text-xs text-white/50">Lead generation · 14-day campaign</p></div><span className="border border-white/20 px-3 py-1 text-[9px] uppercase tracking-widest text-white/60">Meta Ads</span></div>
                <div className="mt-10 grid grid-cols-2 gap-7">
                  <div><p className="font-display text-5xl font-medium text-[#E56A39] md:text-6xl">53</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Leads generated</p></div>
                  <div><p className="font-display text-5xl font-medium md:text-6xl">R12.87</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Cost per lead</p></div>
                  <div className="col-span-2"><p className="font-display text-2xl font-medium">R682.15</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Total ad spend</p></div>
                </div>
                
              </ScrollReveal>
            </div>
            <p className="mt-8 text-[10px] leading-5 text-white/40">Results are specific to these campaigns and are not a guarantee of future performance. Outcomes vary by offer, audience, creative, budget and sales follow-up.</p>
          </div>
        </section>

        <section id="reviews" className="bg-[#E8DFD0] px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
            <ScrollReveal><p className="section-kicker">Client perspectives</p><h2 className="mt-4 font-display text-4xl leading-tight font-medium md:text-5xl">Good work should speak for itself.</h2></ScrollReveal>
            <ScrollReveal className="border-l-2 border-primary pl-7">
              <p className="font-display text-2xl leading-relaxed">Client testimonials are coming soon.</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">As we gather feedback from the businesses we work with, this is where their experiences and perspectives will live.</p>
            </ScrollReveal>
          </div>
        </section>

        <section id="founder" className="bg-background px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[minmax(240px,360px)_1fr] md:gap-24">
            <ScrollReveal className="relative mx-auto w-full max-w-[360px]">
              <div className="overflow-hidden bg-muted"><img src={founderAsset} alt="Jayden Fourie, Founder of Acquisition Labs" className="aspect-[892/1307] h-auto w-full object-cover" /></div>
              <div className="absolute -bottom-4 -right-4 bg-[#242522] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white">Founder</div>
            </ScrollReveal>
            <ScrollReveal>
              <p className="section-kicker">Meet the founder</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">Most agencies sell you traffic. We sell you conversations.</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">Traffic is easy to buy and easy to waste. A conversation with someone who wants what you sell is worth more than a thousand impressions, and our entire job is to manufacture them for you.</p>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">We build every funnel ourselves: the ads that stop the scroll, the page that earns the click, the follow up that books the call. When we work together, you'll never open an ads dashboard again. You'll just answer your phone.</p>
            </ScrollReveal>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[#242522] px-6 py-24 text-[#F3EEE3] md:py-32">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-20 md:block" style={{ backgroundImage: "url('/images/architecture-02.jpg')" }} />
          <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <ScrollReveal>
              <p className="section-kicker text-[#E56A39]">Start a conversation</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">Let's build your next stage of growth.</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-white/60">Tell us about your business, your goals and where customer acquisition could work harder. We'll take it from there.</p>
              <div className="mt-9 flex items-center gap-3 text-xs uppercase tracking-widest text-white/60"><Check className="h-4 w-4 text-primary" /> A focused, no-pressure conversation</div>
            </ScrollReveal>
            <ScrollReveal className="bg-[#F3EEE3] p-6 text-foreground sm:p-9 md:p-10">
              <ConsultationForm />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#171716] px-6 py-10 text-white/55">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="flex flex-col font-display leading-none text-white"><span className="text-sm font-bold tracking-[0.19em]">ACQUISITION</span><span className="mt-1 text-center text-[9px] tracking-[0.58em]">LABS</span><span className="mx-auto mt-1.5 h-0.5 w-9 bg-primary" /></a>
          <p className="text-[10px] uppercase tracking-[0.15em]">© {new Date().getFullYear()} Acquisition Labs. All rights reserved.</p>
          <a href="mailto:hello.acquisitionlabs@gmail.com" className="text-xs transition hover:text-white">hello.acquisitionlabs@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
