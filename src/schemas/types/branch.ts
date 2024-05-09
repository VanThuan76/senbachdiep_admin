export interface IBranches {
  branches: IBranch[];
}

export interface IBranch {
  id: number;
  name: string;
  address: string;
  status: number;
}
