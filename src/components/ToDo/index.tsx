import { useContext, useState } from 'react';
import { Box, CheckBox, CheckIcon, PencilIcon, Row, Text, TrashIcon } from './styles';
import { TodoType } from '../../stores/@types/todo';
import todoStore from '../../stores/todoStore';
import { observer } from 'mobx-react-lite';
import { UndoButton } from '../UndoButton';
import { ModalNote } from '../ModalNote';

type Props = {
  todo: TodoType;
};

export const ToDo = observer(({ todo }: Props) => {
  const [checked, setCheked] = useState(todo.done);
  const { update, remove } = useContext(todoStore);
  const [showUndo, setShowUndo] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [timeoutId, setTimeoutId] = useState<number>();
  const [intervalId, setIntervalId] = useState<number>();
  const [isOpenNewNote, setIsOpenNewNote] = useState(false);

  function handleChecked() {
    setCheked(!checked);
    update(todo.id, { ...todo, done: !todo.done });
  }

  const handleDelete = () => {
    setShowUndo(true);
    let interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timerId = setTimeout(() => {
      clearInterval(interval);
      setCountdown(5);
      remove(todo.id);
      setShowUndo(false);
    }, 5000);

    setTimeoutId(timerId);
    setIntervalId(interval);
  };

  const handleCancel = () => {
    setShowUndo(false);
    setCountdown(5);
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  };

  const handleUpdate = () => {
    setIsOpenNewNote(true);
  };

  return (
    <>
      <Row>
        <CheckBox checked={checked} onClick={handleChecked}>
          <CheckIcon />
        </CheckBox>
        <Text checked={checked} onClick={handleChecked}>
          {todo.note}
        </Text>
        <Box>
          <PencilIcon onClick={handleUpdate} />
          <TrashIcon onClick={handleDelete} />
        </Box>
      </Row>
      {showUndo && <UndoButton countdown={countdown} onCancel={handleCancel} />}
      <ModalNote isOpen={isOpenNewNote} setOpenModal={setIsOpenNewNote} todo={todo} />
    </>
  );
});
