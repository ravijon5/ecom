import { Address } from "./address";

export type User = {
  name: string;
  email: string;
  phone: string;
  password: string;
  image: string;
  address: Address[];
};
