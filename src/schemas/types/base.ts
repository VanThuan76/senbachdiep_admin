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
export type OperationType =
  | '='
  | '<>'
  | '<'
  | '<='
  | '>'
  | '>='
  | 'startsWith'
  | 'endsWith'
  | 'contains'
  | 'notEmpty'
  | 'isNull'
  | 'in'
  | 'notIn';
export type ConditionItem = {
  property: string;
  operator: string;
  value: any;
};
/**
 * @description with search like fromDate toDate use operator '<>'
 *
 */
export type InputSearch = {
  id: React.Key;
  disable?: boolean;
  property: string;
  label: string | string[];
  active: boolean;
  fieldType: any;
  operator: OperationType;
  value?: any;
  className?: string;
  onChange?: (value: any) => void;
} & (
  | {
      inputType: 'select';
      options: { value: React.Key; label: string }[];
    }
  | {
      inputType: 'text' | 'number' | 'date' | 'date-range';
    }
  | {
      inputType: 'date-range' | 'date';
      disable?: any;
    }
);
