import React from 'react'

import { ShareInput } from './share-input'
import { AddShareButton } from './add-share'
import { useShares, newShare } from './use-shares'

function changeList (arr, i, alteration) {
  return [
    ...arr.slice(0, i),
    Object.assign({}, arr[i], alteration),
    ...arr.slice(i + 1)
  ]
}

export function ShareList () {
  const [ shares, setShares ] = useShares()

  return <div>
    {shares.map((share, i) => {
      return <ShareInput
        key={i}

        name={share.name}
        onChangeName={name => setShares(changeList(shares, i, { name }))}

        pointer={share.pointer}
        onChangePointer={pointer => setShares(changeList(shares, i, { pointer }))}

        weight={share.weight}
        onChangeWeight={weight => setShares(changeList(shares, i, { weight }))}
      />
    })}
    <AddShareButton onClick={() => setShares([ ...shares, newShare() ])} />
  </div>
}
