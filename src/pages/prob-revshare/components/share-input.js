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
  percentDisabled,
  weightDisabled
}) {
  return <form className='shareInputRow'>
    <input
      type='text'
      placeholder='Name (optional)'
      value={name}
      onChange={ev => {
        onChangeName(ev.target.value)
      }}
    />
    <input
      type='text'
      placeholder='Payment Pointer'
      value={pointer}
      onChange={ev => {
        onChangePointer(ev.target.value)
      }}
    />
    <input
      className='weightInput'
      type='number'
      placeholder='Weight'
      min={0}
      step={'any'}
      value={weight}
      disabled={weightDisabled}
      onChange={ev => {
        onChangeWeight(ev.target.value)
      }}
    />
    <span class="percentInputContainer">
      <input
        className='percentInput'
        type='number'
        placeholder='Percent'
        min={0}
        max={100}
        step={'any'}
        value={percent && Math.round(percent * 100)}
        disabled={percentDisabled}
        onChange={ev => {
          onChangePercent(ev.target.value / 100)
        }}
      />
      %
    </span>
    <button
      disabled={removeDisabled}
      onClick={() => onRemove()}
    >
      Remove
    </button>
  </form>
}
