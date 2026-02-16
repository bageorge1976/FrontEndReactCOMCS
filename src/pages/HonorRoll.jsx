import React from "react";
import trophyImage from "../assets/trophy3.png";

const honorRollSections = [
  {
    title: "American Invitational Math Examination (AIME)",
    items: [
      { label: "2026 AIME qualified students", detail: "Ivy Zhao and 11 students won the high positions and successfully advanced to 2026 AIME." },
      { label: "2025 AIME qualified students", detail: "Camila, Erika Shan, and other 8 students won the high positions and successfully advanced to 2025 AIME." },
      { label: "2024 AIME qualified students", detail: "Pranav Pathak, Keane Yee Tan, Erika Shan, Ryan Ye, Marcus Yu, James Zhang, Kenneth You, Paul Dong" },
      { label: "2023 AIME qualified students", detail: "Edward Xue, Kenneth You, Erika Shan, Zhiquan Wang, Andy Shi" },
      { label: "2022 AIME qualified students", detail: "Long Zhou, Gu Shougan, Ding Qixuan, Xiao Melissa, Xia Tianhao, Wang Alisha" },
      { label: "2021 AIME qualified students", detail: "Luomuyuan Wang, Minghan Li, Riana Dutta, Mathew Wang, Shougan Gu, Kingsley Zhong" },
      { label: "2020 AIME qualified students", detail: "Yundi Duan, Xinhua Cao, Zachary Ren, Zihang Liu, Jingyu Chen, Xiangyu Chen, Michael Chan" },
    ],
  },

  {
    title: "AMC 8 / 10 / 12",
    items: [
      { label: "2025 AMC12A and 12B", detail: "JinLin Liu and Gary Wang are winners" },
      { label: "2025 AMC10A and 10B", detail: "Ivy Zhao and Riley Jin are winners" },
      { label: "2024 AMC12A and 12B", detail: "Camila Ma and Erika Shan are winners" },
      { label: "2024 AMC10A and 10B", detail: "Vincent Zheng and Riley Jin are winners" },
      { label: "2023 AMC12A and 12B", detail: "Erika Shan, Winner" },
      { label: "2022 AMC12B", detail: "Erika Shan, Winner" },
      { label: "2022 AMC10A/B", detail: "Edward Xue, Winner" },
      { label: "2021 AMC12A", detail: "Luomuyuan Wang, Winner" },
      { label: "2021 AMC10A", detail: "Shougan Gu, Winner" },
      { label: "2020 AMC12B", detail: "Yundi Duan, Gold in Alberta, top 1%." },
      { label: "2019 AMC8", detail: "Larry Wang, Gold in section, winner, top 1%." },
    ],
  },

  {
    title: "Alberta High School Math Competition (for G9–G12)",
    items: [
      {
        label: "2024–2025",
        detail:
          "Kenneth You (G12) the 2nd place in the 2nd round and be qualified to participate in 2025 CMO. Pranav Pathak and Jiaqi Yang in Top 20.",
      },
      { label: "2023–2024", detail: "Larry Wang (G11) the 1st place in Zone I in the first round." },
      {
        label: "2022–2023",
        detail:
          "Long Zhou (G10, Westmount) the 1st place in the first round. Qixuan Ding (G9) the 2nd place in the first round. Edward Xue (G9) in Top 50 in Alberta.",
      },
      {
        label: "2021–2022",
        detail:
          "Arnav Kumar (G12, Webber) the 1st place in both 1st round and 2nd round. Richard Zhang (G12, Western Canada) the 2nd place in the 1st round. Qixuan Ding (G8) the 6th place in the first round. Long Zhou (G9, Westmount) the 3rd place in the 2nd round. 11 previous and current students are listed in the Top 50 in Alberta.",
      },
      {
        label: "2020–2021",
        detail:
          "Richard Zhang (G11, Western Canada) the 5th place. Jingyu Chen (G12, Western Canada) the 5th place. Arnav Kumar (G11, Webber) the 7th place. Minghan Li (G12) the 12th place. Luomuyuan Wang (G12) the 18th place.",
      },
      {
        label: "2019–2020 (2nd round)",
        detail:
          "Xinhua Cao (G12, Robert Thirsk) the 1st place. Jingyu Chen (G11, Western Canada) the 3rd place. Riana Dutta (G11, Western Canada) the 4th place. Richard Zhang (G10, Western Canada) the 9th place. Arnav Kumar (G9, Webber) the 10th place. Michael Chan (G11, Western Canada) the 13th place.",
      },
      { label: "2018–2019", detail: "Xinhua Cao (G11, Robert Thirsk) the fourth place. 8 students are listed in the Top 50 in Alberta." },
      { label: "2017–2018", detail: "Richard Kang (G12, Dr. E.P. Scarlett) the 1st place." },
      {
        label: "2016–2017",
        detail:
          "Richard Kang (G11, Dr. E.P. Scarlett) the 1st place. Jeffrey Zhou (G12, Western Canada) the 3rd place. Jane Shi (G12, Sir Winston Churchill) the 6th place.",
      },
      {
        label: "2015–2016",
        detail:
          "Richard Kang (G10, Dr. E.P. Scarlett) the third place. Jane Shi (G11, Sir Winston Churchill) & Jeffrey Zhou, the fifth place. Diwen Shi (G11, Sir Winston Churchill) the 12th place.",
      },
      { label: "2014–2015", detail: "Jeffrey Zhou (G10) the second place. Richard Kang (G9) the ninth place." },
      { label: "2013–2014 (2nd round)", detail: "Richard Kang (G8) the second place. Jeffrey Zhou (G9) the third place." },
    ],
  },

  {
    title: "COMC",
    items: [
      { label: "2025", detail: "Mingze Wang (Grade 11) Bronze award in Alberta Champions and qualified for 2026 CMO. Riley Jin (Grade 10), the first place as a female in Alberta, qualified for 2026 CMO." },
      { label: "2024", detail: "Shotaro Richardson, Bronze in Grade 11 in Alberta. Gary Wang Honorable Mentions in Grade 10 in Alberta. Eli Seeliger Honorable Mentions in Grade 8 in Alberta." },
      { label: "2023", detail: "Zhou Long Honorable Mentions in Alberta; Silver in Grade 11 in Alberta. Shotaro Richardson Silver award in Grade 10 in Alberta. Ryan Xiao Honorable Mention in Grade 9." },
      { label: "2022", detail: "Zhou Long Honorable Mentions in Alberta; Gold in Grade 10 in Alberta. Pranav Pathak and Kenneth You Honorable Mention in Grade 10. Shotaro Richardson Silver award in Grade 10 in Alberta." },
      { label: "2021", detail: "Michael Chan Gold Award and the only qualified contestant from Alberta for 2021 CMO. Qixuan Ding Gold Award – Alberta Grade 8." },
      { label: "2019", detail: "Yundi Duan Silver in Alberta. Richard Zhang Bronze in Alberta. Arnav Kumar Honor Roll in Alberta. Zhou Long Honour Roll in Grade 8 in Alberta." },
      { label: "2018", detail: "Xinhua Cao Silver Award and qualified for 2018 CMO. Zihang Liu, the top 91%." },
      { label: "2017", detail: "Richard Kang, Gold in Alberta." },
      { label: "2016", detail: "Jeffrey Zhou Silver in Alberta; Richard Kang Bronze in Alberta." },
      { label: "2015", detail: "Yi Ding and Richard Kang in Honour Roll in Alberta. Josh Geng in Honour Roll in Grade 11." },
      { label: "2014", detail: "Jane Shi Bronze in Alberta, the best in Canada for Grade 10. Josh Geng best in Alberta for Grade 10. David Luo Gold award in Alberta grade 8 and under." },
      { label: "2013", detail: "Richard Kang Bronze award in Alberta Champions and Gold award in Alberta grade 8 and under. Jane Shi in Honour Roll in Grade 9 in Alberta." },
      { label: "2012", detail: "Richard Kang, Silver in Grade 8 or under in Alberta." },
    ],
  },

  {
    title: "Canadian Geometry Competition (CGC)",
    items: [{ label: "2024", detail: "Gold Award: Aadesh Kumar. Silver Award: Maddux Mao." }],
  },

  {
    title: "Canadian Lynx Math Competition (CLMC)",
    items: [
      {
        label: "2023",
        detail:
          "Canada Bronze and Alberta Golden Award: Pranav Pathak. Honorable Mention: Garry Wang, Kevin Cui, Larry Wang, Shotaro Richardson, Tianhong Xu, Willian Song, and two previous students Edward Xue, and Edwin Zhu.",
      },
    ],
  },

  {
    title: "Canadian Jay Math Contest (CJMC)",
    items: [
      { label: "2024", detail: "Gold Award: Deniakl Wu" },
      { label: "2022", detail: "Silver Award: William Song. Bronze Award: Ryan Xiao. Honour Roll: Xin Li." },
      {
        label: "2021",
        detail:
          "Gold Awards: Bill Gu, Qixuan Ding, Tianhong Xu, Edward Xue. Silver Award: Chenwei Pan. Honour Roll: Emily Hoang, Ryan Xiao, Deanne Zhu. Performance with Distinction: Erica Wang.",
      },
      { label: "2020", detail: "Bronze Award, Alberta Silver Award: Edison Wang. Bronze Award (Grade 6): Ryan Xiao. Honour Roll: Hemant Srinivasan, Kenneth You, Lelin Wang, Byan Wu." },
    ],
  },

  {
    title: "Calgary Elementary School Math Contest (CESMC, Grade 6)",
    items: [
      { label: "2021", detail: "Gold Award with full marks: Bill Gu (Grade 5)" },
      { label: "2019", detail: "Gold Award with full marks: Larry Wang (Grade 6)" },
      { label: "2017", detail: "Gold Award with full marks: Brooks Liu (G6), Andy Liu (G6)" },
      { label: "2016", detail: "Gold Award with full marks: Brooks Liu (G5), Allan Cao (G6), Ana Du Cristea (G6), Richard Zhang (G6)" },
      { label: "2015", detail: "Gold Award with full marks: Terry Tian (G6). Silver Award: Allan Cao (G5) and Ana Du Cristea (G5)" },
    ],
  },

  {
    title: "Calgary Junior High School Math Contest (CJHSMC, Grade 9)",
    items: [
      { label: "43th (2019)", detail: "Yizhan Zhi (G9) 2nd place; Richard Zhang (G9) 5th place; Kerry Liu (G9) & Sarah Chen (G9) 10th place. 12 junior high students were in the TOP 50." },
      { label: "42th (2018)", detail: "Ryan Cao (G9) 2nd place; Jingyu Chen (G9) 4th place; Michael Chan (G9) 5th place. 14 junior high students were in the TOP 50." },
      { label: "41th (2017)", detail: "Kevin Wang (G9), Andrew Li (G9), Jason Zhao (G9), Michael Chan (G8), Kevin Zhang (G8), Riley Li (G8), Riana Dutta (G8), Allan Cao (G7), Richard Zhang (G7) in the top 50." },
      { label: "40th (2016)", detail: "Allan Cao (G6), Kevin Wang (G8), Andrew Li (G8) in the top 50." },
      { label: "39th (2015)", detail: "Richard Kang (G9), the first place." },
      { label: "38th (2014)", detail: "Richard Kang (G8), the first place." },
      { label: "37th (2013)", detail: "Richard Kang (G7), the first place." },
      { label: "36th (2012)", detail: "Richard Kang (G6), the third place." },
    ],
  },

  {
    title: "Gauss Contest",
    items: [
      { label: "2017", detail: "Jane Zhi (G7) 1st place with perfect score (150); Michael Chan (G8) 2nd place (144); Elyssia Wang (G7) 3rd place (142)." },
      { label: "2016", detail: "Richard Zhang (G6) 1st place in Grade 7 with perfect score (150); Selena Zheng (G6) 2nd place in Grade 7 (138); Riana Dutta and Allan Cao 3rd place in Grade 7 (137)." },
      { label: "2015", detail: "Richard Zhang (G5), Allan Cao (G5), Terry Tian (G6), Jeff Wang (G7) (136)" },
      { label: "2014", detail: "Kevin Wang, 1st place with perfect score (150)." },
    ],
  },

  {
    title: "Math Kangaroo Contest",
    items: [
      { label: "2017", detail: "Michael Chan (Grade 8) national Gold medal with full marks; Dian Tian and Tianren Li (Grade 8) Bronze medal. Yanzhen (Grade 6) national Silver medal." },
      { label: "2016", detail: "Brooks Liu (Grade 5) national Gold medal. Riana Dutta (Grade 7) second place in Calgary region." },
    ],
  },

  {
    title: "CSMC / CIMC",
    items: [
      { label: "2019", detail: "Xinhua Cao, first place with the only full marks and the top prize." },
      { label: "2018", detail: "Xinhua Cao, first place with the top prize. Michael Chan 8th place; Jingyu Chen 9th place." },
      { label: "2016", detail: "Richard Kang, first place with full marks." },
      { label: "2014", detail: "Rosie Zhao, the top score among Calgary participating students." },
    ],
  },

  {
    title: "Pascal / Cayley / Fermat & Fryer / Galois / Hypatia (Grades 9/10/11)",
    items: [
      { label: "2021", detail: "Kevin Li, Kushal Chaturvedi, Howard Li, Angela Chen won School Champion medals. Kenneth You, Yizhan Zhi the outstanding contestants." },
      { label: "2016", detail: "John Zhu and Bill Li, the outstanding student in Calgary." },
      { label: "2014", detail: "Jane Shi, the top score among Calgary participating students." },
      { label: "2019", detail: "Sarah Chen (G9) and Arnav Kumer (G9) scored 40 (100% full mark), top in Canada." },
      { label: "2017", detail: "Kevin Wang scored 38 (95% of 40), outstanding in Alberta, top 20 across Canada." },
      { label: "2015", detail: "Carman Hsinh scored 38 (95% of 40), outstanding in Alberta, top 20 across Canada. Rosie Zhao scored 36 (90%), outstanding in Alberta, top 80 across Canada." },
      { label: "2014", detail: "Josh Geng, the first place with perfect mark." },
    ],
  },

  {
    title: "Canadian Chemistry Contest & Chemistry Olympiad",
    items: [
      { label: "2021", detail: "Kevin Wang (G12), 2nd place in Alberta." },
      { label: "2020", detail: "Kevin Wang (G11), 3rd place in Alberta." },
      { label: "2019", detail: "Alex Dong (G11), 2nd place in Alberta and BC." },
    ],
  },

  {
    title: "Canadian Computing Competition",
    items: [
      { label: "2021", detail: "CCC-Senior Honour Roll: Kingsley Zhong. CCC-Junior Honour Roll: Tianhao Xia (full marks). CCC-Junior Honour Roll: Joshua Shi." },
      { label: "2020", detail: "CCC-Junior Honour Roll: Raymond Li. CCC-Junior Honour Roll: Kingsley Zhong." },
    ],
  },
];

function SectionCard({ title, items }) {
  return (
    <section className="card card-hover p-6">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-xl border border-comcs-blue/30 p-4 shadow-[0_10px_22px_rgba(11,78,162,0.18)]">
            <div className="font-semibold text-neutral-900">{it.label}</div>
            <div className="mt-1 text-sm md:text-base text-neutral-700">{it.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HonorRoll() {
  return (
    <div className="space-y-8">
    <section className="card card-hover p-6 flex flex-col md:flex-row items-center gap-8">
    {/* 1. The Text Content Container (Left side on desktop) */}
    <div className="flex-1">
        <div className="text-xs uppercase tracking-wide text-neutral-600">Honor Roll</div>
        <h1 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
        Student Winners
        </h1>
        <p className="mt-3 text-neutral-700">
        Highlights of student achievements across mathematics, science, and computing contests.
        </p>
        
{/*         <button className="mt-6 px-5 py-2 bg-comcs-blue text-white rounded-lg text-sm font-medium hover:opacity-90 transition">
        View All Winners
        </button> */}
    </div>

    {/* 2. The Image Container (Right side on desktop) */}
    {/* Updated Image Container */}
    <div className="w-full md:w-1/4 shrink-0">
        <img 
        src={trophyImage} 
        alt="Student Winners" 
        /* REMOVED: object-cover, aspect-3/2 
            ADDED: h-auto (ensures height scales with width)
        */
        className="w-1/2 h-auto rounded-xl shadow-sm"
        />
    </div>
    </section>

      <div className="space-y-8">
        {honorRollSections.map((s) => (
          <SectionCard key={s.title} title={s.title} items={s.items} />
        ))}
      </div>
    </div>
  );
}