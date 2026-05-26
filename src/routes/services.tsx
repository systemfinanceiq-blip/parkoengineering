import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import {
  HardHat,
  Pencil,
  ClipboardList,
  Map as MapIcon,
  Truck,
  Construction,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Parko Engineering Limited" },
      {
        name: "description",
        content:
          "Construction site supervision, architectural drawings, project management, land surveys, backhoe operating, tipper driving and crane operating.",
      },
      { property: "og:title", content: "Services — Parko Engineering" },
      {
        property: "og:description",
        content:
          "Full-spectrum engineering services from architectural drafting to heavy plant operations.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: HardHat, title: "Construction Site Supervision", desc: "Daily on-site oversight, quality control, and milestone-based reporting." },
  { icon: Pencil, title: "Architectural Drawings", desc: "Concept, working and structural drawings produced in-house by certified architects." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end planning, scheduling, cost control and stakeholder coordination." },
  { icon: Map, title: "Land Surveys", desc: "Topographic, cadastral and engineering surveys executed with modern equipment." },
  { icon: Construction, title: "Backhoe Operating", desc: "Certified operators and well-maintained excavator fleet for site preparation." },
  { icon: Truck, title: "Tipper Driving", desc: "Reliable haulage of aggregates, spoil and bulk materials to and from site." },
  { icon: Construction, title: "Crane Operating", desc: "Mobile and tower crane operations executed under strict lift-plan protocols." },
];

const MATERIALS = [
  "Sand", "Gravels", "Quarry", "Laterite",
  "Skimming Powder", "Mesh tape", "Wall Angle", "Omege",
  "Channel", "Tapping & Plug Screw", "Cement Board", "Plaster Board",
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="WHAT WE DO"
        title="Full-Spectrum\nEngineering Services"
        subtitle="From the first architectural sketch to final crane lift — a single team, fully accountable."
      />

      <section className="py-20 md:py-24">
        <div className="container-wide">
          <p className="accent-line text-xs font-bold tracking-[0.22em] text-primary">WE SPECIALIZE IN</p>
          <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-4xl">Core Specializations</h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group bg-card border border-border rounded-md p-7 hover:border-accent hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="grid h-12 w-12 place-items-center bg-primary text-primary-foreground rounded-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold uppercase text-lg leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 blueprint-grid" />
        <div className="container-wide relative">
          <p className="text-xs font-bold tracking-[0.22em] text-accent">
            <span className="inline-block h-px w-10 bg-accent align-middle mr-3" />MATERIALS WE SUPPLY
          </p>
          <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-4xl">Materials</h2>
          <p className="mt-3 text-primary-foreground/75 max-w-xl">
            We stock and supply a wide range of construction materials directly to project sites
            across the country.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {MATERIALS.map((m) => (
              <div
                key={m}
                className="flex items-center gap-3 bg-primary-deep/40 border border-primary-foreground/15 px-4 py-3.5 rounded-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm font-semibold">{m}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-accent font-bold tracking-wider">AND MANY MORE...</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide text-center">
          <h2 className="font-display font-black uppercase text-3xl md:text-4xl">
            Ready to break ground?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Request a no-obligation quote and a detailed scope outline within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm hover:brightness-95"
          >
            REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
