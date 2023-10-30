import { Title } from "@/components/main/section-title";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    startDate: "2016",
    endDate: "January 2021",
    major: "Informatics Engineering",
    school: {
      name: "Brawijaya University",
      website: "https://filkom.ub.ac.id/",
    },
    description:
      "My focus when i was in college is to learn how to built and maintained software. For example, software for education, telecommunications, business, entertainment and others, including software for models and simulations.",
    subjects: [
      "Software Engineering",
      "Web Programming",
      "Software Testing",
      "Project Management Software",
      "Embedded Systems Engineering",
    ],
  },
  {
    startDate: "2017",
    endDate: "September 2021",
    major: null,
    school: {
      name: "Islamic Boarding School Al Hikam",
      website: "https://alhikam.ac.id/",
    },
    description:
      "Islamic Boarding School Al Hikam not only nurtured my passion for technology but also enriched my character, equipping me with a profound sense of purpose and a commitment to both my personal and professional growth. This duality of education has played an integral role in shaping my journey and the way I approach life's challenges with a sense of balance and harmony.",
    subjects: [],
  },
];
export const Education = () => {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <Title>Education</Title>
      <ol className="group/list">
        {educationData.map((education, i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {education.startDate} - {education.endDate}
              </header>
              <div className="z-10 sm:col-span-6">
                <div className="font-medium leading-snug text-slate-200">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-slate-200 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                    href={education.school.website}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <h3>
                      {education.major} @ <span>{education.school.name}</span>
                    </h3>
                  </a>
                </div>
                <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                  {education.description}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {education.subjects.map((subject) => (
                    <li key={subject}>
                      <Badge>{subject}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
        <li></li>
      </ol>
    </section>
  );
};
