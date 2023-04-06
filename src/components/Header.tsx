import "./header.css";
import reactSvg from "../assets/wework.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={reactSvg} alt="Logo" />
      </div>
      <div className="header__text">
        <p>Encuentra una ubicacion</p>
      </div>
      <div className="header__text">
        <p>Soluciones</p>
      </div>
      <div className="header__text">
        <p>Grandes empresas</p>
      </div>
      <div className="header__button">
        <button>Contacto</button>
      </div>
      <div className="header__text">
        <p>Inicio de sesion de miembros</p>
      </div>
    </div>
  );
};

export default Header;
