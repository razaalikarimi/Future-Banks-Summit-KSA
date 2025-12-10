import React from "react";
import logo from "/logo.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050F23] text-white"
    >
      {/* Background watermark logo */}
      <img
        src={logo}
        alt="Future Banks Summit Logo"
        className="absolute inset-0 m-auto w-[60%] md:w-[40%] lg:w-[30%] opacity-25 mix-blend-screen brightness-200 select-none pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Soft gradients – blue ko aur transparent kar diya */}
      <div className="pointer-events-none absolute -left-24 -top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-[22rem] w-[22rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content full width */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-16 md:py-20 flex flex-col gap-10 md:flex-row md:items-center">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            4th Annual • Riyadh, KSA
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Future Banks Summit &amp; Awards{" "}
            <span className="bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-clip-text text-transparent">
              | KSA 2023
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-slate-200">
            <span className="font-semibold text-secondary">
              Digital Innovations Transforming the Kingdom’s Banking Landscape
            </span>
            . A two–day strategic summit bringing together leaders shaping the
            future of banking in Saudi Arabia.
          </p>

          <div className="space-y-3 text-sm text-slate-200">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2">
                <span className="mr-2 text-lg">📅</span>
                September 11–12, 2023
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2">
                <span className="mr-2 text-lg">📍</span>
                Riyadh Marriott Hotel
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Official website:{" "}
              <a
                href="https://www.ksa.futurebanksummit.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-300 underline underline-offset-4 hover:text-white"
              >
                www.ksa.futurebanksummit.com
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-dark to-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-transform hover:-translate-y-0.5"
            >
              Register Now
            </a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Download Brochure
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="px-3 py-1 rounded-full bg-white/10">
              🏆 Awards Night Included
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10">
              🌍 40+ Global Speakers
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10">
              🤝 C-Level Networking
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Key Focus Areas
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>• AI & intelligent automation in banking</li>
              <li>• Digital-first customer experience & journeys</li>
              <li>• Open banking, regtech & data-driven decisions</li>
              <li>• Cloud, cybersecurity & resilient operations</li>
            </ul>
            <p className="mt-4 text-xs text-slate-300">
              An exclusive platform for CIOs, CTOs, digital leaders and senior
              banking executives to exchange strategies and innovation insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
