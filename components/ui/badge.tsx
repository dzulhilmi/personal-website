export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 dark:text-blue-300 ">
      {children}
    </div>
  );
};
