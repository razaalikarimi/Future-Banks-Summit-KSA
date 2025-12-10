import React from "react";
import SectionHeading from "./SectionHeading";

const days = [
  {
    day: "Day 1 — September 11, 2023",
    focus: "Digital foundations & strategy",
    items: [
      "Opening keynote on Vision 2030 and the future of finance",
      "Panels on digital transformation and agile operating models",
      "Case studies on AI, automation and customer-first journeys",
    ],
  },
  {
    day: "Day 2 — September 12, 2023",
    focus: "Innovation, resilience & the road ahead",
    items: [
      "Sessions on open banking, fintech collaboration and NBFIs",
      "Discussions on cloud migration, cybersecurity and resilience",
      "Awards & recognition for digital excellence in banking",
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="bg-slate-50">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12 md:py-16">
        <SectionHeading
          eyebrow="Key Themes"
          title="Two Days of Insightful Discussions"
          subtitle="A focused agenda covering strategy, technology, innovation and resilience for the Kingdom’s banking leaders."
          align="center"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {days.map((day) => (
            <article
              key={day.day}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10" />
              <div className="pointer-events-none absolute -left-16 bottom-[-4rem] h-40 w-40 rounded-full bg-sky-100" />

              <div className="relative space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  {day.day}
                </p>
                <h3 className="text-sm font-semibold text-slate-900">
                  {day.focus}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {day.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
