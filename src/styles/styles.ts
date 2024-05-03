import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Kanit", sans-serif;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: 600;
`;

export const AddButton = styled.button`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button};
  font-size: 3rem;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0;
  cursor: pointer;
  bottom: 0;
  right: 0;
  left: 75%;
  top: 80%;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_btn};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
