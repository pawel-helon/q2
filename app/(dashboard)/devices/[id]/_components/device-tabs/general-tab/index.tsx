import { Status } from "./status";
import { DetailsCard } from "./details-card";
import { device } from "@/types";
import { cn } from "@/lib/utils";

export function GeneralTab({
  role,
  device,
}: {
  role: unknown;
  device: device | null;
}) {
  return (
    <div className="mt-12 w-full flex flex-col gap-4 md:grid md:grid-cols-3 mb-12">
      <Status />
      <DetailsCard device={device} role={role} />
    </div>
  );
}
