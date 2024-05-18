import { cn } from '@/lib/utils';

interface FieldDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const FieldDescription = ({ children, className }: FieldDescriptionProps ) => {
  return (
    <p className={cn(
      "text-[0.8rem] text-muted-foreground",
      className
    )}>
        {children}
    </p>
  )
}
