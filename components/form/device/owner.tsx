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

interface OwnerProps {
  owners: owners;
}

export const Owner = ({ owners }: OwnerProps) => {
  return (
    <>
      <Label htmlFor="owner">Owner</Label>
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
    </>
  );
};
