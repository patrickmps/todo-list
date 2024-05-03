import { useContext, useEffect, useState } from 'react';
import { AddButton, Container, GlobalStyles, Header } from './styles/styles';
import themeStore from './stores/themeStore';
import { ThemeProvider as StyledProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { observer } from 'mobx-react-lite';
import { TopBar } from './components/TopBar';
import { ToDoList } from './components/ToDoList';
import { ModalNote } from './components/ModalNote';
import todoStore from './stores/todoStore';

const themes = {
  dark: dark,
  light: light
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = observer(({ children }) => {
  const { theme } = useContext(themeStore);

  return <StyledProvider theme={themes[theme]}>{children}</StyledProvider>;
});

function App() {
  const [isOpenNewNote, setIsOpenNewNote] = useState(false);
  const { todos, getAll } = useContext(todoStore);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const showTodos =
    search.trim().length === 0 && filter === ''
      ? todos
      : todos
          .filter((todo) => todo.note.toLowerCase().includes(search.toLowerCase()))
          .filter((todo) => (filter ? String(todo.done) === filter : todo));

  useEffect(() => {
    getAll();
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Container>
        <Header>Lista de tarefas</Header>
        <TopBar search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      </Container>
      <ToDoList todoList={showTodos} />
      <AddButton onClick={() => setIsOpenNewNote(!isOpenNewNote)}>+</AddButton>

      <ModalNote isOpen={isOpenNewNote} setOpenModal={setIsOpenNewNote} />
    </ThemeProvider>
  );
}

export default observer(App);
