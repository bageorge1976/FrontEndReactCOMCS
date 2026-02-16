import React from "react";

const openings = [
  { role: "Mathematics instructor", status: "no vacancy" },
  {
    role: "Computer science instructor (Scratch, Python, C++ or Java, Javascript, Web, Network)",
    status: "no vacancy",
  },
  { role: "Biology instructor", status: "no vacancy" },
  { role: "Chemistry instructor", status: "no vacancy" },
  { role: "Physics instructor", status: "no vacancy" },
  { role: "English language instructor", status: "open" },
];

export default function Recruit() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="card card-hover p-6">
        <div className="text-xs uppercase tracking-wide text-neutral-600">
          Recruitment
        </div>
        <h1 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
          Welcome to Calgary Olympic Math &amp; Science School
        </h1>
        <p className="mt-3 text-neutral-700 text-base md:text-lg font-medium">
          COMS prefers to collect resumes/profiles via email application.
        </p>
      </section>

      {/* Openings */}
      <section className="card card-hover p-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Current Jobs and Opportunities
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          (No deadline — until current openings are filled.)
        </p>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="text-left">
                <th className="border-b p-3 font-semibold">Position</th>
                <th className="border-b p-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {openings.map((o) => (
                <tr key={o.role} className="align-top">
                  <td className="border-b p-3 text-neutral-800">{o.role}</td>
                  <td className="border-b p-3">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                        o.status === "open"
                          ? "bg-green-100 text-green-800"
                          : "bg-neutral-100 text-neutral-700",
                      ].join(" ")}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Apply */}
        <div className="mt-6 rounded-xl border p-4">
          <div className="font-semibold text-neutral-900">How to apply</div>
          <p className="mt-1 text-neutral-700">
            Please send your resume and a cover letter to{" "}
            <a className="underline" href="mailto:coms@olympicmathschool.ca">
              coms@olympicmathschool.ca
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            We appreciate the interest of all candidates; however, only those
            selected for an interview will be contacted.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:coms@olympicmathschool.ca?subject=Recruitment%20Inquiry%20-%20COMS"
              className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              Email your application
            </a>
            <a
              href="/contact"
              className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}