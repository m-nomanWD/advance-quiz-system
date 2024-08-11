import React from 'react'

export default function InputText({ placeholder }) {
 return (
  <div className=' my-2 rounded-md w-full  '>
   <input type="text" placeholder={placeholder} className='outline-none w-full px-4 h-10 rounded-md border  focus:border-primary_blue text-sm bg-pale_blue ' />
  </div>
 )
}
