import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

export const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
`;
