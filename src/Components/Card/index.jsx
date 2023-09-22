import styles from "./index.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.dataHousing.cover} alt={props.dataHousing.title} />
    </div>
  );
}

export default Card;
