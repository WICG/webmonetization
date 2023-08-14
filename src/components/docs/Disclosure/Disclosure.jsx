import { useState, useId } from 'react'
import styles from './Disclosure.module.css'

export default function Disclosure({ children, toggleText }) {
  const contentId = useId()
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const clickHandler = () => {
    setIsVisible(!isVisible)
    setIsExpanded(!isExpanded)
  }

  const visibleClass = isVisible ? styles.expanded : ''

  return (
    <>
      <button
        type='button'
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className={styles.toggle}
        onClick={clickHandler}
      >
        {toggleText}
      </button>
      <div id={contentId} className={`${styles.wrapper} ${visibleClass}`}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}
