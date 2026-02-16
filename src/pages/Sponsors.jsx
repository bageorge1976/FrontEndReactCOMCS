import React from "react";

export default function Sponsors() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="card card-hover p-6">
        <div className="text-xs uppercase tracking-wide text-neutral-600">
          Sponsors
        </div>
        <h1 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
          COMCS Annual Fund
        </h1>
        <p className="mt-3 text-neutral-700 text-base md:text-lg font-medium">
          Endowment Giving
        </p>
      </section>

      {/* Content */}
      <section className="card card-hover p-6">
        <h2 className="text-xl md:text-2xl font-semibold">Endowment Giving</h2>

        <div className="mt-4 space-y-4 text-neutral-800">
          <p>
            Donations to school&apos;s math and science teaching &amp; learning for kids
            are more than welcome.
          </p>

          <p>
            We welcome sponeors to support COMS team math and computing contests.
          </p>

          <p>Thank you so much for your help and support!</p>
        </div>

        {/* Optional CTA (safe + helpful, doesn’t invent payment details) */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:coms@olympicmathschool.ca?subject=COMCS%20Annual%20Fund%20-%20Sponsorship%20Inquiry"
            className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
          >
            Become a Sponsor
          </a>
          <a
            href="mailto:coms@olympicmathschool.ca?subject=COMCS%20Annual%20Fund%20-%20Donation%20Inquiry"
            className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
          >
            Make a Donation
          </a>
        </div>
      </section>
    </div>
  );
}