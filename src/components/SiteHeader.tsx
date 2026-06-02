import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/parko-logo.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav-solid" : "glass-nav"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Parko P. Engineering Ltd."
            className="h-10 w-10 md:h-11 md:w-11 object-contain"
          />
          <span className="font-display font-extrabold tracking-tight text-foreground text-base md:text-lg leading-none">
            PARKO P. ENGINEERING
            <span className="block text-[10px] font-medium tracking-[0.22em] text-muted-foreground mt-1">
              BUILD SMART · YOU DREAM IT · WE BUILD IT
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                data-active={active}
                className={`nav-underline px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active ? "text-accent" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-accent text-accent-foreground px-4 py-2.5 text-sm font-bold rounded-sm hover:brightness-95 transition-all shadow-sm hover:shadow"
          >
            REQUEST A QUOTE
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-sm border border-border text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-3 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-sm font-semibold text-foreground/80 hover:text-primary border-b border-border last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center bg-accent text-accent-foreground px-4 py-3 text-sm font-bold rounded-sm"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
