import { Status } from "./status";
import { DetailsCard } from "./details-card";
import { device } from "@/types";

interface GeneralTabProps {
  role: unknown;
  device: device | null;
}

export const GeneralTab = ({ role, device }: GeneralTabProps) => {
  return (
    <div className="mt-12 w-full grid grid-cols-3 gap-4">
      <Status />
      <DetailsCard device={device} role={role} />
    </div>
  );
};
