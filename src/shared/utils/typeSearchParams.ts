export type OpType = 'EQUAL' | 'NOT_EQUAL' | 'LIKE' | 'IN' | 'BETWEEN';

export type FieldType = 'STRING' | 'LONG' | 'INTEGER' | 'DOUBLE' | 'DATE' | 'CHAR' | 'BOOLEAN';
export type Direction = 'DESC' | 'ASC';
export type Filter = {
  field: string;
  value: any;
};
export type Sort = {
  field: string;
  direction: Direction;
};

export interface ISearchParams {
  page: number;
  size: number;
  filters?: Filter[] | [];
  sorts?: Sort[] | [];
}
