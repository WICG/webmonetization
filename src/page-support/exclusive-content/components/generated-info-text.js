import React from 'react'
import { useExclusiveContent } from '../state'

export function GeneratedInfoText() {
  const [exclusiveContent] = useExclusiveContent()
  return (
    <>
      <p>You have the choice between</p>
      <ul>
        <li>
          embedding a script that depends on another script that holds all
          functionality
        </li>
        <li>embedding a script that doesn't have any dependencies</li>
      </ul>
      <p>{exclusiveContent.initVector}</p>
    </>
  )
}
