import './footer.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {  BsWhatsapp, BsGithub } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">PA</a>

      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/pabloalmeidac" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://instagram.com/pabloalmeidac" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://api.whatsapp.com/send?phone+5585992531067" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
        <a href="https://github.com/pabloalmeidac" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Todos os direitos reservados.</small>
        <a href="https://linkedin.com/in/pabloalmeidac" target="_blank" rel="noreferrer">
          <small>Feito com 🖤 por Pablo Almeida</small>
        </a>
      </div>
    </footer>
  );
};

