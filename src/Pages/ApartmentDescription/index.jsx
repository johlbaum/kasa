import { useParams } from "react-router-dom";

import Slider from "../../Components/Slider";
import apartments from "../../data/apartments";

function ApartmentDescription() {
  const { apartmentId } = useParams();

  const apartment = apartments.find(
    (appartment) => appartment.id === apartmentId
  );

  return (
    <div>
      <Slider apartmentData={apartment.pictures} />
      <p>{apartment.title}</p>
    </div>
  );
}

export default ApartmentDescription;
