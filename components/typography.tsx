import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

interface HeadingProps {
  variant: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ variant, className, children }: HeadingProps) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(
            "text-4xl leading-none font-semibold text-foreground antialiased",
            inter.className,
            className
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "text-2xl leading-none font-semibold text-foreground antialiased",
            inter.className,
            className
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(
            "text-xl leading-none font-semibold text-foreground antialiased",
            inter.className,
            className
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h3
          className={cn(
            "text-lg leading-none font-semibold text-foreground antialiased",
            inter.className,
            className
          )}
        >
          {children}
        </h3>
      );
    default:
      throw Error("Invalid Heading variant");
  }
};

interface ParagraphProps {
  variant: "base-thick" | "base-thin" | "small-thick" | "small-thin";
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ variant, className, children }: ParagraphProps) => {
  switch (variant) {
    case "base-thick":
      return (
        <p
          className={cn(
            "text-sm leading-snug font-medium text-foreground",
            className
          )}
        >
          {children}
        </p>
      );
    case "base-thin":
      return (
        <p
          className={cn(
            "text-sm leading-snug font-normal text-muted-foreground",
            className
          )}
        >
          {children}
        </p>
      );
    case "small-thick":
      return <p className={cn("text-xs font-medium", className)}>{children}</p>;
    case "small-thin":
      return (
        <p
          className={cn("text-xs font-normal text-muted-foreground", className)}
        >
          {children}
        </p>
      );
    default:
      throw Error("Invalid Paragraph variant");
  }
};
