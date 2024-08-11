import React from 'react'
import { Link } from 'react-router-dom'
import { FooterDashboard, SidebarDashboard, NavDashboard, DashboardMainConatiner } from '../../../components'

export default function TeacherDashboard() {
 return (
  <main  >
   <NavDashboard />
   <SidebarDashboard />
   <DashboardMainConatiner />
   <FooterDashboard />
   <Link to='/set-paper'>
    <button>
     New Paper
    </button>
   </Link>
  </main>
 )
}
