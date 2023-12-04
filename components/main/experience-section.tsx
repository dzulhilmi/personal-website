import { Title } from "@/components/main/section-title";
import { Badge } from "@/components/ui/badge";
import { MainButtonLink } from "./button-link";

const experienceData = [
  {
    startDate: "May 2023",
    endDate: "November 2023",
    positions: ["Front-end Developer"],
    company: {
      name: "Indivara Group",
      website: "https://indivara-group.com",
    },
    description:
      "Developed and styled interactive web apps for finance company",
    techStack: [
      "React",
      "Tailwind CSS",
      "Javascript",
      "Typescript",
      "Redux-toolkit",
      "Ant Design",
    ],
  },
  {
    startDate: "October 2021",
    endDate: "January 2023",
    positions: ["Fullstack Developer", "Front-end Developer"],
    company: {
      name: "Mitra Informatika",
      website: "https://mit.id",
    },
    description:
      "Developed, maintained, and shipped production code for clients like Telkomsel. also being technical support to handle every problem that clients get",
    techStack: ["ExtJs", "CSS", "Javascript", "Typescript", "Node Js", "MySQL"],
  },
  {
    startDate: "June",
    endDate: "August 2019",
    positions: ["Web Developer"],
    company: {
      name: "Kominfo",
      website: "https://kominfo.pasuruankota.go.id/",
    },
    description:
      "Worked with the IT Department to develop guest management system for every goverment office in Pasuruan city",
    techStack: [
      "Code Igniter",
      "PHP",
      "Javascript",
      "JQuery",
      "Bootstrap",
      "MySQL",
    ],
  },
];
export const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <Title>Experience</Title>
      <ol className="group/list">
        {experienceData.map((experience, i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {experience.startDate} - {experience.endDate}
              </header>
              <div className="z-10 sm:col-span-6">
                <div className="font-medium leading-snug text-slate-200">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-slate-200 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                    href={experience.company.website}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <h3>
                      {experience.positions[0]} @{" "}
                      <span>{experience.company.name}</span>
                    </h3>
                  </a>
                  {experience.positions.map((position, i) => {
                    if (i !== 0) {
                      return (
                        <div key={i} className="text-slate-500">
                          {position}
                        </div>
                      );
                    }
                  })}
                </div>
                <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                  {experience.description}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {experience.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <MainButtonLink route="/Resume FS.pdf">
          View Full Resume
        </MainButtonLink>
      </div>
    </section>
  );
};
