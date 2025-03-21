import styles from '../styles.module.css'

export function ShareInputContainer({ children }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.revShareTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Payment Pointer or Wallet Address</th>
            <th>Weight</th>
            <th>Percent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
