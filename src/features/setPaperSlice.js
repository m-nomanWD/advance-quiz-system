import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  testId: '',
  testTitle: '',
  teacherId: '12AHG',
  paperType: '',
  subject: '',
  totalQuestions: '',
  totalMarks: '',
  duration: '',
  prepDate: '',
  dueDate: '',
  note: 'During Test Toggling, Closing and Minimizing Window is not allowed',
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
        state.questions.push(value)
        state.singleQuestion.questionTitle = ''
        state.singleQuestion.options = []
        state.singleQuestion.correctAnswer = ''
      }
      if (type === 'ADD_SUBJECT_LABEL_TYPE') {
        state.singleQuestion.label.subject = value
        console.log(state.singleQuestion.label.subject)
      }
      if (type === 'ADD_TOPIC_LABEL_TYPE') {
        state.singleQuestion.label.topic = value
        console.log(state.singleQuestion.label.topic)
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
} = setPaperSlice.actions
