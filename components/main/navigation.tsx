"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navigationList = [
  {
    name: "ABOUT",
    route: "#about",
  },
  {
    name: "EXPERIENCE",
    route: "#experience",
  },
  {
    name: "EDUCATION",
    route: "#education",
  },
  {
    name: "PROJECTS",
    route: "#projects",
  },
];

export const Navigation = () => {
  const [activeNav, setActiveNav] = useState("about");
  useEffect(() => {
    const about = document.getElementById("about");
    const experience = document.getElementById("experience");
    const education = document.getElementById("education");
    const projects = document.getElementById("projects");

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });

    if (about && experience && projects && education) {
      observer.observe(about);
      observer.observe(experience);
      observer.observe(education);
      observer.observe(projects);
    }
  }, []);
  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">
        {navigationList.map((nav) => (
          <li key={nav.name}>
            <a href={nav.route} className="group flex items-center py-3">
              <span
                className={cn(
                  "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-blue-500 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-blue-500 dark:group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                  nav.route === "#" + activeNav && "w-16 bg-slate-200"
                )}
              />
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-500 group-focus-visible:text-blue-500 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200",
                  nav.route === "#" + activeNav &&
                    "text-blue-500 dark:text-slate-200"
                )}
              >
                {nav.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
