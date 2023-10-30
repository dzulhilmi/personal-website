import { Title } from "@/components/main/section-title";

export const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <Title>About</Title>
      <p className="text-slate-600 dark:text-slate-400">
        In 2019, I embarked on my professional journey as a front-end developer
        at{" "}
        <a
          className="font-medium text-blue-500 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-500 focus-visible:text-blue-500"
          target="_blank"
          href="https://kominfo.pasuruankota.go.id/"
        >
          Kominfo
        </a>
        . During my college years, I undertook a significant academic endeavor,
        crafting an asset management system as the focal point of my thesis.
        <br />
        <br />
        Following my graduation, I joined{" "}
        <a
          href="https://mit.id"
          target="_blank"
          className="font-medium text-blue-500 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-500 focus-visible:text-blue-500"
        >
          Mitra Informatika
        </a>
        , where I played a pivotal role in developing a cutting-edge Software as
        a Service (SaaS) platform, primarily specializing in asset management.
        <br />
        <br />
        Presently, I am a part of the product team at{" "}
        <a
          href="https://www.indivaragroup.com/"
          target="_blank"
          className="font-medium text-blue-500 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-500 focus-visible:text-blue-500"
        >
          Indivara Group
        </a>
        , a renowned tech company, contributing to the development of a
        sophisticated wealth management system. Beyond the world of coding and
        web development, I find solace in the pages of a good book, immersing
        myself in the realm of knowledge and imagination.
      </p>
    </section>
  );
};
