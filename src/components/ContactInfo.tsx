import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export function ContactInfo() {
  const rows = [
    { icon: Phone, label: "PHONE", value: "0247 253 905 / 0572 011 270" },
    { icon: Mail, label: "EMAIL", value: "parkopengineering@gmail.com" },
    { icon: MapPin, label: "HEADQUARTERS", value: "Accra, Ghana" },
    { icon: Clock, label: "OPERATING HOURS", value: "Mon – Sat · 7:00 AM – 6:00 PM" },
    { icon: ShieldCheck, label: "REGISTRATION", value: "Licensed contractor · Ghana" },
  ];
  return (
    <div className="bg-card border border-white/10 text-foreground rounded-md p-7 md:p-8">
      <h2 className="font-display font-bold text-xl uppercase text-white">Get In Touch</h2>
      <p className="mt-2 text-sm text-white/70">
        Speak directly with our project consultants.
      </p>
      <ul className="mt-6 space-y-5">
        {rows.map((r) => (
          <li key={r.label} className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center bg-accent text-accent-foreground rounded-sm shrink-0">
              <r.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] text-accent">{r.label}</p>
              <p className="mt-1 text-sm text-white/85">{r.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
