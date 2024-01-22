export interface ICustomer {
  id: number;
  birthday: string;
  gender: string;
  personal_technician: Personaltechnician;
  personal_branch: Personalbranch;
  campaign_id?: any;
  customer_resources?: any;
  presenter_id?: any;
  caring_service_id?: any;
  full_name: string;
  national?: any;
  province_city?: any;
  district?: any;
  wards?: any;
  address?: any;
  phone_number: string;
  email: string;
  customer_type: number;
  points: number;
  bonus_coins?: any;
  avatar_path: string;
  note?: any;
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
