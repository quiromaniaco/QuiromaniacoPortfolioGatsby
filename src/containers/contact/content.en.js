import { FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

const content = {
  title: 'It would be a pleasure to get in touch.',
  subtitle: 'mmquiroga10@gmail.com',
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

export default content;
