import { useContext } from 'react';
import { Search } from '../SearchInput';
import { SelectInput } from '../SelectInput';
import themeStore from '../../stores/themeStore';
import { PiMoonBold } from 'react-icons/pi';
import { Box, BtnTheme } from './styles';
import { useTheme } from 'styled-components';

type Props = {
  search: string;
  setSearch: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
};

export const TopBar = ({ search, setSearch, filter, setFilter }: Props) => {
  const { toggleTheme } = useContext(themeStore);
  const theme = useTheme();

  return (
    <Box>
      <Search value={search} setValue={setSearch} />
      <span>
        <SelectInput value={filter} setValue={setFilter} />
        <BtnTheme onClick={toggleTheme}>
          <PiMoonBold color={theme.colors.button} size={22} />
        </BtnTheme>
      </span>
    </Box>
  );
};
