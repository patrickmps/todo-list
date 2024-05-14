import { F, GithubIcon, LinkedInIcon } from './styles';

export const Footer = () => {
  return (
    <F>
      <span>Patrick Mota © 2024</span>
      <span>
        <a href="https://github.com/patrickmps" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a href="https://linkedin.com/in/patrickmps" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </span>
    </F>
  );
};
