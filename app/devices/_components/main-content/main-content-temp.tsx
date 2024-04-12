"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Actions } from "./actions";
import { DataTable } from "./data-table";
import { searchDevices } from "@/app/api/search-devices/route";
import { ActionsTemp } from "./actions-temp";

export const MainContentTemp = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(false);

  const [devices, setDevices] = useState<
    {
      id: number;
      streetAddress: string;
      city: string;
      country: string;
      model: string;
      owner: string | null;
      SIM: string;
    }[]
  >([]);

  useEffect(() => {
    const searchedDevices = async () => {
      const devices = await searchDevices(value);
      setDevices(devices);
    };
    searchedDevices();

    const interval = setInterval(searchedDevices, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  const router = useRouter();
  const handleClick = () => {
    router.push("/devices/device");
  };

  return (
    <div className="flex flex-col mt-12">
      {!status ? (
        <>
          <ActionsTemp
            value={value}
            setValue={setValue}
            setStatus={setStatus}
          />
          <DataTable devices={devices} handleClick={handleClick} />
        </>
      ) : (
        //TODO: Cards
        <p>Grouped by status</p>
      )}
    </div>
  );
};
