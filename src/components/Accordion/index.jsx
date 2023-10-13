import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import styles from "./index.module.scss";

function Accordion({ accordionData }) {
  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header}>
        <p className={styles.accordion__header__title}>{title}</p>
        <MdKeyboardArrowUp
          size={40}
          onClick={() => setIsActive((prev) => !prev)}
          className={
            isActive
              ? `${styles.accordion__header__icon} ${styles.accordion__header__icon__rotate}`
              : styles.accordion__header__icon
          }
        />
      </div>
      <div
        className={
          isActive
            ? `${styles.accordion__content__wrapper} ${styles.accordion__content__wrapper__active}`
            : styles.accordion__content__wrapper
        }
      >
        <div className={styles.accordion__content}>
          {Array.isArray(content) ? (
            content.map((content, index) => {
              return <p key={`${content}-${index}`}>{content}</p>;
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
