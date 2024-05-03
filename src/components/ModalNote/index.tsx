import { useContext, useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { Box, ButtonCancel, ButtonConfirm, Header, Input, Row } from './styles';
import todoStore from '../../stores/todoStore';
import { observer } from 'mobx-react-lite';
import { TodoType } from '../../stores/@types/todo';
import axios from 'axios';

type Props = {
  isOpen: boolean;
  setOpenModal: (isOpen: boolean) => void;
  todo?: TodoType;
};

export const ModalNote = observer(({ isOpen, setOpenModal, todo }: Props) => {
  const [note, setNote] = useState('');
  const { create, update } = useContext(todoStore);
  

  function handleNote() {
    try {
      if (todo) {
        update(todo.id, { ...todo, note: note });

      } else {
        create({ note: note, done: false });
      }
      setOpenModal(!isOpen);
      setNote('');
    } catch (error : unknown) {
      if (axios.isAxiosError(error))  {
        console.error(error.message);
        
      } else if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    if(todo) setNote(todo.note);
  }, [])

  return (
    <Modal isOpen={isOpen}>
      <Box>
        <Header>{todo ? 'Edit Note' : 'New Note'}</Header>
        <Input value={note} onChange={({ target }) => setNote(target.value)} />
        <Row>
          <ButtonCancel onClick={() => setOpenModal(!isOpen)}>Cancel</ButtonCancel>
          <ButtonConfirm onClick={handleNote}>Apply</ButtonConfirm>
        </Row>
      </Box>
    </Modal>
  );
});
