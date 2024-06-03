import styled from 'styled-components';
import { PiArrowUUpLeftLight } from 'react-icons/pi';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.hover_btn};
  color: ${({ theme }) => theme.colors.button};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  height: 3rem;
  width: min-content;
  font-size: 1.1rem;
  font-weight: 500;
  bottom: 0;
  top: 90%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  transition: all 0.3s;
`;

export const CircleProgress = styled.span`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.button};
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  overflow: hidden;
  transition: all 5s linear;
  font-weight: 600;
  margin-right: 0.8rem;
`;

export const UndoIcon = styled(PiArrowUUpLeftLight).attrs(() => ({
  size: 22
}))`
  color: ${({ theme }) => theme.colors.button};
  margin-left: 0.4rem;
`;
