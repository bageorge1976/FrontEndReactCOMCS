import React from "react";

const LINKS = {
  ftpForm:
    "https://www.olympicmathschool.ca/COMS/forms/Ivy%20fast%20track%20program%20application%20form.doc",
  faqExternal: "https://www.ivyshuttle.net/",
};

const IMAGES = {
  ivyLogos: "https://www.olympicmathschool.ca/COMS/images/Ivy%20League.jpg",
  ofes1: "https://www.olympicmathschool.ca/COMS/images/OFES1.jpg",
  ofes2: "https://www.olympicmathschool.ca/COMS/images/OFES2.jpg",
};

export default function IvyLeague() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-wide text-neutral-600">
          Ameican Ivy University Preparatory School
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Ivy Fast Track Program For Ivy League Universities
        </h1>
      </header>

      {/* Hero images */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-3 flex justify-center">
        <img
            src={IMAGES.ivyLogos}
            alt="Ivy and top US university logos collage"
            className="
            w-full max-w-4xl
            h-auto
            object-contain
            "
            loading="lazy"
        />
        </div>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
        <div className="card p-4 flex justify-center">
            <img
            src={IMAGES.ofes1}
            alt="OFES system diagram"
            width={550}
            className="rounded-xl object-contain"
            />
        </div>

        <div className="card p-4 flex justify-center">
            <img
            src={IMAGES.ofes2}
            alt="OFES conceptual diagram"
            width={550}
            className="rounded-xl object-contain"
            />
        </div>
        </section>
      

      {/* Difficulty / context */}
      <section className="card card-hover p-6 space-y-4">
        <p className="text-neutral-800">
          Ivy League admissions statistics paint a very clear picture of how difficult it is to get
          accepted into a prestigious school. With an average acceptance rate of just above 6%,
          the Ivy Leagues are among the most selective universities in the World.
        </p>

        <div className="space-y-2">
          <p className="text-neutral-800">
            With that in mind, it makes sense that there are only three types of students who find
            admission to the Ivy’s:
          </p>
          <ul className="list-disc pl-6 text-neutral-800 space-y-1">
            <li>elite students</li>
            <li>elite performers (top-tier athletes, published writers, child actors)</li>
            <li>the elite connected (children of leaders, legacy families, wealthy donors)</li>
          </ul>
          <p className="text-neutral-800">If those groups sound exclusive, it’s because they are.</p>
        </div>

        <p className="text-neutral-800">
          Attending a school with such a cohort has its advantages. About 24% of the Forbes 400
          attended an Ivy League school.
        </p>

        <p className="text-neutral-800">
          With over 5,300 universities in the United States, what makes the eight Ivy League
          institutions so special? And what can you do to gain admissions to Ivy League schools?
        </p>
      </section>

      {/* AIUPS description */}
      <section className="card card-hover p-6 space-y-4">
        <h2 className="text-xl font-semibold">AIUPS provides Ivy Fast Track Program (IFTP)</h2>

        <p className="text-neutral-800">
          AIUPS provides Ivy Fast Track Program (IFTP) for Ivy League Universities and offers a
          unique college readiness education through an Ongoing Follow-up Education System,
          supporting each student’s development needs through learning in physical classrooms and
          cloud classrooms.
        </p>

        <p className="text-neutral-800">
          We believe intellectual capacity, interpersonal maturity, and integrative vitality are
          important qualities for a student’s college readiness, as well as crucial indicators for
          success in high school, college, and future careers.
        </p>

        <p className="text-neutral-800">
          IFTP includes experienced educators, professors, and Ph.D. instructors who teach at and/or
          were educated at top US universities (including Harvard, Princeton, and Columbia). The
          goal is for each student to be well-prepared for college and for life.
        </p>

        <p className="text-neutral-800">
          Every year, half a million students apply to top US colleges. Only about 9% are accepted;
          the majority are rejected. Among those rejected, only a small fraction are unqualified—many
          are very strong academically or in co-curricular areas.
        </p>

        <p className="text-neutral-800">
          IFTP’s specialists and instructors have seen and judged around 10,000 applications. Their
          expertise helps students develop a strong application and distinguish themselves through
          deep skills development.
        </p>

        <p className="text-neutral-800">
          Elite colleges are not looking only for excellent students. They seek people with the
          potential to be great leaders and innovators after graduation—future “superstars” in
          their chosen fields and beyond.
        </p>
      </section>

      {/* Programs */}
      <section className="card card-hover p-6 space-y-4">
        <h2 className="text-xl font-semibold">AIUPS provides three programs</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-5 space-y-2">
            <div className="font-semibold">AP & SAT courses’ learning program</div>
            <ul className="text-sm text-neutral-800 list-disc pl-5 space-y-1">
              <li>AP math</li>
              <li>AP statistic</li>
              <li>AP physics</li>
              <li>AP chemistry</li>
              <li>AP computer science</li>
              <li>AP biology</li>
              <li>AP economics</li>
              <li>SAT math</li>
              <li>SAT physics</li>
              <li>SAT chemistry</li>
            </ul>
          </div>

          <div className="card p-5 space-y-2">
            <div className="font-semibold">Olympiad learning program</div>
            <ul className="text-sm text-neutral-800 list-disc pl-5 space-y-1">
              <li>COMS program with various courses for various competitions</li>
            </ul>
          </div>

          <div className="card p-5 space-y-2">
            <div className="font-semibold">Ivy fast track program</div>
            <p className="text-sm text-neutral-800">
              IFTP specialists have extensive application-review experience and help students
              distinguish themselves among strong competitors, focusing on how to stand out beyond
              being “qualified.”
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="card card-hover p-6 space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <a
            href={LINKS.faqExternal}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:underline"
          >
            Read on ivyshuttle.net →
          </a>
        </div>

        <div className="space-y-4 text-neutral-800">
          <div>
            <div className="font-semibold">1. What is IFTP?</div>
            <p className="mt-1 text-sm">
              IFTP is short for Ivy fast track program. It helps students examine and develop
              qualities top colleges look for, and is developed/delivered by professors/scientists
              from top US colleges (e.g., Harvard, MIT, Princeton). It supports high school students
              and also university students for skill and graduate application development.
            </p>
          </div>

          <div>
            <div className="font-semibold">2. Who work for IFTP?</div>
            <p className="mt-1 text-sm">
              IFTP specialists and instructors include professors, scientists, and researchers from
              top US universities such as Harvard, MIT, Princeton, Columbia, and Yale, with
              experience judging thousands of applications.
            </p>
          </div>

          <div>
            <div className="font-semibold">3. What differences can IFTP make?</div>
            <p className="mt-1 text-sm">
              Many applicants are already strong. IFTP focuses on helping students stand out through
              self-discovery and development of key characteristics that admissions committees value.
            </p>
          </div>

          <div>
            <div className="font-semibold">4. How does IFTP work?</div>
            <ul className="mt-1 text-sm list-disc pl-5 space-y-1">
              <li>Where: In your city or in Harvard, Cambridge MA, US</li>
              <li>Schedule: Any weekend (book three weeks ahead)</li>
              <li>
                Delivered by: IFTP specialist (top university professor/scientist and admissions
                committee member)
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">5. How long does IFTP last?</div>
            <p className="mt-1 text-sm">
              Initial 2-day IFTP weekend + monthly online guidance + college application training &amp;
              guidance.
            </p>
          </div>

          <div>
            <div className="font-semibold">6. Who should apply for IFTP?</div>
            <p className="mt-1 text-sm">
              Grade 9 to Grade 11 students with average grade ~90% who desire to go to US top
              colleges.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="card card-hover p-6 space-y-4">
        <h2 className="text-xl font-semibold">IFTP Process and Procedure</h2>
        <ol className="list-decimal pl-6 text-neutral-800 space-y-1">
          <li>Contact COMS for interview opportunity.</li>
          <li>After interview, admitted student contacts IFTP school office for IFTP forms.</li>
          <li>Send in all forms with payment to IFTP head office and book pre-consultation.</li>
          <li>Pre-consultation to collect more info about the student before IFTP.</li>
          <li>Wire the rest payment and confirm IFTP address and schedule.</li>
          <li>Initial 2 days IFTP weekend training and action plan development.</li>
          <li>After initial IFTP, monthly online IFTP guidance starts.</li>
          <li>College application training &amp; guidance.</li>
        </ol>
      </section>

      {/* Application + contact */}
      <section className="card card-hover p-6 space-y-4">
        <h2 className="text-xl font-semibold">Ivy Fast Track Program Application</h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={LINKS.ftpForm}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 w-fit"
          >
            Ivy FTP application and assessment form (DOC)
          </a>
        </div>

        <div className="text-sm text-neutral-800 space-y-1">
          <div>
            <span className="font-semibold">COMS Consulting Phone:</span> 403-397-8289
          </div>
          <div>
            <span className="font-semibold">Email Consulting / Application:</span>{" "}
            <a className="hover:underline" href="mailto:coms@olympicmathschool.ca">
              coms@olympicmathschool.ca
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}