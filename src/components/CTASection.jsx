import React from "react";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-sky-500 text-white"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-t from-white/5 to-transparent mix-blend-overlay" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-16 py-10 md:py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
              Secure Your Seat
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Join the leaders building the future of banking in KSA.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/90">
              Places are limited for senior-level attendees. Register now or
              request the event brochure to explore speaking and sponsorship
              opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-dark shadow-md transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Register Your Interest
            </a>
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
