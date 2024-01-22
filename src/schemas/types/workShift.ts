export interface IWorkShift {
  id: number;
  date: string;
  bed: Bed;
  employee_id: number;
  from_at: string;
  to_at: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface Bed {
  id: number;
  name: string;
  status: number;
  employee_id?: any;
  branch_id: number;
  zone_id: number;
  created_at: string;
  updated_at: string;
  employee?: any;
  branch: Branch;
  zone: Zone;
  room: Room;
}

interface Room {
  id: number;
  zone_id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface Zone {
  id: number;
  branch_id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface Branch {
  id: number;
  name: string;
  address: string;
  open_time?: any;
  close_time?: any;
  status: number;
  created_at: string;
  updated_at: string;
}
