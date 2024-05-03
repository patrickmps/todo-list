import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const BtnTheme = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button};
  border: none;
  border-radius: 5px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_btn};
  }
  transition: all 0.3s;
`;
