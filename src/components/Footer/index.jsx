import Logo from "../../assets/footer-logo.png";

import styles from "./index.modules.scss";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo de kasa" />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
