import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Play, X } from "lucide-react";
import site1 from "@/assets/parko-site-1.jpeg.asset.json";
import site2 from "@/assets/parko-site-2.jpeg.asset.json";
import team1 from "@/assets/team-site-1.jpeg.asset.json";
import team2 from "@/assets/team-site-2.jpeg.asset.json";
import clip1 from "@/assets/site-clip-1.mp4.asset.json";
import clip2 from "@/assets/site-clip-2.mp4.asset.json";
import clip3 from "@/assets/site-clip-3.mp4.asset.json";
import clip4 from "@/assets/site-clip-4.mp4.asset.json";
import clip5 from "@/assets/site-clip-5.mp4.asset.json";
import clip6 from "@/assets/site-clip-6.mp4.asset.json";
import poster1 from "@/assets/poster-1.jpg.asset.json";
import poster2 from "@/assets/poster-2.jpg.asset.json";
import poster3 from "@/assets/poster-3.jpg.asset.json";
import poster4 from "@/assets/poster-4.jpg.asset.json";
import poster5 from "@/assets/poster-5.jpg.asset.json";
import poster6 from "@/assets/poster-6.jpg.asset.json";
import scaffolding1 from "@/assets/scaffolding-1.png.asset.json";
import scaffolding2 from "@/assets/scaffolding-2.png.asset.json";
import scaffolding3 from "@/assets/scaffolding-3.png.asset.json";
import shiashie1 from "@/assets/shiashie-1.png.asset.json";
import shiashie2 from "@/assets/shiashie-2.png.asset.json";
import shiashie3 from "@/assets/shiashie-3.png.asset.json";
import shiashie4 from "@/assets/shiashie-4.png.asset.json";
import shiashieClip from "@/assets/shiashie-clip.mp4.asset.json";

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

const ITEMS: Item[] = [
  { type: "image", src: shiashie1.url, caption: "Industrial building — Shiashie, East Legon" },
  { type: "image", src: shiashie2.url, caption: "Concrete pump on-site — Shiashie, East Legon" },
  { type: "image", src: shiashie3.url, caption: "Concrete mixer operations — Shiashie, East Legon" },
  { type: "image", src: shiashie4.url, caption: "Excavation works — Shiashie, East Legon" },
  { type: "video", src: shiashieClip.url, poster: shiashie1.url, caption: "Industrial build progress — Shiashie, East Legon" },
  { type: "image", src: scaffolding1.url, caption: "Scaffolding works on-site" },
  { type: "image", src: scaffolding2.url, caption: "Scaffolding assembly in progress" },
  { type: "image", src: scaffolding3.url, caption: "Scaffolding setup at project site" },
  { type: "image", src: team1.url, caption: "Site team — project handover" },
  { type: "image", src: team2.url, caption: "Parko crew on-site" },
  { type: "video", src: clip1.url, poster: poster1.url, caption: "On-site progress clip" },
  { type: "video", src: clip2.url, poster: poster2.url, caption: "Construction walkthrough" },
  { type: "video", src: clip3.url, poster: poster3.url, caption: "Site activity" },
  { type: "video", src: clip4.url, poster: poster4.url, caption: "Build progress update" },
  { type: "video", src: clip5.url, poster: poster5.url, caption: "Structural works in motion" },
  { type: "video", src: clip6.url, poster: poster6.url, caption: "Site supervision" },
  { type: "image", src: site1.url, caption: "Site supervision in progress" },
  { type: "image", src: site2.url, caption: "Structural works on-site" },
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
