import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.button};
  font-weight: 600;
  cursor: pointer;
  border-right: 8px solid transparent;
  &:focus {
    outline: none;
  }

  @media (min-width: 540px) {
    width: max-content;
  }
`;

export const Option = styled.option`
  background-color: #f7f7f7;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  padding: 0.5rem;
`;
