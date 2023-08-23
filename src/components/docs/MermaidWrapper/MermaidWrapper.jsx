import styles from './MermaidWrapper.module.css'
import { useRef } from 'react'

export default function MermaidWrapper({ children }) {
  const wrapperRef = useRef(null)

  const clickHandler = () => {
    const svg = wrapperRef.current.querySelector('svg')
    const as_text = new XMLSerializer().serializeToString(svg)
    const blob = new Blob([as_text], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const win = open(url)
    win.onload = (evt) => URL.revokeObjectURL(url)
  }

  return (
    <div className={`${styles.diagramWrapper} not-content`} ref={wrapperRef}>
      {children}
      <button className={styles.btn} onClick={clickHandler}>
        <span className={styles.outLink}>View full diagram</span>
      </button>
    </div>
  )
}
