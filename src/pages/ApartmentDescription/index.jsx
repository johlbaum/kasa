import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Slider from "../../components/Slider";
import Accordion from "../../components/Accordion";
import apartments from "../../data/apartments";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";

import styles from "./index.module.scss";

function ApartmentDescription() {
  const { apartmentId } = useParams();

  const apartment = apartments.find(
    (apartment) => apartment.id === apartmentId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!apartment ? (
        <Navigate to="/error" />
      ) : (
        <>
          <Slider apartmentData={apartment.pictures} />
          <div className={styles.description}>
            <div className={styles.description__general}>
              <div className={styles.left__block}>
                <h2 className={styles.left__block__title}>{apartment.title}</h2>
                <p className={styles.left__block__location}>
                  {apartment.location}
                </p>
                <Tag apartmentData={apartment} />
              </div>
              <div className={styles.right__block}>
                <div className={styles.right__block__host}>
                  <p>{apartment.host.name}</p>
                  <img src={apartment.host.picture} alt="Hôte" />
                </div>
                <div className={styles.right__block__rate}>
                  {<Rating apartmentData={apartment} />}
                </div>
              </div>
            </div>
            <div className={styles.description__detailed}>
              <Accordion
                accordionData={{
                  title: "Description",
                  content: apartment.description,
                }}
              />
              <Accordion
                accordionData={{
                  title: "Équipements",
                  content: apartment.equipments,
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ApartmentDescription;
