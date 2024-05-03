import styled from 'styled-components';
import { PiTrash, PiPencilSimple, PiCheckBold } from 'react-icons/pi';

type Props = {
  checked?: boolean;
};

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: 38rem;
  gap: 1rem;
  &:hover {
    > div {
      > svg {
        visibility: visible;
      }
    }
  }
`;

export const CheckBox = styled.span<Props>`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.text_primary};
  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary : 'transparent')};
  > svg {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export const Text = styled.span<Props>`
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.colors.text_primary};
  opacity: ${({ checked }) => (checked ? '50%' : '100%')};
  font-size: 1.5rem;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TrashIcon = styled(PiTrash).attrs(() => ({
  size: 22
}))`
  cursor: pointer;
  color: #cdcdcd;
  visibility: hidden;
  &:hover {
    color: #e50000;
  }
`;
export const PencilIcon = styled(PiPencilSimple).attrs(() => ({
  size: 22
}))`
  cursor: pointer;
  color: #cdcdcd;
  visibility: hidden;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const CheckIcon = styled(PiCheckBold).attrs(() => ({
  size: 22
}))`
  color: ${({ theme }) => theme.colors.button};
`;
