import { useState, useId } from 'react'
import styles from './Tooltip.module.css'

export default function Tooltip({ children, content }) {
  const id = useId()
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const clickHandler = () => {
    setIsVisible(!isVisible)
    setIsExpanded(!isExpanded)
  }

  const mouseEnterHandler = () => {
    setIsVisible(true)
    setIsExpanded(true)
  }

  const mouseLeaveHandler = () => {
    setIsVisible(false)
    setIsExpanded(false)
  }

  const focusHandler = () => {
    setIsVisible(true)
    setIsExpanded(true)
  }

  const blurHandler = () => {
    setIsVisible(false)
    setIsExpanded(false)
  }

  const escapeHandler = (evt) => {
    if (evt.keyCode == 27) {
      setIsVisible(false)
      setIsExpanded(false)
    }
  }

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
      <button
        className={styles.toggle}
        type='button'
        aria-label='Definition'
        aria-expanded={isExpanded}
        aria-labelledby={id}
        onClick={clickHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        onKeyDown={escapeHandler}
      >
        ?
      </button>
      <span
        role='tooltip'
        id={id}
        className={styles.bubble}
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      >
        {content}
      </span>
    </span>
  )
}
