import './menu.css';

export const Menu = () => {
  return (
    <nav>
      <a href='#' className='menu__logo'>PA</a>

      <ul className='permalinks permalinks__menu'>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#experience'>Experiência</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contato</a></li>
      </ul>
    </nav>
  );
};