import { About } from "@/components/main/about-section";
import { Education } from "@/components/main/education-section";
import { Experience } from "@/components/main/experience-section";
import { Footer } from "@/components/main/footer";
import { Navigation } from "@/components/main/navigation";
import { Projects } from "@/components/main/projects-section";
import { SocialMedia } from "@/components/main/social-media-list";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="min-h-screen lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight dark:text-slate-200 sm:text-5xl">
              Muhammad Dzulhilmi
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight dark:text-slate-200 sm:text-xl">
              <span className="text-blue-500">Front-end Developer</span>
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I specialize in crafting captivating and user-friendly web
              interfaces
            </p>
            <SocialMedia />
          </div>
          <div>
            <Navigation />
            <ModeToggle />
          </div>
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <div
            className="fixed top-0 left-0 w-screen h-screen  
                items-center justify-center flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
          />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}
