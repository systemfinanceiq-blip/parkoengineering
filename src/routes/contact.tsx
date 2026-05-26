import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { ContactInfo } from "./index";
import { Upload } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Parko Engineering Limited" },
      {
        name: "description",
        content: "Get in touch with Parko Engineering for project inquiries, quotes and consultations.",
      },
      { property: "og:title", content: "Contact — Parko Engineering" },
      { property: "og:description", content: "Request a quote or speak with our project consultants." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="CONTACT US"
        title="Let's Build\nSomething That Lasts"
        subtitle="Speak directly with our project consultants — typical response within 24 hours."
      />

      <section className="py-20">
        <div className="container-wide grid lg:grid-cols-5 gap-8">
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
                <select className="w-full h-11 px-3 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30">
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
                <select className="w-full h-11 px-3 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30">
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
                rows={5}
                placeholder="Tell us about scope, location, and timeline..."
                className="w-full px-3 py-2.5 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <label className="flex items-center justify-center gap-2 h-11 border border-dashed border-input rounded-sm text-sm text-muted-foreground hover:border-accent cursor-pointer transition-colors">
              <Upload className="h-4 w-4" />
              Upload blueprint or project brief (optional)
              <input type="file" className="hidden" />
            </label>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-bold tracking-wide py-3.5 rounded-sm hover:brightness-95 transition-all"
            >
              SUBMIT INQUIRY
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
        {label.toUpperCase()}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="w-full h-11 px-3 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
