"use client";

import { useState } from "react";
import { ActionsTemp } from "./actions-temp";
import { AllDevicesTableTemp } from "./all-devices-table-temp";
import { GroupedDevicesTablesTemp } from "./grouped-devices-tables-temp";

export const MainContentTemp = () => {
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
      <ActionsTemp
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setStatus={setStatus}
      />
      {!status ? (
        <AllDevicesTableTemp
          searchValue={searchValue}
          allDevices={allDevices}
          setAllDevices={setAllDevices}
        />
      ) : (
        <GroupedDevicesTablesTemp
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
