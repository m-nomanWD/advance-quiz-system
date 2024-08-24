import React from 'react'
import { SingleSessionCard } from '../index'

export default function ActiveSessions() {
 return (
  <div className='card mt-8  '>
   <header className='card-header mb-4 '>
    <h3 className='px-4 py-2'>Active Sessions</h3>
   </header>
   <div className='flex gap-6 max-md:flex-col w-full p-4'>
    <SingleSessionCard />
    <SingleSessionCard />

   </div>
  </div>

 )
}
