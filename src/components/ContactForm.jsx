import React from "react";
import SectionHeading from "./SectionHeading";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[3fr,2fr]">
          {/* Form card */}
          <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-md md:p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Get in Touch or Request More Details"
              subtitle="Share your details and our team will contact you with registration, sponsorship and speaking options."
            />

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/40"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/40"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/40"
                    placeholder="Organization name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/40"
                    placeholder="Your role"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  I am interested in
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Attending as a delegate</option>
                  <option>Sponsorship opportunities</option>
                  <option>Speaking opportunities</option>
                  <option>Media / partnership</option>
                  <option>Other enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Message (optional)
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/40"
                  placeholder="Share any specific questions or requirements"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Submit Enquiry
              </button>

              <p className="text-xs text-slate-500">
                *This is a sample form UI only. Backend integration is not
                included in this assignment.
              </p>
            </form>
          </div>

          {/* Summary card */}
          <aside className="space-y-4 rounded-3xl bg-slate-50 p-5 text-sm text-slate-700 shadow-inner md:p-6">
            <h3 className="text-sm font-semibold text-slate-900">
              Event at a glance
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>Dates:</strong> September 11–12, 2023
              </li>
              <li>
                <strong>Venue:</strong> Riyadh Marriott Hotel, Kingdom of Saudi
                Arabia
              </li>
              <li>
                <strong>Format:</strong> In-person summit &amp; awards
              </li>
              <li>
                <strong>Audience:</strong> Senior leaders from banks, fintechs,
                regulators and technology providers
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
