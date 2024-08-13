import React from 'react'

export default function Button({ label, handleOnClick }) {
  return (
    <div>
      <button
        onClick={(e) => handleOnClick(e)}
        className='bg-primary_blue border-none hover:opacity-85 w-36 py-2 rounded-md text-white tracking-widest font-font_palanquin font-semi-bold text-lg mt-4'>{label}</button>
    </div>
  )
}
