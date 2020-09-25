import React from 'react'

import { ShareInput } from './share-input'
import { Button } from './button'
import { ShareInputContainer } from './share-input-container'
import { useShares, newShare, useView, ViewStates } from '../state'
import { trimDecimal } from '../lib'

function changeList (arr, i, alteration) {
  return [
    ...arr.slice(0, i),
    Object.assign({}, arr[i], alteration),
    ...arr.slice(i + 1)
  ]
}

function dropIndex (arr, i) {
  return [
    ...arr.slice(0, i),
    ...arr.slice(i + 1)
  ]
}

function weightFromPercent (percent, weight, totalWeight) {
  return (-percent * (totalWeight - weight)) / (percent - 1)
}

export function ShareList () {
  const [ shares, setShares ] = useShares()
  const [ _, setView ] = useView()
  const totalWeight = shares.reduce((a, b) => a + Number(b.weight), 0)

  return <div>
    <ShareInputContainer>
      {shares.map((share, i) => {
        return <ShareInput
          key={i}

          name={share.name}
          onChangeName={name => setShares(changeList(shares, i, { name }))}

          pointer={share.pointer}
          onChangePointer={pointer => setShares(changeList(shares, i, { pointer }))}

          weight={share.weight}
          onChangeWeight={weight => setShares(changeList(shares, i, { weight }))}
          weightDisabled={!share.pointer}

          percent={Number(share.weight) ? share.weight / totalWeight : undefined}
          percentDisabled={!share.pointer || shares.length <= 1}
          onChangePercent={percent => setShares(changeList(shares, i, {
            weight: trimDecimal(weightFromPercent(percent, share.weight, totalWeight))
          }))}

          onRemove={() => setShares(dropIndex(shares, i))}
          removeDisabled={shares.length <= 1}
        />
      })}
    </ShareInputContainer>
    <Button
      onClick={() => setShares([ ...shares, newShare() ])}
    >
      Add Share
    </Button>
    <Button
      className='importSharesButton'
      onClick={() => setView(ViewStates.Import) }
    >
      Edit Existing Revshare
    </Button>
  </div>
}
