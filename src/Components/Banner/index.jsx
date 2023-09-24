import styles from "./index.module.scss";

function Banner(props) {
  return (
    <div className={styles.bannerContainer}>
      <img src={props.imgBanner} alt="Côte rocheuse" />
      <p className={styles.banner__text}>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
