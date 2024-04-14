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
