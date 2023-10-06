import { Link } from "react-router-dom";
import { useContext } from "react";
import { ActiveNavItemContext } from "../../utils/context";
import Logo from "../../assets/header-logo.png";

import styles from "./index.module.scss";

function Header() {
  const { activeNavItem, setActiveNavItem } = useContext(ActiveNavItemContext);

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src={Logo}
          alt="Logo de Kasa"
          onClick={() => setActiveNavItem("home")}
        />
      </Link>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link
              to="/"
              className={
                activeNavItem === "home"
                  ? `${styles.navbar__link} ${styles.active}`
                  : styles.navbar__link
              }
              onClick={() => setActiveNavItem("home")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                activeNavItem === "about"
                  ? `${styles.navbar__link} ${styles.active}`
                  : styles.navbar__link
              }
              onClick={() => setActiveNavItem("about")}
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
