import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { teacherSidebarLink } from '../../../constants/constants'
import { FooterDashboard, SidebarDashboard, NavDashboard, DashboardMainConatiner } from '../../../components'


export default function TeacherDashboard() {

 return (
  <main className='' >
   <div className='fixed min-w-full z-20 bg-white'>
    <NavDashboard />
   </div>


   <div className='flex items-start  gap-6 md:gap-10 container mx-auto   '>

    <ul className='flex flex-col h-screen bg-primary_blue fixed z-20 mt-[72px] '>
     <SidebarDashboard links={teacherSidebarLink} />
    </ul>
    <div className='ml-16 md:ml-56 mt-[72px] '>
     <Outlet />
    </div>
   </div>
   <FooterDashboard />

  </main>
 )
}
