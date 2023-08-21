import { useState, useId, useEffect, useRef } from 'react'
import styles from './Tooltip.module.css'

export default function Tooltip({ children, content }) {
  const id = useId()
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const bubbleRef = useRef(null)
  const [isCutOffLeft, setIsCutOffLeft] = useState(false)
  const [narrowPos, setNarrowPos] = useState(false)

  useEffect(() => {
    function handleResize() {
      const isDesktop = window.innerWidth > 799
      const leftPos = bubbleRef.current.getBoundingClientRect().left
      const rightPos =
        bubbleRef.current.getBoundingClientRect().right +
        bubbleRef.current.offsetWidth

      const parent = bubbleRef.current.offsetParent

      if (leftPos < 0 && rightPos > window.innerWidth) {
        setNarrowPos(true)
        bubbleRef.current.style.top = `${
          parent.offsetTop - bubbleRef.current.offsetHeight
        }px`
        bubbleRef.current.previousElementSibling.style.top = `${
          parent.offsetTop - parent.offsetHeight + 4
        }px`
        bubbleRef.current.previousElementSibling.style.left = `${
          parent.offsetLeft + parent.offsetWidth - 2
        }px`
      } else if (leftPos < 0) {
        setNarrowPos(false)
        bubbleRef.current.style.top = ''
        bubbleRef.current.previousElementSibling.style.top = ''
        bubbleRef.current.previousElementSibling.style.left = ''
        setIsCutOffLeft(true)
      } else if (rightPos > window.innerWidth) {
        setNarrowPos(false)
        bubbleRef.current.style.top = ''
        bubbleRef.current.previousElementSibling.style.top = ''
        bubbleRef.current.previousElementSibling.style.left = ''
        setIsCutOffLeft(false)
      } else if (isDesktop) {
        setNarrowPos(false)
        bubbleRef.current.style.top = ''
        bubbleRef.current.previousElementSibling.style.top = ''
        bubbleRef.current.previousElementSibling.style.left = ''
        setIsCutOffLeft(false)
      }
    }

    handleResize() // initial call to get position of the element on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [bubbleRef])

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

  const shiftPosition = isCutOffLeft ? styles.shifted : ''
  const wrapperRePos = narrowPos ? styles.wrapperAdjust : ''
  const bubbleRePos = narrowPos ? styles.bubbleAdjust : ''
  const btnRePos = narrowPos ? styles.btnAdjust : ''

  return (
    <span
      className={`${styles.wrapper} ${wrapperRePos}`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
      <button
        className={`${styles.toggle} ${btnRePos}`}
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
        className={`${styles.bubble} ${shiftPosition} ${bubbleRePos}`}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        ref={bubbleRef}
      >
        {content}
      </span>
    </span>
  )
}
