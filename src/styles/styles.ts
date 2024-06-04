import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Kanit", sans-serif;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};

    
  }

  *::-webkit-scrollbar {
    -webkit-appearance: none;
    width: .4rem;
  }

  *::-webkit-scrollbar:horizontal {
    -webkit-appearance: none;
    height: .4rem;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }

  *::-webkit-scrollbar-track-piece {
    background-color: ${({ theme }) => theme.colors.primary_20t};
    border-radius: 12px;
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  left: 80%;
  top: 90%;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_btn};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
