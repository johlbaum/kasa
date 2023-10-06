import { Link } from "react-router-dom";

import styles from "./index.module.scss";

function Error() {
  return (
    <div className={styles.error}>
      <p className={styles.error__code}>404</p>
      <p className={styles.error__text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <div className={styles.error__link__wrapper}>
        <Link to="/">
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </div>
  );
}

export default Error;
