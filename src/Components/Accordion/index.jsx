import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import styles from "./index.module.scss";

function Accordion({ accordionData }) {
  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader}>
        <p className={styles.accordion__title}>{title}</p>
        <MdKeyboardArrowUp
          size={40}
          onClick={() => setIsActive((prev) => !prev)}
          className={
            isActive
              ? `${styles.accordion__icon} ${styles.rotate}`
              : styles.accordion__icon
          }
        />
      </div>
      <div
        className={
          isActive
            ? `${styles.accordion__content__wrapper} ${styles.active}`
            : styles.accordion__content__wrapper
        }
      >
        <div className={styles.accordion__content}>
          {Array.isArray(content) ? (
            content.map((content) => {
              return <p>{content}</p>;
            })
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
