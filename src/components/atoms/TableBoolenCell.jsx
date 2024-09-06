import React from 'react'

export default function TableBoolenCell({ value }) {

  return (
    <td className=" text-start">
      <span className={`text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-[13px]   rounded-lg ${value === 'Pass' ? 'bg-pass_bg text-green' : 'bg-fail_bg text-coral_red'}`}>
        {value} </span>
    </td>
  )
}
