import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  HardHat,
  Ruler,
  Truck,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Upload,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-construction.jpg";
import projCommercial from "@/assets/project-commercial.jpg";
import projResidential from "@/assets/project-residential.jpg";
import projInfra from "@/assets/project-infrastructure.jpg";
import projIndustrial from "@/assets/project-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parko Engineering — Engineering Legacies. Building Reality." },
      {
        name: "description",
        content:
          "Premier construction and engineering firm in Ghana delivering commercial, residential, and infrastructure projects on time and within budget.",
      },
      { property: "og:title", content: "Parko Engineering — Engineering Legacies. Building Reality." },
      {
        property: "og:description",
        content:
          "Over 20 years of structural excellence in commercial, residential, and civil infrastructure development.",
      },
    ],
  }),
  component: HomePage,
});

const SPECIALIZATIONS = [
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Office complexes, retail centers and mixed-use towers built to last with precision-engineered structural systems.",
  },
  {
    icon: HardHat,
    title: "Residential Developments",
    desc: "Modern housing estates and high-end residential builds delivered with craftsmanship and disciplined project control.",
  },
  {
    icon: Ruler,
    title: "Civil Infrastructure",
    desc: "Roads, bridges, drainage and earthworks engineered to government and international structural codes.",
  },
  {
    icon: Truck,
    title: "Project Management",
    desc: "End-to-end management — from architectural drawings and land surveys to crane operations and final handover.",
  },
];

const PROJECTS = [
  { name: "Cedi Tower", location: "Accra, Ghana", sector: "Commercial", img: projCommercial, tag: "commercial" },
  { name: "Greenfield Estates", location: "Tema", sector: "Residential", img: projResidential, tag: "residential" },
  { name: "Volta Bridge Expansion", location: "Eastern Region", sector: "Infrastructure", img: projInfra, tag: "infrastructure" },
  { name: "Northern Logistics Hub", location: "Kumasi", sector: "Commercial", img: projIndustrial, tag: "commercial" },
  { name: "Ridgeview Residences", location: "East Legon", sector: "Residential", img: projResidential, tag: "residential" },
  { name: "Coastal Highway Phase II", location: "Cape Coast", sector: "Infrastructure", img: projInfra, tag: "infrastructure" },
];

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "0", label: "Safety Incidents" },
  { value: "20+", label: "Years of Excellence" },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <Specializations />
      <Portfolio />
      <WhyChooseUs />
      <ContactSection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Modern construction site at dusk with tower crane"
          className="h-full w-full object-cover opacity-45"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container-wide relative grid lg:grid-cols-12 gap-10 py-24 md:py-32 lg:py-40">
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-accent">
            <span className="h-px w-10 bg-accent" /> PARKO ENGINEERING LIMITED
          </div>
          <h1 className="mt-5 font-display font-black uppercase leading-[0.95] text-5xl md:text-6xl lg:text-7xl">
            Engineering<br />
            Legacies.<br />
            <span className="text-accent">Building Reality.</span>
          </h1>
          <p className="mt-7 text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
            Delivering world-class commercial, industrial, and infrastructure development projects
            on time and within budget.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-bold tracking-wide rounded-sm hover:brightness-95 transition-all shadow-lg"
            >
              REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 px-6 py-3.5 text-sm font-bold tracking-wide rounded-sm hover:bg-primary-foreground/10 transition-all"
            >
              EXPLORE PORTFOLIO
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative lg:mt-8 reveal reveal-delay-2">
          <div className="relative ml-auto max-w-sm bg-background text-foreground p-7 rounded-md shadow-2xl border-l-4 border-accent">
            <Award className="h-8 w-8 text-accent" />
            <p className="mt-4 font-display font-extrabold text-3xl leading-tight">
              Over <span className="text-primary">20 Years</span> of Structural Excellence
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              A trusted name in Ghanaian construction, certified and committed to international
              safety standards.
            </p>
            <div className="mt-5 pt-5 border-t border-border grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-display font-bold text-2xl text-primary">150+</p>
                <p className="text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-primary">98%</p>
                <p className="text-muted-foreground">On-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20 blueprint-grid" aria-hidden />
    </section>
  );
}

function TrustStrip() {
  const partners = [
    "GHANA INSTITUTE OF ENGINEERS",
    "ABCECG",
    "ISO 9001:2015",
    "OSHA COMPLIANT",
    "MIN. OF WORKS & HOUSING",
    "PPA REGISTERED",
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-wide py-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
        {partners.map((p) => (
          <div
            key={p}
            className="text-center text-[11px] font-bold tracking-[0.18em] text-muted-foreground/80"
          >
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}

function Specializations() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="accent-line text-xs font-bold tracking-[0.22em] text-primary">
            WHAT WE DO
          </p>
          <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-5xl text-foreground leading-tight">
            Our Specializations
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Four core engineering disciplines, executed by a single accountable team — from blueprint
            through final inspection.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALIZATIONS.map((s, i) => (
            <Link
              to="/services"
              key={s.title}
              className={`group relative bg-card border border-border rounded-md p-7 hover:border-accent hover:-translate-y-1 hover:shadow-xl transition-all duration-300 reveal reveal-delay-${i + 1}`}
            >
              <div className="grid h-12 w-12 place-items-center bg-primary text-primary-foreground rounded-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg uppercase tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-primary group-hover:text-accent transition-colors">
                LEARN MORE
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<string>("all");
  const filters = [
    { id: "all", label: "All" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "infrastructure", label: "Infrastructure" },
  ];
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section id="portfolio" className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="accent-line text-xs font-bold tracking-[0.22em] text-primary">PORTFOLIO</p>
            <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-5xl text-foreground leading-tight">
              Featured Work
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 text-xs font-bold tracking-wider rounded-sm border transition-all ${
                  filter === f.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary"
                }`}
              >
                {f.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => (
            <article
              key={p.name + p.location}
              className="group relative overflow-hidden rounded-md bg-card border border-border hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold tracking-[0.18em] px-2.5 py-1 rounded-sm">
                  {p.sector.toUpperCase()}
                </div>
              </div>
              <div className="p-5 border-t border-border">
                <h3 className="font-display font-bold text-lg uppercase tracking-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 blueprint-grid pointer-events-none" />
      <div className="container-wide relative grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-accent">
            <span className="inline-block h-px w-10 bg-accent align-middle mr-3" />
            WHY PARKO
          </p>
          <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-5xl leading-tight">
            Rigorous Standards.<br />Precision Engineering.
          </h2>
          <p className="mt-5 text-primary-foreground/85 leading-relaxed">
            Every Parko project begins with rigorous safety planning and sustainable building
            practices. We combine modern architectural drafting, certified site supervision, and
            heavy plant operation under one roof — giving clients a single accountable team from
            land survey to handover.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Certified ISO 9001:2015 quality management",
              "Zero-incident HSE record across all active sites",
              "In-house architects, surveyors and heavy plant",
              "Transparent reporting with milestone-based delivery",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-px bg-primary-foreground/15 rounded-md overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="bg-primary p-8 md:p-10 text-center">
              <p className="font-display font-black text-5xl md:text-6xl text-accent leading-none">
                {s.value}
              </p>
              <p className="mt-3 text-xs font-bold tracking-[0.18em] text-primary-foreground/80 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="accent-line text-xs font-bold tracking-[0.22em] text-primary">
            START YOUR PROJECT
          </p>
          <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-5xl text-foreground leading-tight">
            Project Inquiries
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ContactInfo />
            <div className="aspect-[4/3] rounded-md overflow-hidden border border-border bg-muted relative">
              <iframe
                title="Parko headquarters map"
                className="absolute inset-0 h-full w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.25%2C5.55%2C-0.15%2C5.65&layer=mapnik"
                loading="lazy"
              />
            </div>
          </div>

          <form
            className="lg:col-span-3 bg-card border border-border rounded-md p-7 md:p-10 shadow-lg space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — your inquiry has been received. Our team will be in touch within 24 hours.");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="John Doe" required />
              <Field label="Company Name" name="company" placeholder="Your company" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+233 ..." />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
                  PROJECT TYPE
                </label>
                <select
                  name="type"
                  className="w-full h-11 px-3 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                >
                  <option>Commercial</option>
                  <option>Residential</option>
                  <option>Infrastructure</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
                  ESTIMATED BUDGET
                </label>
                <select
                  name="budget"
                  className="w-full h-11 px-3 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                >
                  <option>Under $100K</option>
                  <option>$100K – $500K</option>
                  <option>$500K – $2M</option>
                  <option>$2M+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
                PROJECT BRIEF
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about scope, location, and timeline..."
                className="w-full px-3 py-2.5 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <div>
              <label className="flex items-center justify-center gap-2 h-11 border border-dashed border-input rounded-sm text-sm text-muted-foreground hover:border-accent cursor-pointer transition-colors">
                <Upload className="h-4 w-4" />
                Upload blueprint or project brief (optional)
                <input type="file" className="hidden" />
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-bold tracking-wide py-3.5 rounded-sm hover:brightness-95 transition-all"
            >
              SUBMIT INQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ContactInfo() {
  const rows = [
    { icon: Phone, label: "PHONE", value: "0247 253 905 / 0572 011 270" },
    { icon: Mail, label: "EMAIL", value: "info@parkoengineering.com" },
    { icon: MapPin, label: "HEADQUARTERS", value: "Accra, Ghana" },
    { icon: Clock, label: "OPERATING HOURS", value: "Mon – Sat · 7:00 AM – 6:00 PM" },
    { icon: ShieldCheck, label: "REGISTRATION", value: "Licensed contractor · Ghana" },
  ];
  return (
    <div className="bg-primary text-primary-foreground rounded-md p-7 md:p-8">
      <h3 className="font-display font-bold text-xl uppercase">Get In Touch</h3>
      <p className="mt-2 text-sm text-primary-foreground/75">
        Speak directly with our project consultants.
      </p>
      <ul className="mt-6 space-y-5">
        {rows.map((r) => (
          <li key={r.label} className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center bg-accent text-accent-foreground rounded-sm shrink-0">
              <r.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] text-accent">{r.label}</p>
              <p className="mt-1 text-sm text-primary-foreground/90">{r.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
        {label.toUpperCase()}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full h-11 px-3 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
