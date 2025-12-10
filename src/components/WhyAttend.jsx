import React from "react";
import SectionHeading from "./SectionHeading";

const reasons = [
  "Gain knowledge and insights from leading regional and international experts.",
  "Network with senior peers in a focused, solution-oriented environment.",
  "Explore potential partnerships and collaborations with key industry players.",
];

const WhyAttend = () => {
  return (
    <section id="why" className="bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12 md:py-16">
        <SectionHeading
          eyebrow="Why Attend"
          title="Why the Future Banks Summit KSA 2023 Matters"
          subtitle="Understand how digitalization, data and new business models are reshaping banking in Saudi Arabia and globally."
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,2.2fr]">
          <div className="space-y-4 text-sm text-slate-700">
            <p>
              The banking industry is in the middle of a major shift. The
              pandemic accelerated digital adoption, and banks now need to
              rethink how they operate, serve customers and build new revenue
              streams.
            </p>
            <p>
              At the Future Banks Summit, you will hear practical case studies,
              interactive panel discussions and keynote sessions from experts
              who are leading this change within the Kingdom and beyond.
            </p>
            <p>
              Topics include AI, digital banking, data and analytics, cloud,
              cybersecurity, open banking and new payment models – all tailored
              to the needs of Saudi Arabia’s financial ecosystem.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-slate-50 p-6 shadow-inner">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-xl" />
            <h3 className="relative text-sm font-semibold text-slate-900">
              Reasons to attend
            </h3>
            <ul className="relative mt-4 space-y-3 text-sm text-slate-800">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-2 rounded-xl bg-white/80 px-3 py-2 shadow-sm"
                >
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-[11px] text-primary">
                    ✓
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
