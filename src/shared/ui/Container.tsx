import { cn } from "@/shared/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-6", className)}>{children}</div>
  );
};

export { Container };
