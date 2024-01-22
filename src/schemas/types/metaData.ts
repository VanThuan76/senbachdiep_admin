export interface IProvinceOrCity {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts: IDistricts[];
}
export interface IDistricts {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  province_code: number;
  wards: IWards[];
}
export interface IWards {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: number;
}
