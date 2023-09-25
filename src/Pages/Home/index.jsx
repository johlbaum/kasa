import apartments from "../../data/apartments";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import imgHomeBanner from "../../assets/home-banner.jpg";
import { useEffect } from "react";

import styles from "./index.module.scss";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner
        dataBanner={{
          imgBanner: imgHomeBanner,
          textContent: "Chez vous, partout et ailleurs",
        }}
      />
      <div className={styles.container}>
        {apartments.map((apartment) => {
          return <Card dataApartment={apartment} />;
        })}
      </div>
    </>
  );
}

export default Home;
