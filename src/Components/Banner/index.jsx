import BannerImg from "../../assets/banner.jpg";

import styles from "./index.module.scss";

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src={BannerImg} alt="Côte rocheuse" />
    </div>
  );
}

export default Banner;
