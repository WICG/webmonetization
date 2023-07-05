import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Libraries() {
  const { siteConfig } = useDocusaurusContext()

  const tableRow = (data) => {
    return data.map(({ name, desc, link, version }) => {
      return (
        <tr key={name}>
          <td>
            <strong>{name}</strong>
            <br />
            {desc}
          </td>
          <td class='cell-center'>{version.includes(2) ? '✅' : '❌'}</td>
          <td class='cell-center'>{version.includes(1) ? '✅' : '❌'}</td>
          <td class='cell-center'>
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
          <th class='cell-left'>Name</th>
          <th>v2.0</th>
          <th>v1.0</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>{tableRow(siteConfig.customFields.tools)}</tbody>
    </table>
  )
}
