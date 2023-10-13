import styles from "./index.module.scss";

function Tag({ apartmentData }) {
  return (
    <div className={styles.tags}>
      {apartmentData.tags.map((tag, index) => (
        <p key={`${tag}-${index}`} className={styles.description__tags__tag}>
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tag;
