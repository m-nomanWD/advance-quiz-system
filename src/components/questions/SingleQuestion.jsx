import React from 'react'
import { Options } from '../index'
import { FiEdit2 } from 'react-icons/fi'
import { editQuestion } from '../../features/setPaperSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function SingleQuestion({ singleQuestion, flag }) {
 const { questionId, questionTitle, options, correctAnswer } = singleQuestion


 const dispatch = useDispatch()
 return (
  <article className='my-4 '>
   <div className='flex items-center justify-between '>
    <h3 className='font-font_palanquin font-semibold text-lg '>{questionTitle} ?</h3>
    {flag === undefined ? <span onClick={() => dispatch(editQuestion(questionId))} ><FiEdit2 className='icon' /></span>
     : ''
    }
   </div>
   <Options options={options} flag={true} fromQuestionAnswer={correctAnswer} />
  </article>
 )
}
