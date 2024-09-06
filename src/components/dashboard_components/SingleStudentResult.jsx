import React from 'react'
import { useSelector } from 'react-redux'
import { avatar } from '../../assets/index'
import { SingleQuestion } from '../index'
export default function SingleStudetentResult() {
 const { singleStudentResult } = useSelector((store) => store.resultSlice)
 const { questions, studentName } = singleStudentResult
 console.log(questions)
 return (
  <div className='my-6 ml-6 bg-white py-4 rounded-md shadow-sm shadow-light_gray'>
   <header className='flex justify-between px-6 border-b  pb-4'>
    <div>
     <h3>{studentName}</h3>
     <p >MDCAT-2024-week01</p>

    </div>
    <div className='size-20 '>
     <img
      src={avatar}
      alt="name"
      className='object-cover w-full h-full rounded-md' />
    </div>
   </header>
   <div className='px-6 mt-6'>
    {
     questions.map((que) => <SingleQuestion singleQuestion={que} flag={true} key={que.id} />)
    }
   </div>
  </div>
 )
}
