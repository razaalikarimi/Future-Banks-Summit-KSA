import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import HighlightsGrid from "./components/HighlightsGrid";
import WhoYouWillMeet from "./components/WhoYouWillMeet";
import WhyAttend from "./components/WhyAttend";
import ScheduleSection from "./components/ScheduleSection";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />

        {/* Event Overview */}
        <section id="overview" className="bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-16 py-12 md:py-16">
            <SectionHeading
              eyebrow="Event Overview"
              title="Preparing Saudi Arabia’s Banks for a Digital-First Future"
              subtitle="The global banking industry is changing fast. This summit gives banks in the Kingdom a chance to rethink their models and move confidently into the future."
            />

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div className="space-y-4 text-sm text-slate-700">
                <p>
                  Around the world, banks are experiencing major disruption.
                  Shifts in customer expectations, rapid adoption of new
                  technologies and the move from traditional customer service to
                  continuous customer engagement are changing how banks operate.
                </p>
                <p>
                  Mobile workforces, the need to right-size branch networks and
                  the demand for fully digital journeys have created strong
                  opportunities for regional banks in the Kingdom to accelerate
                  their digital shift.
                </p>
                <p>
                  The 4th Annual Future Banks Summit &amp; Awards | KSA 2023
                  will showcase the latest innovations and real case studies,
                  together with interactive panels designed to help banks in
                  Saudi Arabia choose the right strategies and overcome internal
                  resistance to change.
                </p>
              </div>

              <div className="space-y-4 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700 shadow-inner">
                <p>
                  Across two days, the conference will explore how innovation
                  and digital advancements are shaping the future of the
                  financial industry in the Kingdom.
                </p>
                <p>
                  Discussions will cover AI, digital transformation, digital
                  banking, banking in the metaverse, intelligent automation,
                  regtech, data analytics, cloud migration, cyber security and
                  new digital payment models.
                </p>
                <p>
                  Delegates will also learn about technology-driven approaches
                  to business continuity planning, ensuring that banks remain
                  resilient and future-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        <HighlightsGrid />
        <WhoYouWillMeet />
        <WhyAttend />
        <ScheduleSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
