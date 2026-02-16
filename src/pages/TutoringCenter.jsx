import React from "react";

const tutoringLevels = [
  {
    title: "Grades 1–6",
    items: [
      "Math",
      "English",
      "Science",
      "Social study 2–6",
      "Mandarin",
      "ESL",
      "French",
      "Preparation for tests, contests",
      "Homework help",
      "Computer programming (scratch, Python coding)",
    ],
  },
  {
    title: "Grades 7–9",
    items: [
      "Math",
      "English",
      "Science",
      "Social study 7–9",
      "Mandarin",
      "ESL",
      "French",
      "Preparation for tests, contests",
      "Homework help",
      "Computer programming (Python, C++ or Java coding, website design)",
    ],
  },
  {
    title: "Grades 10–12",
    items: [
      "Math 10, 20, 30, 31, AP, IB",
      "Physics 20, 30",
      "Chemistry 20, 30",
      "Biology 20, 30",
      "Science 10, 20, 30",
      "English 10, 20, 30",
      "Social study 10, 20, 30",
      "Mandarin",
      "ESL",
      "Preparation for tests, contests",
      "Homework help",
      "AP computer science and beyond (Python, C++, Java, Canadian Computing Competition (CCC), International Olympiad of Informatics (IOI))",
      "Wharton High School Investment Competition",
    ],
  },
  {
    title: "University / College Students",
    items: [
      "Math 249, 211, 221",
      "Introductory Physics",
      "Chemistry 201, 211, 203, 213, 351, 353",
      "Biology 241, 243, 311, 393",
      "Selected courses in 1st & 2nd year Engineering",
      "Homework help",
      "Computer programming",
    ],
  },
];

export default function TutoringCenter() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="card card-hover p-6">
        <div className="text-xs uppercase tracking-wide text-neutral-600">
          Tutoring Centre
        </div>
        <h1 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
          Welcome to COMS Tutoring Centre
        </h1>
        <p className="mt-3 text-neutral-700 text-base md:text-lg font-medium">
          We offer tutoring courses from elementary to University levels. Please email us for a quotation
          and/or register for a free consultation.
        </p>
      </section>

      {/* Levels */}
      <section className="card card-hover p-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Tutoring Programs by Level
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {tutoringLevels.map((lvl) => (
            <div key={lvl.title} className="card p-5">
              <div className="text-sm md:text-base font-semibold">
                {lvl.title}
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-800">
                {lvl.items.map((x) => (
                  <li key={x} className="leading-relaxed">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Online Registration & Free Consultation (modernized form shell) */}
      <section className="card card-hover p-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Online Registration & Free Consultation
        </h2>

        <p className="mt-3 text-neutral-700">
          Submit your details and the courses you’re interested in. (This form mirrors the fields shown on
          the original page.)
        </p>

        <form
          className="mt-5 grid gap-4 md:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block">
            <div className="text-sm font-medium text-neutral-800">First Name</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Last Name</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Date of Birth</div>
            <input type="date" className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Gender</div>
            <select className="mt-1 w-full rounded-xl border px-3 py-2">
              <option value="">Select…</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <div className="text-sm font-medium text-neutral-800">Address 1</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block md:col-span-2">
            <div className="text-sm font-medium text-neutral-800">Address 2</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">City</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Zip</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">E-mail</div>
            <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Home phone</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Cell phone</div>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Grade</div>
            <select className="mt-1 w-full rounded-xl border px-3 py-2">
              <option value="">Select…</option>
              {["G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12"].map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <div className="text-sm font-medium text-neutral-800">Student Type</div>
            <select className="mt-1 w-full rounded-xl border px-3 py-2">
              <option value="">Select…</option>
              <option value="existing">Existing Student</option>
              <option value="new">New Student</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <div className="text-sm font-medium text-neutral-800">Subjects</div>
            <input
              placeholder="e.g., Math 30, AP Physics, CCC prep…"
              className="mt-1 w-full rounded-xl border px-3 py-2"
            />
          </label>

          <label className="block md:col-span-2">
            <div className="text-sm font-medium text-neutral-800">Your message for us</div>
            <textarea
              rows={5}
              placeholder="Type your message, course(s) of interest, etc."
              className="mt-1 w-full rounded-xl border px-3 py-2"
            />
          </label>

          <label className="flex items-center gap-2 md:col-span-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm text-neutral-800">Add to Mailing List</span>
          </label>

          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              Request Free Consultation
            </button>

            <a
              href="mailto:coms@olympicmathschool.ca?subject=Tutoring%20Centre%20-%20Free%20Consultation"
              className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
            >
              Email COMS
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}