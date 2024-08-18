import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'

const initialState = {
  testId: '',
  testTitle: '',
  teacherId: '12AHG',
  paperType: '',
  subject: '',
  totalQuestions: 1,
  totalMarks: '',
  duration: '',
  prepDate: '',
  dueDate: '',
  editFlag: false,
  note: ' During the Paper Closing, Toggling and minimizing will be disabled and not allowed. If you try to do this the paper once close would be considered as cancel.',
  singleQuestion: {
    questionTitle: '',
    questionId: 0,
    singleOption: '',
    options: [],
    correctAnswer: '',
    label: {
      topic: '',
      subject: '',
      chapter: '',
    },
  },

  questions: [],
}
const setPaperSlice = createSlice({
  name: 'setPaper',
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      const { type, value } = action.payload
      console.log(action.payload)
      if (type === 'QUESTION_TITLE') {
        state.singleQuestion.questionTitle = value
      }
      if (type === 'OPTION_SET_TYPE') {
        state.singleQuestion.singleOption = value
      }
      if (type === 'ADD_OPTION_TYPE') {
        state.singleQuestion.options.push({ name: value })
        state.singleQuestion.singleOption = ''
        state.singleQuestion.options.map((item) => console.log(item))
      }
      if (type === 'SET_CORRECT_ANSWER_TYPE') {
        state.singleQuestion.correctAnswer = value
      }
      if (type === 'ADD_QUESTION_TYPE') {
        if (state.totalQuestions === 0) {
          toast.error(`You Cannot add more then total question`)
        } else {
          const updatedValue = { ...value, questionId: uuid() }
          console.log(updatedValue)
          state.questions.push(updatedValue)
          state.totalQuestions -= 1
          state.singleQuestion.questionTitle = ''
          state.singleQuestion.options = []
          state.singleQuestion.correctAnswer = ''
        }
      }
      if (type === 'ADD_SUBJECT_LABEL_TYPE') {
        state.singleQuestion.label.subject = value
        console.log(state.singleQuestion.label.subject)
      }
      if (type === 'ADD_TOPIC_LABEL_TYPE') {
        state.singleQuestion.label.topic = value
        console.log(state.singleQuestion.label.topic)
      }
      if (type === 'UPDATE_QUESTUON_TYPE') {
        const updateQuestions = state.questions.map((que) => {
          if (que.questionId === value.questionId) {
            return value
          }
          return que
        })
        state.questions = updateQuestions
        state.editFlag = false
        state.singleQuestion.questionTitle = ''
        state.singleQuestion.options = []
        state.singleQuestion.correctAnswer = ''
        toast.success('Question Updated Successfully')
      }
    },
    setPaperInfo: (state, action) => {
      console.log('setpaper info')
    },
    setTitle: (state, action) => {
      state.testTitle = action.payload

      console.log(action)
    },
    setDuration: (state, action) => {
      state.duration = action.payload
      console.log(state.duration)
    },
    setTotalQuestions: (state, action) => {
      state.totalQuestions = action.payload
      console.log(state.totalQuestions)
    },
    setDueDate: (state, action) => {
      state.dueDate = action.payload
      console.log(state.dueDate)
    },
    setPaperType: (state, action) => {
      state.paperType = action.payload
      console.log(state.paperType)
    },
    editQuestion: (state, action) => {
      console.log(action.payload)
      console.log(state.editFlag)
      state.editFlag = true
      const singleQuestion = state.questions.find(
        (qus) => qus.questionId == action.payload
      )

      state.singleQuestion = singleQuestion
    },
    submitPaper: (state, action) => {
      state.testId = uuid()
      const paper = state
      console.log(paper)
    },
  },
})
export default setPaperSlice.reducer
export const {
  setPaperInfo,
  setQuestion,
  setTitle,
  setDuration,
  setTotalQuestions,
  setDueDate,
  setPaperType,
  editQuestion,
  submitPaper,
} = setPaperSlice.actions
