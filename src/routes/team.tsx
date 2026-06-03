import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Linkedin, Mail, Phone } from "lucide-react";
import asiedu from "@/assets/asiedu-ankomah-samuel.jpeg.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Parko P. Engineering Ltd." },
      {
        name: "description",
        content:
          "Meet the engineers, supervisors and project managers behind Parko Engineering.",
      },
      { property: "og:title", content: "Our Team — Parko Engineering" },
      {
        property: "og:description",
        content: "The people delivering structural excellence across Ghana.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
};

const TEAM: Member[] = [
  {
    name: "Asiedu Ankomah Samuel",
    role: "Site Supervisor",
    bio: "Site Supervisor at Parko P. Engineering Ltd., overseeing day-to-day construction operations, quality control and on-site coordination across active project sites in Accra.",
    photo: asiedu.url,
    email: "parkopengineering@gmail.com",
    phone: "+233593992430",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

function TeamPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="OUR TEAM"
        title={"The People Behind\nEvery Build"}
        subtitle="Engineers, supervisors and project managers committed to delivering precision on every site."
      />

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-md bg-card border border-border hover:shadow-2xl transition-all spotlight-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center bg-primary text-primary-foreground">
                      <span className="font-display font-black text-6xl tracking-tight opacity-90">
                        {initials(m.name)}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold tracking-[0.18em] px-2.5 py-1 rounded-sm">
                    {m.role.toUpperCase()}
                  </div>
                </div>
                <div className="p-5 border-t border-border">
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {m.bio}
                  </p>
                  {(m.email || m.linkedin || m.phone) && (
                    <div className="mt-4 flex gap-2">
                      {m.email && (
                        <a
                          href={`mailto:${m.email}`}
                          aria-label={`Email ${m.name}`}
                          className="grid h-9 w-9 place-items-center rounded-sm border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                      {m.phone && (
                        <a
                          href={`tel:${m.phone}`}
                          aria-label={`Call ${m.name}`}
                          className="grid h-9 w-9 place-items-center rounded-sm border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                      )}
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} on LinkedIn`}
                          className="grid h-9 w-9 place-items-center rounded-sm border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground text-center">
            Want to be featured here? Share staff photos and bios and we'll add them to the team page.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
