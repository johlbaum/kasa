import { Link } from "react-router-dom";

import styles from "./index.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <Link to={`/apartment/${props.dataApartment.id}`}>
        <img src={props.dataApartment.cover} alt={props.dataApartment.title} />
      </Link>
    </div>
  );
}

export default Card;
