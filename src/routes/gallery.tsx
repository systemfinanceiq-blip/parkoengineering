import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Play, X } from "lucide-react";
import projCommercial from "@/assets/project-commercial.jpg";
import projResidential from "@/assets/project-residential.jpg";
import projInfra from "@/assets/project-infrastructure.jpg";
import projIndustrial from "@/assets/project-industrial.jpg";
import site1 from "@/assets/parko-site-1.jpeg.asset.json";
import site2 from "@/assets/parko-site-2.jpeg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Parko P. Engineering Ltd." },
      {
        name: "description",
        content:
          "Photos and short videos from Parko Engineering project sites across Ghana.",
      },
      { property: "og:title", content: "Gallery — Parko Engineering" },
      {
        property: "og:description",
        content: "On-site moments captured from our construction projects.",
      },
    ],
  }),
  component: GalleryPage,
});

type Item =
  | { type: "image"; src: string; caption: string }
  | { type: "video"; src: string; poster: string; caption: string };

// To add new media: drop images into src/assets/ (or upload via chat) and add
// an entry below. For videos, use an mp4/webm URL or an uploaded asset.
const ITEMS: Item[] = [
  { type: "image", src: site1.url, caption: "Site supervision in progress" },
  { type: "image", src: site2.url, caption: "Structural works on-site" },
  { type: "image", src: projCommercial, caption: "Commercial build — Accra" },
  { type: "image", src: projResidential, caption: "Residential development" },
  { type: "image", src: projInfra, caption: "Civil infrastructure works" },
  { type: "image", src: projIndustrial, caption: "Industrial project handover" },
];

function GalleryPage() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="GALLERY"
        title={"Moments From\nOur Project Sites"}
        subtitle="A growing collection of photos and short videos captured across our active and completed projects."
      />

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ITEMS.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(item)}
                className="group relative aspect-square overflow-hidden rounded-md bg-muted border border-border hover:shadow-2xl transition-all spotlight-card text-left"
              >
                <img
                  src={item.type === "image" ? item.src : item.poster}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 grid place-items-center bg-black/30">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg">
                      <Play className="h-6 w-6 ml-0.5" />
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-semibold text-white tracking-wide">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-sm bg-background/10 text-white hover:bg-background/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "image" ? (
              <img
                src={active.src}
                alt={active.caption}
                className="w-full h-full max-h-[85vh] object-contain"
              />
            ) : (
              <video
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                className="w-full h-full max-h-[85vh] object-contain bg-black"
              />
            )}
            <p className="mt-3 text-center text-sm text-white/80">{active.caption}</p>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
