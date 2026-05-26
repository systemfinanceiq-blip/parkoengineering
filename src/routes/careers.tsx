import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Briefcase, ArrowRight, Users, Trophy, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Parko Engineering Limited" },
      {
        name: "description",
        content: "Join Parko Engineering — open roles for engineers, site supervisors and heavy plant operators.",
      },
      { property: "og:title", content: "Careers — Parko Engineering" },
      { property: "og:description", content: "Build your career with one of Ghana's leading engineering firms." },
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  { title: "Site Supervisor", type: "Full-time", location: "Accra" },
  { title: "Structural Engineer", type: "Full-time", location: "Accra" },
  { title: "Architectural Draftsperson", type: "Full-time", location: "Accra" },
  { title: "Land Surveyor", type: "Contract", location: "Kumasi" },
  { title: "Crane Operator", type: "Full-time", location: "Tema" },
  { title: "Tipper Driver", type: "Full-time", location: "Multiple" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="CAREERS"
        title="Build Your Career\nWith Parko"
        subtitle="Join a team that values discipline, craftsmanship and the people who make engineering excellence possible."
      />

      <section className="py-20">
        <div className="container-wide grid md:grid-cols-3 gap-5">
          {[
            { icon: Users, title: "People First", body: "We invest in continuous training and pair junior engineers with senior mentors on every project." },
            { icon: Trophy, title: "Best-In-Class Sites", body: "Modern equipment, strict HSE, and projects you'll be proud to have on your CV." },
            { icon: GraduationCap, title: "Grow With Us", body: "Clear progression paths from apprentice to project lead, supported by certified training." },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-md p-7 hover:border-accent transition-colors">
              <div className="grid h-12 w-12 place-items-center bg-primary text-primary-foreground rounded-sm">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold uppercase text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-wide">
          <p className="accent-line text-xs font-bold tracking-[0.22em] text-primary">OPEN POSITIONS</p>
          <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-4xl">Current Openings</h2>

          <div className="mt-10 divide-y divide-border bg-card border border-border rounded-md overflow-hidden">
            {ROLES.map((r) => (
              <div
                key={r.title}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 md:p-6 hover:bg-surface transition-colors"
              >
                <div>
                  <h3 className="font-display font-bold text-lg uppercase">{r.title}</h3>
                  <div className="mt-1.5 flex flex-wrap gap-4 text-xs text-muted-foreground font-semibold tracking-wider">
                    <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {r.type.toUpperCase()}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {r.location.toUpperCase()}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold tracking-wider rounded-sm hover:bg-primary-deep transition-colors self-start md:self-auto"
                >
                  APPLY NOW <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
