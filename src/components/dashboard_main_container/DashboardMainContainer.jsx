import React from 'react'
import { ActiveSessions, Results, StudentsStrip, UpcomingPaper } from '../index'
export default function DashboardMainContainer() {
 return (
  <main className='mt-6  '>
   <h1 className='pl-4'>Dashboard</h1>
   <div className='flex gap-6 p-4  min-w-full max-xl:flex-col   '>

    <article className='  gap-8 '>
     <div className='flex gap-6   max-lg:flex-col'>
      <div className='flex-1'><UpcomingPaper /></div>
      <div className='flex-1'> <Results /></div>
     </div>
     <div>
      <ActiveSessions />
     </div>
    </article>
    <article className='w-full'>
     <StudentsStrip />
    </article>
   </div>
  </main>
 )
}
