export interface IBaseResponse<T> {
  status_code: number;
  data: T;
  message: string;
}
export interface IBaseResponseWithCount<T> {
  data: T;
  total_pages: number;
  total_elements: number;
}
