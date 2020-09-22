import React from 'react'

export function ShareInput ({
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
  percentDisabled
}) {
  return <div className='shareInputRow'>
    <input type='text' placeholder='Name (optional)' value={name} onChange={ev => {
      onChangeName(ev.target.value)
    }} />
    <input type='text' placeholder='$PaymentPointer' value={pointer} onChange={ev => {
      onChangePointer(ev.target.value)
    }} />
    <input
      className='weightInput'
      type='number'
      placeholder='weight'
      min={0}
      step={'any'}
      value={weight}
      onChange={ev => {
        onChangeWeight(ev.target.value)
      }}
    />
    <input
      className='percentInput'
      type='number'
      placeholder='percent'
      min={0}
      max={100}
      step={1}
      value={Math.round(percent * 100)}
      disabled={percentDisabled}
      onChange={ev => {
        onChangePercent(ev.target.value / 100)
      }}
    />
    <button disabled={removeDisabled} onClick={() => onRemove()}>Remove</button>
  </div>
}
