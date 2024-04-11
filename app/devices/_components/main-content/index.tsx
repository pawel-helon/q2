"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Actions } from "./actions";
import { DataTable } from "./data-table";
import { searchDevices } from "@/app/api/search-devices/route";

export const MainContent = () => {
  const [value, setValue] = useState("");
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
      <Actions value={value} setValue={setValue} />
      <DataTable devices={devices} handleClick={handleClick} />
    </div>
  );
};
