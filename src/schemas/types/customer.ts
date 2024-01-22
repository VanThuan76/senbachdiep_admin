export interface ICustomer {
  id: number;
  birthday?: string;
  gender?: string;
  personal_technician: Personaltechnician;
  personal_branch: Personalbranch;
  full_name: string;
  address?: string;
  phone_number: string;
  email: string;
  customer_type: number;
  points: number;
  bonus_coins?: any;
  avatar_path?: string;
  created_at: string;
  updated_at: string;
}

interface Personalbranch {
  id?: number;
  name?: string;
  address?: string;
}

interface Personaltechnician {
  id?: number;
  name?: string;
}

//Form
export interface IIndividualCustomerUpdateOrCreate {
  full_name: string;
  phone_number: string;
  email: string;
  national?: string;
  province_city?: string;
  district?: string;
  wards?: string;
  birthday?: string;
  gender?: number;
  address?: string;
  note?: string;
  customer_type: number;
  branch_id?: number;
  person_in_charge?: number;
  campaign_id?: number;
  customer_resources?: number;
  presenter_id?: number;
  caring_service_id?: Array<string>;
}
