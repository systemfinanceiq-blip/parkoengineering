import { Link } from "@tanstack/react-router";
import { Building2, Facebook, Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center bg-accent text-accent-foreground rounded-sm">
              <Building2 className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display font-extrabold tracking-tight text-lg leading-none">
              PARKO
              <span className="block text-[10px] font-medium tracking-[0.22em] text-primary-foreground/70 mt-0.5">
                ENGINEERING LIMITED
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed">
            Delivering structural excellence in commercial, residential and civil infrastructure
            projects for over two decades.
          </p>
          <div className="mt-6 flex gap-2">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-sm border border-primary-foreground/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.22em] text-accent">COMPANY</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.22em] text-accent">SPECIALIZATIONS</h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li>Construction Site Supervision</li>
            <li>Architectural Drawings</li>
            <li>Project Management</li>
            <li>Land Surveys</li>
            <li>Crane &amp; Tipper Operations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.22em] text-accent">GET IN TOUCH</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span className="text-primary-foreground/85">0247 253 905<br/>0572 011 270</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:info@parkoengineering.com" className="text-primary-foreground/85 hover:text-accent">
                info@parkoengineering.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span className="text-primary-foreground/85">Accra, Ghana</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/65">
          <p>© {new Date().getFullYear()} Parko Engineering Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
