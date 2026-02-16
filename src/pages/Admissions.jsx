// Admissions.jsx / Tutoring.jsx / Store.jsx / Recruit.jsx / Contact.jsx / NotFound.jsx
import React, {  useState } from "react";//useMemo

const LINKS = {
  calendarPdf: "https://www.olympicmathschool.ca/COMS/forms/COMS%20Calendar.pdf",
  schedulePdf: "https://www.olympicmathschool.ca/COMS/forms/COMS%20courses%20list.pdf",
  applicationFormDoc: "https://www.olympicmathschool.ca/COMS/forms/COMS%20application%20form.doc",
  summerCampFormDoc:
    "https://www.olympicmathschool.ca/COMS/forms/COMS%20summer%20school%20application%20form.doc",
  email: "coms@olympicmathschool.ca",
};

const GROUP_CLASSES = [
  {
    title: "Math Enhancement",
    details: ["Grades 1/2/3/4/5/6/7/8/9", "One hour per lesson", "31 lessons per year"],
  },
  { title: "Olympic Math", details: ["Grade 6", "62 hours per year"] },
  { title: "Olympic Math", details: ["Grades 7/8", "62 hours per year"] },
  { title: "Olympic Math", details: ["Grades 9/10", "62 hours per year"] },
  { title: "Olympic Math", details: ["Grades 11/12", "62 hours per year"] },
  { title: "IB/AP Chemistry & Olympic Chemistry", details: ["62 hours per year"] },
  { title: "IB Math SL", details: ["Math 10/20/30", "Two hours per lesson", "31 lessons per year"] },
  {
    title: "AP Math, IB Math HL, Math 31",
    details: ["Two hours per lesson", "31 lessons per year"],
  },
  { title: "Mandarin", details: ["Grades 1-12", "Two hours per lesson", "31 lessons per year"] },
  {
    title: "Computer Coding (Scratch I)",
    details: ["Grades 1/2", "One hour per lesson", "31 lessons per year"],
  },
  {
    title: "Computer Coding (Scratch II)",
    details: ["Grades 3/4", "One hour per lesson", "31 lessons per year"],
  },
  {
    title: "Computer Coding (Scratch III, Python)",
    details: ["Grades 5/6", "One hour per lesson", "31 lessons per year"],
  },
  {
    title: "Computer Coding Contest - Junior (Python, C++, Java)",
    details: ["Two hours per lesson", "31 lessons per year"],
  },
  {
    title: "Computer Coding Contest - Senior (Python, C++, Java)",
    details: ["Two hours per lesson", "31 lessons per year"],
  },
  { title: "AP Computer Science", details: ["Two hours per lesson", "31 lessons per year"] },
];

const TUTORING = [
  { title: "Olympic Math", details: ["Grades 1/2", "Two hours per lesson"] },
  { title: "Olympic Math", details: ["Grades 3/4", "Two hours per lesson"] },
  { title: "Olympic Math", details: ["Grades 5/6", "Two hours per lesson"] },
  { title: "Olympic Math", details: ["Grades 7/8", "Two hours per lesson"] },
  { title: "Olympic Math", details: ["Grades 9/10", "Two hours per lesson"] },
  { title: "Olympic Math", details: ["Grades 11/12", "Two hours per lesson"] },
  { title: "IB Math SL", details: ["Math 10/20/30", "Two hours per lesson"] },
  { title: "IB Math HL / AP Math / Math 31", details: ["Two hours per lesson"] },
  { title: "Olympic Chemistry", details: ["Grade >= 8", "Two hours per lesson"] },
  { title: "Computer Coding (Scratch I)", details: ["Grades 1/2", "Two hours per lesson"] },
  { title: "Computer Coding (Scratch II)", details: ["Grades 3/4", "Two hours per lesson"] },
  { title: "Computer Coding (Scratch III, Python)", details: ["Grades 5/6", "Two hours per lesson"] },
  { title: "Computer Coding (Python, C++, Java)", details: ["Grades 7/9", "Two hours per lesson"] },
  {
    title: "Computer Coding Contests (Python, C++, Java)",
    details: ["Grades 10/12", "Two hours per lesson"],
  },
  { title: "AP Computer Science", details: ["Grade >= 10", "Two hours per lesson"] },
];

const GRADES = ["G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12"];

function ChipLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-neutral-800">{label}</div>
      {hint ? <div className="text-xs text-neutral-500 mt-0.5">{hint}</div> : null}
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl border px-4 py-3 text-sm outline-none transition",
        "focus:ring-4 focus:ring-black/10 focus:border-neutral-900",
        props.className || "",
      ].join(" ")}
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className={[
        "w-full rounded-xl border px-4 py-3 text-sm outline-none transition bg-white",
        "focus:ring-4 focus:ring-black/10 focus:border-neutral-900",
        props.className || "",
      ].join(" ")}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={[
        "w-full rounded-xl border px-4 py-3 text-sm outline-none transition min-h-30",
        "focus:ring-4 focus:ring-black/10 focus:border-neutral-900",
        props.className || "",
      ].join(" ")}
    />
  );
}

function CourseCard({ title, details }) {
  return (
    <div className="rounded-2xl border bg-white p-5 flex flex-col">
      <div className="text-base font-semibold">{title}</div>
      <ul className="mt-2 text-sm text-neutral-700 space-y-1">
        {details.map((d, i) => (
          <li key={i}>• {d}</li>
        ))}
      </ul>

      <div className="mt-4">
        <a
          href={LINKS.applicationFormDoc}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-xl bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          Apply
        </a>
      </div>
    </div>
  );
}

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    email: "",
    homePhone: "",
    cellPhone: "",
    grade: "",
    studentStatus: "",
    mailingList: false,
    message: "",
  });

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // Matches the original intent (email the form/info). You can swap this for an API later.
    const subject = encodeURIComponent("COMS Registration / Free Consultation");
    const body = encodeURIComponent(
      [
        `First Name: ${form.firstName}`,
        `Last Name: ${form.lastName}`,
        `DOB: ${form.dob}`,
        `Gender: ${form.gender}`,
        `Address 1: ${form.address1}`,
        `Address 2: ${form.address2}`,
        `City: ${form.city}`,
        `Zip: ${form.zip}`,
        `Email: ${form.email}`,
        `Home phone: ${form.homePhone}`,
        `Cell phone: ${form.cellPhone}`,
        `Grade: ${form.grade}`,
        `Student: ${form.studentStatus}`,
        `Add to mailing list: ${form.mailingList ? "Yes" : "No"}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="space-y-10">
      {/* Hero */}
      <header className="space-y-3">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Register</h2>
        <p className="text-neutral-700 max-w-4xl leading-relaxed">
          Calgary Olympic Math & Science School (COMS) offers math and science programs for students of
          all levels. All programs adhere to the curriculums laid out by the CBE, with enhancement
          components included in each course. Students in our programs have received recognition in
          provincial, national and international contests.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <ChipLink href={LINKS.calendarPdf}>COMS Calendar (PDF)</ChipLink>
          <ChipLink href={LINKS.schedulePdf}>Courses Schedule (PDF)</ChipLink>
          <ChipLink href={LINKS.applicationFormDoc}>Student Application Form (DOC)</ChipLink>
          <ChipLink href={LINKS.summerCampFormDoc}>Summer Camp Apply (DOC)</ChipLink>
        </div>
      </header>

      {/* Group classes */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Group classes</h2>
            <p className="text-sm text-neutral-700 mt-1">
              Apply by clicking <span className="font-medium">Apply</span> in the course block or using
              the application form link above.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUP_CLASSES.map((c, idx) => (
            <CourseCard key={idx} title={c.title} details={c.details} />
          ))}
        </div>
      </section>

      {/* Tutoring */}
      <section className="rounded-3xl border bg-white p-6 md:p-8 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Tutoring (individual / small group)</h2>
          <p className="text-sm text-neutral-700 mt-1">
            You need to book time in advance via email:{" "}
            <a className="font-medium hover:underline" href={`mailto:${LINKS.email}`}>
              {LINKS.email}
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TUTORING.map((c, idx) => (
            <CourseCard key={idx} title={c.title} details={c.details} />
          ))}
        </div>
      </section>

      {/* Summer camp banner */}
      <section className="rounded-3xl border bg-neutral-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-600">Summer program</div>
          <div className="text-lg font-semibold mt-1">
            COMS Summer Math & Computer Coding Camp (June 12 ~ August 31)
          </div>
        </div>
        <a
          href={LINKS.summerCampFormDoc}
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
        >
          Apply
        </a>
      </section>

      {/* Application procedure */}
      <section className="rounded-3xl border bg-white p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-semibold">Application procedure</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-neutral-800">
          <li>Select courses of your interest.</li>
          <li>
            Click <span className="font-medium">Apply</span> in the course block or the{" "}
            <a className="font-medium hover:underline" href={LINKS.applicationFormDoc} target="_blank" rel="noreferrer">
              application form
            </a>{" "}
            link.
          </li>
          <li>Download and save the application form to your computer.</li>
          <li>Complete the application form.</li>
          <li>
            Email the form and email-transfer tuition payment to{" "}
            <a className="font-medium hover:underline" href={`mailto:${LINKS.email}`}>
              {LINKS.email}
            </a>
            .
          </li>
          <li>
            If paying by cheque: print the form and prepare a cheque with the child’s name and info.
          </li>
          <li>
            Mail to: <span className="font-medium">COMS, 9 Legacy Landing SE, Calgary, AB T2X2E5</span>.
          </li>
          <li>After registration, the school will send you a receipt to your mailing address.</li>
        </ol>
        <div className="text-xs text-neutral-500">
          * It is the School’s right to decide whether to open a class based on the number of registered students.
        </div>
      </section>

      {/* Online Apply form */}
      <section className="rounded-3xl border bg-white p-6 md:p-8">
        <h2 className="text-xl font-semibold">Online Apply and for a Free Consultation</h2>

        <form onSubmit={onSubmit} className="mt-6 grid gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="First Name">
              <Input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
            </Field>

            <Field label="Last Name">
              <Input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
            </Field>

            <Field label="Date of Birth">
              <Input type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} />
            </Field>

            <Field label="Gender">
              <Select value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                <option value="">Select…</option>
                <option value="M">M</option>
                <option value="F">F</option>
              </Select>
            </Field>

            <Field label="Address 1">
              <Input value={form.address1} onChange={(e) => update("address1", e.target.value)} />
            </Field>

            <Field label="Address 2">
              <Input value={form.address2} onChange={(e) => update("address2", e.target.value)} />
            </Field>

            <Field label="City">
              <Input value={form.city} onChange={(e) => update("city", e.target.value)} />
            </Field>

            <Field label="Zip">
              <Input value={form.zip} onChange={(e) => update("zip", e.target.value)} />
            </Field>

            <Field label="E-mail">
              <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
            </Field>

            <Field label="Home phone">
              <Input value={form.homePhone} onChange={(e) => update("homePhone", e.target.value)} />
            </Field>

            <Field label="Cell phone">
              <Input value={form.cellPhone} onChange={(e) => update("cellPhone", e.target.value)} />
            </Field>

            <Field label="Grade">
              <Select value={form.grade} onChange={(e) => update("grade", e.target.value)}>
                <option value="">Select…</option>
                {GRADES.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </Select>
            </Field>

            <Field label="Student status">
              <Select value={form.studentStatus} onChange={(e) => update("studentStatus", e.target.value)}>
                <option value="">Select…</option>
                <option value="existing">Existing Student</option>
                <option value="new">New Student</option>
              </Select>
            </Field>
          </div>

          <label className="flex items-center gap-2 text-sm text-neutral-800">
            <input
              type="checkbox"
              checked={form.mailingList}
              onChange={(e) => update("mailingList", e.target.checked)}
              className="h-4 w-4"
            />
            Add to Mailing List
          </label>

          <Field label="Your message for us" hint="Type your message, course(s) in interest, etc., here.">
            <Textarea value={form.message} onChange={(e) => update("message", e.target.value)} />
          </Field>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="text-xs text-neutral-500">
              This submits via email draft (mailto) like the original workflow; you can connect it to an API later.
            </div>
            <button
              type="submit"
              className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}