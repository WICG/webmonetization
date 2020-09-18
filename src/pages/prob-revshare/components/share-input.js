import React from 'react'

export function ShareInput ({
  name,
  pointer,
  weight,
  onChangeName,
  onChangePointer,
  onChangeWeight,
  onRemove,
  removeDisabled
}) {
  return <div className='shareInputRow'>
    <input type='text' placeholder='Name (optional)' value={name} onChange={ev => {
      onChangeName(ev.target.value)
    }} />
    <input type='text' placeholder='$PaymentPointer' value={pointer} onChange={ev => {
      onChangePointer(ev.target.value)
    }} />
    <input type='number' placeholder='weight' min={0} value={weight} onChange={ev => {
      onChangeWeight(ev.target.value)
    }} />
    <button disabled={removeDisabled} onClick={() => onRemove()}>Remove</button>
  </div>
}
