import { Option, Select } from './styles';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const SelectInput = ({ value, setValue }: Props) => {
  return (
    <>
      <Select
        name="filter"
        id="filter-select"
        onChange={({ target }) => setValue(target.value)}
        value={value}>
        <Option value="">Todas</Option>
        <Option value="true">Realizadas</Option>
        <Option value="false">Não realizadas</Option>
      </Select>
    </>
  );
};
