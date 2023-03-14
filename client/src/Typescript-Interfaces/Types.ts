

export type Equipment = {
  id: String,
  type:String,
  model:String,
  condition:String,
  description:String,
  serialNumber:String,
  images:String[],
  ownerId:String,
  createdAt:Date,
  lastRevision:Date,
  repairs:String[],
  userId:String,
}
export type Equipments = Equipment[];
export type UserData = {
  name:String,
  id:String,
  email:String,
  password? :String,
  role?:String,
  image?:String,
  hospitalId:String,
  registrationDate:Date,
  accountStatus?:String,
  Equipment:Equipment[]
}
export type Hospital = {
  id:String,
  name:String,
  address:String,
  email:String,
  phone:String,
  image?:String,
  description?:String,
  country:String,
  users?:UserData[],
  equipment:Equipment[],
  transactionsMade?:Transaction[],
  transactionsReceived?:Transaction[],
}
export type Transaction = {
  id:String,
  date:Date,
  amount:Number,
  paymentMethod:String,
  donorHospital:Hospital,
  donorHospitalId:String,
  beneficiaryHospital:Hospital,
  beneficiaryHospitalId:String,
  status?:String,
  equipment:Equipment,
  equipmentId:String,
}


export type FilteredHospital = {
  label: String,
  select: String,
  id:String
}
export type FilteredEquipment = {
  label: String;
  select: String;
};

