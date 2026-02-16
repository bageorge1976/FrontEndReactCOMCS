import React from "react";
import { Link } from "react-router-dom";
import { spotlight, featured, contests } from "../data/content";
import {CoursesInPersonOnline} from "../components/CoursesInPersonOnline";

import Slideshow from "../components/Slideshow";





function Card({ title, blurb, to }) {
  return (
    <Link
      to={to}
      className="card card-hover p-6"
    >
      <div className="text-base font-semibold group-hover:underline">{title}</div>
      <div className="text-sm text-neutral-700 mt-2">{blurb}</div>
      <div className="text-sm font-medium mt-4">Learn more →</div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Spotlight (MIT-like hero block) */}
      <section className="rounded-2xl border border-neutral-200 p-5 hover:shadow-md transition-shadow">
        <div className="text-xs uppercase tracking-wide text-neutral-600">
          Spotlight: {spotlight.dateLabel}
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
          {spotlight.title}
        </h1>
              {/* left— Image */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-6"></div>
            <Slideshow />

        <p className="mt-4 text-lg md:text-xl font-semibold text-neutral-800 leading-relaxed">
        {spotlight.blurb}
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            to={spotlight.cta.to}
            className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
          >
            {spotlight.cta.label}
          </Link>
          <Link
            to="/ivy-league"
            className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
          >
            Ivy League
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
          >
            Contact
          </Link>

        </div>
      </section>
      <CoursesInPersonOnline />
      {/* Featured cards */}
      <section>
        <h2 className="text-xl font-semibold">Programs</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {featured.map((x) => (
            <Card className="card card-hover p-6" key={x.title} {...x} />
          ))}
        </div>
      </section>

      {/* Upcoming contests */}
      <section className="card card-hover rounded-3xl border p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Upcoming contests</h2>
            <p className="text-sm text-neutral-700 mt-1">
              Quick view of exam dates and registration deadlines.
            </p>
          </div>
          <Link to="/contests" className="text-sm font-medium hover:underline">
            View all →
          </Link>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-600">
              <tr>
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4">Contest</th>
                <th className="py-2 pr-4">Exam date</th>
                <th className="py-2 pr-4">Deadline</th>
                <th className="py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {contests.slice(0, 5).map((c) => (
                <tr key={c.name} className="border-t">
                  <td className="py-3 pr-4">{c.category}</td>
                  <td className="py-3 pr-4 font-medium">{c.name}</td>
                  <td className="py-3 pr-4">{c.examDate}</td>
                  <td className="py-3 pr-4">{c.deadline}</td>
                  <td className="py-3">{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}