import React, { useMemo, useState } from "react";
import { contests } from "../data/content";

export default function Contests() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => {
    const s = new Set(contests.map((c) => c.category));
    return ["All", ...Array.from(s)];
  }, []);

  const rows = useMemo(() => {
    return filter === "All" ? contests : contests.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Contests</h1>
        <p className="text-neutral-700">Filter by category and keep deadlines visible.</p>
      </header>

      <div className="flex items-center gap-3">
        <label className="text-sm text-neutral-700" htmlFor="cat">Category</label>
        <select
          id="cat"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
        >
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="text-left text-neutral-600 bg-neutral-50">
            <tr>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Contest</th>
              <th className="py-3 px-4">Exam date</th>
              <th className="py-3 px-4">Deadline</th>
              <th className="py-3 px-4">Duration</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.name} className="border-t">
                <td className="py-3 px-4">{c.category}</td>
                <td className="py-3 px-4 font-medium">{c.name}</td>
                <td className="py-3 px-4">{c.examDate}</td>
                <td className="py-3 px-4">{c.deadline}</td>
                <td className="py-3 px-4">{c.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}