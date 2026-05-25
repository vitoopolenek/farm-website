import Link from "next/link";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-medium text-ink underline decoration-line underline-offset-4 transition hover:decoration-ink",
        className,
      )}
    >
      {children}
    </Link>
  );
}
