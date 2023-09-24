import imgAboutBanner from "../../assets/about-banner.jpg";
import Banner from "../../Components/Banner/";
import Accordion from "../../Components/Accordion";
import about from "../../data/about";

import styles from "./index.module.scss";

function About() {
  return (
    <>
      <Banner imgBanner={imgAboutBanner} />
      {about.map((currentAboutData) => {
        return (
          <div className={styles.accordion}>
            <Accordion accordionData={currentAboutData} />
          </div>
        );
      })}
    </>
  );
}

export default About;
