import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Home,
  Building2,
  Hammer,
  ClipboardList,
  Ruler,
  Paintbrush,
  Award,
  ShieldCheck,
  Users,
  Package,
  Clock,
  Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-construction.jpg";
import engineerAsset from "@/assets/parko-site-2.jpeg.asset.json";
import projCommercial from "@/assets/project-commercial.jpg";
import projResidential from "@/assets/project-residential.jpg";
import projInfra from "@/assets/project-infrastructure.jpg";
import projIndustrial from "@/assets/project-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parko P. Engineering — Building Strong Foundations for the Future" },
      {
        name: "description",
        content:
          "Trusted residential & commercial construction experts delivering quality, safety, and on-time results across Ghana.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CTABanner />
    </SiteLayout>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Construction site at sunset with cranes and crew"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container-wide relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-accent">
            <span className="h-px w-10 bg-accent" /> PARKO P. ENGINEERING LTD.
          </p>
          <h1 className="mt-5 font-display font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
            Building Strong<br />
            Foundations <span className="text-accent">for the Future</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
            Trusted residential &amp; commercial construction experts delivering quality, safety,
            and on-time results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-bold tracking-wide rounded-md hover:brightness-95 transition-all shadow-lg"
            >
              Get a Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 text-sm font-bold tracking-wide rounded-md hover:bg-white/10 transition-all"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  { icon: Home, title: "Residential Construction", desc: "New home builds & custom." },
  { icon: Building2, title: "Commercial Buildings", desc: "Office, retail & industrial projects." },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Home & commercial renovations." },
  { icon: ClipboardList, title: "Project Management", desc: "Planning & supervision." },
  { icon: Ruler, title: "Structural Design", desc: "Engineering & design solutions." },
  { icon: Paintbrush, title: "Interior Finishing", desc: "Custom interior fit-outs." },
];

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl">
          Our Services
        </h2>
        <div className="mt-3 h-px w-full bg-white/10" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group rounded-lg border border-white/10 bg-card p-6 hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 text-accent">
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display font-bold text-white text-base leading-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-white/65">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
const WHY = [
  { icon: Award, title: "5+ Years of Experience" },
  { icon: ShieldCheck, title: "Licensed & Insured" },
  { icon: Users, title: "Skilled Team of Experts" },
  { icon: Package, title: "High-Quality Materials" },
  { icon: Clock, title: "On-Time Delivery" },
];

function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24" style={{ background: "oklch(0.94 0.008 250)" }}>
      <div className="container-wide">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl" style={{ color: "oklch(0.21 0.035 255)" }}>
          Why Choose Parko Engineering
        </h2>
        <div className="mt-3 h-px w-full" style={{ background: "oklch(0.85 0.01 250)" }} />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={engineerImg}
              alt="Lead engineer on site with blueprints"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {WHY.map((w) => (
              <li
                key={w.title}
                className="flex items-center gap-3 rounded-md bg-white px-5 py-4 border shadow-sm"
                style={{ borderColor: "oklch(0.88 0.01 250)" }}
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-md shrink-0 bg-accent/15 text-accent"
                >

                  <w.icon className="h-5 w-5" />
                </span>
                <span className="font-display font-bold text-sm" style={{ color: "oklch(0.21 0.035 255)" }}>
                  {w.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
const PROJECTS = [
  { name: "Modern Family Home", img: projResidential },
  { name: "Downtown Office Tower", img: projCommercial },
  { name: "Luxury Apartment Complex", img: projIndustrial },
  { name: "Retail Center Renovation", img: projInfra },
];

function Projects() {
  return (
    <section className="py-16 md:py-24 bg-surface-strong">
      <div className="container-wide">
        <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl">
          Our Projects
        </h2>
        <div className="mt-3 h-px w-full bg-white/10" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-lg border border-white/10"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <h3 className="absolute left-4 bottom-4 right-4 font-display font-bold text-white text-base leading-tight">
                {p.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white px-6 py-3 text-sm font-bold hover:bg-white/10 transition-all"
          >
            View All Projects <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  {
    name: "Sarah L.",
    role: "Custom Home Build",
    quote: "Parko Engineering exceeded our expectations. Fantastic work!",
  },
  {
    name: "James R.",
    role: "Office Renovation",
    quote: "Highly professional and always on schedule.",
  },
  {
    name: "Linda M.",
    role: "Apartment Complex",
    quote: "Top-notch quality and great communication.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={projCommercial} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="container-wide relative">
        <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl">
          Client Testimonials
        </h2>
        <div className="mt-3 h-px w-full bg-white/10" />

        <div className="mt-10 grid gap-5 md:grid-cols-3 max-w-4xl">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-lg border border-white/10 bg-card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-accent/40" />
              <figcaption className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground font-display font-bold">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <p className="font-display font-bold text-white text-sm">{t.name}</p>
                  <p className="text-[11px] tracking-wider text-accent uppercase">{t.role}</p>
                  <span className="block mt-1 h-0.5 w-8 bg-accent" />
                </span>
              </figcaption>
              <blockquote className="mt-4 text-sm text-white/80 italic leading-relaxed">
                "{t.quote}"
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-bold rounded-md hover:brightness-95 transition-all shadow-lg"
          >
            Request a Free Quote <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA BANNER ---------------- */
function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={projIndustrial} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>
      <div className="container-wide relative py-16 md:py-20 text-center">
        <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl">
          Planning a Construction Project?
        </h2>
        <p className="mt-3 text-white/80">
          Let Parko Engineering bring your vision to life.
        </p>
        <div className="mt-7 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-bold rounded-md hover:brightness-95 transition-all shadow-lg"
          >
            Request a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
