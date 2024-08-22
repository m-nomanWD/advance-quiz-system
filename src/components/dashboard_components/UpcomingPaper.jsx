import React from 'react'
import { Link } from 'react-router-dom'
import { BiEdit, BiPlusCircle } from 'react-icons/bi'

export default function UpcomingPaper() {
 return (
  <article className='card min-w-96 bg-white '>

   <header className=' card-header '>
    <div className='flex items-center justify-between px-4'>
     <div className='space-y-1'>
      <h3>papers</h3>
      <p className='text-sm tracking-wide text-light_gray ' >Your Upcoming Papers</p>
     </div>
     <Link to='/set-paper'>
      <li className='btn-outline  m-0 gap-2'>
       Paper <span className='text-lg'><BiPlusCircle /></span>
      </li>
     </Link>
    </div>
   </header>
   <div className='px-4 py-4 relative border-b border-pale_blue flex items-center justify-between'>
    <div>
     <h2 className='font-semibold text-lg tracking-wide text-slate_gray leading-none'>
      Test Title here
     </h2>
     <p className=' w-fit font-font_palanquin mb-2 '>
      Session here
     </p>
     <div className='space-x-2'>
      <span className='bg-pale_blue label'>
       12-18-2024
      </span>
      <span className=' bg-coral_red text-white label'>
       12:30 pm
      </span>
     </div>

    </div>

    <div>
     <span className='icon'><BiEdit /></span>
    </div>
   </div>
   <div className='px-4 py-4 relative border-b border-pale_blue flex items-center justify-between'>
    <div>
     <h2 className='font-semibold text-lg tracking-wide text-slate_gray leading-none'>
      Test Title here
     </h2>
     <p className=' w-fit font-font_palanquin mb-2 '>
      Session here
     </p>
     <div className='space-x-2'>
      <span className='bg-pale_blue label'>
       12-18-2024
      </span>
      <span className=' bg-coral_red text-white label'>
       12:30 pm
      </span>
     </div>

    </div>

    <div>
     <span className='icon'><BiEdit /></span>
    </div>
   </div>
   <div className='px-4 py-4 relative border-b border-pale_blue flex items-center justify-between'>
    <div>
     <h2 className='font-semibold text-lg tracking-wide text-slate_gray leading-none'>
      Test Title here
     </h2>
     <p className=' w-fit font-font_palanquin mb-2 '>
      Session here
     </p>
     <div className='space-x-2'>
      <span className='bg-pale_blue label'>
       12-18-2024
      </span>
      <span className=' bg-coral_red text-white label'>
       12:30 pm
      </span>
     </div>

    </div>

    <div>
     <span className='icon'><BiEdit /></span>
    </div>
   </div>
  </article >
 )
}
