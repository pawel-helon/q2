import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ItemProps {
  children: React.ReactNode;
  label: string;
  placeholder: any;
  dialogTitle: string;
}

export const Item = ({
  label,
  placeholder,
  dialogTitle,
  children,
}: ItemProps) => {
  
  return (
    <li className="flex flex-col gap-2">
      <Label>
        {label}
      </Label>
      <div className="relative">
        <Input
          disabled
          placeholder={placeholder}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="absolute top-1/2 transform -translate-y-1/2 right-0"
            >
              Change
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="mb-6">
              <DialogTitle>
                {dialogTitle}
              </DialogTitle>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      </div>
    </li>
  );
};
