import { useTheme } from 'styled-components';
import EmptyDark from '../../assets/images/Detective-check-footprint-dark.png';
import EmptyLight from '../../assets/images/Detective-check-footprint-light.png';
import { Box, Text } from './styles';
import { ToDo } from '../ToDo';
import { TodoType } from '../../stores/@types/todo';
import { observer } from 'mobx-react-lite';

type Props = {
  todoList: TodoType[];
};

export const ToDoList = observer(({ todoList }: Props) => {
  const theme = useTheme();

  return (
    <Box>
      {todoList.length > 0 ? (
        todoList.map((todo) => <ToDo key={todo.id} todo={todo} />)
      ) : (
        <>
          <img
            src={theme.title === 'dark' ? EmptyDark : EmptyLight}
            alt="Nenhuma tarefa foi encontrada"
          />
          <Text>Nenhuma tarefa foi encontrada</Text>
        </>
      )}
    </Box>
  );
});
