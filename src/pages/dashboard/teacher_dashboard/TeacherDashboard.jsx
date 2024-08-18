import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { teacherSidebarLink } from '../../../constants/constants'
import { FooterDashboard, SidebarDashboard, NavDashboard, DashboardMainConatiner } from '../../../components'


export default function TeacherDashboard() {

 return (
  <main className='' >
   <NavDashboard />

   <div className='flex items-center gap-6 container mx-auto   '>
    <ul className='flex flex-col h-screen bg-primary_blue'>

     <SidebarDashboard links={teacherSidebarLink} />
     {/* <Link to='/set-paper'>
      <li className='text-red-400 bg-gray-100 '>
       New Paper
      </li>
     </Link> */}
    </ul>
    <Outlet />
   </div>
   <FooterDashboard />

  </main>
 )
}
