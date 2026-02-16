import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ title, subtitle, price, availability, bullets }) {
  return (
    <div className="rounded-2xl border bg-white p-6 flex flex-col">
      <div className="text-lg font-semibold">{title}</div>
      {subtitle ? <div className="mt-1 text-sm text-neutral-600">{subtitle}</div> : null}

      {bullets?.length ? (
        <ul className="mt-4 space-y-1 text-sm text-neutral-700">
          {bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-medium">{price}</div>
          <div className="text-xs text-neutral-600">{availability}</div>
        </div>

        {/* The original page doesn’t specify checkout flow,
            so we provide a contact CTA (common for small “store” pages). */}
        <Link
          to="/contact"
          className="inline-flex rounded-xl bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          Inquire
        </Link>
      </div>
    </div>
  );
}

export default function Textbooks() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Welcome to COMCS Online Bookstore
        </h1>
        <p className="text-neutral-700 max-w-3xl">
          Contents of Textbooks and References.
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ItemCard
          title="Math Olympiad"
          subtitle="Grades 7–12"
          bullets={[
            "Course notes",
            "Assignments",
            "Hints, tests and solutions",
          ]}
          price="$100"
          availability="Available"
        />

        <ItemCard
          title="Gauss Math"
          subtitle="Grades 6–8"
          bullets={["Textbook", "Solutions"]}
          price="$100"
          availability="Available"
        />

        <ItemCard
          title="Computer programming textbooks"
          subtitle=""
          bullets={[]}
          price="$100"
          availability="Available"
        />
      </section>

      <section className="rounded-3xl border bg-neutral-50 p-6 md:p-8">
        <h2 className="text-xl font-semibold">How to order</h2>
        <p className="mt-2 text-sm text-neutral-700 max-w-3xl">
          The original page lists items, pricing, and availability but doesn’t specify an online
          checkout. Use the Contact page to request a purchase and pickup/delivery details.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
          >
            Contact to order
          </Link>
          <Link
            to="/register"
            className="inline-flex justify-center rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
          >
            Register for courses
          </Link>
        </div>
      </section>


    </div>
  );
}