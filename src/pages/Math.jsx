import React from "react";

const comsHistoryImg = "https://www.olympicmathschool.ca/COMS/images/SDC11646.JPG";

export default function Math() {
  return (
    <div className="space-y-8">


 <section id="math" className="rounded-2xl p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Mathematics</h1>
        <p className="mt-2 text-sm text-neutral-700">
          COMS provides three series of math learning programs for all level students.{" "}
          <a className="underline" href="mailto:coms@olympicmathschool.ca">
            coms@olympicmathschool.ca
          </a>
        </p>
      </div>

      {/* Programs */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-5">
          <h3 className="text-base font-semibold">Math Olympiad Program</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Covers math contests from grades 1–12 for gifted students.
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <h3 className="text-base font-semibold">Singapore Math Program</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Singapore math learning program for grades 1–6.
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <h3 className="text-base font-semibold">AP &amp; IB Math Programs</h3>
          <p className="mt-2 text-sm text-neutral-700">
            AP/IB math support for grades 9–12.
          </p>
        </div>
      </div>

      {/* COMS History */}
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {/* <div className="rounded-2xl border p-5"> */}
          <div className="rounded-2xl p-5">
          <h3 className="text-lg font-semibold">COMCS History</h3>

          <ol className="mt-3 space-y-3 text-sm text-neutral-700">
            <li>
              <span className="font-semibold text-neutral-900">2010:</span>{" "}
              Olympic math program created (Dr. Adrian Tang; Dr. Allan Dong). Started at Calgary Tsinghua Chinese School (CTCS).
            </li>
            <li>
              <span className="font-semibold text-neutral-900">2014:</span>{" "}
              Program grew to cover grades 1–9 (elementary to junior high).
            </li>
            <li>
              <span className="font-semibold text-neutral-900">2015:</span>{" "}
              Became Calgary Olympic Math School (COMS), parallel branch to CTCS.
            </li>
            <li>
              <span className="font-semibold text-neutral-900">2016:</span>{" "}
              Expanded into three levels: elementary, junior high, and senior.
            </li>
            <li>
              <span className="font-semibold text-neutral-900">2018:</span>{" "}
              Added computer science &amp; Canadian computing competitions; school name expanded to Calgary Olympic Math &amp; Science School.
            </li>
          </ol>

          <p className="mt-4 text-sm text-neutral-700">
            Starting here, one day your kids may change history with our every efforts and wishes.
          </p>
        </div>

        {/* History Image */}
        {/* <div className="rounded-2xl border p-5"> */}
        <div className="rounded-2xl p-5">
          <div className="text-sm font-semibold">Early Program Photo</div>
          <img
            src={comsHistoryImg}
            alt="COMS early program group photo"
            className="mt-3 w-full max-w-full rounded-xl object-cover shadow-card"
          />
          <p className="mt-2 text-xs text-neutral-600">
            From the COMS history page.
          </p>
        </div>
      </div>
    </section>

    </div>
  );
}