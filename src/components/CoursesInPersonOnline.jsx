import { Link } from "react-router-dom";

export function CoursesInPersonOnline() {
  return (
    <section className="card card-hover p-6">
      <div className="text-xs uppercase tracking-wide text-neutral-600">
        COMCS Courses
      </div>

      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
        COMCS Courses in Person and Online
      </h2>

      <p className="mt-3 text-neutral-700">
        Choose from full-year programs, weekday after-school group courses, or 1-on-1 private tutoring.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {/* 1) Full Year Courses */}
        <div className="card p-5">
          <div className="text-sm font-semibold">Full Year Courses</div>
          <p className="mt-2 text-sm text-neutral-700">
            In-person programs located at Vincent Massey School and Robert Warren School,
            running from September to June. 
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to="/admissions"
              className="rounded-xl bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Apply (Admission)
            </Link>
            <a
              href="https://www.olympicmathschool.ca/COMS/forms/COMS%20application%20form.doc"
              className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-white"
            >
              Student application form
            </a>
          </div>
        </div>

        {/* 2) Weekday After School Courses */}
        <div className="card p-5">
          <div className="text-sm font-semibold">Weekday After School Courses</div>
          <p className="mt-2 text-sm text-neutral-700">
            In-person at 9 Legacy Landing SE, Calgary, or online via Google Meet. 
          </p>

          <div className="mt-3 text-sm text-neutral-800">
            <div className="font-medium">Examples:</div>
            <ul className="mt-1 list-disc pl-5 space-y-1">
              <li>AP/IB/Competitive Physics (Mon 7–9pm) </li>
              <li>AMC 8 (Wed 7–9pm) </li>
              <li>AMC 10/12 (Thu 7–9pm) </li>
              <li>Computer Coding (Wed 5–6:30pm) </li>
              <li>AP/IB/Competitive Chemistry (Fri 7–9pm) </li>
            </ul>
          </div>

          <div className="mt-4 text-xs text-neutral-600">
            Order a seat: call <span className="font-medium">403-397-8289</span> or email{" "}
            <a className="underline" href="mailto:coms@olympicmathschool.ca">
              coms@olympicmathschool.ca
            </a>
            . 
          </div>
        </div>

        {/* 3) Individual Private Tutoring Courses */}
        <div className="card p-5">
          <div className="text-sm font-semibold">Individual Private Tutoring</div>
          <p className="mt-2 text-sm text-neutral-700">
            Weekday evening times (4–6pm; 7–9pm). Order a seat by phone/email. 
          </p>

          <div className="mt-3 text-sm text-neutral-800">
            <div className="font-medium">Topics include:</div>
            <ul className="mt-1 list-disc pl-5 space-y-1">
              <li>AP/IB Math 20/30/31 </li>
              <li>AP/IB Physics 20/30 </li>
              <li>AP/IB Chemistry 20/30 </li>
              <li>AP/IB Biology 20/30 </li>
              <li>AP Computer Science (Java) </li>
              <li>Programming (Python/C/C++) for USACO & CCC </li>
              <li>Competitive Math / Physics / Chemistry </li>
              <li>Math tutoring (elementary to high school) </li>
              <li>MCAT tutoring </li>
            </ul>
          </div>

          <div className="mt-4 text-xs text-neutral-600">
            Call <span className="font-medium">403-397-8289</span> or email{" "}
            <a className="underline" href="mailto:coms@olympicmathschool.ca">
              coms@olympicmathschool.ca
            </a>
            . 
          </div>
        </div>
      </div>
    </section>
  );
}