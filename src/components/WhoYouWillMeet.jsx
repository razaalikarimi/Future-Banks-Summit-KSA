import React from "react";
import SectionHeading from "./SectionHeading";

const roles = [
  "CIOs, CTOs, Heads of Technology",
  "Chief Digital Officers, Heads of Digital Transformation",
  "Chief Marketing Officers, Heads of Marketing",
  "Heads of Retail Banking",
  "Heads of Corporate Banking",
  "Heads of Customer Experience",
  "Heads of Cards & Payments",
  "Heads of Data & Analytics",
  "Heads of Governance & Compliance",
];

const WhoYouWillMeet = () => {
  return (
    <section id="who" className="bg-slate-50">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12 md:py-16">
        <SectionHeading
          eyebrow="Who Will You Meet"
          title="Connect with Senior Decision-Makers"
          subtitle="Engage with leaders shaping digital strategy, technology, customer experience and governance across Saudi Arabia’s banking and financial sector."
        />

        <div className="mt-8 rounded-3xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role}
                className="flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] text-primary">
                  ✓
                </span>
                <span>{role}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Attendance is tailored primarily for senior executives from banks,
            fintechs, regulators and strategic technology partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoYouWillMeet;
