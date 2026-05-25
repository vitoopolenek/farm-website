import { cn } from "@/lib/cn";

type CardGridProps = {
  children: React.ReactNode;
  columns?: "two" | "three";
  className?: string;
};

const columnClasses = {
  two: "md:grid-cols-2",
  three: "sm:grid-cols-2 lg:grid-cols-3",
} as const;

export function CardGrid({ children, columns = "two", className }: CardGridProps) {
  return (
    <div className={cn("grid gap-6", columnClasses[columns], className)}>{children}</div>
  );
}
