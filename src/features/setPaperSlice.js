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
  questions: [
    {
      questionTitle: 'what is bio',
      questionId: 0,
      options: [],
      correctAnswer: 'ho me',
      label: {
        topic: 'sdkf',
        class: 'dajfkq',
        chapter: 'djklf',
      },
    },
  ],
}
const setPaperSlice = createSlice({
  name: 'setPaper',
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      console.log('set question')
    },
    setPaperInfo: (state, action) => {
      console.log('setpaper info')
    },
    setTitle: (state, action) => {
      state.testTitle = action.payload
      console.log(state.testTitle)
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
