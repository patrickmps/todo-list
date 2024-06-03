import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  height: 72vh;
  width: 50vw;
  overflow-y: auto;

  @media (max-width: 1270px) {
    width: 75vw;
  }
  @media (max-width: 850px) {
    width: 100vw;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 0.9rem;
  font-weight: 400;
`;
