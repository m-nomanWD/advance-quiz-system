import React from 'react'
import { NavDashboard, FooterDashboard, PaperToolbar, QuestionsContainer } from '../../../components'

export default function SetPaper() {
 return (
  <main>
   <NavDashboard />
   <section className='md:flex my-2 max-md:px-2 items-baseline container mx-auto gap-x-8  '>
    <PaperToolbar />
    <QuestionsContainer />
   </section>
   <FooterDashboard />
  </main>
 )
}
