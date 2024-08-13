import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useDispatch } from 'react-redux'


export default function InputSelect({ options, handleClick, value }) {
 const dispatch = useDispatch()
 const handleOnChange = (e) => {
  console.log(value)
  dispatch(handleClick(e.currentTarget.value))
 }
 return (
  <div className='input-container relative flex items-center'>
   <select name="" id="" className='input ' onChange={(e) => handleOnChange(e)}
    value={value} >
    {
     options.map((opt, index) => {
      return <option key={index} value={opt.name}>{opt.name}</option>
     })
    }
   </select>
   <span className='absolute right-4'> <BsChevronDown className=' cursor-default' /> </span>
  </div>
 )
}
