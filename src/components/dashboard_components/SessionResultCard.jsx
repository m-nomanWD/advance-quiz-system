import React from 'react'
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function SessionResultCard({ colr }) {

 return (
  <div className='w-full bg-pale_blue pb-2  rounded-md cursor-pointer hover:bg-opacity-70 transition-all duration-100'>
   <header className='border-b'>
    <h5 className='font-font_palanquin  px-4 py-2 font-bold  truncate '>Session Name</h5>
   </header>
   <div className='px-4 space-y-2 mt-2'>
    <div className='flex items-center justify-between'>
     <p className='text-green  '>Pass</p>
     <p className='flex items-center gap-1 text-slate_gray text-sm font-bold'>48% <FaCaretDown className=' text-coral_red' /></p>
    </div>
    <div className='flex items-center justify-between'>
     <p className='text-coral_red  '>Fail</p>
     <p className='flex items-center gap-1 text-slate_gray font-bold text-sm'>52% <FaCaretUp className=' text-green' /></p>
    </div>
   </div>
  </div>
 )
}
