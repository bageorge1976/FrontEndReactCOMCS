import React from "react";

const news = {
  title: "News & Events",
  dateLabel: "News Report (February 10, 2026)",
  highlights: [
    "Congratulations to Gary Wang and Riley Jin won the 2025 COMC and be qualified to 2026 CMO.",
    "Congratulations! In the 2025 AMC10/12 America Mathematics Competition for High School Students, Ivy Zhao, Tedaisy Zhao, 11 students won the high positions and successfully advanced to the 2026 American Invitational Mathematics Competition AIME.",
    "Congratulations! In the 2024 AMC10/12 America Mathematics Competition for High School Students, Camila, Erika, and 8 other students won the high positions and successfully advanced to the 2025 American Invitational Mathematics Competition AIME.",
    "The results of the 2024 CJMC Canada Jay Mathematics Competition were announced. Denial Wu, a 8th grade math student, won a gold medal with full marks. Another student in 6th grade won a bronze medal in Canada. Congratulations to the winning students and best wishes to all the participating students.",
    "Congratulations! In the 2024 CGC Canadian Geometry Competition, Math student Aadesh Kumar won one gold medal and Maddux Mao won one silver medal in Canada.",
    "In the 2024 Waterloo Fryer/Galois/Hypatia High School Mathematics Competition, three students, Gary Wang, Shotaro Richardson, and Jiaqi Yang, were on the Honor Roll. Jiaqi Yang won first place in the Hypatia Competition in Alberta. Congratulations to the above award-winning students.",
    "In the 2024 Math Kangaroo competition, Zichen Hu won the second place in Kangaroo 9/10 in Canada. Congratulations to Zichen Hu.",
    "In the first round of the 2024 Alberta High School Mathematics Contest (AHSMC), Larry Wang won the first place in Zone I. Congratulations to Larry.",
    "Congratulations! Peixin Jiang, Raymond Ma, Wenhan Zhang, and Ivy Zhao won the AMC8 America Mathematics Competition on January 18, 2024. Peixin Jiang won the first place in the 1% winning group.",
    "In the 2023 AMC10/12 America Mathematics Competition for High School Students, Pranav, Keane Yee Tan and 8 other students won the high positions and successfully advanced to the 2024 American Invitational Mathematics Competition AIME.",
    "In the 2023 CIMC Canada Intermidate Mathematics Contest, Shotaro Richardson won the first place in Alberta, and Keane Tan won the second place in Alberta. Gary Wang also made it to the honor roll. Congratulations to these award-winning students.",
    "In the first Canada-wide CLMC Mathematics Competition held on September 28, 2023, Olympiads School Pranav Pathak won the Canadian bronze medal and the Alberta gold medal. Six students including Gary Wang, Keivin Cui, Larry Wang, Shotaro Richardson, Tianhong Xu and Willian Song were on the honor roll. Congratulations to these winning students.",
    "In the second round of the 2023 Alberta High School Students Mathematics Competition AHSMC, two junior high school students Qixuan Ding and Edward Xue won fourth and ninth place in the province respectively. Congratulations to Qiquan and Edward.",
    "In the 2022 American High School Mathematics Competition AMC10/12, 4 students won and advanced to AIME.",
    "2022 CJMC: William Song won the silver medal, student Ryan Xiao won the bronze medal, and student Xin Li won the bronze medal in the grade 6 primary school group.",
  ],
  older: [
    "2021 CMGC Gold Awards: Bill Gu, Qixuan Ding, Tianhong Xu, Edward Xue. Silver Award: Chenwei Pen. Honour Roll: Emily Hoang, Ryan Xiao, Deanne Zhu",
    "2021 COMC 1st Place in Alberta: Michael Chan, the only qualified contestant from Alberta for 2021 CMO.",
    "2021 AMC12 & AIME qualifiants: Rom Wang, Riana Dutta, Kinsley Zhong, Minghan Li",
    "2020 AHSMC Fellow:",
    "1st Place: Xinhua Roger Cao, one of two qualified contestants from Alberta for 2020 CMO.",
    "2nd Place: Yundi George Duan, one of two qualified contestants from Alberta for 2020 CMO.",
    "3rd: Jingyu Chen",
    "4th: Riana Dutta",
    "9th Place: Richard Zhang",
    "10th Place: Arvna Kumar",
    "2020 CCC/CCO third place in Alberta: Kevin Wang",
    "2019 CCC/CCO second place in Alberta: Alex Dong",
    "Grade12 student Xinhua Cao won the 1st place with the only full marks and the top prize in 2019 Canadian Senior Math Contest (CSMC).",
    "Grade 10 students Michael Chan and Jingyu Chen got the 8th place and the 9th place respectively in 2018 Canadian Intermidate Math Contest (CIMC).",
    "Grade 11 student Xinhua Cao won the fourth place and G11 prize in 2018 COMC.",
    "We have three students in Top 5, and 14 students in Top 50 in 2018 Calgary Junior High School Math Contest. Rayn Cao got the second place in 2018 CJHSMC. We are proud of that about 26% of Top 50 CJHSMC were studied math at COMCS.",
    "As a team, Michael Chan (g9), Riley Li (g9) and Andy Liu (g7) won the 1st place from 24 teams in 2017 Calgary Junior High Team Math Attack",
    "Grade 6 students Andy Liu and Brooks Liu got the gold medals with full mark in 2017 Calgary Elementary Math Contest",
    "Grade 8 students Jane Zhi got the 1st place with full mark in 2017 Gauss contest",
    "Grade 9 students Kevin Wang, Andrew Li and Jason Zhao, grade 8 students Micheal Chan, Riley Li, Riana Dutta, and Kevin Zhang, grade 7 students Allan Cao and Richard Zhang, got the top 50 in 2017 Calgary Junior High School Math Contest.",
    "Grade 8 student Michael Chan got the first place with full mark and national Gold medal in 2017 Kangaroo contest (grade 8).",
    "Grade 10 students Xinzao Zhu and Haowei Li got outstanding achievement in Galois Contest.",
    "Grade 5 Brooks Liu, Grade 6 Allan Cao and Richard Zhang recently got gold medal with full mark in 2016 Calgary Elementary Math Contest",
    "Grade 6 student Richard Zhang got full mark in 2016 Gauss Contest.",
    "Grade 6 student Allan Cao and grade 8 students Kevin Wang and Andrew Li got the top 50 in 2016 Calgary Junior Math Contest.",
    "Grade 7 student Riana Dutta got the second place in 2016 Math Kangaroo Contest (g7) in Calgary.",
    "Grade 5 student Brooks Liu got the second place in 2016 Math Kangaroo Contest (g5) in Calgary, and got the National Gold medal.",
    "On June 13, 2015 Mount Royal University, COMS students Terry Tian (g6), Allan Cao (g5) and Ana Du Cristea (g5) have been awarded Gold Medal with full mark, and two Silver Medals respectively in 2015 Calgary Elementary School Math Contest.",
    "COMS grade-9 math students have performed well in the recent Fryer contest (held in late April, scores reported in May and latest announced from University of Waterloo). Carman Hsieh and Rosie Zhao both get their awards as distinguished students. Of the 40 full marks, their scores are: Carman Hsieh: 38 (95%) -- outstanding in Alberta and top 20 across Canada; Rosie Zhao: 36 (90%) -- outstanding in Alberta and top 80 across Canada",
  ],
};

function ListCard({ title, items }) {
  return (
    <section className="card card-hover p-6">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-800">
        {items.map((t, i) => (
          <li key={i} className="leading-relaxed">
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function News() {
  return (
    <div className="space-y-8">
      <section className="card card-hover p-6">
        <div className="text-xs uppercase tracking-wide text-neutral-600">
          {news.dateLabel}
        </div>
        <h1 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
          {news.title}
        </h1>
        <p className="mt-3 text-neutral-700">
          Updates and achievements from Calgary Olympic Math & Science School.
        </p>
      </section>

      <ListCard title="Latest Highlights" items={news.highlights} />
      <ListCard title="Earlier Highlights" items={news.older} />
    </div>
  );
}