import styled from 'styled-components';

export const Input = styled.input`
  width: 30rem;
  background-color: transparent;
  border: none;
  height: 38px;
  color: ${({ theme }) => theme.colors.text_primary};

  &:focus {
    outline: none;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
`;
