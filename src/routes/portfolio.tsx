import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { MapPin } from "lucide-react";
import proj05Video from "@/assets/portfolio-05.mp4.asset.json";
import proj05Poster from "@/assets/portfolio-05-poster.jpg.asset.json";
import proj06Video from "@/assets/portfolio-06.mp4.asset.json";
import proj06Poster from "@/assets/portfolio-06-poster.jpg.asset.json";
import interiorVideo from "@/assets/interior-design.mp4.asset.json";
import woodworksVideo from "@/assets/woodworks-finishing.mp4.asset.json";
import arch3d from "@/assets/architectural-3d.png.asset.json";
import siteDevVideo from "@/assets/site-development.mp4.asset.json";
import siteDevPoster from "@/assets/site-development-poster.jpg.asset.json";
import sanitaryVideo from "@/assets/sanitaryware.mp4.asset.json";
import sanitaryPoster from "@/assets/sanitaryware-poster.jpg.asset.json";
import equipmentVideo from "@/assets/equipment-supply.mp4.asset.json";
import equipmentPoster from "@/assets/equipment-supply-poster.jpg.asset.json";
import plumbingVideo from "@/assets/plumbing-fixtures.mp4.asset.json";
import plumbingPoster from "@/assets/plumbing-fixtures-poster.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Parko Engineering Limited" },
      {
        name: "description",
        content: "Selected commercial, residential and infrastructure projects delivered by Parko Engineering.",
      },
      { property: "og:title", content: "Portfolio — Parko Engineering" },
      { property: "og:description", content: "A showcase of completed engineering projects across Ghana." },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS: Array<{
  name: string;
  location: string;
  sector: string;
  img: string;
  video?: string;
  tag: string;
  year: string;
}> = [
  { name: "Interior Design Showcase", location: "Accra", sector: "Interior Design", img: arch3d.url, video: interiorVideo.url, tag: "interior", year: "2025" },
  { name: "Woodworks & Finishing", location: "Accra", sector: "Woodworks & Finishing", img: arch3d.url, video: woodworksVideo.url, tag: "woodworks", year: "2025" },
  { name: "3D Architectural Visualization", location: "East Legon", sector: "3D Architectural", img: arch3d.url, tag: "architectural", year: "2025" },
  { name: "Site Development Works", location: "Accra", sector: "Site Works", img: siteDevPoster.url, video: siteDevVideo.url, tag: "sitework", year: "2025" },
  { name: "Sanitary Ware Installation", location: "Accra", sector: "Fit-Out", img: sanitaryPoster.url, video: sanitaryVideo.url, tag: "fitout", year: "2025" },
  { name: "Construction Equipment Supply", location: "Accra", sector: "Equipment", img: equipmentPoster.url, video: equipmentVideo.url, tag: "equipment", year: "2025" },
  { name: "Plumbing Fixtures & Fittings", location: "Accra", sector: "Fit-Out", img: plumbingPoster.url, video: plumbingVideo.url, tag: "fitout", year: "2025" },
  { name: "Commercial Build Progress", location: "Accra", sector: "Commercial", img: proj05Poster.url, video: proj05Video.url, tag: "commercial", year: "2025" },
  { name: "Residential Build Progress", location: "Accra", sector: "Residential", img: proj06Poster.url, video: proj06Video.url, tag: "residential", year: "2025" },
  
];

function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const filters = [
    { id: "all", label: "All" },
    { id: "interior", label: "Interior Design" },
    { id: "woodworks", label: "Woodworks" },
    { id: "architectural", label: "3D Architectural" },
    { id: "sitework", label: "Site Works" },
    { id: "fitout", label: "Fit-Out" },
    { id: "equipment", label: "Equipment" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
  ];
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="PORTFOLIO"
        title="Projects That\nStand The Test Of Time"
        subtitle="A selection of completed work across commercial, residential and civil infrastructure."
      />

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((p) => (
              <article
                key={p.name + p.location}
                className="group relative overflow-hidden rounded-md bg-card border border-border hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {p.video ? (
                    <video
                      src={p.video}
                      poster={p.img}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold tracking-[0.18em] px-2.5 py-1 rounded-sm">
                    {p.sector.toUpperCase()}
                  </div>
                  <div className="absolute top-3 right-3 bg-background/90 text-foreground text-[10px] font-bold tracking-wider px-2 py-1 rounded-sm">
                    {p.year}
                  </div>
                </div>
                <div className="p-5 border-t border-border">
                  <h2 className="font-display font-bold text-lg uppercase tracking-tight">{p.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
