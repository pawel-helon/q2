import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { emails, owners } from "@/types";

export function Owner({
  owners,
  children,
  defaultValue,
}: {
  owners: owners;
  children?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="owner">Owner</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="owner" defaultValue={defaultValue}>
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
}

export function OwnerEmail({
  users,
  children,
  defaultValue,
}: {
  users: emails;
  children?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <Select name="ownerEmail" defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder={defaultValue}/>
      </SelectTrigger>
      <SelectContent className="h-[180px]">
        <SelectGroup>
          {users.map((user) => {
            return (
              <SelectItem key={user.email} value={user.email}>
                {user.email}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
