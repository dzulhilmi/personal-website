import { ArrowLeftCircle } from "lucide-react";
export const BackButton = ({
  children,
  route,
}: {
  children?: React.ReactNode;
  route: string;
}) => {
  return (
    <a
      href={route}
      className="group mb-2 inline-flex items-center font-semibold leading-tight text-blue-500 :text-blue-300"
    >
      <ArrowLeftCircle className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
      Back
      {children}
    </a>
  );
};
