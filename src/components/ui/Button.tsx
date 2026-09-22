import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-light shadow-lg shadow-gold/20 focus-visible:outline-gold",
  secondary:
    "bg-transparent text-paper border border-paper/30 hover:border-gold hover:text-gold focus-visible:outline-gold",
  ghost: "bg-white/5 text-paper hover:bg-white/10 focus-visible:outline-gold",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function classes({ variant = "primary", size = "md", className = "" }: BaseProps) {
  return [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");
}

type LinkButtonProps = BaseProps &
  ComponentProps<typeof Link> & {
    external?: boolean;
  };

export function ButtonLink({
  children,
  variant,
  size,
  className,
  external,
  ...props
}: LinkButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link className={classes({ children, variant, size, className })} {...externalProps} {...props}>
      {children}
    </Link>
  );
}

type NativeButtonProps = BaseProps & ComponentProps<"button">;

export function Button({ children, variant, size, className, ...props }: NativeButtonProps) {
  return (
    <button className={classes({ children, variant, size, className })} {...props}>
      {children}
    </button>
  );
}
