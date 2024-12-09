import { ShareInput } from './_share-input'
import { ShareInputContainer } from './_share-input-container'
import { useShares, newShare, useView, ViewStates } from '../state/_index'
import { trimDecimal } from '../lib/_index'
import styles from '../styles.module.css'

function changeList(arr, i, alteration) {
  return [
    ...arr.slice(0, i),
    Object.assign({}, arr[i], alteration),
    ...arr.slice(i + 1),
  ]
}

function dropIndex(arr, i) {
  return [...arr.slice(0, i), ...arr.slice(i + 1)]
}

function weightFromPercent(percent, weight, totalWeight) {
  return (-percent * (totalWeight - weight)) / (percent - 1)
}

export function ShareList() {
  const [shares, setShares] = useShares()
  const [_, setView] = useView()
  const totalWeight = shares.reduce((a, b) => a + Number(b.weight), 0)

  return (
    <>
      <ShareInputContainer>
        {shares.map((share, i) => {
          return (
            <ShareInput
              key={i}
              index={i}
              name={share.name}
              onChangeName={(name) =>
                setShares(changeList(shares, i, { name }))
              }
              pointer={share.pointer}
              onChangePointer={(pointer) =>
                setShares(changeList(shares, i, { pointer }))
              }
              weight={share.weight}
              onChangeWeight={(weight) =>
                setShares(changeList(shares, i, { weight }))
              }
              weightDisabled={!share.pointer}
              percent={
                Number(share.weight) ? share.weight / totalWeight : undefined
              }
              percentDisabled={!share.pointer || shares.length <= 1}
              onChangePercent={(percent) =>
                setShares(
                  changeList(shares, i, {
                    weight: trimDecimal(
                      weightFromPercent(percent, share.weight, totalWeight),
                    ),
                  }),
                )
              }
              onRemove={() => setShares(dropIndex(shares, i))}
              removeDisabled={shares.length <= 1}
            />
          )
        })}
      </ShareInputContainer>
      <div className={styles.shareInputBtns}>
        <button
          className='btn'
          onClick={() => setShares([...shares, newShare()])}
          data-umami-event='Revshare - Add share'
        >
          Add Share
        </button>
        <button
          className={`${styles.importSharesButton} btn`}
          onClick={() => setView(ViewStates.Import)}
          data-umami-event='Revshare - Import share'
        >
          Import Existing Revshare
        </button>
      </div>
    </>
  )
}
