import { Link } from "react-router-dom";

import styles from "./index.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <Link to={`/apartment/${props.dataApartment.id}`}>
        <img src={props.dataApartment.cover} alt={props.dataApartment.title} />
        <p className={styles.card__title}>{props.dataApartment.title}</p>
      </Link>
    </div>
  );
}

export default Card;
