import React from 'react';
import { Box, Container } from './styles';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setOpenModal?: () => void;
};

export const Modal: React.FC<Props> = ({ children, isOpen }) => {
  return !isOpen ? null : (
    <Container>
      <Box>{children}</Box>
    </Container>
  );
};
