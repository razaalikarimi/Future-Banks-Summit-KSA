import React from "react";
import SectionHeading from "./SectionHeading";

const topics = [
  "Vision 2030 – the Kingdom’s rise as a global financial leader",
  "Digital transformation as the base for agile banking",
  "The future of digital payments in KSA",
  "Delivering a seamless next-generation customer experience",
  "Using data & analytics to give banks and customers a 360° view",
  "Open banking for inclusive banking – connecting banks and fintechs",
  "Cloud as a core enabler for speed and innovation",
  "The future of NBFIs – reshaping the money market in KSA",
  "Digital-only and “invisible” banks for Gen-Z customers",
  "Experiential banking in the metaverse",
];

const HighlightsGrid = () => {
  return (
    <section id="highlights" className="bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12 md:py-16">
        <SectionHeading
          eyebrow="Topic Highlights"
          title="Key Themes Driving the Future of Banking"
          subtitle="Explore the strategic topics that will define the next phase of financial services in the Kingdom."
          align="center"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic}
              className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-primary/50 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary transition-all group-hover:bg-primary group-hover:text-white">
                ▶
              </div>
              <p className="text-slate-800">{topic}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGrid;
