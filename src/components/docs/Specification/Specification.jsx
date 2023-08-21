import styles from './Specification.module.css'

export default function Specifications({ anchor }) {
  return (
    <div className={styles.specification}>
      <table>
        <thead>
          <tr>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href={'/specification#' + anchor}
                className='external'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p>Web Monetization</p>
                <small>{anchor && `#${anchor}`}</small>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
