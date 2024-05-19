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

export function Device({
  devices,
  children,
}: {
  devices: devices;
  children?: React.ReactNode;
}) {
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
}
