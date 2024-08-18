import React from 'react'
import { useSelector } from 'react-redux'
import { SingleQuestion, PaperHeader } from '../index'
import { TbClockQuestion } from "react-icons/tb";
export default function QuestionsContainer() {
 const { questions,
  testTitle,
  paperType,
  totalQuestions,
  duration,
  note
 } = useSelector((store) => store.setPaper)
 return (
  <main className='w-full rounded-md overflow-hidden'>
   <PaperHeader paperHeadInfo={{ testTitle, paperType, totalQuestions, duration, note }} />
   <div >
    {
     questions.length !== 0 ? questions.map((que, index) => {
      return <SingleQuestion key={que.id} singleQuestion={que} />
     }) : <div className='flex items-center justify-center mt-6 text-coral_red text-8xl opacity-55'>
      <TbClockQuestion />
     </div>

    }
   </div>
  </main>
 )
}
