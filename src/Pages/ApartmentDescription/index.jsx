import { useParams } from "react-router-dom";

import apartments from "../../data/apartments";

function ApartmentDescription() {
  const { apartmentId } = useParams();

  const apartment = apartments.find(
    (appartment) => appartment.id === apartmentId
  );

  return (
    <div>
      <p>{apartment.title}</p>
    </div>
  );
}

export default ApartmentDescription;
