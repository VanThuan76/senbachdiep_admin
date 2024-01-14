export interface ILoginedUser {
  access_token: string;
}
export interface IProfileUser {
  id: number;
  username: string;
  password: string;
  name: string;
  phone_number: string;
  avatar: string;
  access_token: string;
  remember_token?: any;
  branchs: string[];
  active_branch_id: number;
  status: number;
  created_at: string;
  updated_at: string;
}
