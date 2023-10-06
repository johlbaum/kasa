import styles from "./index.module.scss";

function Banner({ dataBanner }) {
  return (
    <div className={styles.banner}>
      <img
        className={styles.banner__img}
        src={dataBanner.imgBanner}
        alt={dataBanner.altText}
      />
      <p className={styles.banner__text}>{dataBanner.textContent}</p>
    </div>
  );
}

export default Banner;
