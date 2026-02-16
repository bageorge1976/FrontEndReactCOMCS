export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-6">
      <div
        className="
          w-full max-w-xl
          rounded-[28px]
          bg-white
          p-8
          shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          ring-1 ring-black/5
          transition
          hover:scale-[1.02]
          hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
        "
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">
            Tailwind v4 is working ✅
          </h1>
          <span className="text-xs rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 font-medium">
            v4 verified
          </span>
        </div>

        <p className="mt-4 text-neutral-700 leading-relaxed">
          This card uses <strong>arbitrary values</strong>, <strong>hover
          variants</strong>, <strong>custom shadows</strong>, and <strong>
          transitions</strong>. If this looks polished, Tailwind is fully active.
        </p>

        {/* Responsive test */}
        <div className="mt-6">
          <div className="text-sm text-neutral-500 mb-2">
            Resize the window 👇
          </div>
          <div
            className="
              grid gap-3
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
            "
          >
            <div className="h-16 rounded-xl bg-sky-500 flex items-center justify-center text-white font-medium">
              base
            </div>
            <div className="h-16 rounded-xl bg-amber-500 flex items-center justify-center text-white font-medium">
              sm
            </div>
            <div className="h-16 rounded-xl bg-violet-500 flex items-center justify-center text-white font-medium">
              md
            </div>
          </div>
        </div>

        {/* State + focus test */}
        <div className="mt-8">
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Focus test
          </label>
          <input
            type="text"
            placeholder="Click me"
            className="
              w-full
              rounded-xl
              border
              px-4 py-3
              text-sm
              outline-none
              transition
              focus:ring-4
              focus:ring-sky-200
              focus:border-sky-500
            "
          />
        </div>

        {/* Dark mode readiness */}
        <div className="mt-6 rounded-xl bg-neutral-900 text-neutral-100 p-4 text-sm">
          Dark block preview (for later dark mode support)
        </div>
      </div>
    </div>
  );
}