import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: 600;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  height: 38px;
  color: ${({ theme }) => theme.colors.text_primary};
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
  margin: 0;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonCancel = styled.button`
  padding: 0.5rem 3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  height: 3rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_btn};
    color: ${({ theme }) => theme.colors.button};
  }
  transition: all 0.3s;
`;

export const ButtonConfirm = styled.button`
  padding: 0.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button};
  border: none;
  border-radius: 5px;
  height: 3rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_btn};
  }
  transition: all 0.3s;
`;
