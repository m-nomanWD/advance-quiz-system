import React from 'react'
import { ActiveSessions, Results, StudentsStrip, UpcomingPaper } from '../index'
export default function DashboardMainContainer() {
 return (
  <main className='mt-6  w-full '>
   <h1 className='pl-4'>Dashboard</h1>
   <div className='flex gap-6 p-4  w-full max-sm:flex-col   '>

    <article className='w-3/4 max-md:w-full '>
     <div className='flex gap-6  max-lg:flex-col'>
      <div><UpcomingPaper /></div>
      <div> <Results /></div>
     </div>
     <div>
      <ActiveSessions />
     </div>
    </article>
    <article>
     <StudentsStrip />
    </article>
   </div>
  </main>
 )
}
