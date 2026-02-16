import React, { useMemo, useState } from "react";

const GRADES = [
  "K4",
  "K5",
  "G1",
  "G2",
  "G3",
  "G4",
  "G5",
  "G6",
  "G7",
  "G8",
  "G9",
  "G10",
  "G11",
  "G12",
];

const SUBJECTS = [
  "Math",
  "Physics",
  "Chemistry",
  "Biology",
  "Science",
  "Computer",
  "English",
  "Mandarin",
  "Contest prep",
  "AP/IB",
];

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

export default function Contact() {
  // Content from COMS contact page
  const mailing = {
    org: "Calgary Olympic Math & Science School",
    street: "9 Legacy Landing SE",
    city: "Calgary, AB T2X2E5",
    schoolEmail: "coms@olympicmathschool.ca",
    registrationPhone: "403-383-6703",
    registrationContact: "Chief administrator, Ms. Lily Dong",
    consultantPhone: "403-397-8289",
    consultantEmail: "allan.dong@olympicmathschool.ca",
  };

  // Map links:
  // - Vincent Massey and SE Tutoring Center are the same links as the original page’s Google Map targets.
  // - Robert Warren was a g.co shortlink that may not always resolve well; we use a stable maps query link.
  const campuses = useMemo(
    () => [
      {
        title: "SW Campus",
        name: "Robert Warren School",
        address: "12424 Elbow Drive SW, Calgary AB T2W 1H2",
        mapUrl:
          "https://www.google.com/maps?q=Robert+Warren+School,+12424+Elbow+Drive+SW,+Calgary+AB+T2W+1H2",
      },
      {
        title: "West Campus",
        name: "Vincent Massey School",
        address: "939 45 St SW, Calgary, AB T3C 2B9",
        mapUrl:
          "https://www.google.com/maps/place/51%C2%B002'38.3%22N+114%C2%B009'12.3%22W/@51.04397,-114.1555987,17z/data=!3m1!4b1!4m4!3m3!8m2!3d51.04397!4d-114.15341?coh=164777&entry=tt&shorturl=1",
          //"https://www.google.com/maps/place/Vincent%2BMassey%2BSchool%2B%7C%2BCalgary%2BBoard%2Bof%2BEducation/%4050.9519974%2C-114.2292837%2C11z/data%3D%214m19%211m13%214m12%211m4%212m2%211d-114.011909%212d50.860435%214e1%211m6%211m2%211s0x53716e3f027bd501%3A0xadfedc83955b38e1%212svincent%2Bmassey%2Bschool%212m2%211d-114.1529632%212d51.0437265%213m4%211s0x53716e3f027bd501%3A0xadfedc83955b38e1%218m2%213d51.0437265%214d-114.1529632",
      },
      {
        title: "Summer School Campus",
        name: "SE Tutoring Center",
        address: "9 Legacy Landing SE, Calgary, AB T2X2E5",
        mapUrl:
          "https://www.google.ca/maps/place/9%2BLegacy%2BLanding%2BSE%2C%2BDe%2BWinton%2C%2BAB%2BT0L%2B0X0/%4050.8603272%2C-114.0143642%2C17z/data%3D%213m1%214b1%214m6%213m5%211s0x53719de6594cdfc7%3A0x676a3d0baa950f6a%218m2%213d50.8603272%214d-114.0121809%2116s/g/11g8ht0r8v?hl=en",
      },
    ],
    []
  );

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "", // "M" | "F"
    address1: "",
    address2: "",
    city: "",
    zip: "",
    email: "",
    homePhone: "",
    cellPhone: "",
    grade: "",
    studentStatus: "", // "existing" | "new"
    mailingList: false,
    subjects: [],
    message: "",
  });

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleSubject(s) {
    setForm((f) => {
      const has = f.subjects.includes(s);
      return {
        ...f,
        subjects: has ? f.subjects.filter((x) => x !== s) : [...f.subjects, s],
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    // Simple default behavior: open an email draft to the school email.
    // Replace with your backend/API later.
    const subject = encodeURIComponent("COMS Online Apply / Free Consultation Request");
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
        `Subjects: ${form.subjects.join(", ")}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${mailing.schoolEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="text-neutral-700 max-w-3xl">
          Mailing address, campuses, and an online application / free consultation form.
        </p>
      </header>

      {/* Contact info blocks */}
      <section className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-3xl border bg-white p-6">
          <div className="text-sm font-semibold">Mailing address</div>
          <div className="mt-3 text-sm text-neutral-800 leading-relaxed">
            <div className="font-medium">{mailing.org}</div>
            <div>{mailing.street}</div>
            <div>{mailing.city}</div>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6">
          <div className="text-sm font-semibold">Email</div>
          <div className="mt-3 text-sm">
            <a className="font-medium hover:underline" href={`mailto:${mailing.schoolEmail}`}>
              {mailing.schoolEmail}
            </a>
          </div>
          <div className="mt-4 text-sm font-semibold">Consultant email</div>
          <div className="mt-2 text-sm">
            <a className="font-medium hover:underline" href={`mailto:${mailing.consultantEmail}`}>
              {mailing.consultantEmail}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6">
          <div className="text-sm font-semibold">Phones</div>
          <ul className="mt-3 text-sm text-neutral-800 space-y-2">
            <li>
              <div className="text-neutral-600">
                For students&apos; registration ({mailing.registrationContact})
              </div>
              <a className="font-medium hover:underline" href={`tel:${mailing.registrationPhone}`}>
                {mailing.registrationPhone}
              </a>
            </li>
            <li>
              <div className="text-neutral-600">For learning program consultant</div>
              <a className="font-medium hover:underline" href={`tel:${mailing.consultantPhone}`}>
                {mailing.consultantPhone}
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Campuses */}
      <section className="rounded-3xl border bg-white p-6 md:p-8">
        <h2 className="text-xl font-semibold">Campuses</h2>
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {campuses.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-neutral-50 p-5">
              <div className="text-xs uppercase tracking-wide text-neutral-600">{c.title}</div>
              <div className="mt-2 text-base font-semibold">{c.name}</div>
              <div className="mt-2 text-sm text-neutral-700">{c.address}</div>
              <div className="mt-4">
                <a
                  className="text-sm font-medium hover:underline"
                  href={c.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Apply */}
      <section className="rounded-3xl border bg-white p-6 md:p-8">
        <h2 className="text-xl font-semibold">Online Apply and For A Free Consultation</h2>

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
              <Input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
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
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Student status">
              <Select
                value={form.studentStatus}
                onChange={(e) => update("studentStatus", e.target.value)}
              >
                <option value="">Select…</option>
                <option value="existing">Existing Student</option>
                <option value="new">New Student</option>
              </Select>
            </Field>
          </div>

          <div className="rounded-2xl border bg-neutral-50 p-5">
            <div className="text-sm font-semibold">Subjects</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUBJECTS.map((s) => {
                const active = form.subjects.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleSubject(s)}
                    className={[
                      "px-3 py-2 rounded-full text-sm border transition",
                      active ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-100",
                    ].join(" ")}
                  >
                    {s}
                  </button>
                );
              })}
            </div>

            <label className="mt-4 flex items-center gap-2 text-sm text-neutral-800">
              <input
                type="checkbox"
                checked={form.mailingList}
                onChange={(e) => update("mailingList", e.target.checked)}
                className="h-4 w-4"
              />
              Add to Mailing List
            </label>
          </div>

          <Field
            label="Your message for us"
            hint="Type your message, course(s) in interest, etc."
          >
            <Textarea value={form.message} onChange={(e) => update("message", e.target.value)} />
          </Field>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="text-xs text-neutral-500">
              This submits via email draft (mailto). Connect to an API later if you want database storage.
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