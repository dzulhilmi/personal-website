import { ArrowRightCircle } from "lucide-react";

export const MainButtonLink = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return (
    <a
      href={route}
      className="inline-flex items-center leading-tight font-semibold text-slate-600 dark:text-slate-200 group"
    >
      <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">
        {children}
      </span>
      <ArrowRightCircle className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
    </a>
  );
};
