import BannerImg from "../../assets/banner.jpg";

import styles from "./index.module.scss";

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src={BannerImg} alt="Côte rocheuse" />
      <p className={styles.banner__text}>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
