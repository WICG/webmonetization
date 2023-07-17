import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './Libraries.module.css'

export default function Libraries() {
  const { siteConfig } = useDocusaurusContext()

  const findStartWith = (array, arg) => {
    return (
      array.find((value) => {
        return value.startsWith(arg)
      }) !== undefined
    )
  }

  const tableRow = (data) => {
    return data.map(({ name, desc, link, version }) => {
      return (
        <tr key={name}>
          <td>
            <strong>{name}</strong>
            <br />
            {desc}
          </td>
          <td className={styles.cellCenter}>
            {findStartWith(version, '2.') ? '✅' : '❌'}
          </td>
          <td className={styles.cellCenter}>
            {findStartWith(version, '1.') ? '✅' : '❌'}
          </td>
          <td className={styles.cellCenter}>
            <a href={link}>
              <img
                alt={`Link to ${name}'s GitHub repo`}
                src='/img/octocat.svg'
              />
            </a>
          </td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
        <tr>
          <th className={styles.cellLeft}>Name</th>
          <th>v2.0</th>
          <th>v1.0</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>{tableRow(siteConfig.customFields.tools)}</tbody>
    </table>
  )
}
