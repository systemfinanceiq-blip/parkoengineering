import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Linkedin, Mail, Phone } from "lucide-react";
import asiedu from "@/assets/asiedu-ankomah-samuel.jpeg.asset.json";
import aliKofi from "@/assets/ali-kofi.jpeg.asset.json";
import kingsley from "@/assets/kingsley-asamoah.jpeg.asset.json";
import frederick from "@/assets/frederick-dwamena.jpeg.asset.json";
import alex from "@/assets/alex-ofori-obeng.jpeg.asset.json";
import bright from "@/assets/bright-kweku-nartey.jpeg.asset.json";

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
  {
    name: "Ali Kofi",
    role: "Mason Foreman",
    bio: "Mason Foreman at Parko P. Engineering Ltd., leading masonry crews and ensuring blockwork, finishes and structural detail are executed to specification across project sites.",
    photo: aliKofi.url,
    email: "parkopengineering@gmail.com",
    phone: "+233247253905",
  },
  {
    name: "Kingsley Asamoah",
    role: "Senior Welder",
    bio: "Senior Welder at Parko P. Engineering Ltd., handling structural steelwork, fabrication and on-site welding with a sharp eye for precision and safety.",
    photo: kingsley.url,
    email: "parkopengineering@gmail.com",
    phone: "+233247253905",
  },
  {
    name: "Frederick Dwamena",
    role: "Finance Manager",
    bio: "Finance Manager at Parko P. Engineering Ltd., overseeing budgeting, cost control and financial reporting to keep every project on solid commercial footing.",
    photo: frederick.url,
    email: "parkopengineering@gmail.com",
    phone: "+233247253905",
  },
  {
    name: "Alex Ofori Obeng",
    role: "IT Support",
    bio: "IT Support at Parko P. Engineering Ltd., maintaining the company's digital tools, devices and connectivity so site and office teams stay productive.",
    photo: alex.url,
    email: "parkopengineering@gmail.com",
    phone: "+233247253905",
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

        </div>
      </section>
    </SiteLayout>
  );
}
