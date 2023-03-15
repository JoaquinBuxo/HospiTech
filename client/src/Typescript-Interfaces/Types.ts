import { User } from '@auth0/auth0-react';

export type AuthProp = {
  isAuthenticated: boolean;
  user?: User;
  loginWithRedirect: () => void;
  isLoading: boolean;
};
export type EquipmentsProp = {
  equipments: Equipment[];
};
export type EquipmentProp = {
  equipment: Equipment;
};

export type Equipment = {
  id?: string;
  type: string;
  model: string;
  condition: string;
  description: string;
  serialNumber: string;
  images: (string | ArrayBuffer)[];
  ownerId: string;
  createdAt: Date;
  lastRevision: Date;
  repairs: string[];
  userId: string;
};

export type Equipments = Equipment[];

export type userData = {
  name: string | undefined;
  id?: string;
  email: string | undefined;
  password?: string;
  role?: string;
  image?: string;
  hospitalId: string | null;
  registrationDate?: string;
  accountStatus?: string;
  Equipment?: Equipment[];
};

export type Hospital = {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  image?: string;
  description?: string;
  country: string;
  users?: userData[];
  equipment: Equipment[];
  transactionsMade?: Transaction[];
  transactionsReceived?: Transaction[];
};

export type Transaction = {
  id: string;
  date: Date;
  amount: Number;
  paymentMethod: string;
  donorHospital: Hospital;
  donorHospitalId: string;
  beneficiaryHospital: Hospital;
  beneficiaryHospitalId: string;
  status?: string;
  equipment: Equipment;
  equipmentId: string;
};

export type FilteredEquipment = {
  label: string;
  select: string;
};

export type FilteredHospital = FilteredEquipment & {
  id: string;
};
