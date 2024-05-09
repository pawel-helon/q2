import { $Enums } from "@prisma/client";
import { DetailsCard } from "./details-card";
import { Status } from "./status";

interface GeneralTabProps {
  role: unknown;
  device: {
    id: number;
    deviceName: string;
    streetAddress: string;
    city: string;
    country: string;
    model: string;
    SIM: string;
    status: $Enums.STATUS;
    state: $Enums.STATE;
    ownerId: number;
  } | null;
}

export const GeneralTab = ({ role, device }: GeneralTabProps) => {
  return (
    <div className="mt-12 w-full grid grid-cols-3 gap-4">
      <Status />
      <div>
        <DetailsCard device={device} role={role} />
      </div>
    </div>
  );
};
