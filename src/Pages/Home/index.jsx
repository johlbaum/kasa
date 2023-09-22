import apartments from "../../data/apartments";
import Card from "../../Components/Card";

import styles from "./index.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      {apartments.map((apartment) => {
        return <Card dataApartment={apartment} />;
      })}
    </div>
  );
}

export default Home;
