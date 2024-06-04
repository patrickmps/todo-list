import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80vw;
  justify-content: center;

  > span {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 540px) {
    flex-direction: row;

    > span {
      width: max-content;
    }
  }

  @media (min-width: 1080px) {
    width: 40vw;
  }
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
