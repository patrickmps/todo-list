import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: 600;
  font-size: 1.6rem;
  margin: 0;

  @media (min-width: 720px) {
    font-size: 1.8rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
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
  padding: 0.5rem 2.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  height: 3rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_btn};
    color: ${({ theme }) => theme.colors.button};
  }
  transition: all 0.3s;

  @media (min-width: 720px) {
    font-size: 1.4rem;
    padding: 0.5rem 3rem;
  }
`;

export const ButtonConfirm = styled.button`
  padding: 0.5rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button};
  border: none;
  border-radius: 5px;
  height: 3rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_btn};
  }
  transition: all 0.3s;

  @media (min-width: 720px) {
    font-size: 1.4rem;
    padding: 0.5rem 3rem;
  }
`;
