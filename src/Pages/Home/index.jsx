import housing from "../../data/housing";
import Card from "../../Components/Card";

import styles from "./index.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      {housing.map((housing) => {
        return <Card dataHousing={housing} />;
      })}
    </div>
  );
}

export default Home;
