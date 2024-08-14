import React from 'react'
import { useSelector } from 'react-redux'
export default function QuestionsContainer() {
 const { questions } = useSelector((store) => store.setPaper)
 return (
  <main>
   <div>
    {
     questions.length !== 0 ? questions.map((que, index) => {
      return <p key={index}>
       {que.questionTitle}
      </p>
     }) : <h1 className='text-coral_red font-font_montserrat'>No Question is Added Yet</h1>

    }
   </div>
  </main>
 )
}
