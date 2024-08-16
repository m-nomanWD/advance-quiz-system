import React from 'react'
import { useSelector } from 'react-redux'

export default function Options({ options, flag, fromQuestionAnswer }) {
 const {
  correctAnswer,
 } = useSelector((store) => store.setPaper.singleQuestion)
 return (
  <div className={`grid grid-cols-1 max-md:grid-cols-2  rounded-md px-6 py-2 gap-2 ${flag ? 'bg-white grid-cols-2 rounded-none' : 'bg-pale_blue'}`}>

   {
    options.map((option, index) => {
     return <div className='flex items-baseline ' key={index}>
      <span className='text-slate_gray font-semibold mr-2 min-w-7'>
       {`${index + 1} )`}
      </span>
      <p className={`font-font_palanquin text-lg  break-words overflow-hidden ${correctAnswer === option.name ? 'text-green font-bold' : 'text-black'} ${fromQuestionAnswer !== undefined && fromQuestionAnswer === option.name && 'text-green font-bold'}`}
      >
       {option.name}
      </p>
     </div>
    })
   }
  </div>
 )
}
