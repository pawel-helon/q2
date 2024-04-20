import { $Enums } from "@prisma/client";

export type Devices = {
  id: number;
  deviceName: string;
  streetAddress: string;
  city: string;
  country: string;
  model: string;
  owner: string | null;
  SIM: string;
  status: string;
}[];

export type SetDevices = {
  (
    devices: {
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
  ): void;
};

export type Fetch = {
  fetchList: (searchValue: string) => Promise<{
    id: number;
    deviceName: string;
    streetAddress: string;
    city: string;
    country: string;
    model: string;
    owner: string | null;
    SIM: string;
    status: $Enums.STATUS;
}[]>
}

export type Users = {
  id: number;
  email: string;
  name: string | null;
  role: $Enums.ROLE;
}[];