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
            <a href="#faqs" className="transition hover:text-white">FAQs</a>
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
        <section id="top" className="relative flex min-h-[760px] items-center overflow-hidden bg-[#171716] pt-28 text-[#F3EEE3] md:min-h-[850px]">
          <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "linear-gradient(rgba(243,238,227,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(243,238,227,.12) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
          <div className="absolute -right-40 top-12 h-[620px] w-[620px] rounded-full bg-[#D9541E]/15 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-32">
            <ScrollReveal className="max-w-3xl">
              <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/65">Customer acquisition • South Africa</p>
              <h1 className="font-display max-w-3xl text-5xl leading-[1.02] font-medium tracking-[-0.035em] sm:text-6xl md:text-7xl">Build a stronger pipeline. <span className="text-[#E56A39]">Scale with intent.</span></h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">We help professional businesses scale through strategic customer acquisition, lead generation and conversion funnels that build a stronger sales pipeline.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center rounded-full bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#bd4518]">Discuss your growth <ArrowUpRight className="ml-3 h-4 w-4" /></a>
                <a href="#results" className="inline-flex items-center rounded-full border border-white/35 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white/10">View campaign results</a>
              </div>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-white/50"><span>Meta advertising</span><span className="h-1 w-1 rounded-full bg-primary" /><span>Lead generation</span><span className="h-1 w-1 rounded-full bg-primary" /><span>Conversion systems</span></div>
            </ScrollReveal>
            <ScrollReveal className="relative mx-auto w-full max-w-xl" delay={1}>
              <div className="absolute -inset-8 rounded-full bg-[#D9541E]/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-sm sm:p-9">
                <div className="mb-8 flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#E56A39]">The acquisition system</p><p className="mt-2 font-display text-xl">From attention to opportunity</p></div><span className="rounded-full border border-white/15 px-3 py-1 text-[9px] uppercase tracking-widest text-white/55">01 — 04</span></div>
                <div className="space-y-3">
                  {[
                    {n:"01",t:"Reach",d:"Put your offer in front of the right audience"},
                    {n:"02",t:"Engage",d:"Turn attention into genuine interest"},
                    {n:"03",t:"Enquire",d:"Capture intent through a clear next step"},
                    {n:"04",t:"Pipeline",d:"Create opportunities for your team to follow up"},
                  ].map((step,i)=><div key={step.n} className="relative overflow-hidden rounded-xl border border-white/10 bg-[#F3EEE3]/[0.045] p-4">
                    <div className="absolute inset-y-0 left-0 bg-[#D9541E]/10" style={{width:(100-i*17)+"%"}} />
                    <div className="relative flex items-center gap-4"><span className="font-display text-sm text-[#E56A39]">{step.n}</span><div className="min-w-0 flex-1"><h3 className="font-display text-lg">{step.t}</h3><p className="mt-1 text-xs text-white/50">{step.d}</p></div><ArrowRight className="h-4 w-4 shrink-0 text-white/35" /></div>
                  </div>)}
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.18em] text-white/45"><span>Strategy-led</span><span>Performance-focused</span></div>
              </div>
            </ScrollReveal>
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
          <div className="absolute right-0 top-0 h-full w-[42%] bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/architecture-01.jpg?v=2')", filter: "grayscale(1)" }} />
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
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">Acquisition measured in outcomes.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">A closer look at the objectives, campaign activity and outcomes delivered for the businesses we work with.</p>
            </ScrollReveal>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <ScrollReveal className="flex flex-col border border-white/20 bg-white/[0.035] p-7 md:p-10">
                <div><p className="text-[10px] uppercase tracking-[0.22em] text-[#E56A39]">Webinar registration campaign</p><h3 className="mt-3 font-display text-3xl font-medium">MDM Traders</h3><p className="mt-2 text-xs text-white/50">Free forex education community</p></div>
                <div className="mt-9 grid grid-cols-2 gap-6 border-y border-white/10 py-7">
                  <div><p className="font-display text-5xl font-medium text-[#E56A39] md:text-6xl">577</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Registrations generated</p></div>
                  <div><p className="font-display text-3xl font-medium md:text-4xl">300</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Original target</p></div>
                </div>
                <div className="mt-7 flex-1 space-y-4 text-sm leading-7 text-white/65">
                  <p>The campaign aimed to generate 300 webinar registrations within 30 days. It delivered 577 registrations in under 30 days — almost double the original target.</p>
                  <p>Demand filled the available webinar capacity, so the campaign was paused. We continue working with MDM and are testing new campaign directions.</p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-5"><p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Campaign outcome</p><p className="mt-2 font-display text-xl text-[#E56A39]">577 registrations in less than 30 days</p></div>
              </ScrollReveal>
              <ScrollReveal className="flex flex-col border border-white/20 bg-white/[0.035] p-7 md:p-10">
                <div><p className="text-[10px] uppercase tracking-[0.22em] text-[#E56A39]">Lead generation campaign</p><h3 className="mt-3 font-display text-3xl font-medium">NexAgentAI</h3><p className="mt-2 text-xs text-white/50">Business automation solutions for SMEs</p></div>
                <div className="mt-9 grid grid-cols-2 gap-6 border-y border-white/10 py-7">
                  <div><p className="font-display text-5xl font-medium text-[#E56A39] md:text-6xl">53</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Leads generated</p></div>
                  <div><p className="font-display text-3xl font-medium md:text-4xl">7</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Appointments booked</p></div>
                  <div><p className="font-display text-2xl font-medium">R682.15</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Ad spend</p></div>
                  <div><p className="font-display text-2xl font-medium">R12.87</p><p className="mt-2 text-xs uppercase tracking-wider text-white/60">Cost per lead</p></div>
                </div>
                <div className="mt-7 flex-1 space-y-4 text-sm leading-7 text-white/65">
                  <p>NexAgentAI provides automation products and services to small and medium-sized businesses. The 14-day campaign generated 53 leads, which were handed to the client's sales team for follow-up.</p>
                  <p>The sales team turned those enquiries into seven booked appointments. At this level of ad spend, one converted customer could have covered the advertising cost, with the potential for recurring revenue. This is an illustration of the opportunity, not a claim that a sale was made.</p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-5"><p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Campaign outcome</p><p className="mt-2 font-display text-xl text-[#E56A39]">53 leads · 7 appointments booked</p></div>
              </ScrollReveal>
            </div>
            <p className="mt-8 text-[10px] leading-5 text-white/40">Results are specific to the campaigns described. Registrations and enquiries are not represented as paid attendance, signed customers or revenue. Results are not a guarantee of future performance.</p>
          </div>
        </section>

        <section id="reviews" className="bg-[#E8DFD0] px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <ScrollReveal><p className="section-kicker">Client perspective</p><h2 className="mt-4 font-display text-4xl leading-tight font-medium md:text-5xl">Built on clear communication and considered execution.</h2></ScrollReveal>
            <ScrollReveal className="border-l-2 border-primary pl-7">
              <p className="font-display text-2xl leading-relaxed">“Jayden handled our social media ads and did a clean job. Clear communication, solid targeting and no drama. I’d use him again without hesitation.”</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Ruben · RD Investment Holdings / NexAgent</p>
            </ScrollReveal>
          </div>
        </section>

        <section id="faqs" className="bg-background px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <ScrollReveal><p className="section-kicker">Frequently asked questions</p><h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">A few things worth knowing.</h2><p className="mt-6 max-w-sm text-base leading-8 text-muted-foreground">Clear expectations make for better partnerships. Here are answers to the questions we hear most often.</p></ScrollReveal>
            <div className="border-t border-foreground/20">
              {[
                {q:"How much do I need to spend on ads?",a:"It depends on your area, your industry and how many enquiries you can handle. Most campaigns start at around R50–R100 per day. We’ll recommend a budget that fits your goals before anything goes live. Your ad budget is paid directly to Meta (Facebook and Instagram) and is separate from our fee, so you always know where your money goes."},
                {q:"How long before I see results?",a:"Campaigns can begin generating enquiries within the first few days, but early performance can fluctuate. The first few weeks are a learning and testing period as we assess which creative, audiences and messages produce the strongest response. We evaluate performance over time rather than judging a campaign on a handful of days."},
                {q:"Can you guarantee results?",a:"No — and be cautious of anyone who does. Results depend on your offer, market, budget and how quickly enquiries are followed up. What we commit to is a clear strategy, transparent reporting and ongoing optimisation focused on improving enquiry cost and quality."},
                {q:"Will the leads actually be good quality?",a:"Low-cost leads only matter if they have a genuine chance of becoming customers. We build campaigns around the right audience and offer, and can use qualifying questions to filter enquiries. We also encourage tracking what happens after the enquiry: who was contacted, who booked and who became a customer. Prompt follow-up from your team makes a real difference."},
                {q:"Who owns my ad account?",a:"You do. Your Facebook Page, ad account and campaign data remain yours. We use partner access to manage campaigns, so if we stop working together, your assets and account stay with you."}
              ].map((faq)=><details key={faq.q} className="group border-b border-foreground/20 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-medium marker:hidden">{faq.q}<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-primary transition group-open:rotate-45">+</span></summary>
                <p className="max-w-2xl pt-4 pr-10 text-sm leading-7 text-muted-foreground">{faq.a}</p>
              </details>)}
            </div>
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
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-20 md:block" style={{ backgroundImage: "url('/images/architecture-02.jpg?v=2')", filter: "grayscale(1)" }} />
          <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <ScrollReveal>
              <p className="section-kicker text-[#E56A39]">Start a conversation</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium md:text-6xl">Let's build your next stage of growth.</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-white/60">Tell us about your business. We’ll review your goals and get in touch to discuss whether we’re a good fit.</p>
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
