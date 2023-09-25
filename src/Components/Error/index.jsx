import { Link } from "react-router-dom";

import styles from "./index.module.scss";

function Error() {
  return (
    <div>
      <p className={styles.codeError}>404</p>
      <p className={styles.errorTextContent}>
        Oups! La page que vous demandez n'existe pas.
      </p>

      <div className={styles.errorLinkContainer}>
        <Link to="/">
          <p className={styles.errorHomeLink}>
            Retourner sur la page d’accueil
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Error;
