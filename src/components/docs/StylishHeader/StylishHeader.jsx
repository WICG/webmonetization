import styles from './StylishHeader.module.css'

export default function StylishHeader({ children, href, withIcon = true }) {
  return <p className={styles.highlight}>{children}</p>
}
