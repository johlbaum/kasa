import styles from "./index.module.scss";

function Banner({ dataBanner }) {
  return (
    <div className={styles.bannerContainer}>
      <img src={dataBanner.imgBanner} alt="Côte rocheuse" />
      <p className={styles.banner__text}>{dataBanner.textContent}</p>
    </div>
  );
}

export default Banner;
