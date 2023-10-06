import imgAboutBanner from "../../assets/about-banner.jpg";
import Banner from "../../components/Banner/";
import Accordion from "../../components/Accordion";
import aboutData from "../../data/about";
import { useEffect } from "react";

import styles from "./index.module.scss";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner
        dataBanner={{
          imgBanner: imgAboutBanner,
          textContent: "",
          altText: "Paysage de montage",
        }}
      />
      {aboutData.map((currentAboutData, index) => {
        return (
          <div
            key={`${currentAboutData}-${index}`}
            className={styles.accordion}
          >
            <Accordion accordionData={currentAboutData} />
          </div>
        );
      })}
    </>
  );
}

export default About;
