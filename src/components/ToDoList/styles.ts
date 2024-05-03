import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 0.9rem;
  font-weight: 400;
`;
