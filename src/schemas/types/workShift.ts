export interface IWorkShifts {
  bed: Bed;
  workShifts: IWorkShift[];
}

export interface IWorkShift {
  id: number;
  date: string;
  employee_id: number;
  from_at: string;
  to_at: string;
  employee: Employee;
  status: number;
  created_at: string;
  work_shift_services: WorkshiftService[] | [];
  updated_at: string;
}
interface WorkshiftService {
  id: number;
  work_shift_id: number;
  service: Service;
  created_at: string;
  updated_at: string;
}

export interface IWorkShiftUpdateOrCreate {
  branch_id: number;
  date: Date;
  zone_id: number;
  from_at: string;
  to_at: string;
  bed_id: number;
  employee_id: number;
}

interface Service {
  id: number;
  branches: string[];
  customer_types: string[];
  code: string;
  name: string;
  tags: string[];
  introduction: string;
  used_count: number;
  rate: number;
  rate_count: number;
  comment_count: number;
  details: string;
  duration: number;
  price: number;
  discount_type?: any;
  discount: number;
  actual_price: number;
  staff_number: number;
  company_amount: number;
  image: string;
  status: number;
  created_at: string;
  updated_at: string;
}
interface Employee {
  id: number;
  branch_id: number;
  code: string;
  name: string;
  gender: number;
  date_of_birth: string;
  phone_number: string;
  email: string;
  address: string;
  avatar: string;
  position_id: string;
  level: number;
  rate: number;
  served_count: number;
  experience?: any;
  specialize?: any;
  service?: any;
  force?: any;
  status: number;
  created_at: string;
  updated_at: string;
}
interface Bed {
  id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
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
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface Branch {
  id: number;
  name: string;
  address: string;
  status: number;
  created_at: string;
  updated_at: string;
}
