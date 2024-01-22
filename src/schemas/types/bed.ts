import { IBranch } from './branch';
import { IZone } from './zone';

export interface IBed {
  id: number;
  branch: IBranch;
  zone: IZone;
  room: IRoom;
  name: string;
  status: number;
}

interface IRoom {
  id: number;
  zone_id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
}
