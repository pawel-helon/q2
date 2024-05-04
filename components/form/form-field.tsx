import { cn } from "@/lib/utils";

interface FormFieldProps {
    children: React.ReactNode;
    className?: string;
}

export const FormField = ({ children, className }: FormFieldProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-2",
      className
    )}>
        {children}
    </div>
  )
}
