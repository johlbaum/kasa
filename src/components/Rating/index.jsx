import activeStar from "../../assets/star-active.png";
import incativeStar from "../../assets/star-inactive.png";

function Rating({ apartmentData }) {
  const stars = [];
  const rating = parseInt(apartmentData.rating);
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={`star-${i}`} src={activeStar} alt="Étoile active" />);
  }
  while (stars.length < 5) {
    stars.push(
      <img
        key={`star-inactive-${stars.length}`}
        src={incativeStar}
        alt="Étoile inactive"
      />
    );
  }
  return stars;
}

export default Rating;
