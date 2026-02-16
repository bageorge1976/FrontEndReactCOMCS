import React from "react";

// Image from the school's official science section
const scienceBannerImg = "https://www.olympicmathschool.ca/COMS/images/science_banner.jpg";

export default function Science() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section id="science-header" className="rounded-2xl p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">Sciences</h1>
          <p className="mt-2 text-sm text-neutral-700 max-w-2xl">
            Science is the study of the nature and behavior of natural things and the knowledge that we obtain about them. 
            COMS provides comprehensive science programs designed to ignite curiosity and prepare students for prestigious 
            national and international competitions.{" "}
            <a className="underline text-comcs-blue" href="mailto:coms@olympicmathschool.ca">
              coms@olympicmathschool.ca
            </a>
          </p>
        </div>

        {/* Junior Science Olympiad Programs */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-800">Junior Science Olympiad Series</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 p-5 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-comcs-blue">Pre-Level Olympiad</h3>
              <p className="text-xs font-medium text-neutral-500 mb-2">Grades 3–4</p>
              <p className="text-sm text-neutral-700">
                Focuses on observing natural phenomena, basic scientific methods, and building a 
                foundation for logical thinking in physical and life sciences.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-comcs-blue">Level 1 Olympiad</h3>
              <p className="text-xs font-medium text-neutral-500 mb-2">Grades 5–6</p>
              <p className="text-sm text-neutral-700">
                Introduces basic principles of physics, chemistry, and biology through structured 
                problem-solving and conceptual exploration.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-comcs-blue">Level 2 Olympiad</h3>
              <p className="text-xs font-medium text-neutral-500 mb-2">Grades 7–9</p>
              <p className="text-sm text-neutral-700">
                Advanced scientific logic and experimental principles. Prepares students for 
                Junior Science contests and high school level transition.
              </p>
            </div>
          </div>
        </div>

        {/* High School Specialty Programs */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold text-neutral-800">Advanced Subject Contests</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-base font-semibold">Physics Program</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Preparation for CAP (Canadian Association of Physicists), SIN (Sir Isaac Newton), 
                and AAPT PhysicsBowl competitions.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-base font-semibold">Chemistry Program</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Covers advanced inorganic and physical chemistry to prepare for the CCC 
                (Canadian Chemistry Contest) and Chemistry Olympiads.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-base font-semibold">Biology Program</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Deep dive into molecular biology, genetics, and anatomy for the CBO 
                (Canadian Biology Olympiad) and USABO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Visual Section */}
      <section className="rounded-2xl bg-neutral-50 p-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Scientific Vision</h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              At Calgary Olympic Math & Science School, we believe that science is not just 
              about memorizing facts, but about understanding the world through rigorous 
              analysis and experimentation.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Our instructors guide students to look beyond the textbook, encouraging them to 
              participate in prestigious national contests that open doors to top-tier 
              universities and research opportunities.
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-comcs-blue">
                Inquiry • Analysis • Achievement
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card bg-white p-4">
            <img
              src={scienceBannerImg}
              alt="COMS Science Laboratory"
              className="w-full h-64 object-cover rounded-xl"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000"; // Fallback image if school link is broken
              }}
            />
            <p className="mt-3 text-xs text-center text-neutral-500 italic">
              Empowering the next generation of Canadian scientists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}