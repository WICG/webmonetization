import styles from './StylishHeader.module.css'

export default function StylishHeader({ children }) {
  return <p className={`${styles.highlight} heading`}>{children}</p>
}
