import { useTheme } from 'styled-components';
import { Box, Input } from './styles';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const Search = ({ value, setValue }: Props) => {
  const theme = useTheme();
  return (
    <Box>
      <Input
        type="search"
        placeholder="Pesquise uma tarefa..."
        onChange={({ target }) => setValue(target.value)}
        value={value}
      />
      <PiMagnifyingGlassBold size={22} color={theme.colors.border} />
    </Box>
  );
};
