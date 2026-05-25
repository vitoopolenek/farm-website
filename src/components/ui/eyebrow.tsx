import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
