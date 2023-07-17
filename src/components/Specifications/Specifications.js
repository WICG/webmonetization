import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Link from '@docusaurus/Link'
import styles from './Specifications.module.css'

export default function Specifications({ children, link }) {
  const linkParam = link ? `#${link}` : ''

  return (
    <div className={styles.specifications}>
      <table>
        <thead>
          <tr>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link
                to={`pathname:///specification${linkParam}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {children}
                <OpenInNewIcon color='disabled' fontSize='inherit' />
                <br></br>
                <span>{link && `#${link}`}</span>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
