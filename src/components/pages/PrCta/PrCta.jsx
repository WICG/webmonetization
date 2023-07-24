import styles from "./PrCta.module.css";

export default function PrCta({ label }) {
  return (
    <div className={styles.cta}>
      <img className={styles.iconMerge} src="/img/icon-merge.svg" alt="" />
      <p>
        Do you know another {label}?{" "}
        <a
          href="https://github.com/WICG/webmonetization/edit/main/docusaurus.config.js"
          target="_blank"
          rel="noreferrer noopener"
        >
          Make a PR
        </a>
      </p>
    </div>
  );
}
