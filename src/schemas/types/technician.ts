export interface ITechnician {
  id: number;
  name: string;
  branch_id: number;
  avatar_url: string;
  level: number;
  served_user_count?: any;
  rate?: number;
  available_times: any[];
  status: number;
  experience?: any;
  specialize?: any;
  service?: any;
  force?: any;
}
