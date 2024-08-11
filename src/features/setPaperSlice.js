import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  testId: '1723297616841',
  testTitle: 'bio',
  teacherId: 'T001',
  class: '',
  subject: '',
  totalQuestions: '',
  totalMarks: '',
  totalTime: '',
  prepDate: '2024-08-10T13:46:56.842Z',
  dueDate: '',
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
  },
})
export default setPaperSlice.reducer
export const { setPaperInfo, setQuestion } = setPaperSlice.actions
