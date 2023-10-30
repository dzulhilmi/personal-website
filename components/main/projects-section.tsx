import Image from "next/image";

import { Title } from "@/components/main/section-title";
import { Badge } from "@/components/ui/badge";
import { MainButtonLink } from "./button-link";

const projectData = [
  {
    title: "Discord Clone",
    imageUrl: "/discord-clone.png",
    route: "https://github.com/dzulhilmi/discord-clone",
    description:
      "The Discord clone is a versatile and feature-rich communication platform that mirrors the functionalities of the popular Discord app. It's designed to bring communities, friends, and colleagues together in a seamless and engaging environment. Just like the original Discord, the clone offers real-time text, voice, and video communication, allowing users to create servers, channels, and organize conversations with ease.",
    techStack: [
      "React",
      "Tailwind CSS",
      "NextJS",
      "Typescript",
      "Shadcn UI",
      "Prisma",
      "Socket IO",
      "MySQL",
    ],
  },
  {
    title: "Thread Clone",
    imageUrl: "/thread-clone.png",
    route: "https://github.com/dzulhilmi/threads_app",
    description:
      "A 'Thread clone' refers to a feature or functionality in a software application that replicates the behavior and characteristics of a typical threaded conversation. This concept is commonly used in various messaging and communication platforms, allowing users to engage in organized, structured discussions.",
    techStack: ["React", "NextJS", "Typescript", "Shadcn UI", "MongoDB"],
  },
  {
    title: "Invite By",
    imageUrl: "/invite-by.png",
    route: "",
    description: "Invitation online",
    techStack: [
      "React",
      "Tailwind CSS",
      "NextJS",
      "Typescript",
      "MongoDB",
      "Radix UI",
    ],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <Title>Projects</Title>
      <ul className="group/list">
        {projectData.map((project, i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-slate-200 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                  href={project.route}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <h3>
                    <span>{project.title}</span>
                  </h3>
                </a>
                <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </ul>
              </div>
              <Image
                src={project.imageUrl}
                alt="project-img"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-blue-500/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                width={200}
                height={48}
              />
            </div>
          </li>
        ))}
      </ul>
      <MainButtonLink route="/projects">View Full Projects</MainButtonLink>
    </section>
  );
};
