import styles from './LinkOut.module.css'

export default function LinkOut({ children, href, withIcon = true }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={withIcon ? styles.withIcon : null}
    >
      {children}
    </a>
  )
}
