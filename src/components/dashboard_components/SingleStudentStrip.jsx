import React from 'react'
import { avatar } from '../../assets'
export default function SingleStudentStrip() {
 return (
  <div className='p-4 grid items-center grid-cols-12 w-full gap-2 border-b border-pale_blue cursor-pointer hover:bg-pale_blue transition-all duration-150'>
   <div className='items-center gap-3 col-span-11 flex'>
    <div className='size-16    '>
     <img src={avatar} alt="std_name" className='size-16 rounded-full object-cover' />
    </div>
    <div className='flex-1' >
     <h5 className='font-font_palanquin tracking-wider font-semibold  '>
      Muhammd Noman
     </h5>
     <p className='text-slate_gray text-sm'>
      B1-MDCAT-2024
     </p>
     <div className='relative min-w-full h-[6px] bg-pale_blue rounded-full mt-2 overflow-hidden '>
      <div className='absolute top-0 left-0 h-[6px] bg-coral_red w-[50%] rounded-full'>
      </div>
     </div>
    </div>
   </div>
   <div className=''>
    <h5 className='font-semibold text-slate_gray'> 48</h5>
   </div>
  </div>
 )
}
