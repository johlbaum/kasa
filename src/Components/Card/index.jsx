import { Link } from "react-router-dom";
import { useContext } from "react";
import { ActiveNavItemContext } from "../../utils/context";

import styles from "./index.module.scss";

function Card(props) {
  const { setActiveNavItem } = useContext(ActiveNavItemContext);
  return (
    <div className={styles.card} onClick={() => setActiveNavItem(null)}>
      <Link to={`/apartment/${props.dataApartment.id}`}>
        <img src={props.dataApartment.cover} alt={props.dataApartment.title} />
        <p className={styles.card__title}>{props.dataApartment.title}</p>
      </Link>
    </div>
  );
}

export default Card;
