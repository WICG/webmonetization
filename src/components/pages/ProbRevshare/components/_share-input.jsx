import { validatePointer, validateWeight } from '../lib/_index'
import styles from '../styles.module.css'

export function ShareInput({
  index,
  name,
  pointer,
  weight,
  percent,
  onChangeName,
  onChangePointer,
  onChangeWeight,
  onChangePercent,
  onRemove,
  removeDisabled,
  percentDisabled,
  weightDisabled,
}) {
  return (
    <tr key={index}>
      <td className={styles.nameCell}>
        <input
          className={styles.input}
          value={name}
          onChange={(ev) => {
            onChangeName(ev.target.value)
          }}
        />
      </td>

      <td>
        <input
          className={styles.input}
          value={pointer}
          onChange={(ev) => {
            onChangePointer(ev.target.value)
          }}
        />
        <p className='error'>
          {!validatePointer(pointer) && 'Invalid payment pointer.'}
        </p>
      </td>

      <td className={styles.weightCell}>
        <input
          className={styles.input}
          type='number'
          min={0}
          step={'any'}
          value={weight}
          disabled={weightDisabled}
          onChange={(ev) => {
            onChangeWeight(ev.target.value)
          }}
        />
        {!validateWeight(weight) && 'Weight must be a positive number'}
      </td>

      <td className={styles.percentCell}>
        <input
          className={styles.input}
          type='number'
          min={0}
          max={100}
          step={'any'}
          value={percent && Math.round(percent * 100)}
          disabled={percentDisabled}
          onChange={(ev) => {
            onChangePercent(ev.target.value / 100)
          }}
        />
      </td>

      <td className={styles.removeCell}>
        <button disabled={removeDisabled} onClick={() => onRemove()}>
          ❌
        </button>
      </td>
    </tr>
  )
}
