import { InputSearch } from '@/src/schemas/types/base';
import FilterInputRender from '@/src/shared/components/custom/table/filter/FilterInputRender';
import { getFieldValueOnSearchParamServerSide } from '@/src/shared/hooks/usePagination';
import { GetServerSideProps } from 'next/types';
import { useState } from 'react';

type Props = {
  search?: Record<string, string>;
  onChangeMultiSearchParams: any;
};
const FilterIndividualCustomers = ({ search, onChangeMultiSearchParams }: Props) => {
  const inputSearch: InputSearch[] = [
    {
      /* ID must be unique */
      id: 1,
      property: 'id',
      label: 'Mã khách hàng',
      active: true,
      inputType: 'text',
      fieldType: 'STRING',
      operator: 'contains',
      value: search?.id,
    },
    {
      id: 2,
      property: 'full_name',
      label: 'Tên khách hàng',
      active: true,
      inputType: 'text',
      fieldType: 'STRING',
      operator: 'contains',
      value: search?.full_name,
    },
    {
      id: 3,
      property: 'created_at',
      label: 'Ngày tạo',
      active: true,
      inputType: 'date',
      fieldType: 'STRING',
      operator: 'contains',
      value: search?.created_at,
    },
  ];
  const [inputs, setInputs] = useState<InputSearch[]>(inputSearch);
  return (
    <FilterInputRender
      setInputs={setInputs}
      inputs={inputs}
      searchFunction={value => onChangeMultiSearchParams(value)}
    />
  );
};
export const getServerSideProps: GetServerSideProps = async ctx => {
  const search = {
    id: getFieldValueOnSearchParamServerSide('id', ctx.query),
    name: getFieldValueOnSearchParamServerSide('name', ctx.query),
  };
  return { props: { search } };
};
export default FilterIndividualCustomers;
