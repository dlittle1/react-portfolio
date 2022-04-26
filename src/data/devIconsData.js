import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import ReduxIcon from '../assets/SVG/redux.svg';

const devIcons = [
  {
    name: 'CSS3',
    icon: faCss3Alt,
    tooltip: 'CSS3',
  },
  {
    name: 'HTML5',
    icon: faHtml5,
    tooltip: 'HTML5',
  },
  {
    name: 'JavaScript',
    icon: faJsSquare,
    tooltip: 'JavaScript',
  },
  {
    name: 'React',
    icon: faReact,
    tooltip: 'React',
  },
  {
    name: 'Redux',
    icon: ReduxIcon,
    tooltip: 'Redux',
  },
  {
    name: 'Node',
    icon: faNode,
    tooltip: 'Node.js',
  },
  {
    name: 'Git',
    icon: faGit,
    tooltip: 'Git',
  },
];

export default devIcons;
