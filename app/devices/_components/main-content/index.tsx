"use client";

import { useState } from "react";

import { Actions } from "./actions";
import { Devices } from "@/types";
import { DevicesTable } from "./devices-table";
import { fetchActiveDevices, fetchAllDevices, fetchInactiveDevices } from "@/app/api/search-devices/route";

export const MainContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [groupedByStatus, setGroupedByStatus] = useState(false);

  const [allDevices, setAllDevices] = useState<Devices>([]);
  const [activeDevices, setActiveDevices] = useState<Devices>([]);
  const [inactiveDevices, setInactiveDevices] = useState<Devices>([]);

  return (
    <div className="flex flex-col mt-12">
      <Actions
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        groupedByStatus={groupedByStatus}
        setGroupedByStatus={setGroupedByStatus}
      />
      {!groupedByStatus ? (
        <DevicesTable
          title="All devices"
          searchValue={searchValue}
          devicesList={allDevices}
          setDevicesList={setAllDevices}
          fetchList={fetchAllDevices}
        />
      ) : (
        <div className="flex flex-col">
          <DevicesTable
            title="Active devices"
            searchValue={searchValue}
            devicesList={activeDevices}
            setDevicesList={setActiveDevices}
            fetchList={fetchActiveDevices}
          />
          <DevicesTable
            title="Inactive devices"
            searchValue={searchValue}
            devicesList={inactiveDevices}
            setDevicesList={setInactiveDevices}
            fetchList={fetchInactiveDevices}
          />
        </div>
      )}
    </div>
  );
};
