import { $Enums } from "@prisma/client";

export type Device = {
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
};

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
  fetchList: (searchValue: string) => Promise<
    {
      id: number;
      deviceName: string;
      streetAddress: string;
      city: string;
      country: string;
      model: string;
      owner: string | null;
      SIM: string;
      status: $Enums.STATUS;
    }[]
  >;
};

export type Users = {
  id: number;
  email: string;
  name: string | null;
  role: $Enums.ROLE;
}[];

export type devices = {
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
}[];

export type device = {
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
};

export type user = {
  id: number;
  email: string;
  name: string | null;
  password: string;
  role: $Enums.ROLE;
  createdAt: Date;
  updatedAt: Date;
};

export type Role = "ADMIN" | "OWNER" | "ENDUSER";