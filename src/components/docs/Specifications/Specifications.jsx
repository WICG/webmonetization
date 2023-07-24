import styles from "./Specifications.module.css";

export default function Specifications({ link, children }) {
  return (
    <div className={styles.specifications}>
      <table>
        <thead>
          <tr>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href={"/specification#" + link}
                className="external"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
                <small>{link && `#${link}`}</small>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
