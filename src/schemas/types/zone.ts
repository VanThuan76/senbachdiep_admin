import { IBranch } from './branch';

export interface IZone {
  id: number;
  branch: IBranch;
  name: string;
  status: number;
}
