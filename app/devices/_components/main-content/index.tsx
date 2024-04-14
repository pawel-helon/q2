"use client";

import { useState } from "react";
import { Actions } from "./actions";
import { AllDevicesTable } from "./all-devices-table";
import { GroupedDevicesTables } from "./grouped-devices-tables";
import { Devices } from "@/types";

export const MainContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState(false);

  const [allDevices, setAllDevices] = useState<Devices>([]);
  const [activeDevices, setActiveDevices] = useState<Devices>([]);
  const [inactiveDevices, setInactiveDevices] = useState<Devices>([]);

  return (
    <div className="flex flex-col mt-12">
      <Actions
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        status={status}
        setStatus={setStatus}
      />
      {!status ? (
        <AllDevicesTable
          searchValue={searchValue}
          allDevices={allDevices}
          setAllDevices={setAllDevices}
        />
      ) : (
        <GroupedDevicesTables
          searchValue={searchValue}
          status={status}
          activeDevices={activeDevices}
          setActiveDevices={setActiveDevices}
          inactiveDevices={inactiveDevices}
          setInactiveDevices={setInactiveDevices}
        />
      )}
    </div>
  );
};
