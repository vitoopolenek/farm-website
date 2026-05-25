import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-primary rounded-full px-7 py-3 text-sm font-medium text-white transition-colors duration-200",
  secondary:
    "rounded-full border border-line bg-card px-7 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:bg-bg-subtle",
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center text-center",
        variantClasses[variant],
        className,
      )}
      {...(isExternal ? { rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
