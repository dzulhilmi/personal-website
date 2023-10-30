import { BackButton } from "@/components/back-button";
import { Badge } from "@/components/ui/badge";

const projectData = [
  {
    year: "2023",
    name: "Avantrade Back Office",
    madeAt: "Indivara Group",
    builtWith: [
      "React",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "Typescript",
    ],
    link: "",
  },
  {
    year: "2023",
    name: "Avantrade RM",
    madeAt: "Indivara Group",
    builtWith: [
      "React",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "Javascript",
    ],
    link: "",
  },
  {
    year: "2023",
    name: "Invite By",
    madeAt: "",
    builtWith: [
      "React",
      "Tailwind CSS",
      "Next JS 13",
      "Radix UI",
      "Typescript",
    ],
    link: "",
  },
  {
    year: "2023",
    name: "Discord Clone",
    madeAt: "",
    builtWith: [
      "React",
      "Next JS 13",
      "Shadcn UI",
      "Typescript",
      "Socket io",
      "Prisma",
      "MySQL",
      "Clerk",
    ],
    link: "https://github.com/dzulhilmi/discord-clone",
  },
  {
    year: "2023",
    name: "Zeducation",
    madeAt: "",
    builtWith: ["React", "NextJS 14", "Ant Design"],
    link: "",
  },
  {
    year: "2023",
    name: "Thread",
    madeAt: "",
    builtWith: [
      "React",
      "NextJS 13",
      "Tailwind CSS",
      "Shadcn UI",
      "Typescript",
      "MongoDB",
      "Clerk",
    ],
    link: "https://threads-app-fawn.vercel.app/",
  },
  {
    year: "2023",
    name: "Spotify Clone",
    madeAt: "",
    builtWith: [
      "React",
      "NextJS 13",
      "Tailwind CSS",
      "Typescript",
      "Shadcn UI",
      "Supabase",
      "Stripe",
      "Zustand",
    ],
    link: "https://github.com/dzulhilmi/spotify-clone",
  },
  {
    year: "2023",
    name: "Dalle Clone",
    madeAt: "",
    builtWith: [
      "React",
      "Tailwind CSS",
      "Javascript",
      "Open AI API",
      "File Saver",
    ],
    link: "https://github.com/dzulhilmi/dalle-clone",
  },
  {
    year: "2021",
    name: "Master Data",
    madeAt: "Mitra Informatika",
    builtWith: ["ExtJS", "Javascript", "CSS"],
    link: "",
  },
  {
    year: "2021",
    name: "Knowledge Management",
    madeAt: "Mitra Informatika",
    builtWith: ["ExtJS", "Javascript", "SCSS", "NodeJS", "Typescript", "MySQL"],
    link: "",
  },
  {
    year: "2021",
    name: "Fiola",
    madeAt: "Mitra Informatika",
    builtWith: ["ExtJS", "Javascript", "CSS"],
    link: "",
  },
  {
    year: "2021",
    name: "Electronic Acceptance Testing Permit (eATP)",
    madeAt: "Mitra Informatika",
    builtWith: ["ExtJS", "Javascript", "CSS"],
    link: "",
  },
  {
    year: "2021",
    name: "Hulu Clone",
    madeAt: "",
    builtWith: ["React", "NextJS 11", "Tailwind CSS", "Javascript"],
    link: "https://hulu-clone-fy1g89olk-dzulhilmi.vercel.app/",
  },
  {
    year: "2021",
    name: "Asset Management System",
    madeAt: "SMKN 1 Pasuruan",
    builtWith: ["React", "Javascript", "Material UI", "Redux", "Firebase"],
    link: "",
  },
  {
    year: "2019",
    name: "Guest Management System",
    madeAt: "Dinas Kominfo Pasuruan",
    builtWith: [
      "Code Igniter",
      "Javascript",
      "Bootstrap",
      "Php",
      "MySQL",
      "Jquery",
    ],
    link: "",
  },
];

export default function ProjectPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">
        <BackButton route="/" />
        <h1 className="text-4xl font-bold tracking-tight text-slate-600 dark:text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-background/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-600 dark:text-slate-200">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-600 dark:text-slate-200">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-600 dark:text-slate-200 lg:table-cell">
                Made At
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-600 dark:text-slate-200 lg:table-cell">
                Build with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-600 dark:text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, i) => (
              <tr key={i}>
                <td className="py-4 pr-4 align-top text-sm">{project.year}</td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-600 dark:text-slate-200">
                  <div className="block sm:hidden">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-blue-200 focus-visible:text-blue-300 group/link text-sm"
                      target="_blank"
                      href={project.link}
                    >
                      {project.name}
                    </a>
                  </div>
                  <div className="hidden sm:block">{project.name}</div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div className="whitespace-nowrap">{project.madeAt}</div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap gap-2">
                    {project.builtWith.map((subject) => (
                      <li key={subject}>
                        <Badge>{subject}</Badge>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-blue-500 dark:hover:text-blue-200 focus-visible:text-blue-300 group/link text-sm"
                    target="_blank"
                    href={project.link}
                  >
                    {project.link.slice(8, project.link.length)}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
