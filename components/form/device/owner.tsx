import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { owners } from "@/types";

export function Owner({ owners, children }: {
  owners: owners;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="owner">Owner</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="owner">
        <SelectTrigger>
          <SelectValue placeholder="Select owner" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {owners.map((owner) => {
              return (
                <SelectItem key={owner.id} value={owner.email}>
                  {owner.email}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
