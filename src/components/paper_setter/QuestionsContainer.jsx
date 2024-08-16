import React from 'react'
import { useSelector } from 'react-redux'
import { SingleQuestion } from '../index'
export default function QuestionsContainer() {
 const { questions } = useSelector((store) => store.setPaper)
 return (
  <main className='w-full'>
   <div >
    {
     questions.length !== 0 ? questions.map((que, index) => {
      return <SingleQuestion key={que.id} singleQuestion={que} />
     }) : <h1 className='text-coral_red font-font_montserrat'>No Question is Added Yet</h1>

    }
   </div>
  </main>
 )
}
