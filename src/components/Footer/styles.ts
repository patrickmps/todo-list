import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const F = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 1rem;

  > span {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text_primary};
  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.hover_btn};
  }
`;
export const GithubIcon = styled(FaGithub)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.hover_btn};
  }
`;
