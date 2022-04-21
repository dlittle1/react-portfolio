import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const socialNavLinks = [
  {
    name: 'Github',
    link: 'https://github.com/dlittle1',
    icon: faGithub,
    tooltip: 'Github',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dylanlittle/',
    icon: faLinkedin,
    tooltip: 'LinkedIn',
  },
  {
    name: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/4192210/dylan-little',
    icon: faStackOverflow,
    tooltip: 'Stack Overflow',
  },
  {
    name: 'Resume',
    link: '/resume',
    icon: faFileAlt,
    tooltip: 'Resume',
  },
];

export default socialNavLinks;
