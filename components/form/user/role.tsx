import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  children?: React.ReactNode;
}

export const Role = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label>Select role</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="role">
        <SelectTrigger>
          <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="ADMIN">Admin</SelectItem>
            <SelectItem value="OWNER">Owner</SelectItem>
            <SelectItem value="ENDUSER">End user</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
