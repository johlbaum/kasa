import { useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import styles from "./index.module.scss";

function Slider(props) {
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = () => {
    if (imgIndex <= 0) {
      setImgIndex(props.apartmentData.length - 1);
    } else {
      setImgIndex((prev) => prev - 1);
    }
  };

  const nextImg = () => {
    if (imgIndex < props.apartmentData.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else {
      setImgIndex(0);
    }
  };

  return (
    <div className={styles.container}>
      <img src={props.apartmentData[imgIndex]} alt="" />
      <div className={styles.arrowContainer}>
        {props.apartmentData.length > 1 ? (
          <>
            <FcPrevious onClick={prevImg} className={styles.arrow} />
            <FcNext onClick={nextImg} className={styles.arrow} />
          </>
        ) : (
          ""
        )}
      </div>
      <p className={styles.currentImageIndicator}>
        {imgIndex + 1}\{props.apartmentData.length}
      </p>
    </div>
  );
}

export default Slider;
