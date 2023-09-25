import { useParams } from "react-router-dom";

import Slider from "../../components/Slider";
import Accordion from "../../components/Accordion";
import activeStar from "../../assets/star-active.png";
import incativeStar from "../../assets/star-inactive.png";
import apartments from "../../data/apartments";

import styles from "./index.module.scss";

function ApartmentDescription() {
  const { apartmentId } = useParams();

  const apartment = apartments.find(
    (apartment) => apartment.id === apartmentId
  );

  const displayRate = () => {
    const stars = [];
    const rating = parseInt(apartment.rating);
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={activeStar} alt="Étoile active" />);
    }
    while (stars.length < 5) {
      stars.push(<img src={incativeStar} alt="Étoile inactive" />);
    }
    return stars;
  };

  return (
    <div>
      <Slider apartmentData={apartment.pictures} />
      <div className={styles.containerDescription}>
        <div className={styles.description}>
          <div className={styles.description__left}>
            <h2 className={styles.description__left__title}>
              {apartment.title}
            </h2>
            <p className={styles.description__left__location}>
              {apartment.location}
            </p>
            <div className={styles.desciption__tags}>
              {apartment.tags.map((tag) => {
                return <p className={styles.description__tags__tag}>{tag}</p>;
              })}
            </div>
          </div>
          <div className={styles.description__right}>
            <div className={styles.description__host}>
              <p>{apartment.host.name}</p>
              <img src={apartment.host.picture} alt="Hôte" />
            </div>
            {displayRate()}
          </div>
        </div>
        <div className={styles.accordions}>
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
    </div>
  );
}

export default ApartmentDescription;
