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
