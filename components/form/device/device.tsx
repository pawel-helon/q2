import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { devices } from "@/types";

interface Props {
  devices: devices;
  children?: React.ReactNode;
}

export const Device = ({ devices, children }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="deviceId">Device</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="deviceId">
        <SelectTrigger>
          <SelectValue placeholder="Select device" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {devices.map((device) => {
              return (
                <SelectItem key={device.id} value={String(device.id)}>
                  {device.deviceName}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
