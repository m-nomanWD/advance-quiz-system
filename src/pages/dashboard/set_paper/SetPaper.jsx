import React from 'react'
import { NavDashboard, FooterDashboard, PaperToolbar, QuestionsContainer } from '../../../components'

export default function SetPaper() {
 return (
  <main>
   <NavDashboard />
   <section className='md:flex my-2 max-md:px-2 items-start container mx-auto  '>
    <PaperToolbar />
    <QuestionsContainer />
   </section>
   <FooterDashboard />
  </main>
 )
}
