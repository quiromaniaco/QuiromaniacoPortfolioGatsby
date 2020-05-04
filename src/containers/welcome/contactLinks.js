import { FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

const contentLinks = {
  links: [
    {
      to: 'https://github.com/quiromaniaco',
      text: 'quiromaniaco',
      Icon: FaGithub,
      newTab: true,
    },
    {
      to: 'https://www.linkedin.com/in/quiromaniaco/',
      text: 'Manuel Quiroga',
      Icon: FaLinkedin,
      newTab: true,
    },
    {
      to: 'https://twitter.com/quiromaniaco',
      text: 'Quiromaniaco',
      Icon: FaTwitter,
      newTab: true,
    },
  ],
};

export default contentLinks;
