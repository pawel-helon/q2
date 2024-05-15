import {
  DialogContentShad,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogContentProps {
  title: string;
  children: React.ReactNode;
}

export const DialogContent = ({
  title,
  children,
}: DialogContentProps) => {
  return (
    <DialogContentShad>
      <DialogHeader className="mb-6">
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      {children}
    </DialogContentShad>
  );
};
