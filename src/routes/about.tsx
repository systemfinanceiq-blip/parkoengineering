import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CheckCircle2, Award, Target, Eye } from "lucide-react";
import aboutAsset from "@/assets/parko-site-1.jpeg.asset.json";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Parko Engineering Limited" },
      {
        name: "description",
        content:
          "Learn about Parko Engineering Limited — a Ghanaian construction and engineering firm delivering structural excellence.",
      },
      { property: "og:title", content: "About Us — Parko Engineering" },
      {
        property: "og:description",
        content: "Two decades of structural engineering excellence across Ghana.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="ABOUT US"
        title="Built On Discipline.\nDelivered With Pride."
        subtitle="Parko Engineering Limited brings disciplined execution and precision engineering to commercial, residential and civil projects across Ghana."
      />

      <section className="py-20 md:py-24">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutAsset.url}
              alt="Parko Engineering site supervisor on a live construction site"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground px-6 py-5 rounded-md shadow-xl">
              <p className="font-display font-black text-4xl leading-none">5+</p>
              <p className="text-xs font-bold tracking-[0.18em] mt-2">YEARS DELIVERING</p>
            </div>
          </div>

          <div>
            <p className="accent-line text-xs font-bold tracking-[0.22em] text-primary">OUR STORY</p>
            <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-4xl leading-tight">
              Engineering That Outlasts Generations
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded with a single mandate — to bring world-class engineering discipline to every
              site we manage — Parko has grown into one of Ghana's most trusted full-service
              construction firms. Our work spans commercial high-rises, residential estates, civil
              infrastructure, and heavy plant operations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We supervise our own sites, draft our own architecture, survey our own land, and
              operate our own crane, backhoe and tipper fleet. That vertical integration is how we
              deliver on time, on spec, and on budget — every time.
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {[
                "Licensed contractor in Ghana",
                "ISO 9001:2015 certified",
                "Zero-incident HSE record",
                "Member, GhIE & ABCECG",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="container-wide">
          <p className="accent-line text-xs font-bold tracking-[0.22em] text-primary text-center md:text-left">
            WHAT DRIVES US
          </p>
          <h2 className="mt-3 font-display font-black uppercase text-3xl md:text-4xl text-center md:text-left">
            Mission · Vision · Values
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: "Our Mission",
                body:
                  "To partner with clients in bringing their construction visions to life through high-quality execution, meticulous attention to detail, and dependable service. We uphold the highest standards of professionalism while fostering a culture of dedication and enthusiasm within our team to ensure every project is delivered on time, to specification, and with lasting value.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                body:
                  "To be the most trusted and preferred partner in the construction industry — recognized for integrity, excellence, and lasting relationships. We are committed to upholding the highest standards of professionalism, ethics, and respect in every interaction with our clients, suppliers, subcontractors, and colleagues, building a reputation that makes us the first choice for every project.",
              },
              {
                icon: Award,
                title: "Our Values",
                body:
                  "Integrity. Discipline. Accountability. Precision. Sustainability. Safety above all else, always — in every interaction, on every site.",
              },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-md p-8 hover:border-accent transition-colors">
              <div className="grid h-12 w-12 place-items-center bg-primary text-primary-foreground rounded-sm">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl uppercase">{c.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
