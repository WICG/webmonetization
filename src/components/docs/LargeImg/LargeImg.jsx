import styles from './LargeImg.module.css'

export default function LargeImg({ src, alt }) {
  return (
    <div className={styles.imgWrapper}>
      <img src={src} alt={alt} className={styles.img} />
      <a
        href={src}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.outLink}
      >
        View full image
      </a>
    </div>
  )
}
