import { Button } from "@/components/ui/button";

export function Trigger({
  variant,
  title,
}: {
  variant: "menuItem" | "linkButton" | "defaultSmButton" | "secondarySmButton";
  title: string;
}) {
  switch (variant) {
    case "menuItem":
      return (
        <button className="w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent">
          {title}
        </button>
      );
    case "linkButton":
      return (
        <Button
          variant="link"
          size="sm"
          className="absolute top-1/2 transform -translate-y-1/2 right-0 focus-visible:ring-0"
        >
          {title}
        </Button>
      );
    case "defaultSmButton":
      return <Button size="sm">{title}</Button>;
    case "secondarySmButton":
      return (
        <Button variant="secondary" size="sm">
          {title}
        </Button>
      );
    default:
      throw Error("Invalid variant");
  }
}
