import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BiPlus, BiPlusCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { InputSelect, InputText, Button, Options } from '../../components'
import { setQuestion } from '../../features/setPaperSlice'
import { subjects } from '../../constants/constants'
export default function AddQuestionForm() {
 const [topics, setTopics] = useState([])
 const dispatch = useDispatch()
 const {
  singleQuestion, questions, paperType
 } = useSelector((store) => store.setPaper)
 const { questionTitle,
  questionId,
  options,
  correctAnswer,
  label,
  singleOption } = singleQuestion

 const handleQuestionTitle = (value) => setQuestion({ type: "QUESTION_TITLE", value: value })
 const handleOption = (value) => setQuestion({ type: 'OPTION_SET_TYPE', value: value })
 const handleAddOption = (value) => {
  if (value === '') {
   toast.error('Empty Option is not Allowed')
  }
  else {
   dispatch(setQuestion({ type: 'ADD_OPTION_TYPE', value: singleOption }))
  }
 }
 const handleCorractAnswer = (value) => setQuestion({ type: "SET_CORRECT_ANSWER_TYPE", value: value })
 const handleSubjectLable = (value) => {
  const { topics } = subjects.find((sub) => sub.name === value)

  setTopics(topics.map((topic, index) => {
   return {
    id: index + 1,
    name: topic
   }
  }))

  return setQuestion({
   type: "ADD_SUBJECT_LABEL_TYPE", value: value
  })
 }

 const handleTopicLable = (value) => setQuestion({ type: "ADD_TOPIC_LABEL_TYPE", value: value })


 const handleAddQuestion = (value) => {
  if (questionTitle === '') {
   toast.error(`Please Add Question`)
  }
  else if (options.length <= 1) {
   toast.error(`Minimum 2 Options are Required`)
  }
  else if (correctAnswer === "") {
   toast.error(`Correct Answet must be Provided`)
  }
  else {
   dispatch(setQuestion({ type: 'ADD_QUESTION_TYPE', value: value }))
  }
 }
 return (
  <div className='flex flex-col my-6  gap-1'>
   <InputText
    placeholder='Question Title'
    value={questionTitle}
    handleChange={handleQuestionTitle} />

   <div>
    {options.length !== 0 && <Options options={options} />}
   </div>
   <div className='flex items-center relative  '>
    <InputText
     placeholder='Add Options'
     value={singleOption}
     handleChange={handleOption} />
    <div className='absolute right-0 bg-primary_blue text-white px-4 flex items-center justify-center rounded-r-md h-10 cursor-pointer '
     onClick={() => handleAddOption(singleOption)}>
     <BiPlus
      className='text-xl'
     />
    </div>
   </div>
   <div className='flex items-center relative '>
    <InputSelect
     options={options}
     handleClick={handleCorractAnswer}
     value='Select Corract Answer' />
   </div>
   <div className='flex flex-col gap-1'>
    <InputSelect
     value='subject'
     handleClick={handleSubjectLable}
     options={subjects} />
    {
     (paperType === 'SSC (Secondary School Certificate)' ||
      paperType === 'ECAT (Engineering College Admission Test)' ||
      paperType === 'MDCAT (Medical & Dental College Admission Test)') &&
     <InputSelect value='chapter' />
    }
    <InputSelect
     value='topic'
     handleClick={handleTopicLable}
     options={topics} />
   </div>
   <div className='flex items-center justify-between mt-
  6 flex-row-reverse'>
    <button className='btn  bg-white text-primary_blue flex items-center '
     onClick={() => {
      console.log(`single question : ${singleQuestion}`)
      handleAddQuestion(singleQuestion)
      console.log(questions)
     }}>
     Question <BiPlusCircle className='icon  ml-2 mt-1 leading-none' />
    </button>
    <button className='btn px-4 opacity-5 cursor-not-allowed hover:opacity-5' >
     Submit
    </button>
   </div>

  </div>
 )
}
