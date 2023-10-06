import dataApartments from "../../data/apartments";
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
          textContent: (
            <>
              Chez vous,{" "}
              <span className={styles.break}>partout et ailleurs</span>
            </>
          ),
          altText: "Côte rocheuse",
        }}
      />
      <div className={styles.container}>
        {dataApartments.map((apartment) => {
          return <Card key={apartment.id} dataApartment={apartment} />;
        })}
      </div>
    </>
  );
}

export default Home;
