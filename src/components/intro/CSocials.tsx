import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

export const CSocials = () => {
  return (
    <div className='icons__socials'>
      <a href="https://linkedin.com/in/pabloalmeidac" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/pabloalmeidac" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
    </div>
  );
};