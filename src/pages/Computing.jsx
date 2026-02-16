import React from "react";

export default function Computing() {
  const heroImg = "https://www.olympicmathschool.ca/COMS/images/computerProgramming.jpg";
  //const bannerImg = "https://www.olympicmathschool.ca/COMS/images/COMS-logo3.jpg";

  const quotes = [
    {
      quote:
        "In this world everybody should learn how to program a computer ... because it teaches you how to think.",
      author: "Steve Jobs",
    },
    {
      quote: "When I first accessed computer I was 13 years old.",
      author: "Bill Gates",
    },
    {
      quote: "I learned computer programming when I was 6th grade.",
      author: "Mark Zuckerberg",
    },
  ];

  const excellence = [
    "We teach industry-standard languages widely used by businesses!",
    "Engaging, age-appropriate lessons with fun, hands-on programming activities!",
    "All courses come with activity solutions, test and answers, and a solution guide!",
    "Optional instructional highlight coverage of all lesson topics!",
    "Professional setup program installs course material on your computer!",
    "No extra software to purchase! We use free development tools.",
  ];

  const campuses = [
    {
      campus: "West campus",
      address: "939 45 ST SW",
      days: "Saturdays",
      term: "Sep – Jun",
      room: "Conf #109",
      course:
        "Scratch, Python, Java (C++), Canadian Computing Competition (Elementary, Junior & Senior)",
      slots: ["10am–11am", "11am–12pm", "12pm–1pm", "1pm–2pm", "2pm–3pm", "3pm–4pm"],
      audience: ["Junior high", "Junior high", "Junior high", "Elementary", "Junior high", "Junior high"],
      fee: "$25/hr",
    },
    {
      campus: "South campus",
      address: "12424 Elbow Dr. SW",
      days: "Sundays",
      term: "Sep – Jun",
      room: "#15, 16",
      course:
        "Scratch, Python, Java (C++), Canadian Computing Competition (Elementary, Junior & Senior)",
      slots: ["10am–11am", "11am–12am", "12am–1pm", "1pm–2pm", "2pm–3pm", "3pm–4pm"],
      audience: ["Junior high", "Junior high", "Junior high", "Elementary", "Junior high", "Junior high"],
      fee: "$25/hr",
    },
    {
      campus: "SE campus",
      address: "9 Legacy Landing, SE (Online available)",
      days: "Tuesday / Friday (2-hour lesson)",
      term: "Jan – Dec",
      room: "#1, 2",
      course:
        "Scratch, Python, C++, basic AI; Webpage design; Canadian & USA Computing Competition (Elementary, Junior, Senior)",
      slots: ["4pm–6pm"],
      audience: ["—"],
      fee: "$25/hr",
      extraLines: ["Wednesday (2-hour lesson)", "Sunday (2-hour lesson)"],
    },
  ];

  return (
    <section id="computers" className="rounded-2xl p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold">Computing</h1>
          <p className="mt-2 text-sm text-neutral-700">
            Our computer programming courses for kids and teens teach students to write their own
            programs, games, GUI, website and other applications. No prior programming experience
            needed.{" "}
            <a className="underline" href="mailto:coms@olympicmathschool.ca">
              coms@olympicmathschool.ca
            </a>
          </p>
        </div>

        {/* Banner image from the original page */}
{/*         <img
          src={bannerImg}
          alt="COMCS banner"
          className="w-full max-w-[520px] rounded-xl object-cover shadow-card"
        /> */}
      </div>

      {/* Hero: image + key message */}
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        <div className="rounded-2xl border p-5">
          <div className="text-sm font-semibold">Computer Programming & Basic AI Class For Kids and Teens</div>
          <p className="mt-3 text-sm text-neutral-700">
            Parents know their kids need computer skills, but don’t always know where to start—especially
            with programming languages. We suggest starting early so children develop logic and analytical
            skills more easily. And don’t worry if they have no experience—we can teach them to program.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {quotes.map((q) => (
              <figure key={q.author} className="rounded-xl border p-4">
                <blockquote className="text-sm text-neutral-800">“{q.quote}”</blockquote>
                <figcaption className="mt-2 text-xs text-neutral-600">— {q.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-5">
          <div className="text-sm font-semibold">In-class learning (image)</div>
          <img
            src={heroImg}
            alt="Student learning computer programming"
            className="mt-3 w-full rounded-xl object-cover shadow-card"
          />
        </div>
      </div>

      {/* Standard of Excellence */}
      <div className="rounded-2xl border p-6">
        <h3 className="text-lg font-semibold">Our Standard of Excellence</h3>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-neutral-700">
          {excellence.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      {/* Campus schedules */}
      <div className="rounded-2xl border p-6">
        <h3 className="text-lg font-semibold">Computer Courses (In person + Online)</h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {campuses.map((c) => (
            <div key={c.campus} className="rounded-2xl border p-5">
              <div className="text-sm font-semibold">
                {c.campus}: <span className="font-normal">{c.address}</span>
              </div>
              <div className="mt-2 text-xs text-neutral-600">
                {c.days} • {c.term} • Room: {c.room} • Fee: {c.fee}
              </div>

              <div className="mt-3 text-sm text-neutral-800 font-medium">Program</div>
              <p className="mt-1 text-sm text-neutral-700">{c.course}</p>

              {c.extraLines?.length ? (
                <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                  {c.extraLines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-4 text-sm font-medium text-neutral-800">Time slots</div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {c.slots.map((t, i) => (
                  <div key={t} className="rounded-xl border px-3 py-2 text-xs text-neutral-700">
                    <div className="font-semibold">{t}</div>
                    <div className="text-[11px] text-neutral-600">{c.audience[i] ?? "—"}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-neutral-700">
          Please check school calendar and other courses’ time schedule (COMS School Calendar PDF and
          COMS group courses’ time schedule PDF).
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="mailto:coms@olympicmathschool.ca"
            className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
          >
            Email: coms@olympicmathschool.ca
          </a>
          <a
            href="/admission"
            className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
          >
            Course registration (Admission)
          </a>
        </div>
      </div>
    </section>
  );
}