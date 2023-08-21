import styles from "./CardList.module.css";

export default function CardList({ cards }) {
  return cards.map(({ name, image, link, desc }) => {
    if (desc) {
      return (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.card} ${styles.cardWide}`}
        >
          <img
            className={styles.cardLogo}
            src={`/img/${image}`}
            alt={name}
            width="96"
            height="96"
          />
          <div className={styles.cardContent}>
            <h3 className={styles.bodyText}>{name}</h3>
            <p>{desc}</p>
          </div>
        </a>
      );
    } else {
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          key={name}
          className={`${styles.card} ${styles.cardBasic}`}
        >
          <img src={`/img/${image}`} alt={name} width="267" height="78" />
        </a>
      );
    }
  });
}
