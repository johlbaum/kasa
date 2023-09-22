import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo de Kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav__link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav__link">
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
