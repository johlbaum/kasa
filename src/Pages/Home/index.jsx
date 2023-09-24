import apartments from "../../data/apartments";
import Card from "../../Components/Card";
import Banner from "../../Components/Banner";
import imgHomeBanner from "../../assets/home-banner.jpg";

import styles from "./index.module.scss";

function Home() {
  return (
    <>
      <Banner imgBanner={imgHomeBanner} />
      <div className={styles.container}>
        {apartments.map((apartment) => {
          return <Card dataApartment={apartment} />;
        })}
      </div>
    </>
  );
}

export default Home;
