export const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      Design from{" "}
      <a
        className="font-medium text-slate-600 dark:text-slate-400 dark:hover:text-blue-300 hover:text-blue-500 focus-visible:text-blue-300"
        target="_blank"
        href="https://brittanychiang.com/"
      >
        Brittany Chiang{" "}
      </a>
      Built with{" "}
      <a
        className="font-medium text-slate-600 dark:text-slate-400 dark:hover:text-blue-300 hover:text-blue-500 focus-visible:text-blue-300"
        target="_blank"
        href="https://nextjs.org/"
      >
        Next.js{" "}
      </a>
      and{" "}
      <a
        className="font-medium text-slate-600 dark:text-slate-400 dark:hover:text-blue-300 hover:text-blue-500 focus-visible:text-blue-300"
        target="_blank"
        href="https://tailwindcss.com/"
      >
        Tailwind CSS
      </a>
    </footer>
  );
};
