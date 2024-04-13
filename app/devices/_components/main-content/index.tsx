"use client";

import { useState } from "react";
import { Actions } from "./actions";
import { AllDevicesTable } from "./all-devices-table";
import { GroupedDevicesTables } from "./grouped-devices-tables";

export const MainContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState(false);

  const [allDevices, setAllDevices] = useState<
    {
      id: number;
      deviceName: string;
      streetAddress: string;
      city: string;
      country: string;
      model: string;
      owner: string | null;
      SIM: string;
      status: string;
    }[]
  >([]);

  const [activeDevices, setActiveDevices] = useState<
    {
      id: number;
      deviceName: string;
      streetAddress: string;
      city: string;
      country: string;
      model: string;
      owner: string | null;
      SIM: string;
      status: string;
    }[]
  >([]);

  const [inactiveDevices, setInactiveDevices] = useState<
    {
      id: number;
      deviceName: string;
      streetAddress: string;
      city: string;
      country: string;
      model: string;
      owner: string | null;
      SIM: string;
      status: string;
    }[]
  >([]);

  return (
    <div className="flex flex-col mt-12">
      <Actions
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
          activeDevices={activeDevices}
          setActiveDevices={setActiveDevices}
          inactiveDevices={inactiveDevices}
          setInactiveDevices={setInactiveDevices}
        />
      )}
    </div>
  );
};
