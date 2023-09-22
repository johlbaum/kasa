import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.png";

import styles from "./index.module.scss";

function Header() {
  const [activeItem, setActiveItem] = useState("Accueil");

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo de Kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={activeItem === "Accueil" ? styles.active : ""}
              onClick={() => setActiveItem("Accueil")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeItem === "À propos" ? styles.active : ""}
              onClick={() => setActiveItem("À propos")}
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
