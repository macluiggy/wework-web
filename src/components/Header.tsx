import './header.css';
import reactSvg from '../assets/wework.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={reactSvg} alt="Logo" />
      </div>
      <div className="header__text">
        <p>Texto 1</p>
      </div>
      <div className="header__text">
        <p>Texto 2</p>
      </div>
      <div className="header__text">
        <p>Texto 3</p>
      </div>
      <div className="header__button">
        <button>Botón</button>
      </div>
      <div className="header__text">
        <p>Otro Texto</p>
      </div>
    </div>
  );
};

export default Header;